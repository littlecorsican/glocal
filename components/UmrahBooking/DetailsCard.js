import { UmrahContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'

export default function DetailsCard(props) {

    const umrah_context = useContext(UmrahContext)

    return (
        <div id="selected_booking">
            <div className="card d-flex justify-content-start flex-row flex-wrap shadow-lg border-0" style={{borderTopLeftRadius: '2rem', borderBottomRightRadius: '1.5rem'}}>
                <div className="d-flex justify-content-start col-12 col-xl-4 position-relative">
                    <img 
                        src={umrah_context?.tourPackage?.tourCarouselList ? umrah_context?.tourPackage?.tourCarouselList[0]?.fileUrl : "/images/genting_dream_Sing_50.jpg"}
                        className="img-fluid w-100"
                        style={{borderTopLeftRadius: '1.5rem', backgroundSize: 'cover'}}
                        alt="Article Image"
                    />
                </div>
                <div className="p-4 px-xl-5 d-flex justify-content-start flex-column w-100 gap-3 align-self-center" style={{fontFamily: 'Poppins', flex: 1}}>
                    <div className="d-flex flex-xl-column flex-column justify-content-between gap-1 gap-xl-3 flex-xl-nowrap flex-wrap">
                        <h5 className="fw-bold m-0 text-uppercase headline-upper" style={{fontFamily: 'Montserrat'}}>{umrah_context?.tourPackage?.numDays}D{umrah_context?.tourPackage.numNights}N {umrah_context?.tourPackage?.nameEn} </h5>
                        <h5 className="m-0 headline-upper-small" style={{color: '#b8b09d'}}>{umrah_context?.dep?.code}</h5>
                    </div>
                    <hr style={{ margin:"0"}} />
                    <div className="d-flex justify-content-start flex-column flex-xl-row gap-0 gap-xl-4">
                        <div className="d-flex justify-content-start align-items-center flex-row gap-2 fw-normal my-2">
                        <img src="/images/duration.png" className="icon mr-2" />
                            {umrah_context?.tourPackage?.numDays} Days {umrah_context?.tourPackage?.numNights} Nights
                        </div>
                        {/* <div className="d-flex justify-content-start align-items-center flex-row gap-2 fw-normal">
                            <svg width={26} height={26} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 25.5C6.5375 25.5 0 15.6875 0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5C12.6522 0.5 15.1957 1.55357 17.0711 3.42893C18.9464 5.3043 20 7.84784 20 10.5C20 15.6875 13.4625 25.5 10 25.5ZM10 3C8.01088 3 6.10322 3.79018 4.6967 5.1967C3.29018 6.60322 2.5 8.51088 2.5 10.5C2.5 14.95 8.3 22.825 10 23C11.6875 22.825 17.5 14.95 17.5 10.5C17.5 8.51088 16.7098 6.60322 15.3033 5.1967C13.8968 3.79018 11.9891 3 10 3Z" fill="black" />
                            <path d="M10 14.25C9.25832 14.25 8.5333 14.0301 7.91661 13.618C7.29993 13.206 6.81928 12.6203 6.53545 11.9351C6.25162 11.2498 6.17736 10.4958 6.32206 9.76841C6.46675 9.04098 6.8239 8.3728 7.34835 7.84835C7.8728 7.3239 8.54098 6.96675 9.26841 6.82206C9.99584 6.67736 10.7498 6.75162 11.4351 7.03545C12.1203 7.31928 12.706 7.79993 13.118 8.41661C13.5301 9.0333 13.75 9.75832 13.75 10.5C13.75 11.4946 13.3549 12.4484 12.6517 13.1517C11.9484 13.8549 10.9946 14.25 10 14.25ZM10 9.25C9.75278 9.25 9.5111 9.32331 9.30554 9.46066C9.09998 9.59802 8.93976 9.79324 8.84515 10.0216C8.75054 10.2501 8.72579 10.5014 8.77402 10.7439C8.82225 10.9863 8.9413 11.2091 9.11612 11.3839C9.29093 11.5587 9.51366 11.6778 9.75614 11.726C9.99862 11.7742 10.2499 11.7495 10.4784 11.6549C10.7068 11.5602 10.902 11.4 11.0393 11.1945C11.1767 10.9889 11.25 10.7472 11.25 10.5C11.25 10.1685 11.1183 9.85054 10.8839 9.61612C10.6495 9.3817 10.3315 9.25 10 9.25Z" fill="black" />
                            </svg>
                            
                        </div> */}
                        {/* Location icon - removed as backend dev wont provide location in API */}
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-start flex-row gap-1 gap-xl-2 grouped-desc my-2">
                            <img src="/images/calendar.png" className="icon mr-2" />
                            <h6 className="fw-bold">{umrah_context?.dep?.dtDep}</h6>
                        </div>
                    <div className="d-flex justify-content-start flex-row gap-1 gap-xl-2 grouped-desc my-2">
                        <img src="/images/airplane.svg" className="icon mr-2" />
                        <h6 className="fw-bold na-text" style={{fontWeight: '700px'}}>{umrah_context?.dep?.airlineCode} {umrah_context?.dep?.airlineDesc}</h6>
                    </div>
                    {!umrah_context?.countdown && <p 
                        onClick={()=>location.href=`/tour/${props.idTourPkg}`} 
                        style={{fontFamily: '"Poppins"', cursor:"pointer"}}
                        className="text-colourblue underline"
                    >Change Dates</p>}
                </div>
                </div>
            </div>
        </div>
    )
}


