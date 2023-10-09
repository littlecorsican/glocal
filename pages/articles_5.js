import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout'

export default function Footer() {

    return (
        <Layout>
            <div className="articles-page overflow-hidden">
                <div className="container-fluid g-0 ">
                    <div id="banner" className="bg-image d-flex justify-content-center align-items-start" style={{backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '15px solid #b32129'}}>
                        <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                            <div className="d-flex align-items-center flex-column">
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>
                                    SINGAPORE DAY TRIP
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/*Contect Text Section*/}
                    <div className="container-fluid text_content_div position-relative mb-5 p-4">
                        <div className="container-fluid inner_text_content_div shadow  bg-white" style={{borderRadius: '15px'}}>
                        <div className="d-flex justify-content-md-start gap-sm-4 gap-2 flex-wrap">
                            <div className="d-flex justify-content-start icon-1 gap-2 align-items-center">
                            <img className="img-fluid" src="icons/calendar_gold.png" alt="icon calendar" />
                            <h6 className="fw-bold mt-2" style={{fontFamily: '"Poppins"', color: '#B8B09D'}}>Posted on 28/01/2023</h6>
                            </div>
                            <div className="d-flex justify-content-start icon-1 gap-2 align-items-center">
                            <img className="img-fluid" src="icons/contact_gold.png" alt="icon calendar" />
                            <h6 className="fw-bold mt-2" style={{fontFamily: '"Poppins"', color: '#B8B09D'}}>Tour News</h6>
                            </div>
                        </div>
                        <div id="content_listing_div" className="text_content_div_2">
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}></h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                Have you heard about Singapore? Let me share with you my unforgettable day trip to
                                Singapore, where we embarked on an adventure filled with excitement, beauty, and cultural
                                exploration. From iconic landmarks to stunning natural wonders, this journey definitely had it
                                all!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >

                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Before starting the journey, we gathered at KL Sentral. Once everyone was present,
                                we boarded the bus and it began moving towards Singapore. We stopped at Gelang Patah
                                Rest Area to freshen up, perform the morning prayer, and have breakfast there. Then we
                                continued our journey towards Singapore immigration.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >
                                
                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Our day began with a visit to Universal Studios, where we couldn&#39;t resist capturing
                                the perfect photo at the iconic globe. Afterward, we hopped on a tram from Beach Station and
                                made our way to the picturesque Siloso Beach. The golden sand and crystal-clear waters
                                provided the ideal backdrop for relaxation and fun.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >

                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Next, we embarked on a captivating city tour, immersing ourselves in the vibrant
                                culture of Singapore. Our first stop was the Singapore Souvenirs Centre, where we found
                                unique mementos to cherish. As we strolled through Arab Street, the enchanting sights,
                                sounds, and aromas transported us to a whole new world.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >
                            
                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                With appetites whetted by our adventures, we indulged in a mouthwatering lunch at a
                                local eatery. Energized and ready to explore further, we made our way to the iconic Merlion
                                Park. Standing in awe of the majestic Merlion statue, we soaked in the breathtaking views of
                                the city skyline and the sparkling waters surrounding us.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >
                                Saving the best for last, we ventured to the awe-inspiring Gardens by the Bay. The
                                lush greenery, vibrant flowers, and futuristic Supertrees left us spellbound. As evening
                                descended, we made our way to Marina Bay Sands to witness the mesmerizing light and
                                water show. The dazzling display of colors and synchronized music created a truly magical
                                experience.
                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Our day trip to Singapore was a whirlwind of adventure, culture, and natural beauty.
                                From the thrilling rides at Universal Studios to the tranquil serenity of Siloso Beach, the
                                city&#39;s vibrant streets and awe-inspiring landmarks, and the breathtaking wonders of Gardens

                                by the Bay and Marina Bay Sands, this journey had it all. Singapore truly captured our hearts
                                with its diverse offerings and left us with memories to last a lifetime.
                            </h6>
                            <br/>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



