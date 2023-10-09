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
                <h2 className="d-flex justify-content-center pt-5 headline-order fw-bold" style={{fontFamily: '"Montserrat"'}}>PAYMENT</h2>
                <p className="summary-desc text-start mt-3" style={{fontWeight: 600}}>Please select your payment method</p>
                <div className="conatiner d-flex flex-wrap justify-content-between">
                    <div className="d-flex flex-column col-xl-6 col-12">
                    <h4 className="m-0" style={{fontSize: '15px'}}>Visa/Master</h4>
                    <hr className="hr" style={{width: '97%'}} />
                    <div className="payment_div d-flex">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" check />
                        </div>
                        <img className="img-fluid w-75" src="/images/payment_1.png" alt="payment-1" />
                    </div>
                    </div>
                    <div className="d-flex flex-column col-xl-6 col-12">
                    <h4 className="m-0" style={{fontSize: '15px'}}>Visa/Master</h4>
                    <hr className="hr" style={{width: '97%'}} />
                    <div className="payment_div d-flex">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" check />
                        </div>
                        <img className="img-fluid w-75" src="/images/payment_2.png" alt="payment-2" />
                    </div>
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



