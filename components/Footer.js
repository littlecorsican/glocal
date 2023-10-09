import Image from 'next/image'
import Link from 'next/link';

// https://revnology.gitlab-page.revnology.com.my/kakijalan/index.html

export default function Footer() {
  return (
    <>
        <div
            className="footer-component mt-5 pt-5 pt-xl-4 d-flex justify-content-center align-items-center text-white flex-column"
            style={{ backgroundColor: "#152A4A" }}
            >
            <div className="container w-100 p-3 py-xl-5 row justify-content-between">
                <div className="col-12 col-xl-3 mb-4">
                <h5
                    className="fw-bold"
                    style={{ fontFamily: '"Montserrat"', letterSpacing: "0.15em" }}
                >
                    <img src="/images/glocaltravel2.png"  />
                </h5>
                <div className="mt-3">
                    <div className="text-decoration-none text-white tracking-widest">
                        <p style={{ fontFamily: 'Montserrat', fontSize:"20px", fontWeight:"700" }}>Glocal Travel</p>
                    </div>
                    <div>
                        Be the first to know our deals, news, updates, and inside scoop of tourism. If wanderlust is you, you wouldn’t want to miss it!
                    </div>
                    <form>
                        <div className="flex flex-row">
                            <input
                                type="email"
                                className="form-control mt-2 text-[#707D91] bg-transparent border-[#707D91]"
                                placeholder="Email Address"
                                id="join_us_email"
                                aria-label="YOUR EMAIL"
                                style={{ display:"flex" }}
                            />
                            <button
                                type="submit"
                                className="btn text-white fw-bold mt-2 rounded-2 relative left-[-8px]"
                                style={{ backgroundColor: "#D68A2C", fontFamily: '"Montserrat"' }}
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-row justify-between w-3/5 my-4">
                        <img src="images/footer_facebook.png" className="" />
                        <img src="images/footer_separator.png" className="" />
                        <img src="images/footer_linkedin.png" className="" />
                        <img src="images/footer_separator.png" className="" />
                        <img src="images/footer_twitter.png" className="" />
                        <img src="images/footer_separator.png" className="" />
                        <img src="images/footer_youtube.png" className="" />
                    </div>


                </div>
                </div>
                <div className="col-12 col-xl-3 mb-4">
                    <h5
                        className="fw-bold text-[#D68A2C]"
                        style={{ fontFamily: '"Montserrat"', letterSpacing: "0.15em" }}
                    >
                        REACH OUT
                        <img src="images/Line.png" className="my-4" />
                    </h5>
                    <div
                        className="d-flex flex-row gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        <img src="images/footer_location.png" className="w-[24px] h-[24px] mx-2" />
                        B2-3A & B2-5, Arc @ Ampang Ukay, Persiaran Ampang Ukay, Hulu Kelang, 68000 Ampang, Selangor.
                    </div>
                    <div
                        className="d-flex flex-row gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        <img src="images/footer_telephone.png" className="w-[24px] h-[24px] mx-2" />
                        011-1091 4828
                    </div>
                    <div
                        className="d-flex flex-row gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        <img src="images/footer_clock.png" className="w-[24px] h-[24px] mx-2" />
                        <p className="fs-6" style={{ fontFamily: 'Poppins' }}>
                            Monday-Friday: <span className="text-[#D68A2C]">9:00 – 18:00</span>
                        <br />
                            Saturday: CLOSED
                        <br />
                            Sunday: CLOSED
                        </p>
                    </div>
                </div>
                <div className="col-12 col-xl-2 mb-4">
                    <h5
                        className="fw-bold text-[#D68A2C]"
                        style={{ fontFamily: '"Montserrat"', letterSpacing: "0.15em" }}
                    >
                        Quick Links
                    </h5>
                    <img src="images/Line.png" className="my-4" />
                    <div
                        className="d-flex flex-column gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        Browse Tour
                    </div>
                    <div
                        className="d-flex flex-column gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        Browse Cruise
                    </div>
                    <div
                        className="d-flex flex-column gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        Umrah Packages
                    </div>
                    <div
                        className="d-flex flex-column gap-1 mt-3"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        Our Story
                    </div>

                </div>
            </div>
            <div className="w-100 py-4 m-0 bg-[#1C3760]" >
                <div
                className="container d-flex flex-column flex-xl-row justify-content-between flex-wrap"
                style={{ fontFamily: 'Poppins' }}
                >
                <p className="m-0 text-center">© 2023 Glocal Travel</p>
                <p className="m-0 text-center mt-2 mt-xl-0">Privacy Policy</p>
                </div>
            </div>
            </div>

    </>
  )
}
