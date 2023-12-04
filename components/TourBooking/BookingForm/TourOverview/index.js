import { TourContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useCallback, useRef, useContext} from 'react'
import React from 'react';
import Rooms from './Rooms'
import { cloneDeep } from 'lodash';
import { payment_mode } from '@component/utils/constants.js'

export default function Overview(props) {

    const roomState = {
        id : 1
    }

    const [roomList, setRoomList] = useState([roomState])
    const [roomData, setRoomData] = useState({})
    const [backBtnEnabled, setBackBtnEnabled] = useState(false)
    const [backBtnDisplay, setBackBtnDisplay] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [nextBtnDisplay, setNextBtnDisplay] = useState(true)
    // const [totalHeadCount, setTotalHeadCount] = useState(0)

    const checkbox1 = useRef()
    const checkbox2 = useRef()

    const tour_context = useContext(TourContext)

    const checkIfCanEnableNext=()=>{
        let headCount = 0
        let adultCount = 0
        console.log("checkIfCanEnableNext", roomData)
        for (const key in roomData) {
            headCount += roomData[key].adultRoomCount
            adultCount += roomData[key].adultRoomCount
            headCount += roomData[key].childRoomWithBedCount
            headCount += roomData[key].childRoomWithoutBedCount
            headCount += roomData[key].infantRoomCount
        }
        console.log("headCount", headCount)
        if (headCount > 0 && checkbox1.current.checked == true && checkbox2.current.checked == true) {
            tour_context.setTotalHeadCount(headCount)
            if (adultCount > 0) {
                setNextBtnEnabled(true)
            }
        } else {
            tour_context.setTotalHeadCount(headCount)
            setNextBtnEnabled(false)
        }
    }

    useEffect(()=>{
        checkIfCanEnableNext()
    }, [roomData])

    const addRoomCount=()=> {
        const newRoomState = cloneDeep(roomState)
        const newRoomList = cloneDeep(roomList)
        newRoomState.id = roomList.length + 1
        newRoomList.push(newRoomState)
        setRoomList(newRoomList)
    }

    useEffect(()=>{
        console.log("roomList", roomList)
    }, [roomList])


    const removeRoomCount=(id)=>{
        console.log(id, roomList)
        let tempArr = roomList
        let tempArr2 = []
        for (let i =0 ; i < tempArr.length; i++) {  // removed the room by id
            if (tempArr[i].id == id) {
                tempArr.splice(i, 1)
                break
            }
        }
        for (let i =0 ; i < tempArr.length; i++) {  // repopulate the room id
            const newRoomState = cloneDeep(roomState)
            newRoomState.id = i+1
            tempArr2.push(newRoomState)
        }
        console.log("tempArr2", tempArr2)
        setRoomList([...tempArr2])
        tour_context.removeRoomFromRoomData(id)
    }

    useEffect(()=>{
        setRoomData(tour_context?.roomData)
    },[tour_context])

    const makeBooking=async()=>{
        //  populate tourDepItemList
        console.log("tourDepItemList", tour_context.tourDepItemList)
        console.log("roomData", tour_context.roomData)
        let tourDepItemListClone = _.cloneDeep(tour_context.tourDepItemList)
        for (const key in tour_context.roomData) {
            if (tour_context.roomData[key].adultRoomCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_SGL") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    // if (tourDepItemListClone[i].code == "APT_ADT") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                    // if (tourDepItemListClone[i].code == "FUEL_ADT") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                }
            } 
            if (tour_context.roomData[key].adultRoomCount == 2) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_TWN") {
                        tourDepItemListClone[i].quantity += 2
                    }
                    // if (tourDepItemListClone[i].code == "APT_ADT") {  //temporary no need fill in tax/fuel/vat/tips
                    //     tourDepItemListClone[i].quantity += 2
                    // }
                    // if (tourDepItemListClone[i].code == "FUEL_ADT") {
                    //     tourDepItemListClone[i].quantity += 2
                    // }
                }
            }
            if (tour_context.roomData[key].childRoomWithBedCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_CWB") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    // if (tourDepItemListClone[i].code == "APT_CHD") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                    // if (tourDepItemListClone[i].code == "FUEL_CHD") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                }
            }
            if (tour_context.roomData[key].childRoomWithoutBedCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_CNB") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    // if (tourDepItemListClone[i].code == "APT_CHD") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                    // if (tourDepItemListClone[i].code == "FUEL_CHD") {
                    //     tourDepItemListClone[i].quantity += 1
                    // }
                }
            }
            if (tour_context.roomData[key].infantRoomCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_INFT") {
                        tourDepItemListClone[i].quantity += 1
                        break
                    }
                }
            }
        }

        console.log({
            idCompany : tour_context.idCompany,
            idTourDep:tour_context.dep.idBase,
            bookingChargeItemList:tourDepItemListClone,
            quantity : 1,})

        try {
            tour_context.setLoading(true)
            tour_context?.setLoadingText("Sending booking details....")
            const fetch1 = await fetch('api/makeBookingOnline', {
                method: 'POST',
                body: JSON.stringify({
                    idCompany: tour_context.idCompany,
                    idTourDep: tour_context.dep.idBase,
                    bookingChargeItemList: tourDepItemListClone,
                    quantity: tour_context.totalHeadCount || 1,
                }),
                headers : {
                    "Content-Type" : "application/json",
                }

            })
            const response1 = await fetch1.json();
            console.log("response1", response1)
            const idBooking = response1.idBooking
            // const idBooking = 3321
            tour_context.setSuccessfulBookingId(idBooking)
            //addTourBookingIdToStorage(idBooking)
            const successful = response1.successful
            // const successful = true
            tour_context.setLoading(false)
            tour_context?.setLoadingText("")
            if (successful) {
                props.start()
                props.nextPage()
            } else {
                if (response1.error) {
                    alert(`${response1.error}`)
                } else {
                    alert("Error , please try again later")
                }
                return
            }
        } catch (error) {
            console.log('There was an error', error);
            alert('There was an error', error);
            tour_context.setLoading(false)
            tour_context?.setLoadingText("")
        }
    }

    const paymentModeChange=(e)=>{
        console.log(payment_mode[e.target.id])
        tour_context.setSelectedPaymentMode(payment_mode[e.target.id])
    }

    return (
        <div style={{ display: `${props.progressIndex == 0 ? "block" : "none"}` }}>
            <h2 className="d-flex justify-content-center py-5 headline-order" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>TOUR OVERVIEW</h2>
            <div id="room_div">
                {
                    roomList.map((value,index)=>{
                        if (index == 0) {
                            return <Rooms id={value.id} key={value.id} addRoomCount={addRoomCount} />
                        } else {
                            return <Rooms id={value.id} key={value.id} removeRoomCount={removeRoomCount} />
                        }
                        
                    })
                }
            </div>
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
                                checked={tour_context.selectedPaymentMode == payment_mode.pay_full_amount}
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
                                checked={tour_context.selectedPaymentMode == payment_mode.pay_deposit_only}
                            />
                        </div>
                        <label htmlFor="pay_deposit_only" className="m-0" style={{fontSize: '15px'}}>Pay Deposit Only</label>
                    </div>
                </div>
            </div>
            
            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                {/* KEEPING BACK BUTTON HERE TO KEEP NEXT BUTTON ON RIGHT HAND SIDE */}
                <div className="button-container col-md-2 col-5">  
                    <button type="button" className="button fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: backBtnEnabled ? '#d1b882' : 'transparent', 
                            display : backBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {backBtnEnabled ? false: true}
                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={()=>{
                        makeBooking()
                    }} type="button" className="button fw-bold w-100" 
                        style={{
                            background: nextBtnEnabled ? '#d1b8trans2' : 'transparent', 
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                        >NEXT</button>
                </div>
            </div>
        </div>
    )
}
