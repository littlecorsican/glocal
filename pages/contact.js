import Layout from '../components/Layout'
import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {

    const [data, setData] = useState([
        {
            id: 1,
            image_path: "",
            name: 'xxxx',
            role: "Sales Support",
            tel: "+012345678",
            email: "demo@gmail.com"
        },
        {
            id: 2,
            image_path: "",
            name: 'yyyy',
            role: "Sales Support",
            tel: "1234567889",
            email: "demo@gmail.com"
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
                            placeholder="John"
                            id="fname"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <p className="fw-bold m-1" style={{ fontFamily: 'Poppins' }}>
                            Last Name <span style={{ color: "#ea242d" }}>*</span>
                        </p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Doe"
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
                            placeholder="0123456789"
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
                            placeholder="Email"
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
                            placeholder="Write Message"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-12 col-xl-3 btn text-white fw-bold rounded-3 mt-4 mt-xl-5"
                        style={{ backgroundColor: "#3470C9", fontFamily: '"Montserrat"' }}
                    >
                        SEND
                    </button>
                    </div>
                </form>
                <div
                    id="message_desc_div"
                    className="d-flex flex-column gap-4 p-5 col-12 col-xl-4 justify-content-xl-center"
                    style={{ backgroundColor: "#3470C9" }}
                >
                    <p
                        className="fw-bold mb-2"
                        style={{
                            color: "#fff",
                            fontFamily: '"Montserrat"',
                            letterSpacing: "0.20em"
                        }}
                    >
                        CONTACT INFORMATION
                    </p>
                    <div className="d-flex flex-row gap-4">
                        <img 
                            src="/icons/phone.png"
                            alt="phone"
                            className="mt-2 contact-icon"
                        />
                        <div className="d-flex flex-column flex-wrap">
                            <p
                                className="fw-normal mb-2"
                                style={{
                                    color: "#fff",
                                    fontFamily: '"Montserrat"',
                                    fontSize: "0.8rem"
                                }}
                            >
                                CALL US
                            </p>
                            <Link 
                                href="tel:+12345678"
                                className="text-decoration-none text-white"
                            >
                            <p
                                className="text-white fw-normal m-0"
                                style={{ fontFamily: 'Poppins', letterSpacing: 1 }}
                            >
                                +60 12345678
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
                                className="fw-normal mb-2"
                                style={{
                                    color: "#fff",
                                    fontFamily: '"Montserrat"',
                                    fontSize: "0.8rem"
                                }}
                            >
                                EMAIL US
                            </p>
                            <Link 
                                href="mailto:xxxx@yyyy.com.my"
                                className="text-decoration-none text-white"
                            >
                            <p
                                className="text-white fw-normal m-0"
                                style={{
                                    fontFamily: 'Poppins',
                                    letterSpacing: 1,
                                    overflowWrap: "anywhere"
                                }}
                            >
                                xxx@yyy.com.my
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
                            className="fw-normal mb-2"
                            style={{
                                color: "#fff",
                                fontFamily: '"Montserrat"',
                                fontSize: "0.8rem"
                            }}
                        >
                            OUR LOCATION
                        </p>
                        <p
                            className="text-white fw-normal m-0"
                            style={{ fontFamily: 'Poppins', letterSpacing: "0.5px" }}
                        >
                            INSERT ADDRESS HERE
                        </p>
                    </div>
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
                                <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-8 mt-5 shadow-lg shadow-cyan-500/50" key={index}>
                                    <img  src={value.image_path} width="200px" style={{borderTopLeftRadius: '1.5rem', backgroundSize: 'cover'}} alt="Article Image" />
                                    <Link 
                                        className="d-flex flex-row justify-content-center align-items-center gap-2 text-decoration-none relative top-[-50px] left-[70px]"
                                        href={`https://wa.me/${value.tel.replace(/\D/g, "")}?text=Hi,%20this%20is%20from%20KakiJalan" style="cursor: pointer;`}
                                    >
                                        <img src="/icons/whatsapp.png" width="25px" alt="whatsapp" />
                                    </Link>
                                    <p className="m-0 fw-bold" style={{fontFamily: '"Montserrat"'}}>{value.name}</p>
                                    <div className="text-center" style={{fontFamily: 'Poppins'}}>
                                        <p className="m-0 fst-italic" style={{color: '#A0A0A0'}}>{value.role}</p>
                                        <div className="mt-4 fw-bold" style={{color: '#000', fontSize:"0.85rem" }}>
                                            <div className="flex flex-row">
                                                <img src="icons/contact_phonecall.png" className="mr-2" />
                                                {value.tel}
                                            </div>
                                        </div>
                                        <Link href="mailto:${e.email}" className="m-0 text-decoration-none" style={{color: '#000', fontSize:"0.85rem"}}>
                                            <div className="flex flex-row">
                                                <img src="icons/contact_email.png"  className="mr-2" />
                                                {value.email}
                                            </div>
                                        </Link>
                                    </div>
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
