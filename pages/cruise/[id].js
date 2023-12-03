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
        setTourDepList(sortTourpkgdetailByDate(addFormattedDate(jsonData.tourPkg.tourDepList)))
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
    return array.sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
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
          <div style={{display: 'flex', justifyContent: 'center', paddingTop: '200px'}}>
            <div className="container"> 
              <div style={{BsBreadcrumbDivider: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E")'}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/" style={{textDecoration: 'none'}}>HOME</Link></li>
                  <li className="breadcrumb-item"><Link href="/tour.html" style={{textDecoration: 'none'}}>TOUR</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{rJson.numDays}D{rJson.numNights}N {rJson.nameEn}</li>
                </ol>
              </div> 
              <div>
                <div className="title" style={{paddingTop: '25px', paddingBottom: '60px'}}>
                  {rJson.numDays && <h2 style={{fontWeight: 700}}>{rJson.numDays}D{rJson.numNights}N {rJson.nameEn}</h2>}
                  <p style={{}} dangerouslySetInnerHTML={{__html: rJson.highLight}}>
                  </p>
                  <button onClick={()=>location.href="#selectdates"} className="cruise-red-button">SELECT DATES</button>
                </div>
              </div>
            </div>
          </div> 
        </div>

        <ImageGallery data={rJson.tourCarouselList} />

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
                      <div className="flex-1 tab-header block text-[#fff] bg-[#b32129] text-center p-3 m-4" id="selectdates">
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
                                  <b>RM {value.tourPrice}✩</b>
                                </td>
                                <td className="align-top">
                                  {value.airlineDesc}🔗
                                </td>
                                <td className="align-top"> 
                                  <button className="rounded px-7 py-2 text-white bg-[#b32129]" onClick={()=>location.href=`/booking-cruise?id=${value.idBase}&idTourPkg=${value.idTourPkg}`}>Departure Detail</button>
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
    <div className="h-7"><b>{props.dtDep}</b></div>
    <div className="">{props.desc}</div>
    <div className="h-7"><img src="/images/www.png" style={{ width : "15px", height :"15px" , display : "inline", marginRight : "0.5rem" }} />{props.langDesc}</div>
  </>
}