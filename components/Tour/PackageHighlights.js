import Layout from '../Layout'
import React, {useState, useEffect } from 'react'
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function ImageGallery(props) {

  const [triImageData, setTriImageData] = useState([])
  const [dualImageData, setDualImageData] = useState([])
  const [quadImageData, setQuadImageData] = useState([])


  useEffect(() => {

    if (props.data && props.data.length > 0) {
      setDualImageData(populateData(2))
      setTriImageData(populateData(3))
      setQuadImageData(populateData(4))
    }

    function populateData(denominator) {
      let totalRounds = Math.floor(props.data.length/denominator)
      let modulus = props.data.length % denominator
      let tempArr = []

      for (let i = 0; i < totalRounds; i++) {
        let tempArr2 = []
        for (let o = 0; o < denominator; o++) {
          tempArr2.push(props.data[i+o])
        }
        tempArr.push(tempArr2)
      } 
      console.log("tempArr", tempArr)
      return tempArr
    }
  },[props.data])

  return (
    <div id="package-higlights">
      <div className="container py-5">
      <div className="container py-5">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="fw-bold text-center" style={{color: "#000", fontFamily: "Montserrat", letterSpacing: "0.15em", fontSize:"20px", fontWeight:"700"}}>
            HIGHLIGHTS
            <hr className="relative top-[-0.5rem]  border-4 border-[#D68A2C] m-0 opacity-50"></hr>
          </h2>
        </div>
        <h2 className="text-center section-title" style={{textAlign: 'center'}}>
          PACKAGE <span className="text-[#D68A2C]">HIGHLIGHTS</span>
        </h2>
      </div>

      {/* 4 pic slider */}
      <Carousel className="package-higlights-carousel-component four" showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true} showStatus={false} 
      renderArrowPrev={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-prev-btn">
            <img src="/icons/left_arrow.png" />
          </span>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-next-btn">
            <img src="/icons/right_arrow.png" />
          </span>
        )
      
      }>
        {quadImageData.map((packBy4,index)=>{
          return <div  className="flex" style={{display: 'flex !important'}} key={index}> <div style={{display: 'flex', justifyContent: 'center'}}>
            {packBy4.map((value,index2)=>{
            return (<div className="col-sm-3" key={index2}>
              <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
                <img  src={value.fileUrl} className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
                <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                  <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                    {value.title}
                  </h5>
                  <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                    {value.description}
                  </h5>
                </div>
              </div>
            </div>)
            })}
          </div></div>
        })}
      </Carousel>

      {/* 3 pic slider */}
        <Carousel className="package-higlights-carousel-component three" showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true} showStatus={false} 
        renderArrowPrev={(clickHandler, hasNext, labelNext) => 
          (
            <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-prev-btn">
                <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6074 42.9198L0.635254 21.4835L20.6074 0.046875L21.8735 1.40542L3.16677 21.4835L21.8735 41.5613L20.6074 42.9198Z" fill="#D1B882"></path>
                </svg>
            </span>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) => 
          (
            <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-next-btn">
              <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.39256 42.9198L21.3647 21.4835L1.39256 0.046875L0.126475 1.40542L18.8332 21.4835L0.126475 41.5613L1.39256 42.9198Z" fill="#D1B882"></path>
              </svg>
            </span>
          )
        
        }>
        {triImageData.map((packBy3,index)=>{
          return <div  className="flex" style={{display: 'flex !important'}} key={index}> <div style={{display: 'flex', justifyContent: 'center'}} >
            {packBy3.map((value,index2)=>{
            return (<div className="col-sm-3" key={index2}>
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src={value.fileUrl} className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  {value.title}
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  {value.description}
                </h5>
              </div>
            </div>
            </div>)
          })}
        </div></div>})}
      </Carousel>

      {/* 2 pic slider */}
      <Carousel className="package-higlights-carousel-component two" showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true} showStatus={false} 
      renderArrowPrev={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-prev-btn">
              <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6074 42.9198L0.635254 21.4835L20.6074 0.046875L21.8735 1.40542L3.16677 21.4835L21.8735 41.5613L20.6074 42.9198Z" fill="#D1B882"></path>
              </svg>
          </span>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-next-btn">
            <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.39256 42.9198L21.3647 21.4835L1.39256 0.046875L0.126475 1.40542L18.8332 21.4835L0.126475 41.5613L1.39256 42.9198Z" fill="#D1B882"></path>
            </svg>
          </span>
        )
      
      }>
        {dualImageData.map((packBy2,index)=>{
          return <div  className="flex" style={{display: 'flex !important'}} key={index}> <div style={{display: 'flex', justifyContent: 'center'}}>
            {packBy2.map((value,index2)=>{
            return (<div className="col-sm-3" key={index2}>
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src={value.fileUrl} className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  {value.title}
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  {value.description}
                </h5>
              </div>
            </div>
            </div>)
          })}
        </div></div>})}
      </Carousel>

      {/* if no data at all WEB*/}
      {(!props.data || props.data.length == 0) && <Carousel className="package-higlights-carousel-component four" showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true} showStatus={false} 
      renderArrowPrev={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-prev-btn">
            <img src="/icons/left_arrow.png" />
          </span>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-next-btn">
            <img src="/icons/right_arrow.png" />
          </span>
        )
      
      }>
        <div className="flex justify-evenly" style={{display: 'flex !important'}}> 
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <CarouselCard image="/images/cruiseDetails3.png" title="title1" description="description1" />
            <CarouselCard image="/images/cruiseDetails6.png" title="title1" description="description1" />
            <CarouselCard image="/images/cruiseDetails7.png" title="title1" description="description1" />
          </div>
        </div>
        <div className="flex justify-evenly" style={{display: 'flex !important'}}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <CarouselCard image="/images/cruiseDetails3.png" title="title1" description="description1" />
            <CarouselCard image="/images/cruiseDetails6.png" title="title1" description="description1" />
            <CarouselCard image="/images/cruiseDetails7.png" title="title1" description="description1" />
          </div>
        </div>
      </Carousel>}

      {/* if no data at all MOBILE*/}
      {/* {(!props.data || props.data.length == 0) && <Carousel className="package-higlights-carousel-component two" showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true} showStatus={false} 
      renderArrowPrev={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-prev-btn">
              <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6074 42.9198L0.635254 21.4835L20.6074 0.046875L21.8735 1.40542L3.16677 21.4835L21.8735 41.5613L20.6074 42.9198Z" fill="#D1B882"></path>
              </svg>
          </span>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) => 
        (
          <span aria-hidden="true" onClick={clickHandler} className="carousel-btn carousel-next-btn">
            <svg width="21" height="42" viewBox="0 0 22 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.39256 42.9198L21.3647 21.4835L1.39256 0.046875L0.126475 1.40542L18.8332 21.4835L0.126475 41.5613L1.39256 42.9198Z" fill="#D1B882"></path>
            </svg>
          </span>
        )
      
      }>
        <div  className="flex" style={{display: 'flex !important'}}> <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img src="/images/cruiseDetails3.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Main Pool Deck
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Stay Cool During Swimming
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src="/images/cruiseDetails6.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Hot Pot
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Outdoor hot pot with scenic ocean views
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src="/images/cruiseDetails7.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Umi Uma Teppanyaki
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Grand tables for grilling action
                </h5>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div  className="flex" style={{display: 'flex !important'}}> <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img src="/images/cruiseDetails3.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Main Pool Deck
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Stay Cool During Swimming
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src="/images/cruiseDetails6.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Hot Pot
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Outdoor hot pot with scenic ocean views
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3" >
            <div className="card" style={{width: 'auto', borderRadius: '30px 0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
              <img  src="/images/cruiseDetails7.png" className="card-img-top" style={{borderTopLeftRadius: '30px'}} alt="..." />
              <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
                <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
                  Umi Uma Teppanyaki
                </h5>
                <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
                  Grand tables for grilling action
                </h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Carousel>} */}

      </div>
    </div>

    )
}


function CarouselCard({ image, title, description }) {
  return (
    <div className="col-sm-3" >
      <div className="card border-none rounded-t" style={{width: 'auto', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', height: '336px'}}>
        <img  src={image} className="card-img-top"  alt="..." />
        <div className="card-body" style={{paddingTop: '25px', paddingBottom: '50px', paddingLeft: '30px'}}>
          <h5 className="card-title" style={{fontWeight: 700, fontFamily: 'Montserrat', paddingBottom: '10px'}}>
            {title}
          </h5>
          <h5 className="card-subtitle" style={{fontSize: '16px', fontWeight: 400, fontFamily: 'Montserrat'}}>
            {description}
          </h5>
        </div>
      </div>
    </div>)
}