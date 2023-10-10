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
                    <h2 className="d-flex justify-content-center justify-content-xl-start flex-wrap" style={{fontFamily: 'Montserrat', fontWeight: "700", marginBottom: "10px"}}>
                        WHY CHOOSE <span className="ms-2" style={{color: "#D68A2C"}}>GLOCAL TRAVEL</span>?
                    </h2>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex-1">
                    xxx
                </div>
                <div className="flex-1">
                    yyy
                </div>
            </div>
            <div className="container d-flex flex-column gap-4 col-12 col-xl-5 ps-xl-5 ms-xl-5">
            

            </div>

        </div>
    </section>
  )
}

