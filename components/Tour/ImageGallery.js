import Layout from '../Layout'
import React, {useState, useEffect } from 'react'
import baguetteBox from 'baguettebox.js';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageGallery(props) {

    useEffect(() => {
      baguetteBox.run("#image-gallery", {
        buttons: true,
      });
    },[props])

  return (
        <div id="image-gallery">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div id="lightbox-gallery" className="d-lg-block" style={{position: 'relative'}}>
              {
                props.data && props.data.length > 0 && <Link href={props.data[0].fileUrl} className="lightbox" data-caption={props.data[0].title}>
                  <div id="hoverText" style={{width: '100%', height: '100%', position: 'absolute', zIndex: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40%', gap: '25px'}}>
                        <img  src="/icons/plus_white.png" width={50} />
                        <h1 style={{color: 'white', fontWeight: 700, fontSize: '30px'}}>See Facilities &amp; Amenities</h1>
                      </div> 
                    </div>
                  </div>
                </Link> 
              }
              {  // if no image data
                (props.data == null || props.data.length == 0) && <Link href="/images/caff37b0-1637-4c8f-a510-c39ecfb5dd42.jpeg" className="lightbox" data-caption="">
                  <div id="hoverText" style={{width: '100%', height: '100%', position: 'absolute', zIndex: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40%', gap: '25px'}}>
                        <img  src="/icons/plus_white.png" width={50} />
                        <h1 style={{color: 'white', fontWeight: 700, fontSize: '30px'}}>See Facilities &amp; Amenities</h1>
                      </div> 
                    </div>
                  </div>
                </Link> 
              }
              <div className="row g-2">
                <div className="col-8 max-h-[800px]">
                {
                  props.data && props.data.length > 0 && <Link href={props.data[0].fileUrl} className="lightbox" data-caption={props.data[0].title}>
                    <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src={props.data[0].fileUrl} alt="" />
                  </Link>
                }
                { // if no image data
                  (props.data == null || props.data.length == 0) && <Link href="/images/caff37b0-1637-4c8f-a510-c39ecfb5dd42.jpeg" className="lightbox" data-caption="">
                    <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src="/images/caff37b0-1637-4c8f-a510-c39ecfb5dd42.jpeg" alt="" />
                  </Link>
                }
                </div> 
                <div className="col-4 max-h-[800px] overflow-hidden">
                  <div className="row g-2">
                    {
                      props.data && props.data.length > 0 && props.data.map((value,index)=>{
                        if (index > 1) {
                          return <div className="col-12" key={index}>
                          <Link href={value.fileUrl} className="lightbox" data-caption={value.title}>
                            <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src={value.fileUrl} alt={value.title} />
                          </Link>
                        </div>
                        }
                      })
                    }     
                    { // if no image data
                      (props.data == null || props.data.length == 0) && <>
                        <div className="col-12">
                          <Link href="/images/tourListing1.png" className="lightbox" data-caption="">
                            <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src="/images/tourListing1.png" alt="" />
                          </Link>
                        </div>
                        <div className="col-12">
                        <Link href="/images/insta1.png" className="lightbox" data-caption="">
                          <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src="/images/insta1.png" alt="" />
                        </Link>
                      </div>
                      </>
                    }                  
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
    )
}
