import React , {useState, useEffect } from 'react'
import Image from 'next/image';
import api from 'api'

export default class SearchBar extends React.Component {
  constructor() {
      super();
      this.state = {
        tourData: [],
        cruiseData: []
      }

  }

  gotoDetailPage=(id, idTourPkg)=>{
    location.href = `/tour/${idTourPkg}`
  }

  componentDidMount() {
    try {

        const url = api().tourPackageWithLocation
        const fetch1 = fetch(url + "?type=TOUR")
        .then(rawResult => rawResult.json())
        .then(jsonData => {
            console.log(jsonData)
            console.log("parsedData", JSON.parse(jsonData))
            this.setState({
                tourData : JSON.parse(jsonData)?.tourDepList
            })
        });
    
        const fetch2 = fetch(url + "?type=CRUISE")
        .then(rawResult => rawResult.json())
        .then(jsonData => {
            console.log(jsonData)
            console.log("parsedData", JSON.parse(jsonData))
            this.setState({
                cruiseData : JSON.parse(jsonData)?.tourDepList
            })
        });

      Promise.all([fetch1, fetch2]).then(function(values) {

      }); 
    } catch (error) {
        console.log('There was an error', error);
    }
  }


  render() {
    return (
        <section>
            <div id="highlight_div" style={{background: "#e8e2d6", marginTop: "-1px"}}>
                <div className="container py-4 py-xl-5 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="fw-bold text-center" style={{color: "#000", fontFamily: "Montserrat", letterSpacing: "0.15em", fontSize:"20px", fontWeight:"700"}}>
                        HIGHLIGHTS
                        <hr className="relative top-[-0.5rem]  border-4 border-[#D68A2C] m-0 opacity-50"></hr>
                    </h2>
                    <h2 className="fw-bold text-center" style={{fontFamily: "Montserrat", color: "#000"}}> DEALS FOR THE SEASON YOU </h2>
                    <h2 className="fw-bold text-center" style={{fontFamily: "Montserrat", color: "#D68A2C"}}>DON'T WANT TO MISS!</h2>
                    <h6 className="text-center col-12 col-xl-5" style={{fontFamily: 'Poppins'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                </div>

                <div className="pb-5 px-2">
                    <div id="highlight_item_div" className="contaier d-flex flex-row flex-wrap gap-4 justify-content-center">
                        {
                            this.state.tourData.length > 0 && this.state.tourData.map((value,index)=>{
                                if (index < 6) {
                                    return (
                                        <div className="product col-12 col-xl-3" key={index} onClick={()=>this.gotoDetailPage(value.id, value.idTourPkg)}>
                                            <div className="position-absolute border-0" style={{top: "8px", right: "8px"}}>
                                                <button className="p-2 fw-bold text-white border-0 rounded-1 text-uppercase" style={{background: '#F4B63D', fontFamily: 'Montserrat'}}>TOUR</button>
                                            </div>
                                            <img className="img-fluid" src={value?.imageUrl.split("/")[value?.imageUrl.split("/").length-1] == "null" ? "/images/rsz_warner-bros-studio-tour.jpg" : value?.imageUrl } alt="" style={{ minHeight:"330px" }} />
                                            {/* <Image src={value.imageUrl} className="img-fluid" alt=' ' width={100} height={100}/> */}
                                            <div className="container p-4 bg-white">
                                                <div className="d-flex flex-row justify-content-between" style={{fontFamily: 'Montserrat'}}>
                                                    <h4 className="fw-bold text-uppercase">{value?.title}</h4>
                                                    <h4 className="fw-bold" style={{color: "#EA242D"}}>{value?.price}</h4>
                                                </div>
                                                {/* <h6  style={{fontFamily: 'Poppins', color: "#B8B09D"}}>{value?.tourCode}</h6> */}
                                                <h6 className="lh-base m-0" style={{fontFamily: 'Poppins', maxHeight:"48px", overflow:"hidden"}}>{value?.specialNotes}</h6>
                                            </div>
                                            <button className="py-3 border-0" style={{background: "#B8B09D", borderColor: "#B8B09D", borderRadius: "0px 0px 24px 0px", fontFamily: 'Montserrat'}}>
                                                <h6 className="fw-bold text-white text-uppercase m-0">VIEW DETAILS | FROM RM {value?.price}</h6>
                                            </button>
                                        </div>
                                    )
                                }
                            })
                        }
                    
                    </div>
                </div>
                <div className="pb-5 px-2">
                    <div id="highlight_item_div" className="contaier d-flex flex-row flex-wrap gap-4 justify-content-center">
                        {
                            this.state.cruiseData.length > 0 && this.state.cruiseData.map((value,index)=>{
                                if (index < 6) {
                                    return (
                                        <div className="product col-12 col-xl-3" key={index} onClick={()=>this.gotoDetailPage(value.id, value.idTourPkg)}>
                                            <div className="position-absolute border-0" style={{top: "8px", right: "8px"}}>
                                                <button className="p-2 fw-bold text-white border-0 rounded-1 text-uppercase" style={{background: '#F4B63D', fontFamily: 'Montserrat'}}>CRUISE</button>
                                            </div>
                                            <img 
                                                className="img-fluid"
                                                src={ value?.imageUrl.split("/")[value?.imageUrl.split("/").length-1] == "null" ? "/images/genting_dream_Sing_50.jpg"  : value?.imageUrl }
                                                alt=""
                                                style={{ minHeight:"330px" }}
                                            />
                                            {/* <Image src={value.imageUrl} className="img-fluid" alt=' ' width={100} height={100}/> */}
                                            <div className="container p-4 bg-white">
                                                <div className="d-flex flex-row justify-content-between" style={{fontFamily: 'Montserrat'}}>
                                                    <h4 className="fw-bold text-uppercase">{value?.title}</h4>
                                                    <h4 className="fw-bold" style={{color: "#EA242D"}}>{value?.price}</h4>
                                                </div>
                                                {/* <h6  style={{fontFamily: 'Poppins', color: "#B8B09D"}}>{value?.tourCode}</h6> */}
                                                <h6 className="lh-base m-0" style={{fontFamily: 'Poppins', maxHeight:"48px", overflow:"hidden"}}>{value?.specialNotes}</h6>
                                            </div>
                                            <button className="py-3 border-0" style={{background: "#B8B09D", borderColor: "#B8B09D", borderRadius: "0px 0px 24px 0px", fontFamily: 'Montserrat'}}>
                                                <h6 className="fw-bold text-white text-uppercase m-0">VIEW DETAILS | FROM RM {value?.price}</h6>
                                            </button>
                                        </div>
                                    )
                                }
                            })
                        }
                    
                    </div>
                </div>
            </div>

        </section>
    );
  }
}



