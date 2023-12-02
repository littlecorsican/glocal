import { CruiseContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useCallback, useRef, useContext} from 'react'
import React from 'react';
import api from 'api'
import { clone, cloneDeep } from 'lodash';
import DropDownMenu from '@component/components/Shared/DropDownMenu';
import Button from '@component/components/Shared/Button';
import Label from '@component/components/Shared/Label';
import { Money } from '@dintero/money'
import { payment_mode } from '@component/utils/constants.js'

export default function Overview(props) {

    const cruise_context = useContext(CruiseContext)

    const [backBtnEnabled, setBackBtnEnabled] = useState(false)
    const [backBtnDisplay, setBackBtnDisplay] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [nextBtnDisplay, setNextBtnDisplay] = useState(true)
    const [totalPeople, setTotalPeople] = useState(0)
    const [totalInfant, setTotalInfant] = useState(0)
    const [selectedCabinIndex, setSelectedCabinIndex] = useState(0)

    const checkbox1 = useRef()
    const checkbox2 = useRef()

    useEffect(()=>{
        checkIfCanEnableNext()
    }, [totalPeople, totalInfant, selectedCabinIndex])

    const checkIfCanEnableNext=()=>{

        // calculate amount and pass to context
        if (cruise_context?.tourCruiseCabinList) {
            const selectedCabinObj = cruise_context.tourCruiseCabinList[selectedCabinIndex]
            console.log("selectedCabinObj", selectedCabinObj)
            let peopleAmount = 0
            let infantAmount = 0
            if (totalPeople === 1) {
                peopleAmount = Money.of(selectedCabinObj.priceSgl, 'MYR').toString()
            } else if (totalPeople === 2) {
                peopleAmount = Money.of(selectedCabinObj.priceTwn, 'MYR').multiply(2).toString()
            } else if (totalPeople === 3) {
                peopleAmount = Money.of(selectedCabinObj.price3, 'MYR').multiply(3).toString()
            } else if (totalPeople === 4) {
                peopleAmount = Money.of(selectedCabinObj.price4, 'MYR').multiply(4).toString()
            } else {
                peopleAmount = 0
            }

            console.log("peopleAmount", peopleAmount)

            if (totalInfant === 1) {
                infantAmount = Money.of(selectedCabinObj.priceInf, 'MYR').toString()
            } else {
                infantAmount = 0
            }

            cruise_context.setPeopleAmount(peopleAmount)
            cruise_context.setInfantAmount(infantAmount)

            // CALCULATE PORT CHARGES
           if (cruise_context.tourDepItemList.length > 0) {
                const portCharges = cruise_context?.tourDepItemList.find((value)=>{
                    return value.code == "PORT_CHARGES"
                })
                if (portCharges) {
                    const portCharges_amt = Money.of(portCharges.amount, 'MYR').multiply(totalPeople + totalInfant).toString()
                    cruise_context.setPortCharges_amt(portCharges_amt)
                }
           }
            
        }

        // check if can enable next
        if (
            checkbox1.current.checked == true && 
            checkbox2.current.checked == true && 
            totalPeople > 0
            ) {
                setNextBtnEnabled(true)
        } else {
            setNextBtnEnabled(false)
        }
    }

    const makeBooking=async()=>{
        
        console.log("tourCruiseCabinList", cruise_context.tourCruiseCabinList)
        console.log("tourDepItemList", cruise_context.tourDepItemList)
        const newTourDepItemList = cloneDeep(cruise_context.tourDepItemList)
        for (let i = 0 ; i < newTourDepItemList.length ; i++ ) {
            const item = newTourDepItemList[i]
            if (item.code === "PORT_CHARGES") {
                item.quantity += cruise_context.totalPeople
            }
            if (item.code === "AC") {
                item.quantity += cruise_context.totalPeople
            }
            if (item.code === "TRVL_INS") {
                item.quantity += cruise_context.totalPeople
            }
            if (item.code === "VISA") {
                item.quantity += cruise_context.totalPeople
            }
            if (item.code === "DEVIATION") {
                item.quantity += cruise_context.totalPeople
            }
        }
        
        console.log("newTourDepItemList", newTourDepItemList)
        const selectedCabinObj = cruise_context.tourCruiseCabinList[cruise_context.selectedCabinIndex]
        console.log("selectedCabinObj", selectedCabinObj)

        selectedCabinObj.ttlCabin = 1;

        if (cruise_context.totalPeople === 1) {
            selectedCabinObj.paxSgl = 1
        } else if (cruise_context.totalPeople === 2) {
            selectedCabinObj.paxTwn = 2
        } else if (cruise_context.totalPeople === 3) {
            selectedCabinObj.pax3 = 3
        } else if (cruise_context.totalPeople === 4) {
            selectedCabinObj.pax4 = 4
        }

        if (cruise_context.totalInfant === 1) {
            selectedCabinObj.paxInf = 1
        }

        try {
            cruise_context.setLoading(true)
            cruise_context?.setLoadingText("Sending booking details....")
            const fetch1 = await fetch('api/makeBookingOnline', {
                method: 'POST',
                body: JSON.stringify({
                    idCompany: cruise_context.idCompany,
                    idTourDep: cruise_context.dep.idBase,
                    bookingChargeItemList: newTourDepItemList,
                    tourCruiseCabinList: [selectedCabinObj],
                    cabinQty: 1,
                    quantity: (cruise_context.totalPeople + cruise_context.totalInfant) || 1,
                }),
                headers : {
                    "Content-Type" : "application/json",
                }

            })
            const response1 = await fetch1.json();
            console.log("response1", response1)
            const idBooking = response1.idBooking
            cruise_context.setSuccessfulBookingId(idBooking)
            const successful = response1.successful
            cruise_context.setLoading(false)
            cruise_context?.setLoadingText("")
            if (successful) {
                props.start()
                props.nextPage()
            } else {
                if (response1.error) {
                    alert(`Error ${response1.error} , please try again later`)
                } else {
                    alert("Error , please try again later")
                }
                return
            }
        } catch (error) {
            console.log('There was an error', error);
            alert('There was an error', error)
            cruise_context.setLoading(false)
            cruise_context?.setLoadingText("")
        }
    }

    const paymentModeChange=(e)=>{
        console.log(payment_mode[e.target.id])
        cruise_context.setSelectedPaymentMode(payment_mode[e.target.id])
    }

    return (
        <div style={{ display: `${props.progressIndex == 0 ? "block" : "none"}` }}>
            <h2 className="d-flex justify-content-center py-5 headline-order" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>TOUR OVERVIEW</h2>

            <Label title="Adult" />
            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
                {
                    cruise_context?.tourCruiseCabinList && cruise_context?.tourCruiseCabinList.length > 0 &&new Array(cruise_context?.tourCruiseCabinList[selectedCabinIndex].paxPerCabin).fill("").map((value,index)=>{
                        return <Button
                        title={`${index+1} People`}
                        backgroundCSS={totalPeople == (index+1) ? "#d1b882" : "#cdcdcd" }
                        onClick={()=>{
                            setTotalPeople(index+1)
                            cruise_context.setTotalPeople(index+1)
                        }}
                        disabled={totalInfant==1 && (index+1) == cruise_context?.tourCruiseCabinList[selectedCabinIndex].paxPerCabin}
                        key={index}
                    />
                    })
                }
                {
                    (cruise_context?.tourCruiseCabinList?.length == 0) && <h3>No cabin list available for selection</h3>
                }
            </div>

            <Label title="Infant" />
            {cruise_context.tourCruiseCabinList != null && cruise_context.tourCruiseCabinList.length > 0 && <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
                <Button
                    title="0 Infant"
                    backgroundCSS={totalInfant == 0 ? "#d1b882" : "#cdcdcd" }
                    onClick={()=>{
                        setTotalInfant(0)
                        cruise_context.setTotalInfant(0)
                    }}
                />
            
                <Button
                    title="1 Infant"
                    backgroundCSS={totalInfant == 1 ? "#d1b882" : "#cdcdcd" }
                    onClick={()=>{
                        setTotalInfant(1)
                        cruise_context.setTotalInfant(1)
                        if (selectedCabinIndex != null && totalPeople == cruise_context?.tourCruiseCabinList[selectedCabinIndex].paxPerCabin) {
                            setTotalPeople(0)
                            cruise_context.setTotalPeople(0)
                        }
                    }}
                />

            </div>}
            {
                (cruise_context?.tourCruiseCabinList?.length == 0) && <h3>No cabin list available for selection</h3>
            }
            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
                {cruise_context?.tourCruiseCabinList && <div>
                    <DropDownMenu 
                        data = {cruise_context?.tourCruiseCabinList}
                        title = "Cabin"
                        onChange={(e)=>{
                            setSelectedCabinIndex(e.target.value)
                            cruise_context.setSelectedCabinIndex(e.target.value)
                            setTotalPeople(0)
                            setTotalInfant(0)
                            cruise_context.setTotalInfant(0)
                        }}
                        textKey="cruiseCabinDesc"
                        defaultValue={0}
                    />
                </div>}
            </div>
            <br />
            <br />

            {/*TERMS AND CONDITIONS*/}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" ref={checkbox1} onChange={checkIfCanEnableNext} />
                <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> I understand and agree that this tour will be conducted in English . </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" ref={checkbox2} onChange={checkIfCanEnableNext} />
                <label className="form-check-label mb-4" htmlFor="flexCheckChecked2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}>
                Tour member must ensure he/she is medically and physically fit for travel. Please disclose any physical, medical, or other special needs that require special attention at the time of booking. T&amp;C Apply
                </label>
            </div>

            <p className="summary-desc text-start mt-3" style={{fontWeight: 600}}>Please select your payment mode</p>
            <div className="conatiner d-flex flex-wrap justify-content-between">
                <div className="d-flex flex-column col-xl-6 col-12">
                    <div className="payment_div d-flex">
                        <div className="form-check">
                            <input className="form-check-input" 
                                type="radio"
                                name="payment_mode"
                                id="pay_full_amount"
                                defaultValue="pay_full_amount"
                                onClick={paymentModeChange}
                                checked={cruise_context.selectedPaymentMode == payment_mode.pay_full_amount}
                            />
                        </div>
                        <label htmlFor="pay_full_amount" className="m-0" style={{fontSize: '15px'}}>Pay Full Amount</label>
                    </div>
                </div>
                <div className="d-flex flex-column col-xl-6 col-12">
                    <div className="payment_div d-flex">
                        <div className="form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="payment_mode"
                                id="pay_deposit_only"
                                defaultValue="pay_full_amount"
                                onClick={paymentModeChange}
                                checked={cruise_context.selectedPaymentMode == payment_mode.pay_deposit_only}
                            />
                        </div>
                        <label htmlFor="pay_deposit_only" className="m-0" style={{fontSize: '15px'}}>Pay Deposit Only</label>
                    </div>
                </div>
            </div>
            
            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                <div className="button-container col-md-2 col-5">
                    <button onClick={props.prevPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: backBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white' , 
                            display : backBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {backBtnEnabled ? false: true}
                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={makeBooking} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white',
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                        >NEXT</button>
                </div>
            </div>
        </div>
    )
}
