import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <section>
        <div className="d-flex container-fluid flex-wrap justify-content-center bg-white gap-2 p-2">
            <div className="d-flex primary-gallery-box col-md-3 col-12 justify-content-end">
                <img  className="img-fluid " src="/images/home_1.png" alt="images1" />
            </div>
            <div className="secondary-gallery-box col-md-6 col-12 flex flex-row justify-around">
                <div className="d-flex col-6 gap-1 gap-md-2 flex flex-col justify-around">
                    <img  className="img-fluid mb-2 mr-2" src="/images/home_2.png" alt="images1" />
                    <img  className="img-fluid" src="/images/home_3.png" alt="images1" />
                </div>
                <div className="d-flex col-6 gap-1 gap-md-2 flex flex-col justify-around">
                    <img  className="img-fluid mb-2 mr-2" src="/images/home_4.png" alt="images1" />
                    <img  className="img-fluid pl-2" src="/images/home_5.png" alt="images1" />
                </div>
            </div>
        </div>
    </section>
  )
}

