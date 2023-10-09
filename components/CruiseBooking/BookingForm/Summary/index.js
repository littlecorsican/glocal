import { CruiseContext } from "global/global_context";
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext, useRef} from 'react'
import React from 'react';
import Passenger from 'components/SummaryPassenger'
import { gender, relationship, states, salutation } from 'utils/constants'
import api from 'api'
import { cloneDeep } from 'lodash'

export default function Summary(props) {
    
    const cruise_context = useContext(CruiseContext);
    console.log("cruise_context", cruise_context)
  
    const [backBtnEnabled, setBackBtnEnabled] = useState(true)
    const [backBtnDisplay, setBackBtnDisplay] = useState(true)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [nextBtnDisplay, setNextBtnDisplay] = useState(true)

    const checkboxRef1 = useRef()
    const checkboxRef2 = useRef()
    

    const checkIfCanEnableNext=()=>{
        let chkbox1 = checkboxRef1.current.checked
        let chkbox2 = checkboxRef2.current.checked
        if (chkbox1 == true && chkbox2 == true) {
            setNextBtnEnabled(true)
        }
    }

    const sendApi=async()=>{

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
                    quantity: cruise_context.userInputData.passengerList.length || 1,
                }),
                headers : {
                    "Content-Type" : "application/json",
                }

            })
            const response1 = await fetch1.json();
            console.log("response1", response1)
            const parsedResponse1 = JSON.parse(response1)
            const idBooking = parsedResponse1.idBooking
            cruise_context.setSuccessfulBookingId(idBooking)
            const successful = parsedResponse1.successful
            if (successful) {

            } else {
                if (parsedResponse1.error) {
                    alert(`Error ${parsedResponse1.error} , please try again later`)
                } else {
                    alert("Error , please try again later")
                }
                return
            }

            const fetch2Body = cruise_context.userInputData
            fetch2Body.idBooking = idBooking

            // remove the type and id as api wont accept
            for (let i = 0 ; i < fetch2Body.passengerList.length ; i++ ) {
                const passenger = fetch2Body.passengerList[i]
                delete passenger.type;
                delete passenger.Id;
                passenger.roomNo = "1" // its always 1 
                passenger.salutationCd = salutation[passenger.salutationCd||0]
                passenger.sexCd = gender[passenger.sexCd||0]
            }

            console.log("fetch2Body", fetch2Body)
            cruise_context?.setLoadingText("Registering customer details....")

            const fetch2 = await fetch('api/sendCustomerDetails', {
                method: 'POST',
                body: JSON.stringify(fetch2Body),
                headers : {
                    "Content-Type" : "application/json",
                }
            })
            const response2 = await fetch2.json();
            const parsedResponse2 = JSON.parse(response2)
            const reParse = JSON.parse(parsedResponse2) // somehow the backend developer double encoded the json
            console.log("reParse", reParse)
            if (reParse.successful == true) {
                props.nextPage()
            } else {
                if (parsedData.error) {
                    alert(`Error ${parsedData.error} , please try again later`)
                } else {
                    alert("Error , please try again later")
                }
            }
            cruise_context.setLoading(false)
            cruise_context?.setLoadingText("")
            //props.nextPage()
        } catch (error) {
            console.log('There was an error', error);
            alert('There was an error', error)
            cruise_context.setLoading(false)
            cruise_context?.setLoadingText("")
        }

    }
  
    return (
        <div style={{ display: `${props.progressIndex == 2 ? "block" : "none"}` }}>
            <div className="d-flex justify-content-center flex-column py-5 headline-order">
                <h2 className="text-center fw-bold" style={{fontFamily: '"Montserrat"'}}>Summary</h2>
                <h6 className="text-center fw-normal" style={{fontFamily: '"Poppins"'}}>Kindly check to ensure all details are accurate before continuing, click the &quot;BACK&quot; button below to amend.</h6>
            </div>
            <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-1 upper-topic-2">BOOKING DETAILS</h5>
            <hr className="hr mt-0" />

            <div id="order_info_table">
                <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                <table className="m-0 w-100">
                    <tbody>
                        {/* <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Booking ID</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">{cruise_context?.successfulBookingId}</td>
                        </tr> */}
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Tour Package</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{cruise_context?.dep?.code}</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Travel Dates</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{cruise_context?.dep?.dtDep}</td>
                        </tr>
                        <tr>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Number of Traveller(s)</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{cruise_context?.userInputData?.passengerList.length || 0}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4 upper-topic">
                    BILLING INFORMATION
                </h5>
                <hr className="hr mt-0" />
                <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                <table className="m-0 w-100 overflow-scroll">
                    <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {cruise_context?.userInputData?.surname} {cruise_context?.userInputData?.givenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {cruise_context?.userInputData?.salutationCd}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {cruise_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {cruise_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {cruise_context?.userInputData?.addressLine1}
                            {cruise_context?.userInputData?.addressLine2},
                            {cruise_context?.userInputData?.postcode},
                            {cruise_context?.userInputData?.state}.
                        </td>
                    </tr>
                    </tbody></table>
                </div>
                <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4">
                    EMERGENCY CONTACT
                </h5>
                <hr className="hr mt-0" />
                <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                <table className="m-0 w-100 overflow-scroll">
                    <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {cruise_context?.userInputData?.ecSurname} {cruise_context?.userInputData?.ecGivenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {cruise_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {cruise_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Relationship</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {cruise_context?.userInputData?.ecRelationship}
                        </td>
                    </tr>
                    </tbody></table>
                </div>
                
                {
                    cruise_context?.userInputData?.passengerList.map((value,index)=>{
                        return <Passenger
                            key={index}
                            {...value}
                        />
                    })
                }

            </div>

            <div className="form-check mt-5">
                <input className="form-check-input" type="checkbox" id="chkbox1" ref={checkboxRef1} onChange={checkIfCanEnableNext} />
                <label className="form-check-label" htmlFor="chkbox1" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Terms &amp; Condiiton. </label>
            </div>
            <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" id="chkbox2" ref={checkboxRef2} onChange={checkIfCanEnableNext} />
                <label className="form-check-label mb-4" htmlFor="chkbox2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Privacy Policy. </label>
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
                    <button onClick={sendApi} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white',
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                        >BOOK</button>
                </div>
            </div>
        </div>
    )
  }
  
