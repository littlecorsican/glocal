import Layout from '../components/Layout'
import Image from 'next/image';


export default function Contact() {
  return (
    <Layout>
    <div className="about-page">
      <div className="overflow-hidden">
        <div id="banner" className="mb-5 bg-image d-flex justify-content-center align-items-start" style={{backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '15px solid #b32129'}}>
          <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
            <div className="d-flex align-items-center flex-column">
              <h1 className="text-white fw-bold" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>ABOUT KAKI JALAN</h1>
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
            <h6 className="text-start fw-bold" style={{color: '#b8b09d', fontFamily: '"Montserrat"', letterSpacing: '0.15em'}}>OUR STORY</h6>
            <h5 className="fw-bold" style={{fontFamily: '"Montserrat"'}}>Cahaya Nur Holidays (M) Sdn Bhd </h5>
            <p style={{fontFamily: '"Poppins"'}}>
              Formerly known as KAKIJALAN, has been licensed by the Ministry of Tourism, Art, and Culture (MOTAC) as a travel agency since its establishment on March 14, 2018. We are members of both the Malaysian Association of Tour and Travel Agents (MATTA) and the Malaysia Inbound Tourism Association (MITA), and registered as a Travel Industry Designator Service (TIDS) by the International Air Transport Association (IATA).
              Our main business focuses on cruise services, as we have been appointed as a Preferred Sales Agent (PSA) for Resorts World Cruises (RWC). We actively sell our series packages to Europe, domestic, and Asian destinations. Our company is licensed by the Ministry of Tourism, Art, and Culture (MOTAC) for inbound, outbound, ticketing, and cruise reservation services.
              In addition to our cruise services, we also specialize in Meetings, Incentives, Conferences, and Exhibitions (MICE) for corporate and government clients.
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
            Kaki Jalan, also known as Cahaya Nur Holidays (M) Sdn Bhd, was established in 2018, and started becoming active in the tourism industry in that same year. We are also registered and licensed with the Ministry of Tourism Malaysia to carry out tourism activities and also photography. We are
            also a member of the Tourism Agents &amp; Photography Association (MATTA). We pride ourselves in being listed as one of the Tourism Malaysia agencies to attend events, exhibitions, and seminar organized by them.
          </p>
          <button onClick={()=>location.href='/tour'} className="btn text-white rounded-5 px-5 py-2 fw-bold" style={{backgroundColor: '#ea242d', fontFamily: '"Montserrat"'}}>START SEARCH</button>
        </div>
        {/* Planning */}
        <div id="planning_div" className="d-flex flex-row flex-wrap justify-content-between py-xl-5">
          {/* <div className="col-12 col-xl-8 m-0 my-xl-5">
            <video style={{width: '100%'}} className="embed-responsive-item" controls>
              <source src="/videos/sampleVideo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          {/* <div className="d-flex justify-content-center" style={{flex: 1}}>
            <div className="col-12 col-xl-7 p-0 d-flex flex-column justify-content-center py-5 px-5 px-xl-0 gap-1 gap-xl-3">
              <h5 className="fw-bold" style={{fontFamily: '"Montserrat"'}}>PLANNING YOUR NEXT <span style={{color: '#ea242d'}}>UMRAH &amp; HAJI</span> TRIP?</h5>
              <p style={{fontFamily: '"Poppins"'}}>We are certified and specialize in everything within and out of Malaysia, including Umrah and Haji. We take care of all the documentation needed for the trip such as vaccination and Visa. We offer all-in packages for you to choose from.</p>
              <button onClick={()=>location.href='/umrah'} className="btn text-white rounded-5 px-2 px-xl-4 py-2 fw-bold" style={{backgroundColor: '#ea242d', fontFamily: '"Montserrat"', maxWidth: '230px'}}>BROWSE PACKAGES</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </Layout>
  )
}
