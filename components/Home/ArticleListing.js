import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const [data, setData] = useState([
        {
            image_path: '/images/article1.png',
            title: 'My Unforgettable 5 Days 4 Night Cruise Adventure',
            readmore_link: '/articles_1',
            description: "Embarking on the Resort World Cruise was a dream come true for me. From the moment I stepped foot on the magnificent Genting Dream, I knew I was in for an extraordinary journey. Are you guys excited about my unforgettable cruise adventure? Let me bring it to you!",
        },
        {
            image_path: '/images/article2.png',
            title: 'KOREA 5 DAYS 4 NIGHT (SEOUL)',
            readmore_link: '/articles_2',
            description: 'Let me share my experience of 5 days and 4 nights in South Korea. It was a group traveller where I could meet up with other people and make new friends. Since we are travelling by group all the arrangements have been prepared by our Travel Agency in advance, we just paid a sum of money, and they will arrange everything. Before we travel, our travel agency advises us of all the requirement that we need to meet and explain all the details thoroughly. All check-in process at KLIA has been helped by a crew from our Travel Agency, and everything has been taken care of. We just relax and enjoy, knowing that our trip will be in good hands. Furthermore, they are also sending a Tour Leader to assist us for the whole trip. Once we arrived in Korea, we were welcomed by our Tour  Guide with a smile and full of excitement.',
        },
        {
            image_path: '/images/article3.jpg',
            title: 'TOP 5 ACTIVITIES TO DO ONBOARD SPECTRUM OF THE SEAS',
            readmore_link: '/articles_3',
            description: 'On Spectrum of the Seas, we can experience a breathtaking adventure that is full of novelty features. From lavishly designed staterooms, avant-garde technology and amenities, to exquisite gourmet dining experiences, Spectrum of the Seas offers nonstop excitement and elegance with every voyage. Ready to planning your days at sea? Here are the top 5 activities to do on Spectrum of the Seas.',
        },
        {
            image_path: '/images/article4.jpg',
            title: 'SWISS SPLENDOR: UNFORGETTABLE ADVENTURES IN SWITZERLAND',
            readmore_link: '/articles_4',
            description: 'Embark on a journey through Switzerland and discover a world of unparalleled beauty and unforgettable adventures. From the scenic train ride to the exhilarating Grindewald tobbagon ride, and the awe-inspiring Mount Titlis, prepare to be captivated at every turn. Marvel at the majestic Staubach Falls, immerse yourself in the enchanting village of Lauterbrunnen and be mesmerized by the crystal-clear waters of Lake Blausee. Let’s get ready for an extraordinary Swiss adventure that will leave you in awe.',
        },
        {
            image_path: '/images/article5.jpg',
            title: 'SINGAPORE DAY TRIP',
            readmore_link: '/articles_5',
            description: 'Have you heard about Singapore? Let me share with you my unforgettable day trip to Singapore, where we embarked on an adventure filled with excitement, beauty, and cultural exploration. From iconic landmarks to stunning natural wonders, this journey definitely had it all!',
        },
        {
            image_path: '/images/article6.jpg',
            title: 'TURKIYE: A JOURNEY OF ADVENTURE, BEAUTY, AND CULTURE.',
            readmore_link: '/articles_6',
            description: 'I had the incredible opportunity to embark on a 9-day, 7-night adventure in Turkiye with the renowned travel agency, Kakijalan. The journey began with an exciting flight on Emirates Airlines, and I must admit, I had a whirlwind of emotions - a mix of fear, nervousness, and overwhelming excitement - as it was my very first time boarding a plane. As soon as I landed in Turkiye, I was warmly greeted by a friendly and knowledgeable tour guide, Neco, who would be my companion throughout the entire trip. Neco&#39;s expertise and passion for the country were evident from the start, and I knew I was in good hands.',
        },
    ]);
    return (
        <section>
            <div 
                className="container d-flex flex-column justify-content-center gx-0"
                style={{ backgroundImage: 'url("images/home_article_background_opacity.png")' }}
            >
                <div className="container-lg d-flex flex-column text-center pt-5 pb-4">
                    <h2 className="fw-bold w-fit m-auto" style={{color: "#000000", fontFamily: 'Montserrat'}}>
                        What’s New?
                        <hr className="relative top-[-0.75rem]  border-4 border-[#D68A2C] m-0 opacity-50" />
                    </h2>
                    <h1 className="fw-bold" style={{fontFamily: 'Montserrat', color:'#D68A2C' }}>Latest News & Articles</h1>
                </div>
                <div id="article_listing_div" className="container d-flex flex-wrap justify-content-center gap-3">
                    {
                        data.map((value,index)=>{
                            return  <div key={index} className="container d-flex flex-row flex-xxl-nowrap flex-wrap shadow bg-white p-4 col-lg-5 col-12 gap-xl-3 gap-2 m-0"             style={{borderRadius: "20px 0px"}}>
                                    <div className="col-12 col-xxl-6 d-flex">
                                        <img   className="img-fluid w-100" src={value.image_path} alt="article1" />
                                    </div>
                                    <div className="text_div d-flex flex-row content-start pt-xl-0 flex-wrap whitespace-normal max-h-[270px] overflow-hidden text-ellipsis">
                                        <h2 className="fw-bold pt-2" style={{fontFamily: 'Montserrat',fontSize: "25px"}}>{value.title}</h2>
                                        <Link className="text-decoration-none" style={{fontFamily: 'Poppins', width: "fit-content"}} href={value.readmore_link}><h6 className="fw-bold py-lg-2 py-0 mt-2 text-black">READ MORE</h6></Link>
                                        <h6 className="fw-normal lh-base" style={{fontFamily: 'Poppins'}}>{value.description}</h6>

                                    </div>
                                </div>
                        })
                    }
                </div>
                <button onClick={()=>location.href = '/articles'} className="text-white rounded-pill fw-bold py-3 px-4 align-self-center mt-4 mb-5" style={{backgroundColor: "#2158AA", fontFamily: 'Montserrat', border: "none", maxWidth: "300px"}}>VISIT OUR NEWSROOM</button>
            </div>
        </section>
    )
}
