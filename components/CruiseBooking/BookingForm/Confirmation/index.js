import { CruiseContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'
import React from 'react';
import Passenger from 'components/SummaryPassenger'
import { gender, relationship, states, salutation } from '../../../../utils/constants'

/**
 * 
 * NOT IN USE, REFER TO /payment_status
 * 
 */

export default function Confirmation(props) {

    const cruise_context = useContext(CruiseContext)
    const [billingPerson, setBillingPerson] = useState([])


    useEffect(()=>{
        const passengerListClone = _.cloneDeep(cruise_context?.userInputData?.passengerList);
        if (passengerListClone?.length == 1) {
            setBillingPerson(cruise_context?.userInputData?.passengerList)
        } else {
                setBillingPerson(passengerListClone?.filter((value)=>{
                        return value.isBillingPerson == true
                    })
                )
        }

    },[cruise_context?.userInputData])

    const print=()=>{
        window.print();
    }

    return (
        <div style={{ display: `${props.progressIndex == 99 ? "block" : "none"}` }}>
            <h2 className="d-flex justify-content-center pt-5 headline-order fw-bold" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>CRUISE OVERVIEW</h2>
            <p className="d-flex summary-desc justify-content-center align-self-center text-center mb-3 mb-xxxl-0" style={{fontFamily: '"Poppins"', fontWeight: 400, fontSize: '18px', maxWidth: '600px'}}>
                Payment is successful and you should receive an email through {cruise_context?.userInputData?.email} for the full itenerary and details of the booking.
            </p>
            <div className="d-flex flex-xl-row-reverse flex-column justify-content-between">
                <button onClick={print} type="button" className="btn rounded-pill fw-bold py-2 align-self-xl-end align-self-center mb-md-2 mb-5" style={{width: '150px', fontFamily: '"Montserrat"', background: '#ea242d', color: 'white'}}>
                PRINT
                </button>
                <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-1 mt-sm-5 upper-topic">BOOKING DETAILS</h5>
            </div>

            <hr className="hr mt-0" />

            <div className="mb-5" id="order_info_table">
                <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                    <table className="m-0 w-100">
                        <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Booking ID</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">{cruise_context?.successfulBookingId}</td>
                        </tr>
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
                        </tbody></table>
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
                                {billingPerson?.length > 0 && billingPerson[0]?.surname} {billingPerson?.length > 0 && billingPerson[0]?.givenName}
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                                {billingPerson && billingPerson?.length > 0 && salutation[billingPerson[0]?.salutationCd||0]}
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Passport No</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                                {billingPerson?.length > 0 && billingPerson[0]?.passportNo}
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">IC No</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                                {billingPerson?.length > 0 && billingPerson[0]?.icNo}
                            </td>
                        </tr>
                        <tr>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Passport Expiry Date</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                                {billingPerson?.length > 0 && billingPerson[0]?.dtExpiry}
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
        </div>
    )
}




