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
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>My SWISS SPLENDOR: UNFORGETTABLE ADVENTURES IN SWITZERLAND</h1>
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
                                Embark on a journey through Switzerland and discover a world of unparalleled beauty and
                                unforgettable adventures. From the scenic train ride to the exhilarating Grindewald tobbagon
                                ride, and the awe-inspiring Mount Titlis, prepare to be captivated at every turn. Marvel at the
                                majestic Staubach Falls, immerse yourself in the enchanting village of Lauterbrunnen and be
                                mesmerized by the crystal-clear waters of Lake Blausee. Let&#39;s get ready for an extraordinary
                                Swiss adventure that will leave you in awe.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >A Scenic Adventure: Exploring Zermatt by Train from Tash</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                A train journey from Tash to Zermatt is like stepping into a picturesque postcard! As the train
                                chugs along, you&#39;ll be treated to breathtaking vistas and an unforgettable experience. Zermatt
                                is a charming, car-free town with stunning views of the majestic Matterhorn. You can explore
                                the town on foot or take an e-bus or e-taxi. And if you&#39;re lucky, you&#39;ll get to witness the
                                grandeur of the Matterhorn firsthand. Zermatt is also a playground for adventure enthusiasts
                                with activities like paragliding and skiing. It&#39;s truly an alpine paradise!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Thrill and Beauty Unite: Toboggan Ride in Grindelwald, Switzerland.</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                You&#39;re in for a treat with the thrilling toboggan ride in Grindelwald, Switzerland! Picture this:
                                wooden sleds lined up, ready for an adrenaline-fueled adventure. Gripping the handles, you
                                push off and zoom down the winding track, the wind rushing through your scarf. As you
                                descend, the breathtaking alpine landscape unfolds before your eyes. Snow-capped peaks,
                                frozen waterfalls, and charming chalets create a visual feast. Each twist and turn brings
                                excitement and laughter, making this toboggan ride an unforgettable experience. So, gear up
                                and get ready to embrace the thrill and beauty of Grindelwald&#39;s toboggan run!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >A Heavenly Adventure: Unleash Your Inner Explorer at Mount Titlis</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                You&#39;re in for a heavenly adventure at Mount Titlis! Imagine stepping into a winter
                                wonderland, surrounded by breathtaking beauty and thrilling experiences. As you ascend in
                                the rotating cable car, the panoramic views of the Swiss Alps will leave you in awe. At the
                                summit, you&#39;ll find a snowy playground with activities like snowboarding, skiing, tubing, and
                                sledding. Don&#39;t miss the famous Cliff Walk, a thrilling suspension bridge offering a jaw-
                                dropping view. And make sure to explore the enchanting Ice Cave and indulge in a delicious
                                Swiss meal at one of the mountaintop restaurants. Mount Titlis is the perfect destination for
                                nature enthusiasts and adventure seekers like you!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Get Ready to Be Mesmerized: Exploring the Majestic Staubbach Falls in Lauterbrunnen.</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Get set for an unforgettable experience at the majestic Staubbach Falls in Lauterbrunnen!
                                This incredible waterfall stands nearly 300 meters tall and creates a magical aura with its
                                misty spray. You can even walk behind the falls for an up-close view, embracing the
                                refreshing mist and feeling connected to nature&#39;s wonders. Don&#39;t forget to take in the
                                picturesque village of Lauterbrunnen and the stunning landscapes that surround the falls. It&#39;s
                                an unforgettable adventure in the heart of Switzerland!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >A Serene Oasis Amidst Lush Forests of Lake Blausee.</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Lake Blausee in Interlaken is an enchanting oasis amidst lush forests. Surrounded by vibrant
                                foliage, it offers a picturesque setting straight out of a fairytale. The crystal-clear waters and
                                tranquil atmosphere create a serene experience. You can stroll around the lake, relax in cozy
                                seating areas, and explore hiking trails. It&#39;s a perfect destination for family outings too, with
                                picnic areas for delightful meals. Get ready to be captivated by the enchanting beauty of Lake
                                Blausee!
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



