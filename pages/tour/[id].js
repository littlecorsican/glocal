import Layout from '../../components/Layout'
import ImageGallery from '../../components/Tour/ImageGallery'
import PackageHiglights from '../../components/Tour/PackageHighlights'
import CMS from '../../components/CMS'
import Link from 'next/link';
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import api from 'api'

export default function Contact() {

  const [rJson, setRJson] = useState({})
  const [tourDepList, setTourDepList] = useState([])
  const [CMSHTML, setCMSHTML] = useState("")

  const  router = useRouter();
  // const  tourCode = router.query["tourCode"];
  const  id = router.query["id"];
  console.log(router.query)

  const tableTh = ["#", "Departure", "Price From" , "Airline", "Status"]
  const textToMonth = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12,
  }

  useEffect(() => {
    if(!router.isReady) return;

    //console.log("urlParams", tourCode, id)

    let url = `${api().tourpkgdetail}?idTourPkg=${id}`
    try {
      fetch(url)
      .then(rawResult => rawResult.json())
      .then(jsonData => {
          console.log(jsonData, "jsonData", addFormattedDate(jsonData.tourPkg.tourDepList))
          setTourDepList(addFormattedDate(jsonData.tourPkg.tourDepList))
          setRJson(jsonData.tourPkg)
          let cmsArr = jsonData?.tourPkg?.tourPkgDailyItinerary?.dailyItineraryItemEngList
          let cmsCombine = ""
          if (cmsArr) {
            cmsCombine = `<div style="font-family: Poppins">`
            for (let i =0 ; i < cmsArr.length ; i++) {
              console.log(cmsArr[i])
              cmsCombine += `<p><span style="font-weight: bold">` + cmsArr[i]?.title + "</span></p>"
              cmsCombine += "<p>" + cmsArr[i]?.description + "</p>"
            }
            cmsCombine += "</div>"
            setCMSHTML(cmsCombine)
          }
      });
    } catch (error) {
      console.log('There was an error', error);
    }

  }, [router.isReady]);

  const addFormattedDate=(array)=>{
    return array.map((value)=>{
      value.date = convertTextDateToDateObj(value.dtDep)
      return value
    })
  }

  const sortTourpkgdetailByDate=(array)=>{
    array.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });
  }

  const convertTextDateToDateObj=(text_date)=>{
    //Jan 29, 2024
    let string_date = text_date.replace(",", "")
    const arr_date = string_date.split(" ")
    const month = textToMonth[arr_date[0]]
    const day = arr_date[1]
    const year = arr_date[2]
    return `${year}-${month}-${day}`
  }

  return (
    <Layout>
      {rJson && rJson != {} && <div className="tour-detail-page">
      <div id="top-section">  
          <div style={{
            textAlign:"center",
            justifyContent: 'center',
            paddingTop: '90px',
            width:"100%",
            background:"url(/images/tourBanner.png)",
            minHeight:"410px",
          }}>
            <div className="fw-bold text-[50px] text-white pt-[125px]" style={{ fontFamily:"Montserrat" }}>
              PACKAGE DETAILS
            </div>
            <div className="text-[15px] text-white pt-[5px] tracking-widest" style={{ fontFamily:"Montserrat" }}>
              Home &gt; Cruise &gt; 
            </div>
          </div> 
        </div>
        <div className="px-24">
          <div className="flex flex-row text-center py-12">
            <div className="flex flex-[2] justify-end">
              <img src="/images/tourImage1.png" className="" />
            </div>  
            <div className="flex flex-[1] ml-8">
              <div className="flex flex-col">
                <div className="">
                  <img src="/images/tourImage2.png" className="pb-8" />
                </div>
                <div className="">
                  <img src="/images/tourImage3.png" className="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3> {} </h3>
            <div className="" style={{ fontFamily:"Poppins", fontSize:"18px", color:"#383838" }}>
              <p>Welcome to Asia’s latest gateway to adventure and one-of-a-kind experiences you’ll carry with you long after you disembark.</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <button className="text-[#fff] rounded bg-[#2158AA] px-4 py-2 fw-bold mt-5">
              SELECT DATE
            </button>
          </div>
        </div>

        <PackageHiglights data={rJson.tourHighlightList} />

          <div id="package-details" className="">
            <div className="web-package-details container py-5">
              <div className="row g-5 responsive-flex">
                <div className=" col-lg-5 col-12 order-2 order-lg-1 flex-1">
                  <div style={{boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', border: '1px solid #a0a0a0', padding: '25px', borderRadius: '30px' , minHeight : "500px"}} >
                    <h2 style={{
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: "Montserrat",
                        paddingBottom: "10px"
                    }}>
                      ABOUT THIS PACKAGE
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: CMSHTML}}>

                    </div>
                  </div>
                </div>
                <div className=" col-lg-7 col-12 order-2 order-lg-1 flex-1">

                    <div className="flex">
                    <div className="flex-1 tab-header block text-[#fff] bg-[#3470C9] text-center p-3 m-4" id="selectdates">
                      FULL TOUR  
                    </div>
                      {rJson?.tourPkgItinery?.fileUrl && <button className="flex-1 tab-header rounded block text-[#fff] bg-primary text-center p-3 m-4 text-white" onClick={()=>{location.href=`${rJson.tourPkgItinery.fileUrl}`}}>ITINERARY PDF @ 行程下载</button>}
                    </div>
                    <div className="block" >
                      <p><b>Note :</b> </p>
                      <ol style={{ listStyleType : "decimal", fontFamily : "Montserrat" }}>
                          <li><b>Full Tour - includes return flight tickets (KLIA/KLIA 2) and ground arrangement.</b></li>
                          <li>Please check the available Room Type combination prior to tour booking.</li>
                          <li>Prices stated below are tour fare per pax based on Adult Twin sharing + Miscellaneous Charges*.</li>
                          <li>Early Bird Discount is still applicable for those with ✩, it is limited and on first come first served basis.</li>
                          <li>Prices and discounts shown are guidlines only and are not guaratneed until booking is completed</li>
                      </ol>
                    </div>
                    <div className="block" style={{ overflowX:"auto" }} >
                      <table className="table-fixed border-collapse border-slate-400 border w-full">
                        <thead>
                          <tr>
                            {tableTh.map((value,index)=>{
                              return <th key={index}>{value}</th>
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {tourDepList && tourDepList.map((value,index)=>{
                            return <tr key={index}>
                                <td className="border border-slate-300"> 
                                  {index+1}
                                </td>
                                <td>
                                  {<Departure dtDep={value.dtDep} desc={value.desc} langDesc={value.langDesc} />}
                                </td>
                                <td className="align-top">
                                  <b>RM {value?.tourPrice}✩</b>
                                </td>
                                <td className="align-top">
                                  {value?.airlineDesc}🔗
                                </td>
                                <td className="align-top"> 
                                <button className="rounded px-7 py-2 text-white bg-[#3470C9]" onClick={()=>location.href=`/booking-tour?id=${value?.idBase}&idTourPkg=${value?.idTourPkg}`}>Departure Detail</button>
                              </td>
                              </tr>
                          })}
                        </tbody>
                      </table>
                    </div>

                </div>
            </div>
          </div>   


        </div>
        

        
      </div>}
        
      
    </Layout>
  )
}


function Departure(props) {
  return <>
    <div className="h-7"><b>{props?.dtDep}</b></div>
    <div className="">{props?.desc}</div>
    <div className="h-7"><img src="/images/www.png" style={{ width : "15px", height :"15px" , display : "inline", marginRight : "0.5rem" }} />{props?.langDesc}</div>
  </>
}