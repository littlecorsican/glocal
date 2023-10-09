import React, {useState, useEffect } from 'react'
import Image from 'next/image';

export default function CMS(props) {

  return (
    <div id="package-details" className="flex-1">
        <div className="web-package-details container py-5">
          <div className="row g-5">
            <div className=" col-lg-8 col-12 order-2 order-lg-1">
              <div style={{boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', border: '1px solid #a0a0a0', padding: '25px', borderRadius: '30px' , minHeight : "500px"}} >
                <h2 style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    fontFamily: "Montserrat",
                    paddingBottom: "10px"
                }}>
                  ABOUT THIS PACKAGE
                </h2>
                <div dangerouslySetInnerHTML={{__html: props.html}}>

                </div>
              </div>
            </div>
        </div>
    </div>   
    </div>)
}



