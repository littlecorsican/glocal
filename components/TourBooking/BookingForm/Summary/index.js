import { TourContext } from "global/global_context";
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext, useRef} from 'react'
import React from 'react';
import Passenger from 'components/SummaryPassenger'
import { gender, relationship, states, salutation } from 'utils/constants'
import api from 'api'
import { cloneDeep } from 'lodash'

export default function Summary(props) {

    const tour_context = useContext(TourContext)
   
    const [backBtnEnabled, setBackBtnEnabled] = useState(true)
    const [backBtnDisplay, setBackBtnDisplay] = useState(true)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [nextBtnDisplay, setNextBtnDisplay] = useState(true)

    const checkboxRef1 = useRef()
    const checkboxRef2 = useRef()
    

    const checkIfCanEnableNext=()=>{
        let chkbox1 = checkboxRef1.current.checked
        let chkbox2 = checkboxRef2.current.checked
        console.log(chkbox1, chkbox2)
        if (chkbox1 == true && chkbox2 == true) {
            setNextBtnEnabled(true)
        }
    }

    const sendApi=async()=>{

        try {
           
            tour_context.setLoading(true)
            tour_context?.setLoadingText("Registering customer details....")

            const fetch2Body = tour_context.userInputData
            fetch2Body.idBooking = tour_context.successfulBookingId
            //need to alter the details a bit as api wont accept
            for (let i = 0 ; i < fetch2Body.passengerList.length ; i++ ) {
                const passenger = fetch2Body.passengerList[i]
                delete passenger.travellerId;
                // passenger.salutationCd = isNaN(passenger.salutationCd) ? passenger.salutationCd : salutation[passenger.salutationCd||0];
                // passenger.sexCd = isNaN(passenger.sexCd) ? passenger.sexCd : gender[passenger.sexCd||0];
            }

            console.log("fetch2Body", fetch2Body)

            const fetch2 = await fetch('api/sendCustomerDetails', {
                method: 'POST',
                body: JSON.stringify(fetch2Body),
                headers : {
                    "Content-Type" : "application/json",
                }
            })
            const response2 = await fetch2.json();
            const parsedResponse2 = JSON.parse(response2)
            //const parsedResponse2 = { successful: true }
            tour_context.setLoading(false)
            tour_context?.setLoadingText("")
            if (parsedResponse2.successful) {
                props.nextPage()
            } else {
                if (parsedResponse2.error) {
                    alert(`Error ${parsedResponse2.error} , please try again later`)
                } else {
                    alert("Error , please try again later")
                }
            }
        } catch (error) {
            console.log('There was an error', error);
            alert('There was an error', error);
            tour_context.setLoading(false)
            tour_context?.setLoadingText("")
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
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">{tour_context?.successfulBookingId}</td>
                        </tr> */}
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Tour Package</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{tour_context?.dep?.code}</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Travel Dates</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{tour_context?.dep?.dtDep}</td>
                        </tr>
                        <tr>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Number of Traveller(s)</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{tour_context?.userInputData?.passengerList.length || 0}</td>
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
                            {tour_context?.userInputData?.surname} {tour_context?.userInputData?.givenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {tour_context?.userInputData?.salutationCd}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Gender</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {tour_context?.userInputData?.sexCd}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {tour_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {tour_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {tour_context?.userInputData?.addressLine1}
                            {tour_context?.userInputData?.addressLine2},
                            {tour_context?.userInputData?.postcode},
                            {tour_context?.userInputData?.state}.
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
                        {tour_context?.userInputData?.ecSurname} {tour_context?.userInputData?.ecGivenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {tour_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {tour_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Relationship</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {tour_context?.userInputData?.ecRelationship}
                        </td>
                    </tr>
                    </tbody></table>
                </div>
                
                {
                    tour_context?.userInputData?.passengerList.map((value,index)=>{
                        return <Passenger
                            key={index}
                            {...value}
                        />
                    })
                }

            </div>

            <div className="form-check mt-5">
                <input className="form-check-input" type="checkbox" id="checkbox1" ref={checkboxRef1} onChange={checkIfCanEnableNext} />
                <label className="form-check-label" htmlFor="checkbox1" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Terms &amp; Condiiton. </label>
            </div>
            <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" id="checkbox2" ref={checkboxRef2} onChange={checkIfCanEnableNext} />
                <label className="form-check-label mb-4" htmlFor="checkbox2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Privacy Policy. </label>
            </div>

            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                <div className="button-container col-md-2 col-5">
                    <button onClick={props.prevPage} type="button" className="button fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: backBtnEnabled ? '#d1b882' : 'transparent', 
                            display : backBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {backBtnEnabled ? false: true}
                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={sendApi} type="button" className="button fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: nextBtnEnabled ? '#d1b882' : 'transparent', 
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                        >NEXT</button>
                </div>
            </div>
        </div>
    )
}
  

