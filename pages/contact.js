import Layout from '../components/Layout'
import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {

    const [data, setData] = useState([
        {
            id: 1,
            image_path: "/images/contact1.jpg",
            name: 'IDA',
            role: "Sales Support",
            tel: "+601135108412",
            email: "ida@kakijalan.com.my"
        },
        {
            id: 2,
            image_path: "/images/contact2.jpg",
            name: 'ZIZA',
            role: "Sales Support (Corporate)",
            tel: "+601135178423",
            email: "ziza@kakijalan.com.my"
        },
        {
            id: 3,
            image_path: "/images/contact3.jpg",
            name: 'MASYITAH',
            role: "Sales Support",
            tel: "+601155548280",
            email: "masyitah@kakijalan.com.my"
        },
        {
            id: 4,
            image_path: "/images/contact4.jpg",
            name: 'ALYA',
            role: "Sales Support (Agency Sales)",
            tel: "+60178812782",
            email: "alya@kakijalan.com.my "
        },
    ])

  return (
    <Layout>
    <div className="contact-page">
        <div className="overflow-hidden">
            <div
                id="banner"
                className="bg-image d-flex justify-content-center align-items-start"
                style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "15px solid #b32129"
                }}
            >
                <div
                id="inner_banner_div"
                className="position-relative bg-transparent container px-4 d-flex flex-column gap-4"
                >
                <div className="d-flex align-items-center flex-column">
                    <h1
                    className="text-white fw-bold"
                    style={{
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        fontFamily: '"Montserrat"'
                    }}
                    >
                    CONTACT US
                    </h1>
                </div>
                <div className="row flex-column flex-xl-row justify-content-center gap-3">
                    <div
                    id="month_selection_div"
                    className="d-flex justify-content-between position-relative col-sm col-xl-2"
                    />
                    <div
                    id="destination_selection_div"
                    className="d-flex justify-content-between position-relative col-sm col-xl-2"
                    />
                    <div
                    id="price_selection_div"
                    className="d-flex justify-content-between position-relative col-sm col-xl-2"
                    style={{ minWidth: "max-content" }}
                    />
                </div>
                </div>
            </div>
            <div
                className="container mt-n1 d-flex justify-content-center"
                id="message_div"
            >
                <div className="rounded-4 shadow-lg bg-white d-flex flex-column flex-xl-row-reverse col-12">
                <form className="p-4 p-xl-5 col-12 col-xl-8">
                    <div className="row gx-2 gy-2">
                    <h5
                        className="text-center text-xl-start fw-bold mt-3 col-12"
                        style={{ fontFamily: '"Montserrat"' }}
                    >
                        DROP US A MESSAGE
                    </h5>
                    <div className="col-12 col-xl-6">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                        First Name <span style={{ color: "#ea242d" }}>*</span>
                        </p>
                        <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="fname"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                        Surname <span style={{ color: "#ea242d" }}>*</span>
                        </p>
                        <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="sname"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                        Contact Name <span style={{ color: "#ea242d" }}>*</span>
                        </p>
                        <input
                        type="tel"
                        className="form-control"
                        placeholder=""
                        id="contact"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                        Email <span style={{ color: "#ea242d" }}>*</span>
                        </p>
                        <input
                        type="email"
                        className="form-control"
                        placeholder=""
                        id="email"
                        />
                    </div>
                    <div className="col-12">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                        Message
                        </p>
                        <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-12 col-xl-3 btn text-white fw-bold rounded-5 mt-4 mt-xl-5"
                        style={{ backgroundColor: "#ea242d", fontFamily: '"Montserrat"' }}
                    >
                        SUBMIT
                    </button>
                    </div>
                </form>
                <div
                    id="message_desc_div"
                    className="d-flex flex-column gap-4 p-5 col-12 col-xl-4 justify-content-xl-center"
                    style={{ backgroundColor: "#b8b09d" }}
                >
                    <div className="d-flex flex-row gap-4">
                    <img 
                        src="/icons/phone.png"
                        alt="phone"
                        className="mt-2 contact-icon"
                    />
                    <div className="d-flex flex-column flex-wrap">
                        <p
                        className="fw-bold mb-2"
                        style={{
                            color: "#e8e2d6",
                            fontFamily: '"Montserrat"',
                            letterSpacing: "0.15em"
                        }}
                        >
                        CALL US
                        </p>
                        <Link 
                        href="tel:+60360960384"
                        className="text-decoration-none text-white"
                        >
                        <p
                            className="text-white fw-bold m-0"
                            style={{ fontFamily: 'Poppins', letterSpacing: 1 }}
                        >
                            +60 3 6096 0384
                        </p>
                        </Link>
                    </div>
                    </div>
                    <div className="d-flex flex-row gap-4">
                    <img 
                        src="/icons/email.png"
                        alt="email"
                        className="mt-2 contact-icon"
                    />
                    <div className="d-flex flex-column flex-wrap">
                        <p
                        className="fw-bold mb-2"
                        style={{
                            color: "#e8e2d6",
                            fontFamily: '"Montserrat"',
                            letterSpacing: "0.15em"
                        }}
                        >
                        EMAIL US
                        </p>
                        <Link 
                        href="mailto:support@kakijalan.com.my"
                        className="text-decoration-none text-white"
                        >
                        <p
                            className="text-white fw-bold m-0"
                            style={{
                            fontFamily: 'Poppins',
                            letterSpacing: 1,
                            overflowWrap: "anywhere"
                            }}
                        >
                            support@kakijalan.com.my
                        </p>
                        </Link>
                    </div>
                    </div>
                    <div className="d-flex flex-row gap-4">
                    <img 
                        src="/icons/location.png"
                        alt="location"
                        className="mt-2 contact-icon"
                    />
                    <div className="d-flex flex-column flex-wrap">
                        <p
                        className="fw-bold mb-2"
                        style={{
                            color: "#e8e2d6",
                            fontFamily: '"Montserrat"',
                            letterSpacing: "0.15em"
                        }}
                        >
                        OUR LOCATION
                        </p>
                        <p
                        className="text-white fw-bold m-0"
                        style={{ fontFamily: 'Poppins', letterSpacing: "0.5px" }}
                        >
                        29-1, JALAN ESERINA AA U16/AA ELMINA, SEKSYEN U16 40160 SHAH ALAM
                        SELANGOR
                        </p>
                    </div>
                    </div>
                    <div className="d-flex flex-row gap-4">
                    <Link 
                        href="https://www.facebook.com"
                        style={{ width: 30 }}
                        className="d-flex justify-content-center"
                    >
                        <img  src="/icons/facebook_white.png" alt="facebook" />
                    </Link>
                    <Link href="https://www.instagram.com">
                        <img  src="/icons/instagram_white.png" alt="instagram" />
                    </Link>
                    <Link href="https://www.youtube.com">
                        <img  src="/icons/youtube_white.png" alt="youtube" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div
                id="contact_pic_div"
                className="container d-flex flex-row flex-wrap justify-content-center justify-content-xl-between gap-5 my-5 pb-5">
                    {
                        data.map((value,index)=>{
                            return (
                                <div className="d-flex flex-column justify-content-center align-items-center gap-2 mt-5" key={index}>
                                    <img  src={value.image_path} width="200px" style={{borderTopLeftRadius: '1.5rem', backgroundSize: 'cover'}} alt="Article Image" />
                                    <p className="m-0 fw-bold" style={{fontFamily: '"Montserrat"'}}>{value.name}</p>
                                    <div className="text-center" style={{fontFamily: 'Poppins'}}>
                                        <p className="m-0 fst-italic" style={{color: '#A0A0A0'}}>{value.role}</p>
                                        <p className="m-0 fw-bold" style={{color: '#B32129'}}>{value.tel}</p>
                                        <Link href="mailto:${e.email}" className="m-0 text-decoration-none" style={{color: '#B32129'}}>{value.email}</Link>
                                    </div>
                                    <Link className="d-flex flex-row justify-content-center align-items-center gap-2 text-decoration-none" href={`https://wa.me/${value.tel.replace(/\D/g, "")}?text=Hi,%20this%20is%20from%20KakiJalan" style="cursor: pointer;`}>
                                        <img src="/icons/whatsapp.png" width="50px" alt="whatsapp" />
                                        <p className="m-0 fw-bold" style={{fontFamily: 'Poppins', color: '#A0A0A0'}}>Whatsapp</p>
                                    </Link>
                                </div>
                            )
                        })
                    }

            </div>
            


        </div>

    </div>
    </Layout>
  )
}
