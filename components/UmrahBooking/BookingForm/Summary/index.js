import { UmrahContext } from "global/global_context";
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext, useRef} from 'react'
import React from 'react';
import Passenger from 'components/SummaryPassenger'
import { gender, relationship, states, salutation } from 'utils/constants'

export default function Summary(props) {

    const umrah_context = useContext(UmrahContext);
    console.log("umrah_context", umrah_context)
  
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

    const sendApi=()=>{

        umrah_context.setLoading(true)
        const url = "/api/sendCustomerDetails"

        try {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(umrah_context.userInputData),
                headers : {
                    "Access-Control-Allow-Headers": "*",
                    "Content-Type" : "application/json",
                }

            })
            .then(rawResult => rawResult.json())
            .then(jsonData => {
                umrah_context.setLoading(false)
                console.log(jsonData)
                console.log("parsedData", JSON.parse(jsonData))
                const parsedData = JSON.parse(jsonData)
                const reParse = JSON.parse(parsedData)
                console.log("parsedData2", reParse)
                console.log("xxxxxxxx", reParse.successful, reParse.successful == true)
                if (reParse.successful == true) {
                    props.nextPage()
                }
                
            });
  
        } catch (error) {
            console.log('There was an error', error);
        }

    }
  
    return (
        <>
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
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">{umrah_context?.successfulBookingId}</td>
                        </tr> */}
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Tour Package</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{umrah_context?.dep?.code}</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Travel Dates</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{umrah_context?.dep?.dtDep}</td>
                        </tr>
                        <tr>
                            <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Number of Traveller(s)</th>
                            <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{umrah_context?.totalHeadCount || 0}</td>
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
                            {umrah_context?.userInputData?.surname} {umrah_context?.userInputData?.givenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {umrah_context?.userInputData?.salutationCd}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {umrah_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {umrah_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
                            {umrah_context?.userInputData?.addressLine1}
                            {umrah_context?.userInputData?.addressLine2},
                            {umrah_context?.userInputData?.postcode},
                            {umrah_context?.userInputData?.state}.
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
                        {umrah_context?.userInputData?.ecSurname} {umrah_context?.userInputData?.ecGivenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {umrah_context?.userInputData?.contactNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {umrah_context?.userInputData?.email}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Relationship</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">
                            {umrah_context?.userInputData?.ecRelationship}
                        </td>
                    </tr>
                    </tbody></table>
                </div>
                
                {
                    umrah_context?.userInputData?.passengerList.map((value,index)=>{
                        return <Passenger
                            key={index}
                            {...value}
                        />
                    })
                }

            </div>

            <div className="form-check mt-5">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" ref={checkboxRef1} onChange={checkIfCanEnableNext} />
                <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Terms &amp; Condiiton. </label>
            </div>
            <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" ref={checkboxRef2} onChange={checkIfCanEnableNext} />
                <label className="form-check-label mb-4" htmlFor="flexCheckChecked2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Privacy Policy. </label>
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
                        >BOOK+</button>
                </div>
            </div>
        </>
    )
  }
  



// export default class Summary extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         backBtnEnabled : true,
//         backBtnDisplay : true,
//         nextBtnEnabled : false,
//         nextBtnDisplay : true,
//       };
//       this.checkboxRef1 = React.createRef()
//       this.checkboxRef2 = React.createRef()
//     }

//     checkIfCanEnableNext=()=>{
//         let chkbox1 = this.checkboxRef1.current.checked
//         let chkbox2 = this.checkboxRef2.current.checked
//         console.log(chkbox1, chkbox2)
//         if (chkbox1 == true && chkbox2 == true) {
//             this.setState({
//                 nextBtnEnabled : true
//             })
//         }
//     }

//     render() {
//         const { inputData } = this.props
//         return (
//             <>
//                 <div className="d-flex justify-content-center flex-column py-5 headline-order">
//                     <h2 className="text-center fw-bold" style={{fontFamily: '"Montserrat"'}}>Summary</h2>
//                     <h6 className="text-center fw-normal" style={{fontFamily: '"Poppins"'}}>Kindly check to ensure all details are accurate before continuing, click the &quot;BACK&quot; button below to amend.</h6>
//                 </div>
//                 <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-1 upper-topic-2">BOOKING DETAILS</h5>
//                 <hr className="hr mt-0" />

//                 <div id="order_info_table">
//                     <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
//                     <table className="m-0 w-100">
//                         <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Booking ID</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">{}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Tour Package</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">KJTR00001</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Travel Dates</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">16, Nov, 2023 - 18 Nov, 2023</td>
//                         </tr>
//                         <tr>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Number of Traveller(s)</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Number of Traveller(s)</td>
//                         </tr>
//                         </tbody></table>
//                     </div>
//                     <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4 upper-topic">
//                     BILLING INFORMATION
//                     </h5>
//                     <hr className="hr mt-0" />
//                     <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
//                     <table className="m-0 w-100 overflow-scroll">
//                         <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{inputData?.first_name} {inputData?.surname}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{this.props?.title[inputData?.title ? inputData.title : 0]}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{inputData?.contact_num}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">{inputData?.email}</td>
//                         </tr>
//                         <tr>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Address</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">
//                                 {inputData?.address_1},
//                                 {inputData?.address_2},
//                                 {inputData?.postcode},
//                                 {this.props?.states[inputData?.state]}
//                             </td>
//                         </tr>
//                         </tbody></table>
//                     </div>
//                     <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4">
//                         EMERGENCY CONTACT
//                     </h5>
//                     <hr className="hr mt-0" />
//                     <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
//                     <table className="m-0 w-100 overflow-scroll">
//                         <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{inputData?.first_name_em} {inputData?.surname_em}</td>
//                         </tr>
//                         {/* <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{this.props.title[this.props.titleRef.current && this.props.titleRef.current.value]}</td>
//                         </tr> */}
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{inputData?.phone_em}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">{inputData?.email_em}</td>
//                         </tr>
//                         <tr>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Relationship</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">{this.props?.relationship[inputData?.relationship]}</td>
//                         </tr>
//                         </tbody></table>
//                     </div>
//                     <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4 upper-topic">
//                     TRAVELLER INFORMATION
//                     </h5>
//                     <hr className="hr mt-0" />
//                     <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
//                     <table className="m-0 w-100">
//                         <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{inputData?.first_name} {inputData?.surname}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{this.props?.title[inputData?.title ? inputData.title : 0]}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Gender</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">{this.props?.gender[inputData?.gender ? inputData.gender : 0]}</td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">IC No.</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold"></td>
//                         </tr>
//                         <tr style={{borderBottom: '1px solid #e8e2d6'}}>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Passport No</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold"></td>
//                         </tr>
//                         <tr>
//                             <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Date of Birth</th>
//                             <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold"></td>
//                         </tr>
//                         </tbody></table>
//                     </div>
//                 </div>

//                 <div className="form-check mt-5">
//                     <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" ref={this.checkboxRef1} onChange={this.checkIfCanEnableNext} />
//                     <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Terms &amp; Condiiton. </label>
//                 </div>
//                 <div className="form-check mt-2">
//                     <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" ref={this.checkboxRef2} onChange={this.checkIfCanEnableNext} />
//                     <label className="form-check-label mb-4" htmlFor="flexCheckChecked2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> By submitting the above information, you agree to our Privacy Policy. </label>
//                 </div>

//                 {/*BUTTON NEXT PART*/}
//                 <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
//                 <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
//                     <div className="button-container col-md-2 col-5">
//                         <button onClick={this.props.prevPage} type="button" className="btn rounded-pill fw-bold w-100" 
//                             style={{
//                                 fontFamily: '"Montserrat"', 
//                                 background: this.state.backBtnEnabled ? '#d1b882' : '#cdcdcd', 
//                                 color: 'white' , 
//                                 display : this.state.backBtnDisplay ? 'block' : 'none',
//                             }}
//                             disabled = {this.state.backBtnEnabled ? false: true}
//                         >BACK</button>
//                     </div>
//                     <div className="button-container col-md-2 col-5">
//                         <button onClick={this.props.nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
//                             style={{
//                                 fontFamily: '"Montserrat"', 
//                                 background: this.state.nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
//                                 color: 'white',
//                                 display : this.state.nextBtnDisplay ? 'block' : 'none',
//                             }}
//                             disabled = {this.state.nextBtnEnabled ? false: true}
//                             >NEXT</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }}
//     </GlobalContext.Consumer>
//     }
//   }

