import { CruiseContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'
import React from 'react';
import md5 from 'md5'
import { razorPayBaseUrl } from '/utils/constants'
import { Money } from '@dintero/money'
import { calculateCruiseTotalAmount } from '@component/utils/payment.js'
import { payment_mode } from '@component/utils/constants.js'

export default function Summary(props) {

    const cruise_context = useContext(CruiseContext)
    
    // const [backBtnEnabled, setBackBtnEnabled] = useState(false)
    // const [backBtnDisplay, setBackBtnDisplay] = useState(false)
    // const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    // const [nextBtnDisplay, setNextBtnDisplay] = useState(true)

    const createPayment=()=>{
        // calculate total amount
        const peopleAmount = cruise_context.peopleAmount || 0
        const infantAmount = cruise_context.infantAmount || 0
        const deposit = cruise_context?.tourPackage?.deposit || 0
        const portCharges_amt = cruise_context?.portCharges_amt || 0
        const adminChargesPercentage = cruise_context?.adminChargesPercentage || 0
        const totalPeople = cruise_context?.totalPeople || 0
        const totalInfant = cruise_context?.totalInfant || 0

        const fnReturn = calculateCruiseTotalAmount({
            peopleAmount: peopleAmount,
            infantAmount: infantAmount,
            portCharges_amt: portCharges_amt,
            adminChargesPercentage: adminChargesPercentage,
            deposit: deposit,
            totalHeadCount: totalPeople + totalInfant
        })

        const amount = cruise_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.amountPostAdminCharges : fnReturn.depositAmount

        const merchantID = process.env.NEXT_PUBLIC_MERCHANT_ID
        const orderid = cruise_context?.successfulBookingId
        const verifykey = process.env.NEXT_PUBLIC_VERIFY_KEY
        console.log("orderid", orderid)
        const vcode = md5(`${amount}${merchantID}${orderid}${verifykey}`)
        // final validation, make sure order id and amount exists
        if (!amount || !orderid) {
            alert("Error, unable to proceed with payment")
            return;
        } 
        console.log(vcode, merchantID, verifykey)
        location.href=`${razorPayBaseUrl}/${merchantID}/?amount=${amount}&orderid=${orderid}&vcode=${vcode}`
    }

    return (
        <div style={{ display: `${props.progressIndex == 3 ? "block" : "none"}` }}>
            <h2 className="d-flex justify-content-center pt-5 headline-order fw-bold" style={{fontFamily: '"Montserrat"'}}>PAYMENT</h2>
            <p className="summary-desc text-start mt-3" style={{fontWeight: 600}}>Please select your payment method</p>
            <div className="conatiner d-flex flex-wrap justify-content-between">
                <div className="d-flex flex-column col-xl-6 col-12">
                <h4 className="m-0" style={{fontSize: '15px'}}>Razer Merchant Services</h4>
                <hr className="hr" style={{width: '97%'}} />
                <div className="payment_div d-flex">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" checked />
                    </div>
                    <img className="img-fluid w-75" src="/images/logo_RazerMerchantServices.png" alt="payment-1" />
                </div>
                </div>
            </div>

            <div className="mt-8" style={{
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "Montserrat"
            }}>
                <button type="button" className="rounded px-7 py-2 text-white bg-[#b32129] w-full w-fill" onClick={createPayment}>CHECKOUT</button>
            </div>
        
            {/*BUTTON NEXT PART*/}
            {/* <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
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
                    <button onClick={props.nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white',
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                    >NEXT</button>
                </div>
            </div> */}
        </div>
    )
}


