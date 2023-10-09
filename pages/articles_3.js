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
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>TOP 5 ACTIVITIES TO DO ONBOARD SPECTRUM OF THE SEAS</h1>
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
                                On Spectrum of the Seas, we can experience a breathtaking adventure that is full of
                                novelty features. From lavishly designed staterooms, avant-garde technology and amenities,
                                to exquisite gourmet dining experiences, Spectrum of the Seas offers nonstop excitement
                                and elegance with every voyage. Ready to planning your days at sea? Here are the top 5
                                activities to do on Spectrum of the Seas.
                            </h6>
                            <ol className="list-decimal">
                                <li className="m-4"><b>A BREATH-TAKING VIEWS FROM THE NORTH STAR</b>
                                    <div>North Star - a 360-degree viewing capsule that takes you 300 feet above sea
                                    level being one of the most popular onboard experiences. The North Star holds the
                                    Guinness World Record as the tallest viewing deck on a cruise ship, so prepare your
                                    camera to take some stunning pictures while you at it.</div>
                                </li>
                                <li className="m-4"><b>EXPERIENCE A ZERO-GRAVITY AT RIPCORD BY IFLY</b>
                                    <div>Being the first-ever skydiving simulator on cruise ship, you will feel as if you are
                                    floating weightlessly as the air lifts and buoys you in the clear tube at RipCord by iFly.
                                    What are you waiting for? Put up the gear and have some fun in the zero-gravity at
                                    this popular attraction that will pump up your adrenaline.</div>
                                </li>
                                <li className="m-4"><b>TAKE PLEASURE IN A GOURMET FOOD</b>
                                    <div>You can enjoy multi-courses meals from various restaurant/café onboard, such as
                                    the Main Dining Room and Windjammer Café, which are free. There is also a service
                                    charge per person to dine at other restaurant like Jamie&#39;s Italian, The Hot Pot and
                                    Sichuan Red. If you&#39;ve got a sweet tooth, a scoop of Ben &amp; Jerry&#39;s at Johnny Rockets
                                    will be a go-to for you.</div>
                                </li>
                                <li className="m-4"><b>PLACING AN ORDER AT BIONIC BAR</b>
                                    <div>This Instagram-worthy cocktail is a mainstay of Spectrum of the Seas and popular
                                    among guests. Be amaze with a novel innovative of two robotic bartenders
                                    that specifically programmed to mix a variety of delectable beverages. What you
                                    waiting for? Sit back and order a classic cocktail or a signature creation from the
                                    menu at Bionic Bar, or enter your own special recipe into one of the bar&#39;s iPads to
                                    taste the wonders with your friends.</div>
                                </li>
                                <li className="m-4"><b>HAVE A GOOD TIME WITH LIVE ENTERTAINMENT</b>
                                    <div>Too energized to sleep? Bust a move with our DJ and top cover bands that perform
                                    in this vast, multi-level concert venue, ranging from classic rock to disco and pop.
                                    Additionally, there is a bar where you can get beer, wine, and delectable cocktails
                                    throughout the nights. You also can groove with sing-along piano ballads at the
                                    Schooner Bar and show-off your talent at karaoke at Star Moment.</div>
                                </li>
                                <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                    Spectrum of the Seas unlocks endless possibilities to spice up every moment you
                                    spend at sea, from spectacular thrills and tech-inspired entertainment to exquisite cuisine set
                                    to satisfy every palate. There are plenty of wonderful things to look forward to when you

                                    cruise on this groundbreaking cruise ship. From the moment you set foot onboard, you&#39;ll find
                                    yourself easily get mesmerized by everything that Spectrum of the Seas offers.
                            </h6>
                                

                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



