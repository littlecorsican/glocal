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
                console.log(JSON.parse(jsonData))
                setLoading(false)
                setUmrah(JSON.parse(jsonData)?.tourDepList)
            });
        } catch (error) {
            console.log('There was an error', error);
        }
    }, [])

    return (
        <Layout>
            <div className="umrah-page">
                <div id="banner" className="d-flex justify-content-center align-items-start" style={{borderBottom: '15px solid #b32129', backgroundSize: 'cover'}}>
                    <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>UMRAH PACKAGES 2023/2024</h1>
                        </div>
                    </div>
                </div>
            <div id="umrah-body" className="d-flex flex-row flex-wrap justify-content-between py-xl-5">
                <div className="about-content-box d-flex justify-content-end" style={{flex: 1}}>
                    <div className="col-12 col-xl-8 p-0 d-flex flex-column justify-content-center py-5 px-md-5 mx-md-5 px-3 px-xl-0 gap-1 gap-xl-3">
                        <h2 className="text-center text-md-start fw-bold">WHY <span style={{color: '#b32129'}}>KAKIJALAN</span> UMRAH?</h2>
                        <p className="text-center text-md-start" style={{fontFamily: '"Poppins", sans-serif', fontSize: '20px !important'}}>KakiJalan offers UMRAH packages that are affordable, convenient and safe. Explore packages that suits your budget and plan your trip now!</p>
                        <div className="features-card d-flex flex-column pb-1 pt-3">
                            <div className="d-flex gap-3">
                                <div>
                                    <svg width={50} height={43} viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="29.4251" cy="20.575" r="20.575" fill="#E8E2D6" fillOpacity="0.85" />
                                        <path d="M36.2651 2.28803C36.2651 1.47797 35.6084 0.821289 34.7983 0.821289C33.9883 0.821289 33.3316 1.47797 33.3316 2.28803V5.71642C30.6127 3.47486 27.3414 1.96305 23.828 1.35828C19.1116 0.546453 14.2599 1.42098 10.1238 3.82849C5.98768 6.23604 2.83117 10.0228 1.20779 14.5249C-0.415547 19.0269 -0.402107 23.9568 1.24578 28.4499C1.5247 29.2104 2.36734 29.6008 3.12784 29.3219C3.88834 29.043 4.27879 28.2003 3.99986 27.4398C2.58926 23.5937 2.57777 19.3737 3.96735 15.5199C5.35693 11.6662 8.05895 8.4246 11.5995 6.36374C15.14 4.30293 19.2931 3.55431 23.3303 4.24925C26.216 4.74593 28.9108 5.9574 31.1802 7.74956H28.5004C27.6904 7.74956 27.0337 8.40626 27.0337 9.21629C27.0337 10.0264 27.6904 10.683 28.5004 10.683H34.3094C35.3895 10.683 36.2651 9.80748 36.2651 8.72738V2.28803Z" fill="#D1B882" />
                                        <path d="M4.47949 40.5924C4.47949 41.4024 5.13615 42.0591 5.94623 42.0591C6.75625 42.0591 7.41296 41.4024 7.41296 40.5924V37.1545C10.1318 39.3961 13.4031 40.9079 16.9166 41.5127C21.633 42.3245 26.4847 41.45 30.6208 39.0425C34.7569 36.6349 37.9134 32.8481 39.5368 28.3461C41.1601 23.844 41.1467 18.9142 39.4988 14.4211C39.2199 13.6605 38.3772 13.2702 37.6167 13.5491C36.8562 13.828 36.4658 14.6706 36.7447 15.4311C38.1553 19.2773 38.1668 23.4972 36.7772 27.351C35.3876 31.2048 32.6856 34.4463 29.1451 36.5072C25.6045 38.568 21.4515 39.3167 17.4142 38.6217C14.5286 38.125 11.8337 36.9136 9.56436 35.1214H12.8125C13.6225 35.1214 14.2792 34.4647 14.2792 33.6546C14.2792 32.8446 13.6225 32.1879 12.8125 32.1879H6.43514C5.35503 32.1879 4.47949 33.0635 4.47949 34.1435V40.5924Z" fill="#D1B882" />
                                    </svg>
                                </div>
                                <div className="card" style={{border: 'none'}}>
                                    <div className="card-body p-0">
                                        <p className="card-tile fw-bolder" style={{fontSize: '20px', marginBottom: '0.01px'}}>Full Service</p>
                                        <p className="card-text" style={{fontSize: '16px !important'}}>From requirements or documentations, to flights and accommodation, we got you covered!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-card d-flex flex-column pb-3 pt-3">
                            <div className="d-flex gap-3">
                                <div className="mt-1" style={{marginLeft: '-10px'}}>
                                    <svg width={59} height={59} viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_140_2295)">
                                            <path d="M29.5 37.7969C20.8583 37.7969 13.8281 30.7667 13.8281 22.125C13.8281 13.4833 20.8583 6.45312 29.5 6.45312C38.1417 6.45312 45.1719 13.4833 45.1719 22.125C45.1719 30.7667 38.1417 37.7969 29.5 37.7969ZM29.5 8.29688C21.8742 8.29688 15.6719 14.4992 15.6719 22.125C15.6719 29.7508 21.8742 35.9531 29.5 35.9531C37.1258 35.9531 43.3281 29.7508 43.3281 22.125C43.3281 14.4992 37.1258 8.29688 29.5 8.29688Z" fill="#D1B882" />
                                            <path d="M30.2098 28.6462H25.9489C25.44 28.6462 25.027 28.2332 25.027 27.7244C25.027 27.2155 25.44 26.8025 25.9489 26.8025H30.2098C31.2681 26.8025 32.1292 25.9415 32.1292 24.8831C32.1292 23.8248 31.2681 22.9638 30.2098 22.9638H28.7901C26.7159 22.9638 25.027 21.2768 25.027 19.2025C25.027 17.1283 26.7159 15.4395 28.7901 15.4395H31.6295C32.1384 15.4395 32.5514 15.8525 32.5514 16.3613C32.5514 16.8702 32.1384 17.2832 31.6295 17.2832H28.7901C27.7318 17.2832 26.8708 18.1442 26.8708 19.2025C26.8708 20.2609 27.7318 21.12 28.7901 21.12H30.2098C32.284 21.12 33.9729 22.8089 33.9729 24.8831C33.9729 26.9574 32.284 28.6462 30.2098 28.6462Z" fill="#D1B882" />
                                            <path d="M29.5 16.2179C28.9911 16.2179 28.5781 15.8049 28.5781 15.296V13.5205C28.5781 13.0116 28.9911 12.5986 29.5 12.5986C30.0088 12.5986 30.4218 13.0116 30.4218 13.5205V15.296C30.4218 15.8049 30.0088 16.2179 29.5 16.2179Z" fill="#D1B882" />
                                            <path d="M29.5 30.4221C28.9911 30.4221 28.5781 30.0091 28.5781 29.5003V27.7247C28.5781 27.2159 28.9911 26.8029 29.5 26.8029C30.0088 26.8029 30.4218 27.2159 30.4218 27.7247V29.5003C30.4218 30.0091 30.0088 30.4221 29.5 30.4221Z" fill="#D1B882" />
                                            <path d="M29.5 52.5465C28.9911 52.5465 28.5781 52.1335 28.5781 51.6246V38.0804L10.1406 43.1102V51.6246C10.1406 52.1335 9.72762 52.5465 9.21875 52.5465C8.70988 52.5465 8.29688 52.1335 8.29688 51.6246V42.4059C8.29688 41.9892 8.57528 41.626 8.97538 41.5172L29.2566 35.9859C29.5406 35.9122 29.8319 35.9675 30.0605 36.1426C30.2891 36.3178 30.4219 36.587 30.4219 36.8746V51.6246C30.4219 52.1335 30.0089 52.5465 29.5 52.5465Z" fill="#D1B882" />
                                            <path d="M49.7812 52.5471C49.2724 52.5471 48.8594 52.1341 48.8594 51.6253V43.1108L30.4219 38.0811V51.6253C30.4219 52.1341 30.0089 52.5471 29.5 52.5471C28.9911 52.5471 28.5781 52.1341 28.5781 51.6253V36.8753C28.5781 36.5876 28.7109 36.3166 28.9395 36.1433C29.1681 35.97 29.4613 35.9128 29.7434 35.9866L50.0246 41.5178C50.4247 41.6285 50.7031 41.9917 50.7031 42.4065V51.6253C50.7031 52.1341 50.2901 52.5471 49.7812 52.5471Z" fill="#D1B882" />
                                            <circle cx="38.4251" cy="29.575" r="20.575" fill="#E8E2D6" fillOpacity="0.85" />
                                            <path d="M29.5 37.7969C20.8583 37.7969 13.8281 30.7667 13.8281 22.125C13.8281 13.4833 20.8583 6.45312 29.5 6.45312C38.1417 6.45312 45.1719 13.4833 45.1719 22.125C45.1719 30.7667 38.1417 37.7969 29.5 37.7969ZM29.5 8.29688C21.8742 8.29688 15.6719 14.4992 15.6719 22.125C15.6719 29.7508 21.8742 35.9531 29.5 35.9531C37.1258 35.9531 43.3281 29.7508 43.3281 22.125C43.3281 14.4992 37.1258 8.29688 29.5 8.29688Z" fill="#D1B882" />
                                            <path d="M30.2098 28.6462H25.9489C25.44 28.6462 25.027 28.2332 25.027 27.7244C25.027 27.2155 25.44 26.8025 25.9489 26.8025H30.2098C31.2681 26.8025 32.1292 25.9415 32.1292 24.8831C32.1292 23.8248 31.2681 22.9638 30.2098 22.9638H28.7901C26.7159 22.9638 25.027 21.2768 25.027 19.2025C25.027 17.1283 26.7159 15.4395 28.7901 15.4395H31.6295C32.1384 15.4395 32.5514 15.8525 32.5514 16.3613C32.5514 16.8702 32.1384 17.2832 31.6295 17.2832H28.7901C27.7318 17.2832 26.8708 18.1442 26.8708 19.2025C26.8708 20.2609 27.7318 21.12 28.7901 21.12H30.2098C32.284 21.12 33.9729 22.8089 33.9729 24.8831C33.9729 26.9574 32.284 28.6462 30.2098 28.6462Z" fill="#D1B882" />
                                            <path d="M29.5 16.2179C28.9911 16.2179 28.5781 15.8049 28.5781 15.296V13.5205C28.5781 13.0116 28.9911 12.5986 29.5 12.5986C30.0088 12.5986 30.4218 13.0116 30.4218 13.5205V15.296C30.4218 15.8049 30.0088 16.2179 29.5 16.2179Z" fill="#D1B882" />
                                            <path d="M29.5 30.4221C28.9911 30.4221 28.5781 30.0091 28.5781 29.5003V27.7247C28.5781 27.2159 28.9911 26.8029 29.5 26.8029C30.0088 26.8029 30.4218 27.2159 30.4218 27.7247V29.5003C30.4218 30.0091 30.0088 30.4221 29.5 30.4221Z" fill="#D1B882" />
                                            <path d="M29.5 52.5465C28.9911 52.5465 28.5781 52.1335 28.5781 51.6246V38.0804L10.1406 43.1102V51.6246C10.1406 52.1335 9.72762 52.5465 9.21875 52.5465C8.70988 52.5465 8.29688 52.1335 8.29688 51.6246V42.4059C8.29688 41.9892 8.57528 41.626 8.97538 41.5172L29.2566 35.9859C29.5406 35.9122 29.8319 35.9675 30.0605 36.1426C30.2891 36.3178 30.4219 36.587 30.4219 36.8746V51.6246C30.4219 52.1335 30.0089 52.5465 29.5 52.5465Z" fill="#D1B882" />
                                            <path d="M49.7812 52.5471C49.2724 52.5471 48.8594 52.1341 48.8594 51.6253V43.1108L30.4219 38.0811V51.6253C30.4219 52.1341 30.0089 52.5471 29.5 52.5471C28.9911 52.5471 28.5781 52.1341 28.5781 51.6253V36.8753C28.5781 36.5876 28.7109 36.3166 28.9395 36.1433C29.1681 35.97 29.4613 35.9128 29.7434 35.9866L50.0246 41.5178C50.4247 41.6285 50.7031 41.9917 50.7031 42.4065V51.6253C50.7031 52.1341 50.2901 52.5471 49.7812 52.5471Z" fill="#D1B882" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_140_2295">
                                            <rect width={59} height={59} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            <div className="card" style={{border: 'none'}}>
                                <div className="card-body p-0">
                                    <p className="card-tile fw-bold mb-1" style={{fontSize: '20px'}}>No Hidden Costs</p>
                                    <p className="card-text" style={{fontSize: '16px'}}>We make your trip comfortable and memorable while being transparent with the fees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="features-card d-flex flex-column pb-3 pt-3">
                    <div className="d-flex gap-3">
                    <div className="mt-2">
                        <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25.4251" cy="24.575" r="20.575" fill="#E8E2D6" fillOpacity="0.85" />
                        <path d="M47.1225 0.160812L1.29493 18.9085C-0.632463 19.6969 -0.337871 22.5134 1.71099 22.8859L23.206 26.7941L27.1142 48.2891C27.4867 50.3379 30.3031 50.6325 31.0916 48.7051L49.8393 2.87756C50.5386 1.16801 48.8321 -0.538612 47.1225 0.160812ZM29.9369 40.5246L27.0469 24.6299C26.8917 23.7763 26.2237 23.1082 25.37 22.9531L9.47536 20.0631L44.1025 5.8975L29.9369 40.5246Z" fill="#D1B882" />
                        </svg>
                    </div>
                    <div className="card" style={{border: 'none'}}>
                        <div className="card-body p-0">
                        <p className="card-tile fw-bold mb-1" style={{fontSize: '20px'}}>Experienced Guide</p>
                        <p className="card-text" style={{fontSize: '16px'}}>Worry not if it’s your first trip, our personal experienced staff will guide you through the process.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="d-md-flex">
                    <button onClick={()=>location.href="#umrah-packages"} className="rounded-pill mt-3 fw-bold text-white py-lg-3 px-lg-5 py-2 px-5 border-0" style={{fontFamily: 'Montserrat', fontSize: '18px', backgroundColor: '#ea242d'}} type="button">BROWSE PACKAGES</button>
                </div>
                </div>
            </div>
            <div className="col-12 col-xl-6 m-0 my-xl-5">
                <video style={{width: '100%'}} className="embed-responsive-item" controls>
                <source src="videos/sampleVideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            </div>
            <div id="umrah-packages" style={{paddingTop: '50px', background: 'linear-gradient(to top, #f5f5f5 25%, transparent 25%)'}}>
                <div className="container mx-auto">
                    <h2 className="text-center w-100 fw-bold text-lg" style={{fontFamily: 'Montserrat'}}>UMRAH PACKAGES</h2>
                    <div className="d-flex justify-content-center w-100 pt-2 mb-5">
                        <svg className="under-stroke" width={141} height={11} viewBox="0 0 141 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={45} height={11} fill="#D1B882" />
                            <rect x={48} width={45} height={11} fill="#D1B882" />
                            <rect x={96} width={45} height={11} fill="#D1B882" />
                        </svg>
                    </div>
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



