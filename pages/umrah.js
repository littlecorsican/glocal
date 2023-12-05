import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout'
import Review from '../components/Umrah/Review'
import FAQ from '../components/Umrah/FAQ'
import Loading from '../components/Loading'
import api from 'api'
import PackageCard from '../components/Umrah/PackageCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { faq, review, star } from 'utils/constants'

export default function Footer() {
    
    const [loading, setLoading] = useState(false)
    const [umrah, setUmrah] = useState([])

    useEffect(() => {
        setLoading(true)
        try {
            fetch(`${api().tourPackageWithLocation}?type=UMRAH`)
            .then(rawResult => rawResult.json())
            .then(jsonData => {
                console.log(jsonData, "jsonData")
                setLoading(false)
                setUmrah(jsonData?.tourDepList)
            });
        } catch (error) {
            console.log('There was an error', error);
        }
    }, [])

    return (
        <Layout>
            <div className="umrah-page">
                <div id="banner" className="d-flex justify-content-center align-items-start" style={{ backgroundSize: 'cover'}}>
                    <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>UMRAH PACKAGES 2023-2024</h1>
                        </div>
                    </div>
                </div>
            <div id="umrah-body" className="d-flex flex-row flex-wrap justify-content-between py-xl-5">
                <div className="text-center m-auto">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2 className="text-center header-title" style={{fontFamily: 'Montserrat', fontWeight: "700", fontSize: "20px", color: "#000", letterSpacing: "0.15em"}}>
                            FEATURES
                            <hr className="relative top-[-0.5rem]  border-4 border-[#D68A2C] m-0 opacity-50"></hr>
                        </h2>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2 className="d-flex justify-content-center justify-content-xl-start flex-wrap" style={{fontFamily: 'Montserrat', fontWeight: "700", marginBottom: "30px"}}>
                            WHY CHOOSE <span className="ms-2" style={{color: "#D68A2C"}}>GLOCAL TRAVEL</span>?
                        </h2>
                    </div>
                </div>
                <div className="flex justify-between responsive-flex px-12">
                    <div className="feature-item feature-item-mp flex-1 mr-2">
                        <div className="flex">
                            <div className="flex-[4]">
                                <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>Full Service</h4>
                                <div style={{ fontFamily:'Poppins' }}>
                                    From requirements or documentations, to flights and accommodation, we got you covered!
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <img src="/images/technical-support 1.png" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="feature-item feature-item-mp flex-1 ml-2">
                        <div className="flex">
                            <div className="flex-[4]">
                                <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>No Hidden Costs</h4>
                                <div style={{ fontFamily:'Poppins' }}>
                                    We make your trip comfortable and memorable while being transparent with the fees. 
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <img src="/images/technical-support 1.png" />
                            </div>
                        </div>
                    </div>
                    <div className="feature-item feature-item-mp flex-1 ml-2">
                        <div className="flex">
                            <div className="flex-[4]">
                                <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>Experienced Guide</h4>
                                <div style={{ fontFamily:'Poppins' }}>
                                    Worry not if it’s your first trip, our personal experienced staff will guide you through the process. 
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <img src="/images/technical-support 1.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded my-6 mx-12">
                    <video style={{width: '100%'}} className="embed-responsive-item rounded-5 max-h-[550px]" controls>
                    <source src="videos/sampleVideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className='m-auto'>
                    <button onClick={()=>location.href = '/umrah'} className="text-white rounded-2 fw-bold py-3 px-4 align-self-center mt-4 mb-5" style={{backgroundColor: "#2158AA", fontFamily: 'Montserrat', border: "none", maxWidth: "300px"}}>BROWSE PACKAGES</button>
                </div>
            </div>
            <div id="umrah-packages" style={{paddingTop: '50px', background: 'linear-gradient(to top, #f5f5f5 25%, transparent 25%)'}}>
                <div className="text-center m-auto">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h4 className="text-center header-title" style={{fontFamily: 'Montserrat', fontWeight: "700", fontSize: "20px", color: "#000", letterSpacing: "0.15em"}}>
                            PACKAGE
                            <hr className="relative top-[-0.5rem]  border-4 border-[#D68A2C] m-0 opacity-50"></hr>
                        </h4>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h3 className="d-flex justify-content-center justify-content-xl-start flex-wrap" style={{fontFamily: 'Montserrat', fontWeight: "700", marginBottom: "30px"}}>
                            UMRAH <span className="ms-2" style={{color: "#D68A2C"}}>PACKAGES</span>
                        </h3>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="row justify-content-center" id="umrah_packages_div">
                        {
                            umrah.map((value,index)=>{
                                return <PackageCard 
                                    key={index} 
                                    tourCode={value.tourCode}
                                    title={value.title}
                                    description={value.desc}
                                    price={value.priceFrom}
                                    idTourPkg={value.idTourPkg}
                                    id={value.id}
                                />
                            })
                        }
                        {
                            umrah.length == 0 && <div>
                                <h2 className="text-center w-100 fw-bold text-lg" style={{fontFamily: 'Montserrat'}}>0 Umrah package available</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div id="customer-review" style={{paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#f5f5f5'}}>
                <div className="container py-5">
                    <div className="d-flex">
                        <h2 className="w-100 fw-bold text-lg text-center text-md-start pb-4" style={{fontFamily: 'Montserrat'}}>REVIEWS FROM CUSTOMERS</h2>
                    </div>
                    <Carousel 
                        showArrows={true} className="carousel-component" 
                        renderArrowPrev={(clickHandler, hasPrev) => {
                            return (
                            <div
                                className={`${
                                hasPrev ? "absolute" : "hidden"
                                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                onClick={clickHandler}
                            >
                                <button style={{border: "1px solid #a0a0a0", background: "white", width: "66px", height: "71px", marginTop: "120px", opacity: "100%", paddingBottom: "10px"}} className="carousel-control-prev" type="button" data-bs-target="#card-slider" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true">
                                    <div>
                                        <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6074 42.9198L0.635254 21.4835L20.6074 0.046875L21.8735 1.40542L3.16677 21.4835L21.8735 41.5613L20.6074 42.9198Z" fill="#D1B882"></path>
                                        </svg>
                                    </div>
                                    </span>
                                    <span class="visually-hidden" style={{display: "block", border: "1px"}}>Previous</span>
                                </button>
                            </div>
                            );
                        }}
                        renderArrowNext={(clickHandler, hasNext) => {
                            return (
                            <div
                                className={`${
                                hasNext ? "absolute" : "hidden"
                                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                onClick={clickHandler}
                            >
                                <button style={{ background: "white", width: "66px", height: "71px", marginTop: "120px", border: "1px solid #a0a0a0", paddinBottom: "10px", opacity: "100%"}} className="carousel-control-next" type="button" data-bs-target="#card-slider" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"><svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.39256 42.9198L21.3647 21.4835L1.39256 0.046875L0.126475 1.40542L18.8332 21.4835L0.126475 41.5613L1.39256 42.9198Z" fill="#D1B882"></path>
                                    </svg>
                                    </span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            );
                        }}>
                        {
                            review && review.map((value,index)=>{
                                return  <div className="flex" key={index}>
                                    <Review
                                        title={value.title1}
                                        description = {value.description1}
                                        star={value.star1}
                                    />
                                    <Review
                                        title={value.title2}
                                        description = {value.description2}
                                        star={value.star2}
                                    />
                                </div>
                            })
                        }
                    </Carousel>

                </div>
            </div>

                <div id="umrah-FAQ" style={{paddingTop: '50px'}}>
                    <div className="container py-5 mx-auto d-flex flex-column justify-content-center" style={{paddingTop: '50px'}}>
                        <h2 className="text-center w-100 fw-bold" style={{fontFamily: 'Montserrat'}}>FREQUENTLY ASKED QUESTIONS</h2>
                        <div className="d-flex justify-content-center w-100 pt-2 mb-4">
                        <svg className="under-stroke" width={141} height={11} viewBox="0 0 141 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={45} height={11} fill="#D1B882" />
                            <rect x={48} width={45} height={11} fill="#D1B882" />
                            <rect x={96} width={45} height={11} fill="#D1B882" />
                        </svg>
                        </div>
                        <div className="accordion" id="faq-accordion" style={{overflow: 'hidden'}}>
                            <div id="faq_listing_div" className="d-flex flex-column gap-2" >
                                {   
                                    faq.map((value,index)=>{
                                        return <FAQ key={index} title={value.title} description={value.description} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </Layout>
    )
}



