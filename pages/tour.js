import Layout from '../components/Layout'
import {useState, useEffect, useRef} from 'react'
import { useRouter } from "next/router";
import CustomDropDown from '@component/components/CustomDropDown'
import Image from 'next/image';
import api from 'api'
import Loading from '../components/Loading'

export default function Tour() {

    const [rJson, setRJson] = useState([])
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [matchedCountries, setMatchedCountries] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [defaultPrice, setDefaultPrice] = useState(null)
    const [loadingText, setLoadingText] = useState("")

    const  router = useRouter();
    const  destination = router.query["destination"];
    const  category = router.query["category"];  // used for inbound/outbound, not in used anymore
    const  month = router.query["month"];
    const  priceFrom = router.query["priceFrom"];
    const  priceTo = router.query["priceTo"];
    const destinationRef = useRef();

    const priceData = {
        0 : {
            priceFrom: "0",
            priceTo: "500"
        },
        1 : {
            priceFrom: "500",
            priceTo: "999"
        },
        2 : {
            priceFrom: "1000",
            priceTo: "2499"
        },
        3 : {
            priceFrom: "2500",
            priceTo: "5000"
        },  
    }

    const Month = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    //completely useless
    // const intMonth = {
    //     "JANUARY" : 1,
    //     "FEBUARY" : 2,
    //     "MARCH" : 3,
    //     "APRIL" : 4,
    //     "MAY" : 5,
    //     "JUNE" : 6,
    //     "JULY" : 7,
    //     "AUGUST" : 8,
    //     "SEPTEMBER" : 9,
    //     "OCTOBER" : 10,
    //     "NOVEMBER" : 11,
    //     "DECEMBER" : 12
    // }
    // const monthInt = inverse(intMonth)
    
    // function inverse(obj){
    //     var retobj = {};
    //     for(var key in obj){
    //     retobj[obj[key]] = key;
    //     }
    //     return retobj;
    // }

    useEffect(()=>{
        setLoading(true)
        setLoadingText("Loading...")

        try {
            fetch(api().referenceList)
            .then(rawResult => rawResult.json())
            .then(jsonData => {
                const result = JSON.parse(jsonData)
                setCountries(result?.countryList)
            });
        } catch (error) {
            console.log('There was an error', error);
        }
        setLoading(false)
        setLoadingText("")
    }, [])

    const autoInput=(value)=>{
        destinationRef.current.value = value
        setInputValue("")
        setMatchedCountries([])
        onChange()
    }

    useEffect(() => {
        if(!router.isReady) return;

        console.log(priceFrom)
        console.log(priceTo)

        let urlParams = ""
        if (priceFrom) {
            urlParams += "&priceFrom=" + priceFrom
        }
        if (priceTo) {
            urlParams += "&priceTo=" + priceTo
        }
        if (month) {
            urlParams += "&month=" + month
        }
        if (destination) {
            destinationRef.current.value = destination
            urlParams += "&destination=" + destination
        }

        //find default value for price dropdown
        if (priceTo && priceFrom) {
            const priceArr = Object.values(priceData)
            for(let i = 0; i< priceArr.length; i++) {
                if (priceArr[i].priceFrom == priceFrom && priceArr[i].priceTo == priceTo) {
                    setDefaultPrice(i+1);
                    break
                }
            }
        }

        console.log("urlParams", urlParams)
        setLoading(true)
        try {
            fetch(`${api().tourPackageWithLocation}?type=TOUR${urlParams}`)
            .then(rawResult => rawResult.json())
            .then(jsonData => {
                console.log(jsonData, "jsonData")
                console.log(JSON.parse(jsonData))
                setLoading(false)
                setRJson(JSON.parse(jsonData)?.tourDepList)
            });
        } catch (error) {

            console.log('There was an error', error);
        }

    }, [router.isReady]);


    const handleChange=(index)=>{
        if (index == 0) { //most popular
            let temp = rJson.sort(sortByMostPopular)
            console.log(temp)
            setRJson([...temp])
        } else if (index == 1) { // lowest price
            let temp = rJson.sort(sortByPrice)
            console.log(temp)
            setRJson([...temp])
        }
    }

    const handleKeyDown=(e)=>{
        let inputValue = e.target.value
        setInputValue(inputValue)
        setMatchedCountries([])
    }

    useEffect(()=>{
        let matchedCountries = []
        for (let i of countries) {
            if (i.countryName.toLowerCase().startsWith(inputValue.toLowerCase()) && inputValue != "" ) {
                matchedCountries.push(i.countryName)
            }
        }
        setMatchedCountries(matchedCountries)
    }, [inputValue])

    function sortByPrice( a, b ) { //sort by price function
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
    }

    function sortByMostPopular (a, b) { //sort by popular function
        if ( a.saleStatus == "best_seller" ){
            return -1;
        }
        if (  a.saleStatus != "best_seller" ){
            return 1;
        }
            return 0;
    }
    
    const onChange=(e, type)=>{
        console.log(e , type)
        const newDestination = destinationRef.current.value
        const newParam = {
            destination: destination,
            month: month,
            priceFrom: priceFrom,
            priceTo: priceTo
        }
        console.log("newParam", newParam)
        if (type === 'PRICE') {
            newParam.priceFrom = priceData[e].priceFrom 
            newParam.priceTo = priceData[e].priceTo
        }
        if (type === 'MONTH') {
            newParam.month = e + 1
        }
        if (newDestination != "") {
            newParam.destination = newDestination
        } 
        console.log("newParam2", newParam)
        //create URL param
        let urlParams = ""
        if (newParam.priceFrom) {
            urlParams += "&priceFrom=" + newParam.priceFrom || "0"
        }
        if (newParam.priceTo) {
            urlParams += "&priceTo=" + newParam.priceTo
        }
        if (newParam.month) {
            urlParams += "&month=" + newParam.month
        }
        if (newParam.destination) {
            urlParams += "&destination=" + newParam.destination
        }

        console.log("urlParams", urlParams)
        location.href = `/tour?${urlParams}`
    }

  return (
    <Layout>
        <div className="tour-page">
            <div className="overflow-hidden">
        
                <div id="banner" className="mb-5 bg-image d-flex justify-content-center align-items-start" style={{backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className="text-white fw-bold" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>TOUR PACKAGES</h1>
                        </div>
                        <div className="row flex-column flex-xl-row justify-content-center gap-3">
                            {/* <div id="inbound_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2">
                                <CustomDropDown 
                                    title="ALL TOURS" 
                                    data = {["INBOUND", "OUTBOUND"]}
                                    objectKey=""
                                    callback={onChange}
                                    ref={tourTypeDropDown}
                                />
                            </div> */}
                            <div id="month_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2">
                                <CustomDropDown title="MONTH" 
                                    data = {Month} 
                                    objectKey=""
                                    callback={onChange}
                                    defaultValue={month}
                                />
                            </div>
                            <div className="d-flex flex-column justify-content-between position-relative col-sm col-xl-2">  
                                <input type="text" id="destination_input" className="form-control" style={{backgroundColor: '#f5f5f5', border: '1px solid #e8e2d6', color: '#460000'}} placeholder="DESTINATION"  ref={destinationRef} onKeyUp={handleKeyDown}/>
                                <div className="lis-className position-relative">
                                    <ul className="list position-absolute justify-content-end flex-column overflow-auto p-0 text-center" style={{borderRadius: "5px", fontFamily: 'Montserrat', minWidth: "256px", maxHeight: "263px", cursor: "pointer", fontFamily: 'Poppins', background: "rgba(255, 255, 255, 0.9)", zIndex:"100", boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)", marginTop: "4px"}}>
                                        {
                                            matchedCountries.map((value,index)=>{
                                                return <li className="py-3 mb-0 li_class text-uppercase list-items" key={index} style={{cursor: 'pointer'}} onClick={()=>autoInput(value)}><b>{value.substring(0, inputValue.length)}</b>{value.substring(inputValue.length)}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div id="price_selection_div" className="d-flex justify-content-between position-relative col-sm col-xl-2" style={{minWidth: 'max-content'}} >
                                <CustomDropDown title="PRICE" 
                                    data = {["BELOW RM500", "RM 500 - RM 999", "RM 1,000 - RM 2,499", "RM 2,500 - RM 5,000"]} 
                                    objectKey="" 
                                    callback={onChange} 
                                    defaultValue={defaultPrice}
                                />
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-column">
                            <button className="custom-button" onClick={()=>location.href="/tour"}>Clear</button>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="web-cards">
                        <div className="d-flex justify-content-between justify-content-sm-between align-items-center flex-column-reverse flex-xl-row gap-4 px-4 row">
                            <div className="col-12 col-xl-7 p-0">
                                <h6 className="text-start fw-bold m-0" style={{color: '#4d4d4d', fontFamily: 'Poppins'}}>Showing {rJson?.length} Packages</h6>
                            </div>
                            <div id="sorting_div" className="d-flex justify-content-between col-12 col-xl-4 p-0">
                                <CustomDropDown                                     
                                    title="SORT TYPE : MOST POPULAR" 
                                    data = {["SORT TYPE : MOST POPULAR", "SORT TYPE : LOWEST PRICE"]} 
                                    callback={handleChange} 
                                    objectKey="" 
                                />
                            </div>
                        </div>
                        <div className="container my-3 d-flex flex-row justify-content-start align-items-center gap-2 overflow-auto py-2" id="tag_div" ></div>
                        <div className="d-flex flex-column gap-3 container" id="listing_div" style={{ minHeight:"400px"}}>

                        {rJson?.length > 0 && rJson?.map((value,index)=>{ 
                            return <div className="card d-flex justify-content-start flex-row flex-wrap shadow" style={{borderTopLeftRadius: '2.0rem', borderBottomRightRadius: '1.5rem'}} key={index}>
                                <div className="d-flex justify-content-start col-12 col-xl-5 position-relative">
                                    <img 
                                        src={value?.imageUrl.split("/")[value?.imageUrl.split("/").length-1] == "null" ? "/images/rsz_warner-bros-studio-tour.jpg" : value?.imageUrl}
                                        className="img-fluid w-100"
                                        style={{borderTopLeftRadius: '1.5rem', backgroundSize: 'cover'}}
                                        alt="Article Image"
                                    />
                                    {value.saleStatus == "best_seller" && <button id="selling_out_button_mobile" type="button" className="d-block d-xl-none btn rounded-3 btn-danger fw-bold m-0 position-absolute bottom-0 end-0" style={{fontFamily: '"Montserrat"', backgroundColor: '#EA242D', width: 'max-content', transform: 'translate(-10%, -35%)', msTransform: 'translate(-10%, -35%)'}}>
                                        SELLING OUT
                                    </button>}
                                </div>
                                <div className="p-4 px-xl-5 d-flex justify-content-between flex-column w-100 gap-3" style={{fontFamily: 'Poppins', flex: 1}}>
                                    <div className="d-flex justify-content-between flex-row">
                                        <div className="d-flex flex-column gap-1 gap-xl-3">
                                            <h4 className="fw-bold m-0 text-uppercase" style={{fontFamily: 'Montserrat'}}>
                                                {value.title}
                                            </h4>
                                            {/* <h6 className="m-0" style={{color: '#B8B09D'}}>{value.tourCode}</h6> */}
                                        </div>
                                        {value.saleStatus == "best_seller" && <div className="my-n2">
                                            <button id="selling_out_button" type="button" className="d-none d-xl-block btn rounded-3 btn-danger fw-bold m-0" style={{fontFamily: '"Montserrat"', backgroundColor: '#EA242D'}}>
                                            SELLING OUT
                                            </button>
                                        </div>}
                                    </div>
                                    <p className="m-0 d-none d-xl-flex fw-normal">
                                        {value.desc}
                                    </p>
                                    <div className="d-flex justify-content-start flex-column flex-xl-row gap-2 gap-xl-4">
                                        <div className="d-flex justify-content-start align-items-center flex-row gap-2 fw-normal">
                                        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path d="M13 0.5C6.1125 0.5 0.5 6.1125 0.5 13C0.5 19.8875 6.1125 25.5 13 25.5C19.8875 25.5 25.5 19.8875 25.5 13C25.5 6.1125 19.8875 0.5 13 0.5ZM13 23C7.4875 23 3 18.5125 3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 18.5125 18.5125 23 13 23ZM14.25 6.75V13C14.25 13.6875 13.6875 14.25 13 14.25H9.25C8.5625 14.25 8 13.6875 8 13C8 12.3125 8.5625 11.75 9.25 11.75H11.75V6.75C11.75 6.0625 12.3125 5.5 13 5.5C13.6875 5.5 14.25 6.0625 14.25 6.75Z" fill="black" />
                                        </svg>
                                            {value.numDays} Days {value.numNights} Nights
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center flex-row gap-2 fw-normal">
                                    <svg width={26} height={26} viewBox="0 0 20 26" fill="none" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M10 25.5C6.5375 25.5 0 15.6875 0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5C12.6522 0.5 15.1957 1.55357 17.0711 3.42893C18.9464 5.3043 20 7.84784 20 10.5C20 15.6875 13.4625 25.5 10 25.5ZM10 3C8.01088 3 6.10322 3.79018 4.6967 5.1967C3.29018 6.60322 2.5 8.51088 2.5 10.5C2.5 14.95 8.3 22.825 10 23C11.6875 22.825 17.5 14.95 17.5 10.5C17.5 8.51088 16.7098 6.60322 15.3033 5.1967C13.8968 3.79018 11.9891 3 10 3Z" fill="black" />
                                        <path d="M10 14.25C9.25832 14.25 8.5333 14.0301 7.91661 13.618C7.29993 13.206 6.81928 12.6203 6.53545 11.9351C6.25162 11.2498 6.17736 10.4958 6.32206 9.76841C6.46675 9.04098 6.8239 8.3728 7.34835 7.84835C7.8728 7.3239 8.54098 6.96675 9.26841 6.82206C9.99584 6.67736 10.7498 6.75162 11.4351 7.03545C12.1203 7.31928 12.706 7.79993 13.118 8.41661C13.5301 9.0333 13.75 9.75832 13.75 10.5C13.75 11.4946 13.3549 12.4484 12.6517 13.1517C11.9484 13.8549 10.9946 14.25 10 14.25ZM10 9.25C9.75278 9.25 9.5111 9.32331 9.30554 9.46066C9.09998 9.59802 8.93976 9.79324 8.84515 10.0216C8.75054 10.2501 8.72579 10.5014 8.77402 10.7439C8.82225 10.9863 8.9413 11.2091 9.11612 11.3839C9.29093 11.5587 9.51366 11.6778 9.75614 11.726C9.99862 11.7742 10.2499 11.7495 10.4784 11.6549C10.7068 11.5602 10.902 11.4 11.0393 11.1945C11.1767 10.9889 11.25 10.7472 11.25 10.5C11.25 10.1685 11.1183 9.85054 10.8839 9.61612C10.6495 9.3817 10.3315 9.25 10 9.25Z" fill="black" />
                                    </svg>
                                    {value.country}
                                    </div>
                                </div>
                                <em className="fw-bold" style={{fontFamily: 'Poppins', color: '#a0a0a0'}}>{value.specialNotes}</em>
                                <button onClick={()=>{location.href=`/tour/${value.idTourPkg}`}} className="btn d-none d-xl-flex justify-content-center p-2 rounded-5 border-none fw-bold text-white" style={{backgroundColor: '#b8b09d', fontFamily: 'Montserrat', maxWidth: '445px'}}>
                                    VIEW DETAILS | From RM { value.price }
                                </button>
                                </div>
                                <button onClick={()=>{location.href=`/tour/${value.idTourPkg}`}} className="btn d-flex d-xl-none justify-content-center p-2 border-none fw-bold text-white col-12" style={{backgroundColor: '#b8b09d', fontFamily: 'Montserrat', borderRadius: '0px 0px 20px 0px'}}>
                                VIEW DETAILS | From RM { value.price }
                                </button>
                            </div>
                        })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {loading && <Loading text={loadingText} />}
    </Layout>
  )
}
