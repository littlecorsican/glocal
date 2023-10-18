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
  const [CMSHTML, setCMSHTML] = useState("")

  const  router = useRouter();
  // const  tourCode = router.query["tourCode"];
  const  id = router.query["id"];
  console.log(router.query)

  const tableTh = ["#", "Departure", "Price From" , "Airline", "Status"]

  useEffect(() => {
    if(!router.isReady) return;

    //console.log("urlParams", tourCode, id)

    let url = `${api().tourpkgdetail}?idTourPkg=${id}`
    try {
      fetch(url)
      .then(rawResult => rawResult.json())
      .then(jsonData => {
          console.log(jsonData, "jsonData")
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
            <div className="flex-[3]">
              <img src="/images/tourImage1.png" className="" />
            </div>  
            <div className="flex-[1]">
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

                  <Departure />

                </div>
            </div>
          </div>   


        </div>
        

        
      </div>}
        
      
    </Layout>
  )
}


function Departure(props) {
  return <div className=" col-lg-4 col-12 order-1 order-lg-2" id="scrollToDate">
  <div
    style={{
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
      border: "1px solid #a0a0a0",
      borderRadius: 30
    }}
  >
    <div style={{ padding: 25 }}>
      <h2 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 25 }}>
        Select Your Date
      </h2>
    </div>
    <div className="px-1" id="date_picker_div">
      <input
        id="inlinePicker"
        className="form-control"
        name="daterange"
        hidden=""
      />
      <div
        style={{ width: "-webkit-fill-available" }}
        className="daterangepicker daterangepicker-inline ltr show-calendar opensright"
      >
        <div
          className="calendar left"
          style={{ width: "-webkit-fill-available" }}
        >
          <div className="daterangepicker_input">
            <input
              className="input-mini form-control active"
              type="text"
              name="daterangepicker_start"
              defaultValue=""
            />
            <i className="fa fa-calendar glyphicon glyphicon-calendar" />
            <div className="calendar-time" style={{ display: "none" }}>
              <div />
              <i className="fa fa-clock-o glyphicon glyphicon-time" />
            </div>
          </div>
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th className="prev available">
                    <i className="fa fa-chevron-left glyphicon glyphicon-chevron-left" />
                  </th>
                  <th colSpan={3} className="month">
                    Oct
                  </th>
                  <th className="next available">
                    <i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" />
                  </th>
                  <th colSpan={2} className="month">
                    {" "}
                    2023
                  </th>
                  <th
                    rowSpan={2}
                    style={{
                      height: 25,
                      borderRadius: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    }}
                  >
                    <div className="up" />
                    <div className="down" />
                  </th>
                </tr>
                <tr>
                  <th className="week" />
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    39
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend off available"
                    data-title="r0c0"
                  >
                    24{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="off available"
                    data-title="r0c1"
                  >
                    25{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="off available"
                    data-title="r0c2"
                  >
                    26{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="off available"
                    data-title="r0c3"
                  >
                    27{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="off available"
                    data-title="r0c4"
                  >
                    28{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="off available"
                    data-title="r0c5"
                  >
                    29{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend off available"
                    data-title="r0c6"
                  >
                    30{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    40
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r1c0"
                  >
                    1{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c1"
                  >
                    2
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c2"
                  >
                    3
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c3"
                  >
                    4
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r1c4"
                  >
                    5{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r1c5"
                  >
                    6{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r1c6"
                  >
                    7{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    41
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r2c0"
                  >
                    8{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c1"
                  >
                    9{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c2"
                  >
                    10{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c3"
                  >
                    11{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r2c4"
                  >
                    12{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r2c5"
                  >
                    13{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="today weekend active start-date active end-date available"
                    data-title="r2c6"
                  >
                    14{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    42
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r3c0"
                  >
                    15{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c1"
                  >
                    16
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c2"
                  >
                    17
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c3"
                  >
                    18
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r3c4"
                  >
                    19{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r3c5"
                  >
                    20{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r3c6"
                  >
                    21{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    43
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r4c0"
                  >
                    22{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r4c1"
                  >
                    23{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r4c2"
                  >
                    24{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r4c3"
                  >
                    25{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r4c4"
                  >
                    26{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r4c5"
                  >
                    27{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r4c6"
                  >
                    28{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="calendar right">
          <div className="daterangepicker_input">
            <input
              className="input-mini form-control"
              type="text"
              name="daterangepicker_end"
              defaultValue=""
            />
            <i className="fa fa-calendar glyphicon glyphicon-calendar" />
            <div className="calendar-time" style={{ display: "none" }}>
              <div />
              <i className="fa fa-clock-o glyphicon glyphicon-time" />
            </div>
          </div>
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th />
                  <th colSpan={3} className="month">
                    Nov
                  </th>
                  <th className="next available">
                    <i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" />
                  </th>
                  <th colSpan={2} className="month">
                    {" "}
                    2023
                  </th>
                  <th
                    rowSpan={2}
                    style={{
                      height: 25,
                      borderRadius: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    }}
                  >
                    <div className="up" />
                    <div className="down" />
                  </th>
                </tr>
                <tr>
                  <th className="week" />
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    44
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend off available"
                    data-title="r0c0"
                  >
                    29{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="off available"
                    data-title="r0c1"
                  >
                    30{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="off available"
                    data-title="r0c2"
                  >
                    31{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r0c3"
                  >
                    1{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r0c4"
                  >
                    2
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r0c5"
                  >
                    3
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r0c6"
                  >
                    4
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    45
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r1c0"
                  >
                    5{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r1c1"
                  >
                    6{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r1c2"
                  >
                    7{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c3"
                  >
                    8{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c4"
                  >
                    9{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r1c5"
                  >
                    10{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r1c6"
                  >
                    11{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    46
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r2c0"
                  >
                    12{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r2c1"
                  >
                    13{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r2c2"
                  >
                    14{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c3"
                  >
                    15{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c4"
                  >
                    16
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r2c5"
                  >
                    17
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r2c6"
                  >
                    18
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F31D27",
                        zIndex: 2
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    47
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r3c0"
                  >
                    19{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r3c1"
                  >
                    20{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r3c2"
                  >
                    21{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c3"
                  >
                    22{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c4"
                  >
                    23{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r3c5"
                  >
                    24{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend available"
                    data-title="r3c6"
                  >
                    25{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className="week"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    48
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="weekend available"
                    data-title="r4c0"
                  >
                    26{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r4c1"
                  >
                    27{" "}
                  </td>
                  <td
                    style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      textDecoration: "line-through",
                      color: "#B2B2B2"
                    }}
                    className="available"
                    data-title="r4c2"
                  >
                    28{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r4c3"
                  >
                    29{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="available"
                    data-title="r4c4"
                  >
                    30{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="off available"
                    data-title="r4c5"
                  >
                    1{" "}
                  </td>
                  <td
                    style={{ position: "relative", width: 30, height: 30 }}
                    className="weekend off available"
                    data-title="r4c6"
                  >
                    2
                    <div
                      style={{
                        position: "absolute",
                        left: "48%",
                        bottom: "8%",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#F4B63D",
                        zIndex: 2
                      }}
                    />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="ranges" style={{ display: "none" }}>
          <div className="range_inputs">
            <button className="applyBtn btn btn-sm btn-success" type="button">
              Apply
            </button>
            <button className="cancelBtn btn btn-sm btn-default" type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{ display: "flex", justifyContent: "space-evenly", padding: 16 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: "#f31d27",
            minWidth: 15
          }}
        />
        <h3
          style={{
            fontFamily: '"Poppins"',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 18,
            color: "#0e0001",
            margin: 0
          }}
        >
          Hottest Deal
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: "#f4b63d",
            minWidth: 15
          }}
        />
        <h3
          style={{
            fontFamily: '"Poppins"',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 18,
            color: "#0e0001",
            margin: 0
          }}
        >
          Selling Out
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: "#cdcdcd",
            minWidth: 15
          }}
        />
        <h3
          style={{
            fontFamily: '"Poppins"',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 18,
            color: "#0e0001",
            textDecoration: "line-through",
            margin: 0
          }}
        >
          Unavailable
        </h3>
      </div>
    </div>
    <div style={{ padding: 25 }}>
      <div
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.2)", paddingTop: 25 }}
      >
        <div>
          <div>
            <div>
              <h2
                style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 18 }}
              >
                Dates Selected:
              </h2>
              <div />
              <p>
                <span id="startDate" /> -
                <span id="endDate" />
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#b8b09d"
                }}
              >
                STARTING FROM
              </h2>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: 34,
                  color: "#b32129"
                }}
              >
                RM720.00
              </h2>
              <button
                onclick="toBooking1()"
                style={{
                  marginTop: 10,
                  background: "#ea242d",
                  padding: 15,
                  borderRadius: 100,
                  border: "none",
                  fontSize: 18,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "white",
                  width: "100%"
                }}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

}