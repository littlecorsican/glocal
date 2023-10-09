import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    return (
        <>
            <div id="hero" style={{paddingTop: "282px", paddingBottom: "200px"}}>
                <div className="container d-flex flex-column align-items-center" style={{gap: "42px"}}>
                <img  className="img-fluid error-image" src="/images/404.png" width={500} height={500} />
                <div className="d-flex flex-column align-items-center">
                    <h1 className="error-title" style={{textAlign: "center", fontFamily: "Montserrat", fontWeight: "700", color: "#ea242d"}}>PAGE NOT FOUND</h1>
                    <p className="error-description" style={{fontFamily: "Poppins", textAlign: "center"}}>
                    The page you were looking for is either removed or does not exist.<br className="d-lg-block d-none" />
                    Please click below to go back to the homepage.
                    </p>
                    <button className="d-md-none d-block" style={{border: 'none', paddingLeft: '19px', paddingRight: '19px', paddingTop: '9.34px', paddingBottom: '9.34px', backgroundColor: '#ea242d', color: '#fff', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '12px', borderRadius: '100px'}}>GO TO HOMEPAGE</button>
                </div>
                <Link href="/" style={{textDecoration: 'none'}}>
                    <button className="d-md-block d-none" style={{border: 'none', paddingLeft: '45px', paddingRight: '45px', paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#ea242d', color: '#fff', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px', borderRadius: '100px'}}>RETURN TO HOMEPAGE</button>
                </Link>
                </div>
            </div>
        </>
    )
}
