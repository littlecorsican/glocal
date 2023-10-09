import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react'
import Link from 'next/link';

// https://www.npmjs.com/package/react-responsive-carousel

export default function Footer() {

  const [data, setData] = useState([
    {
      url : "/tour",
      image : "/images/carousel.png"
    },
    {
      url : "/tour",
      image : "/images/carousel.png"
    },
    {
      url : "/tour",
      image : "/images/carousel.png"
    },
  ])

  return (
    <>
      <Carousel className="carousel-component" showThumbs={false} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} showStatus={false} renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { display: "inline-block", margin:"0px 5px", backgroundColor: "grey", position:"relative", top:"-75px" ,cursor: "pointer", height : "3px", width : "30px" };
        const style = isSelected
          ? { ...defStyle, backgroundColor : "#fff" }
          : { ...defStyle };
        return (
          <div
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >

          </div>
        );
      }} 
      renderArrowPrev={(clickHandler, hasNext, labelNext) => 
        (
          <button onClick={clickHandler} className="carousel-btn carousel-prev-btn">
            <span className="" aria-hidden="true"><img src="images/carousel_backbtn.png"/></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) => 
        (
          <button onClick={clickHandler} className="carousel-btn carousel-next-btn">
            <span className="" aria-hidden="true"><img src="images/carousel_nextbtn.png"/></span>
            <span className="visually-hidden">Next</span>
          </button>
        )
      
    }
      >
        {
          data.map((value,index)=>{
            return <div key={index}>
              <Link href={value.url} >
                <img   src={value.image} />
              </Link>
            </div>
          })
        }
      </Carousel>
    </>
  )
}


function Banner() {

  return(
    <div key={index}>
      <Link href={value.url} >
        <img   src={value.image} />
      </Link>
    </div>
  )

}