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
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>My Unforgettable 5 Days 4 Night Cruise Adventure (Resort World Cruise)</h1>
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
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Introduction</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                Embarking on the Resort World Cruise was a dream come true for me. From the moment I stepped foot on the magnificent Genting Dream, I knew I was in for an extraordinary journey. Are you guys excited about my unforgettable cruise adventure? Let me bring it to you!
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Firstly, What Do We Have?</h2>
                            <div className="flex flex-col">
                                <img src="/images/article_sub1.jpg" className="w-48"  />
                            </div>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                We have a good-looking and well-mannered cabin crew
                                surrounded by world-class entertainment. After a tiring and long
                                day, I walked into my balcony stateroom cabin. I was
                                immediately captivated by the handsome ocean view. The clean
                                and spacious cabin balcony is the top A-list for me. Why? From
                                the bedroom to the bathroom, everything is top-notch.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Secondly, The Waiting Part Is The Endless Fun And Adventure Moments.</h2>
                            <div className="flex flex-row">
                                <img src="/images/article_sub2.jpg" className="w-48"  />
                                <img src="/images/article_sub3.jpg" className="w-48"  />
                            </div>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Everyone is excited about FREE! Whether it is free entertainment, free
                                gifts, or free activities, I&#39;m sure you are one of them. All of these
                                incredible activities were included for free, ensuring that there was
                                something for everyone to enjoy. There are waterslides, rock climbing
                                walls, futsal, and ping pong. So, there was never a dull moment. I thought
                                the activities would end there, but there were more exciting parts. GUESS
                                WHAT? The swimming pool was accompanied by a cool DJ, a cool song,
                                and a cool dance. Moreover, you can test your adrenaline junkies with
                                waterslides and jacuzzies.
                            </h6>
                            <div className="flex flex-row">
                                <img src="/images/article_sub4.jpg" className="w-48"  />
                            </div>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                            For outdoor lovers, you can also enjoy activities like rope courses, it&#39;s also for free. From the mesmerizing Infinite Show, a dance extravaganza reminiscent of America&#39;s Got Talent, to the engaging and hilarious Love Matters performance, every night was filled with excitement and wonder. It&#39;s really perfect for solo travel and family.   
                            </h6>
                            <div className="flex flex-row">
                                <img src="/images/article_sub5.jpg" className="w-48"  />
                            </div>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >A Foodie Delights In A Masterpiece.</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                The Lido restaurant will provide you with never-
                                ending appetite satisfaction from the dessert, main
                                menu, and, of course, Halal food. It&#39;s perfect for
                                Muslim travelers. The most mouthwatering is Asam
                                Pedas, cooked by an A-class chef. Every time you
                                want to fill an empty stomach, food is served at a
                                delightful buffet. It covers breakfast, lunch, and
                                dinner. In addition, they also have a snack bar for
                                you to spend your leisure time with friends and
                                family.
                            </h6>
                            <div className="flex flex-row">
                                <img src="/images/article_sub6.jpg" className="w-48"  />
                            </div>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Exploring Lion City,</h2>
                            <div className="flex flex-row">
                                <img src="/images/article_sub7.jpg" className="w-48"  />
                            </div>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                That sounds like a wonderful plan! When you dock at the Singapore
                                Marina Bay Port, you can explore amazing places like Merlion Park,
                                Arab Street, and even Changi Airport. These destinations offer
                                unique experiences and sights to discover. If you&#39;re up for it, you can
                                join a shore excursion to make the most of your time in Singapore.
                                Just remember to book the excursion once you&#39;re on board the ship.
                                Have a fantastic adventure!
                            </h6>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                In conclusion, travel with Resort World Cruise Genting is not just a journey to new places, it&#39;s a voyage of self-
                                discovery, cultural excitement, and lifelong memories. So, don&#39;t forget to book your adventure with us. Let&#39;s
                                start your adventure with us “KAKI JALAN”. See you onboard people!!!!!!
                            </h6>
                            <br/>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px' }} >
                                <p>Written Memories by</p>
                                <p>Nurul Zakirah 10/9/2023</p>
                            </h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



