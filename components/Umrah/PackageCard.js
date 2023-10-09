import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
props
    tourCode: string
    title: string
    description: string
    priceFrom: string
*/

export default function PackageCard(props) {

    return (
        <div className="col-12 col-lg-5 col-xl-4">
            <div
                className="card shadow mb-3"
                    style={{
                    borderRadius: 0,
                    borderTopLeftRadius: 25,
                    borderBottomRightRadius: 25
                }}
            >
                <img
                    className="card-img-top"
                    style={{ borderRadius: 0, borderTopLeftRadius: 25 }}
                    src="src/assets/images/umrahPackage1.png"
                    alt="umrah_packages"
                />
                <div className="card-body">
                    <h5
                        className="card-title fw-bold"
                        style={{ fontFamily: "Montserrat", fontSize: 20 }}
                    >
                        {props.title}
                    </h5>
                    <h5
                        className="card-title fw-bold"
                        style={{ fontFamily: "Poppins", fontSize: 18, color: "#b8b09d" }}
                    >
                        {props.tourCode}
                    </h5>
                    <p
                        className="card-text fw-bold"
                        style={{ fontFamily: "Poppins", fontSize: 16 }}
                    >
                        {props.description}
                    </p>
                </div>
                <div
                    className="card-footer text-center align-items-center"
                    style={{
                        borderRadius: 0,
                        borderBottomRightRadius: 25,
                        color: "#fff",
                        backgroundColor: "#b8b09d",
                        left: 0,
                        margin: 0
                    }}
                >
                    <p className="mb-1 fw-bold" style={{ cursor:"pointer" }} onClick={()=> location.href=`/umrah/${props.idTourPkg}` }>View Details | From RM {props.priceFrom}</p>
                </div>
            </div>
        </div>

    )
}



