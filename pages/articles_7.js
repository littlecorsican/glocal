import React, { useState } from 'react';
import Layout from '../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Footer() {

    const [data, setData] = useState([
        "/images/articles/article_7_1.jpg",
        "/images/articles/article_7_2.jpg",
        "/images/articles/article_7_3.jpg",
        "/images/articles/article_7_4.jpg",
        "/images/articles/article_7_5.jpg",
        "/images/articles/article_7_6.jpg",
        "/images/articles/article_7_7.jpg",
        "/images/articles/article_7_8.jpg",
        "/images/articles/article_7_9.jpg",
        "/images/articles/article_7_10.jpg",
    ])

    return (
        <Layout>
            <div className="articles-page overflow-hidden">
                <div className="container-fluid g-0 ">
                    <div id="banner" className="bg-image d-flex justify-content-center align-items-start" style={{backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '15px solid #b32129'}}>
                        <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                            <div className="d-flex align-items-center flex-column">
                                <h1 className="text-white fw-bold text-center" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>
                                    VISIT DUBAI
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
                        <div className="p-8">
                            <Carousel centerMode={true} dynamicHeight={true} swipeable={true} className="h-fit px-[30vw]">
                                {
                                    data.map((value, index)=>{
                                        return <div key={index}>
                                        <img src={value} className="max-h-[500px] " />
                                    </div>
                                    })
                                }
                            </Carousel>
                        </div>
                        <div>
                            <h4>An article by Nurizzati bt mohd rafienv</h4>
                        </div>
                        <div id="content_listing_div" className="text_content_div_2">
                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Syeikh Zayed Grand Mosque, Abu Dhabi</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                Most people would say Dubai is known for wealth, skyscrapers,
                                luxury shopping, glitzy nightlife, and white-clad Arabs driving
                                expensive cars on desert roads. Dubai is also known for being
                                a jet-set holiday destination. Let&#39;s visit Abu Dhabi together,
                                starting with the Sheikh Zayed Grand Mosque, which is in Abu
                                Dhabi. It takes me around two hours to go there from Dubai.
                                The tour guide was really helpful the entire time and shared
                                tales about Dubai&#39;s sights. As far as we are aware, guests to
                                that mosque are not permitted to wear shorts, transparent
                                clothing, short skirts, sleeveless shirts, swimwear, or beach
                                attire. They are really rigid about respecting the mosque. You&#39;ll
                                notice one-of-a-kind treasures while I go through the marbled
                                halls, such as gold-plated Swarovski chandeliers, the enormous
                                marble mosaic artwork in the courtyard, and reflection pools
                                that reflect some of the numerous columns with amethyst and
                                jasper embedded in them.
                            </h6>
                           
                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Dinner at Dhow Cruise,Dubai</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                The main attraction of Dubai is the opportunity to take a dhow
                                cruise aboard a traditional wooden boat, complete with a buffet
                                meal. Dhow cruises have a pretty distinctive shape that was
                                created using various lighting. It is referred to as the restaurant
                                that floats in Dubai&#39;s most scenic city. It provides freshly made,
                                5-star gourmet catering dishes. Dhow Cruise has two level .It is
                                a buffet restaurant that serves Arabic food along with desserts.
                                I&#39;ve tried everything, and it&#39;s all great. After enjoying dinner, we
                                went to the second floor to watch a belly dance performance by
                                the cabin crew as the dhow cruised around Dubai at night. We

                                had fun enjoying the fresh air. The best time of my life is now. I
                                hope to return soon with my family.
                            </h6>

                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Abra Taxi, Dubai</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                Throughout the day, an abra, which is Arabic for &quot;to cross,&quot;
                                travels between four stations along Dubai Creek every few
                                minutes. The Dhow boat journey will pass through old town
                                Dubai along the route. The weather is really hot at the moment,
                                therefore I advise you to cover up with a hat. The first route
                                runs from Bur Dubai Abra Station (west of the Textile Souk) to
                                Deira Old Souk Abra Station (near the Spice Souk). The
                                second, busier route runs continuously from Dubai Old Souk
                                Abra Station to Al Sabkha Abra Station, which is located
                                directly southwest of Baniyas Square.
                            </h6>

                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Dubai frame, Dubai</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                The Dubai Frame Observation Deck in Dubai, United Arab
                                Emirates are really amazing. We arrived at the top of the Dubai
                                Frame after taking an elevator up to a height of 150 meters.
                                There is a 100-meter-long transparent floor above where you
                                can see both the old and new Dubai.
                            </h6>

                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Evening Desert safari Dubai</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                The Evening Desert Safari is a must-do activity for adventurers
                                visiting Dubai. A comfortable round-trip transportation service
                                will pick you up from your hotel in a vehicle that meets your
                                demands and take you on an exploration of the Arabian Desert
                                in a 4WD vehicle. Through a thrilling sand boarding experience,
                                try to maintain equilibrium. After desert safari ride, we went to
                                camp for camel riding, dune bashing, and henna painting, BBQ
                                dinner with unlimited soft drinks, enjoy a Tandora show and
                                belly dance show under the stars
                            </h6>

                            <h4 className="fw-bold pt-3 pt-xl-5 text-break" style={{fontFamily: '"Montserrat"', fontSize: '30px'}}>Dubai Mall the Burj Khalifah,</h4>
                            <h6 style={{fontFamily: '"Poppins"', fontWeight: 400, lineHeight: '27px'}}>
                                The highest building in the world, is just next to the Dubai Mall,
                                the largest destination in the world for leisure, entertainment,
                                and shopping. With more than 1,200 retail establishments.
                                Dubai Aquarium &amp; Underwater Zoo, Dubai Mall Waterfall,
                                Dubai Dino, and Dubai Fountain are a few of the attractions.
                                However, if you want to see the Burj Khalifah, you must travel
                                to the door at the very end of the Dubai Mall, where you can
                                also admire the stunning structure of the Dubai Mall. The
                                fountain in front of the burj khalifah can be seen at night. The
                                building is very tall.
                            </h6>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



