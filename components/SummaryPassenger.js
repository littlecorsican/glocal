import { gender, relationship, states, salutation } from 'utils/constants'
import React, {useState, useEffect, useContext } from 'react'

export default function Passenger(props) {

   return (
        <>
            <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4 upper-topic">
                TRAVELLER INFORMATION
            </h5>
            <hr className="hr mt-0" />
            <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                <table className="m-0 w-100">
                    <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {props?.surname} {props?.givenName}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {isNaN(props?.salutationCd) ? props?.salutationCd : salutation[props?.salutationCd||0]}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Gender</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {isNaN(props?.sexCd) ? props?.sexCd : gender[props?.sexCd||0]}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">IC No.</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {props?.icNo}
                        </td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Passport No</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {props?.passportNo}
                        </td>
                    </tr>
                    <tr>
                        <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Date of Birth</th>
                        <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
                            {props?.dob}
                        </td>
                    </tr>
                    </tbody></table>
            </div>
        </>
    )

}











