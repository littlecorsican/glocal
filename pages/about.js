import Layout from '../components/Layout'
import Image from 'next/image';


export default function Contact() {
  return (
    <Layout>
    <div className="about-page">
      <div className="overflow-hidden">
        <div id="banner" className="mb-5 bg-image d-flex justify-content-center align-items-start" style={{backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
            <div className="d-flex align-items-center flex-column">
              <h1 className="text-white fw-bold" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>ABOUT GLOCAL TRAVEL</h1>
            </div>
            <div className="row flex-column flex-xl-row justify-content-center gap-3">
              <div id="month_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2" />
              <div id="destination_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2" />
              <div id="price_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2" style={{minWidth: 'max-content'}} />
            </div>
          </div>
        </div>
        {/* OUR STORY */}
        <div className="container pt-3 pt-xl-5">
          <div className="col-12 col-xl-4 p-3 p-xl-0" id="our_story_text_div">
            <h6 className="text-start fw-bold w-fit" style={{color: '#000', fontFamily: '"Montserrat"', letterSpacing: '0.15em'}}>
              OUR HISTORY
              <hr className="relative top-[-0.25rem]  border-4 border-[#D68A2C] m-0 opacity-50" />
            </h6>
            <h5 className="fw-bold" style={{fontFamily: '"Montserrat"'}}>INSERT TEXT ABOUT COMPANY</h5>
            <p style={{fontFamily: '"Poppins"'}}>
              INSERT TEXT ABOUT COMPANY
            </p>
          </div>
          <div className="col-12 col-xl-12 p-0 d-flex justify-content-end">
            <img  className="img-fluid" src="/images/about_story.png" />
          </div>
        </div>
        {/* Full-Service Tourism Agency */}
        <div id="agency_div" className="bg-image text-white d-flex flex-column justify-content-center align-items-center gap-0 gap-xl-3 position-relative" style={{backgroundSize: 'cover', height: '600px', backgroundPosition: 'center', marginTop: '-7px', zIndex: 1}}>
          <h2 className="fw-bold mb-3 text-center px-3" style={{fontFamily: '"Montserrat"'}}>Full-Service Tourism Agency</h2>
          <p className="col-11 col-sm-10 col-xl-8 text-center" style={{fontFamily: '"Poppins"'}}>
            INSERT TEXT ABOUT COMPANY
          </p>
          <button onClick={()=>location.href='/tour'} className="btn text-white rounded-5 px-5 py-2 fw-bold" style={{backgroundColor: '#D68A2C', fontFamily: '"Montserrat"'}}>START SEARCH</button>
        </div>
        {/* Planning */}
        <div id="planning_div" className="bg-image d-flex flex-column justify-content-center align-items-center gap-0 gap-xl-3 position-relative" style={{backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-7px', zIndex: 1}}>
          <h5 className="fw-bold mb-3 text-center px-3" style={{fontFamily: '"Montserrat"'}}>
            PLANNING
            <hr className="relative top-[-0.50rem]  border-4 border-[#D68A2C] m-0 opacity-50" />
          </h5>
          <h2 className="fw-bold mb-3 text-center px-3" style={{fontFamily: '"Montserrat"'}}>PLANNING YOUR NEXT UMRAH & HAJI TRIP?</h2>
          <p className="col-11 col-sm-10 col-xl-8 text-center" style={{fontFamily: '"Poppins"'}}>
            We are certified and specialize in everything within and out of Malaysia, including Umrah and Haji. We take care of all the documentation needed for the trip such as vaccination and Visa. We offer all-in packages for you to choose from.
          </p>
          <div className="col-12 col-xl-12 m-0 my-xl-5 mx-16">
            <video style={{width: '100%'}} className="embed-responsive-item rounded-xl" controls>
              <source src="/videos/sampleVideo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='text-center'>
            <button onClick={()=>location.href='/tour'} className="btn text-white rounded-5 px-5 py-2 fw-bold" style={{backgroundColor: '#2158AA', fontFamily: '"Montserrat"'}}>START SEARCH</button>
          </div>
        </div>
        {/* <div id="planning_div" className="d-flex flex-row flex-wrap justify-content-between py-xl-5">
          <div className="col-12 col-xl-8 m-0 my-xl-5">
            <video style={{width: '100%'}} className="embed-responsive-item" controls>
              <source src="/videos/sampleVideo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="d-flex justify-content-center" style={{flex: 1}}>
            <div className="col-12 col-xl-7 p-0 d-flex flex-column justify-content-center py-5 px-5 px-xl-0 gap-1 gap-xl-3">
              <h5 className="fw-bold" style={{fontFamily: '"Montserrat"'}}>PLANNING YOUR NEXT <span style={{color: '#ea242d'}}>UMRAH &amp; HAJI</span> TRIP?</h5>
              <p style={{fontFamily: '"Poppins"'}}>We are certified and specialize in everything within and out of Malaysia, including Umrah and Haji. We take care of all the documentation needed for the trip such as vaccination and Visa. We offer all-in packages for you to choose from.</p>
              <button onClick={()=>location.href='/umrah'} className="btn text-white rounded-5 px-2 px-xl-4 py-2 fw-bold" style={{backgroundColor: '#ea242d', fontFamily: '"Montserrat"', maxWidth: '230px'}}>BROWSE PACKAGES</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </Layout>
  )
}
