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
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>KOREA 5 DAYS 4 NIGHT (SEOUL)</h1>
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
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                Let me share my experience of 5 days and 4 nights in South Korea. It was a group traveller where I
                                could meet up with other people and make new friends. Since we are travelling by group all the
                                arrangements have been prepared by our Travel Agency in advance, we just paid a sum of money,
                                and they will arrange everything. Before we travel, our travel agency advises us of all the
                                requirement that we need to meet and explain all the details thoroughly. All check-in process at KLIA
                                has been helped by a crew from our Travel Agency, and everything has been taken care of. We just
                                relax and enjoy, knowing that our trip will be in good hands. Furthermore, they are also sending a
                                Tour Leader to assist us for the whole trip. Once we arrived in Korea, we were welcomed by our Tour
                                Guide with a smile and full of excitement.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Nami Island</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Now the journey begins, we stopped first to eat before being taken to Nami Island for our first visit.
                                To get to Nami Island we must take a ferry, but there is also another way to use that is Flying Fox,
                                because we are in a group taking a ferry is the most suitable option. The ferry provided is
                                comfortable and has two sections, indoor and outdoor it is suitable for those who like to take videos
                                and pictures. As soon as we arrived at Nami Island, we were fascinated by the stunning scenery, as if
                                we were in the Winter Sonata series which is synonymous with Nami Island. We had a cup of coffee
                                while enjoying the view. After a few hours, we moved to the next destination which is the Ski Resort.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Ski Resort</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Before we arrived at the ski resort we stopped for a while at the rental shop to change into suitable
                                clothes. Keep in mind these rental clothes are not included in the package. At the ski resort, if you
                                want to enjoy play in the snow, we are required to change into suitable clothes otherwise, we are
                                not allowed to enter the snowy area. An interesting experience since Malaysia does not have this
                                kind of weather, we enjoyed it and took the opportunity to ride the gondola until the top. After
                                playing in the snow, we proceeded to the hotel and along the way we stopped for dinner. It is a
                                Korean concept and suits all our taste buds, and interesting to try. Now it&#39;s time for us to move to
                                the hotel to freshen up and rest to explore more tomorrow. The hotel is beautiful, comfortable and
                                has all the necessary amenities.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Lotte</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                The new day just started, after we had breakfast at the hotel. We will spend a day at Lotte. Here
                                there are many activities that we can do between shopping (Lotte Duty-Free), There are many items
                                that we can find such as designer handbags, clothes, cosmetics, perfumes, and others. After
                                shopping, we moved directly to lotte world theme park, the excitement started, because it&#39;s like
                                Disneyland. There are a lot of indoor and outdoor games, very attractive especially for kids, no
                                wonder we managed to spend one day here. For lunch we already packed before, that we can enjoy
                                at Lotte Theme Park. After enjoying the day, along the way to the hotel. We grabbed dinner and
                                back to the hotel to freshen up and rest.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Gyeong Bok Palace &amp; National Folk   Museum</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Now exciting new day begins, today we will visit the historic place (Gyeong Bok Palace &amp; National
                                Folk Museum) “Built in 1395, Gyeongbokgung Palace is commonly referred to as the Northern Palace because its
                                location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and
                                Gyeonghuigung (Western Palace). Gyeongbokgung Palace is arguably the most beautiful, and remains the largest
                                of all five palaces. The premises were once destroyed by fire during the Imjin War (1592-1598). However, all of the
                                palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong
                                (1852-1919). Remarkably, the most representative edifices of the Joseon dynasty, Gyeonghoeru Pavilion and the
                                pond around Hyangwonjeong Pavilion have remained relatively intact. The raised dias and stone markers of
                                Geunjeongjeon showcase the representative art style of their time.The National Palace Museum of Korea is located
                                outside of Heungnyemun Gate, and the National Folk Museum is located on the eastern side of Hyangwonjeong
                                Pavillion.” The most exciting is we can wear a hanbok while exploring the palace.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Itaewon Mosque &amp; Itaewon Street</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Feeling proud when there are Mosque in the middle of Seoul City. We take our time to scroll the
                                mosque area. The Seoul Central Mosque was established to be a place to worship for Muslims in
                                Korea as well as to educate the larger public about Islam and Islamic cultures. Outside Seoul&#39;s
                                central Sungwon, there are many shops that Muslims and the general public can conveniently visit,
                                consisting of halal restaurants, Islamic books and halal supermarkets.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Ginseng Center, Red Pine Tree Shop, Myeondong Market &amp; Namdaemun Market</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Here is the place we look forward to, where we spend most of our time shopping and looking for
                                souvenirs to bring back to Malaysia. Myeongdong is Korea&#39;s famous shopping and fashion district.
                                Shoppers can enjoy total shopping and dining experiences at the pedestrian-friendly (/car-free)
                                zone in Myeongdong. Many local, international brands and department stores lined the streets and
                                alleys, selling everything from cosmetics, clothes, shoes to accessories. Namdaemun Market is the largest
                                traditional market in Korea with shops selling various goods. All products are sold at affordable prices and the stores in
                                this area also function as wholesale markets. Most of the goods are made directly by the storeowners. Namdaemun
                                Market sells a variety of clothes, glasses, kitchenware, toys, mountain gear, fishing equipment, stationery, fine arts,
                                accessories, hats, carpets, flowers, ginseng, and imported goods.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Seaweed museum+ hanbok experience+ kimchi</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                Visit the process of making the seaweed, under the guidance of a special person, you can make the
                                seaweed yourself, enjoy the fun of making the kimchi, and experience the charm of Korean seaweed
                                firsthand. Subsequently arranged the traditional Korean wedding dress experience, change into
                                ancient traditional clothes, in the specially made Hanok scene, let you take a random shot, leaving
                                the most beautiful memories.
                            </h6>
                            <h2 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}} >Starfield Library</h2>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}} >
                                The most popular instagrammble place that we visit is Starfield Library. Located in the center of
                                COEX Mall, Starfield Library is an open public space where anyone can freely come to sit down, take
                                a break, and immerse themselves in books along with other bibliophiles. A wide selection of books in
                                various genres such as humanities, economics, hobbies, etc. are readily available. All these qualities
                                set Starfield Library apart from other ordinary libraries. In addition, a plethora of events take place
                                here such as meeting with authors, book talks, poetry reading, lectures, book concerts, and more.
                            </h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



