import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
props
    -title: string
    -description:string
    -star:int
*/

export default function FAQ(props) {

    const [showPanel, setShowPanel] = useState(false)

    return (
        <div
            className="card p-3 p-xl-4"
            data-toggle="collapse"
            data-target="#panel${e.id}"
            aria-expanded="false"
            aria-controls="panel${e.id}"
        >
            <div
                className=" d-flex justify-content-between align-items-center"
                id="panel1-header"
                style={{ borderBottom: "transparent", backgroundColor: "white" }}
            >
                <h2
                    className="mb-0 fw-bold text-uppercase"
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        textTransform: "uppercase",
                        color: "#a0a0a0"
                    }}
                >
                    {props.title}
                </h2>
                <button className="btn btn-link" aria-hidden="true" onClick={()=>setShowPanel(!showPanel)}>
                    { showPanel ? 
                        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 8H4V7H11V8Z" fill="black"/> </svg>
                    : 
                        <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M19.2188 9.35432H10.7812V0.792739C10.7812 0.354909 10.4315 0 10 0C9.56852 0 9.21875 0.354909 9.21875 0.792739V9.35432H0.78125C0.349766 9.35432 0 9.70923 0 10.1471C0 10.5849 0.349766 10.9398 0.78125 10.9398H9.21875V19.5014C9.21875 19.9392 9.56852 20.2941 10 20.2941C10.4315 20.2941 10.7812 19.9392 10.7812 19.5014V10.9398H19.2188C19.6502 10.9398 20 10.5849 20 10.1471C20 9.70923 19.6502 9.35432 19.2188 9.35432Z"
                            fill="#0E0001"
                            />
                        </svg>}
                </button>
            </div>
            <div
                //className={showPanel ? "show pt-2" : "collapse pt-2"}
                className="pt2"
                style={{ opacity : showPanel ? "100" : "0", transition : "opacity 0.5s" }}
                aria-labelledby="panel1-header"
                data-parent="#faq-accordion"
            >
                <div 
                    className="pt-0"
                    style={{ height : showPanel ? "60px" : "0px", transition : "height 0.5s" }}
                >
                <p className="m-0" style={{ fontFamily: "Poppins" }}>
                    {props.description}
                </p>
                </div>
            </div>
        </div>

    )
}




