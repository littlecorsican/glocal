import React, {useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function ProgressBar(props) {

    const progress_data = [
      {
        id: "01",
        string: "Tour Overview",
      },
      {
        id: "02",
        string: "Traveller(s)",
      },
      {
        id: "03",
        string: "Summary",
      },
      {
        id: "04",
        string: "Payment",
      },
      {
        id: "05",
        string: "Confirmation",
      },
    ];
  
   return (

    <div className="overflow-auto">
        <div
            className="position-relative"
            style={{ borderTop: "1.5px solid #E8E2D6", top: 20, zIndex: 0 }} />
                <div
                    className="d-flex flex-row justify-content-around position-relative"
                    style={{ zIndex: 1 }}
                >
            {
                progress_data.map((value,index)=> {
                    if (props.index == index) {
                        return  <div key={index}>  
                            <div className="d-none d-xl-flex justify-content-center align-items-center flex-column">
                                <div className="rounded-5 bg-colourbrown">
                                <p
                                    className="text-white fw-bold m-0 d-flex justify-content-center align-items-center progress-icon"
                                    style={{ fontFamily: '"Montserrat"' }}
                                >
                                    {value.id}
                                </p>
                                </div>
                                <h6 className="fw-bold progress-font" style={{ color: "#B8B09D" }}>
                                    {value.string}
                                </h6>
                            </div>
                            <div className="d-flex d-xl-none justify-content-start align-items-center flex-column col-3">
                                <div className="rounded-5 bg-colourbrown">
                                <p
                                    className="text-white fw-bold m-0 d-flex justify-content-center align-items-center progress-icon"
                                    style={{ fontFamily: '"Montserrat"' }}
                                >
                                    {value.id}
                                </p>
                                </div>
                                <h6 className="fw-bold text-center progress-font" style={{ color: "#B8B09D" }}>
                                    {value.string}
                                </h6>
                            </div>
                        </div>
                    } else {
                        return <div key={index}>
                        <div className="d-none d-xl-flex justify-content-center align-items-center flex-column">
                            <div className="rounded-5 bg-colourgrey">
                            <p
                                className="text-white fw-bold m-0 d-flex justify-content-center align-items-center progress-icon"
                                style={{ fontFamily: '"Montserrat"' }}
                            >
                                {value.id}
                            </p>
                            </div>
                            <h6 className="fw-bold progress-font" style={{ color: "#B8B09D" }}>
                                {value.string}
                            </h6>
                        </div>
                        <div className="d-flex d-xl-none justify-content-start align-items-center flex-column col-3">
                            <div className="rounded-5 bg-colourgrey" >
                            <p
                                className="text-white fw-bold m-0 d-flex justify-content-center align-items-center progress-icon"
                                style={{ fontFamily: '"Montserrat"' }}
                            >
                                {value.id}
                            </p>
                            </div>
                            <h6 className="fw-bold text-center progress-font" style={{ color: "#B8B09D" }}>
                                {value.string}
                            </h6>
                        </div></div>
                    }
                })
            }
        </div>
    </div>


    )

}
