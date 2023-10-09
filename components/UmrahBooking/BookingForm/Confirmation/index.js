import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useCallback} from 'react'
import React from 'react';


export default class Summary extends React.Component {
    constructor() {
      super();
      this.state = {
        backBtnEnabled : 0,
        backBtnDisplay : 0,
        nextBtnEnabled : 1,
        nextBtnDisplay : 1,
      };
    }



    render() {
        return (
            <>
                <h2 className="d-flex justify-content-center pt-5 headline-order fw-bold" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>TOUR OVERVIEW</h2>
                <p className="d-flex summary-desc justify-content-center align-self-center text-center mb-3 mb-xxxl-0" style={{fontFamily: '"Poppins"', fontWeight: 400, fontSize: '18px', maxWidth: '600px'}}>
                    Payment is successful and you should receive an email through johndoe@example.com for the full itenerary and details of the booking.
                </p>
                <div className="d-flex flex-xl-row-reverse flex-column justify-content-between">
                    <button onClick="window.open('src/assets/pdf/Itenerary_Booking12340989.pdf', '_blank');" type="button" className="btn rounded-pill fw-bold py-2 align-self-xl-end align-self-center mb-md-2 mb-5" style={{width: '150px', fontFamily: '"Montserrat"', background: '#ea242d', color: 'white'}}>
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
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold fw-bold">123456789</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Tour Package</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">KJTR00001</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Travel Dates</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">16, Nov, 2023 - 18 Nov, 2023</td>
                            </tr>
                            <tr>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Number of Traveller(s)</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Number of Traveller(s)</td>
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
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">John Doe</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Mr</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">0123456789</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">johndoe@example.com</td>
                            </tr>
                            <tr>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Address</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 fw-bold flex-wrap p-3">2-4, Jalan Nova K U5/K, Subang Bestari, 40150, Selangor Malaysia.</td>
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
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">John Doe</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Mrs</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Contact Number</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">012345678</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Email Address</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">johndoe@example.com</td>
                            </tr>
                            <tr>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Relationship</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold flex-wrap p-3">Sister</td>
                            </tr>
                            </tbody></table>
                        </div>
                        <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-xl-5 mt-4 upper-topic">
                        TRAVELLER INFORMATION
                        </h5>
                        <hr className="hr mt-0" />
                        <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                        <table className="m-0 w-100">
                            <tbody><tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">First &amp; Last Name</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">John Doe</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Title</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Mrs</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Gender</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">Female</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">IC No.</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">910223-10-1234</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e8e2d6'}}>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Passport No</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">A123456789</td>
                            </tr>
                            <tr>
                                <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">Date of Birth</th>
                                <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">23, Feb, 2023</td>
                            </tr>
                            </tbody></table>
                        </div>
                    </div>
            

                {/*BUTTON NEXT PART*/}
                <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
                <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                    <div className="button-container col-md-2 col-5">
                        <button onClick={this.props.prevPage} type="button" className="btn rounded-pill fw-bold w-100" 
                            style={{
                                fontFamily: '"Montserrat"', 
                                background: this.state.backBtnEnabled ? '#d1b882' : '#cdcdcd', 
                                color: 'white' , 
                                display : this.state.backBtnDisplay ? 'block' : 'none',
                            }}
                            disabled = {this.state.backBtnEnabled ? false: true}
                        >BACK</button>
                    </div>
                    <div className="button-container col-md-2 col-5">
                        <button onClick={this.props.nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
                            style={{
                                fontFamily: '"Montserrat"', 
                                background: this.state.nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
                                color: 'white',
                                display : this.state.nextBtnDisplay ? 'block' : 'none',
                            }}
                            disabled = {this.state.nextBtnEnabled ? false: true}
                            >NEXT</button>
                    </div>
                </div>
            </>
        )
    }
}



