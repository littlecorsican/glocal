import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <section>
        <div className="bg-white">
            <div className="container py-5 w-100">
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <p className="text-center header-title" style={{fontFamily: 'Montserrat', fontWeight: "700", fontSize: "20px", color: "#000", letterSpacing: "0.15em"}}>
                            OUR PARTNERS
                            <hr className="relative top-[-1.75rem]  border-4 border-[#D68A2C]" />
                        </p>
                        
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

        <div className="bg-white d-flex flex-column flex-xl-row align-items-center pt-5 ps-xl-5 gap-3 gap-xl-0">
            <div className="container d-flex flex-column gap-4 col-12 col-xl-5 ps-xl-5 ms-xl-5">
            <h2 className="d-flex justify-content-center justify-content-xl-start flex-wrap" style={{fontFamily: 'Montserrat', fontWeight: "700", marginBottom: "10px"}}>WHY CHOOSE <span className="ms-2" style={{color: "#b32129"}}>KAKIJALAN</span>?</h2>

            <div className="contaier d-flex flex-column gap-3">
                <div className="d-flex flex-column">
                    <div className="d-flex gap-3 col-12">
                        <div className="col-2" style={{backgroundColor: "#d1b882", height: "34px", width: "34px", borderRadius: "50%"}}></div>
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold text-uppercase" style={{fontFamily: 'Montserrat'}}>MUSLIM-FRIENDLY</h5>
                                <h6 className="fw-normal" style={{fontFamily: 'Poppins'}}>Solat areas and halal cuisine are arranged and taken care off.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex gap-3 col-12">
                            <div className="col-2" style={{backgroundColor: "#b8b09d", height: "34px", width: "34px", borderRadius: "50%"}}></div>
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold text-uppercase"  style={{fontFamily: 'Montserrat'}}>Comfortable stay</h5>
                                <h6 className="fw-normal" style={{fontFamily: 'Poppins'}}>Our priority is comfort when it comes to arranging accommodation for your trip.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex gap-3 col-12">
                            <div className="col-2" style={{backgroundColor: "#e8e2d6", height: "34px", width: "34px", borderRadius: "50%"}}></div>
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold text-uppercase" style={{fontFamily: 'Montserrat'}}>Licensed Agency</h5>
                                <h6 className="fw-normal" style={{fontFamily: 'Montserrat'}}>We are registered with the Ministry of Tourism under the ID KPL9038.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex gap-3 col-12">
                            <div className="col-2" style={{backgroundColor: "#d1b882", height: "34px", width: "34px", borderRadius: "50%"}}></div>
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold text-uppercase" style={{fontFamily: 'Montserrat'}}>Experienced Tour Guides</h5>
                                <h6 className="fw-normal" style={{fontFamily: 'Montserrat'}}>We have friendly and familiar guides and drivers to make your stay pleasant.</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-none d-xl-block" style={{width: "54%"}}>
                    <button onClick={()=>location.href = "/about" } type="button" className="btn px-5 py-2 rounded-pill fw-bold text-white" style={{background: "#ea242d", fontFamily: 'Montserrat'}}>ABOUT US</button>
                </div>
            </div>

            <div className="d-flex justify-content-end col-12 col-xl-6">
                <img  className="img-fluid" src="/images/whyUs.png" />
            </div>
        </div>
    </section>
  )
}

