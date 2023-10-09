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
                                    Turkiye: A Journey of Adventure, Beauty, and Culture.
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
                                I had the incredible opportunity to embark on a 9-day, 7-night adventure in Turkiye with the
                                renowned travel agency, Kakijalan. The journey began with an exciting flight on Emirates Airlines,
                                and I must admit, I had a whirlwind of emotions - a mix of fear, nervousness, and overwhelming
                                excitement - as it was my very first time boarding a plane. As soon as I landed in Turkiye, I was
                                warmly greeted by a friendly and knowledgeable tour guide, Neco, who would be my companion
                                throughout the entire trip. Neco&#39;s expertise and passion for the country were evident from the start,
                                and I knew I was in good hands.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >

                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Before heading to Bolu, we took some time to soak in the vibrant atmosphere of Istanbul. And guess
                                what? Thanks to Kakijalan, we got to enjoy a free Bosphorus cruise! It was such a fantastic
                                experience sailing along the beautiful waters, taking in the stunning views of the city. Afterward, we
                                visited the enchanting Tulip Garden, a true paradise for flower lovers. The garden was absolutely
                                breathtaking, filled with colorful blooms that brought joy to our hearts. It was definitely a highlight
                                of our trip!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >
                                
                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Continuing the adventure in Turkiye, Cappadocia was an absolute dream! Taking a hot air balloon
                                ride offered breathtaking views of the unique rock formations, creating a truly magical experience.
                                The jeep safari was a thrilling way to explore the rugged landscapes and discover hidden gems. And
                                how cool is it that you got to try your hand at pottery-making and witness captivating carpet
                                demonstrations? It&#39;s these immersive experiences that make travel so special!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >

                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Next stop, Pamukkale! The mesmerizing Cotton Castle truly lives up to its name. The terraces of
                                white mineral-rich water are a sight to behold. Exploring the ancient city of Hierapolis was like
                                stepping back in time and discovering the rich history and fascinating ruins.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >
                            
                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                The Grand Bazaar is a shopaholic&#39;s paradise with its maze-like alleys filled with colorful stalls. You
                                can find everything from beautiful Turkish carpets and intricate ceramics to dazzling jewelry and
                                stylish clothing. It&#39;s a treasure trove of unique souvenirs and local crafts.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >

                            </h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                And don&#39;t forget about the Spice Bazaar! This aromatic market is a feast for the senses, with stalls
                                bursting with exotic spices, teas, and Turkish delights. You can immerse yourself in the vibrant colors
                                and fragrant aromas as you explore the array of culinary delights.
                            </h6>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                In conclusion, Turkiye is a country that should be on everyone&#39;s travel bucket list! From the vibrant
                                atmosphere of Istanbul to the magical landscapes of Cappadocia and the natural wonders of
                                Pamukkale, there&#39;s something for everyone. The warm hospitality, delicious cuisine, and the
                                abundance of unique experiences make Turkiye a truly unforgettable destination. Don&#39;t miss out on
                                the fun and adventure awaiting you in Turkiye!
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



