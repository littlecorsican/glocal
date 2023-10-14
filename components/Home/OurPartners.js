import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <section>
        <div className="bg-white">
            <div className="container py-5 w-100">
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2 className="text-center header-title" style={{fontFamily: 'Montserrat', fontWeight: "700", fontSize: "20px", color: "#000", letterSpacing: "0.15em"}}>
                            OUR PARTNERS
                            <hr className="relative top-[-0.5rem]  border-4 border-[#D68A2C] m-0 opacity-50"></hr>
                        </h2>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2 className="text-center section-title" style={{textAlign: "center", fontFamily: 'Montserrat', fontWeight: "700", fontSize: "30px", color:"#D68A2C"}}><span style={{color: "#000"}}>Friends We Have</span> Worked With</h2>
                    </div>
                </div>

                <div id="partners_div">
                    <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none">
                    <img  className="img-fluid" src="/images/partners-1.png" />
                        <img  className="img-fluid" src="/images/partners-1.png" />
                    </div>
                    <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none">
                    <img  className="img-fluid" src="/images/partners-2.png" />
                        <img  className="img-fluid" src="/images/partners-2.png" />
                    </div>

                    <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
                        <img  className="img-fluid" src="/images/partners-big.png" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container py-5 w-100">
            <div>
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
            <div className="flex justify-between responsive-flex">
                <div className="feature-item feature-item-mp flex-1 mr-2 min-w-[260px]">
                    <div className="flex">
                        <div className="flex-[4]">
                            <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>MUSLIM-FRIENDLY</h4>
                            <div style={{ fontFamily:'Poppins' }}>
                                Solat areas and halal cuisine are arranged and taken care off. 
                            </div>
                        </div>
                        <div className="flex-[1]">
                            <img src="images/features_icon_1.png" />
                        </div>
                    </div>
                    
                </div>
                <div className="feature-item feature-item-mp flex-1 ml-2 min-w-[260px]">
                    <div className="flex">
                        <div className="flex-[4]">
                            <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>COMFORTABLE STAY</h4>
                            <div style={{ fontFamily:'Poppins' }}>
                                Our priority is comfort when it comes to arranging accommodation for your trip.
                            </div>
                        </div>
                        <div className="flex-[1]">
                            <img src="images/features_icon_2.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex responsive-flex justify-between">
                <div className="feature-item feature-item-mp flex-[2] mr-2 min-w-[260px]">
                    <div className="flex">
                        <div className="flex-[4]">
                            <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>LICENSED AGENCY</h4>
                            <div style={{ fontFamily:'Poppins' }}>
                                We are registered with the Ministry of Tourism under the ID KPL9038.
                            </div>
                        </div>
                        <div className="flex-[1]">
                            <img src="images/features_icon_3.png" />
                        </div>
                    </div>
                    
                </div>
                <div className="feature-item feature-item-mp flex-[2] ml-2 min-w-[260px]">
                    <div className="flex">
                        <div className="flex-[4]">
                            <h4 style={{ fontFamily:"Montserrat", fontWeight:"600", color:"#2158AA" }}>EXPERIENCED TOUR GUIDES</h4>
                            <div style={{ fontFamily:'Poppins' }}>
                                We have friendly and familiar guides and drivers to make your stay pleasant.
                            </div>
                        </div>
                        <div className="flex-[1]">
                            <img src="images/features_icon_4.png" />
                        </div>
                    </div>
                </div>
                <div className="feature-item-mp flex-[1] ml-2">
                    <img src="images/glocaltravel.png" />
                    <button className="d-md-none d-block" style={{border: 'none', paddingLeft: '19px', paddingRight: '19px', paddingTop: '9.34px', paddingBottom: '9.34px', backgroundColor: '#ea242d', color: '#fff', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '12px', borderRadius: '100px'}}>GO TO HOMEPAGE</button>
                </div>
            </div>
            <div className="container d-flex flex-column gap-4 col-12 col-xl-5 ps-xl-5 ms-xl-5">
            

            </div>

        </div>
    </section>
  )
}

