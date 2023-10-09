import { TourProvider, TourContext } from "../global/global_context";
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/Layout'
import {useState, useEffect, useRef, useContext} from 'react'
import DetailsCard from '../components/TourBooking/DetailsCard'
import BookingForm from '../components/TourBooking/BookingForm'
import BookingSummary from '../components/TourBooking/BookingSummary'
import { useRouter } from "next/router";
import api from 'api'
import Loading from '../components/Loading'
//import { validateReferenceList, validateOnlineBookingConfigList, validateIpayConfigList, validateTourdepdetail } from '../utils/utils'

export default function Contact() {

    const [dep, setDep] = useState({})
    const [tourPackage, setTourPackage] = useState({})
    const [roomData, setRoomData] = useState({})
    const [aggregateData, setAggregateData] = useState({})
    const [tourDepItemList, setTourDepItemList] = useState([])
    const [successfulBookingId, setSuccessfulBookingId] = useState(null)
    const [idCompany, setIdCompany] = useState(null)
    const [timer, setTimer] = useState(null)
    const [country, setCountry] = useState({})
    const [iPayConfigListId, setIPayConfigListId] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [totalHeadCount, setTotalHeadCount] = useState(0)
    const [userInputData, setUserInputData] = useState(null)
    
    const  router = useRouter();
    const  idTourPkg = router.query["idTourPkg"];
    const  idBase = router.query["id"];
    console.log("idTourPkg", idTourPkg, idBase)
    let intervalId = useRef(null)

    useEffect(() => {
      if(!router.isReady) return;
      if (!idCompany) return;

      console.log("idTourPkg2", idTourPkg, idBase)

      let url = `${api().tourdepdetail}?idCompany=${idCompany}&idTourDep=${idBase}`
      try {
        fetch(url)
        .then(rawResult => rawResult.json())
        .then(jsonData => {
          console.log("parsedData", JSON.parse(jsonData))
          const parsedData = JSON.parse(jsonData)
          setTourPackage(parsedData?.tourDep?.tourPkg)
          setDep(parsedData?.tourDep)
          let tempDepList = parsedData?.tourDep?.tourDepItemList
          // assign quantity and 0 to all objects because the API to create booking requires it
          for (let i = 0 ; i < tempDepList.length ; i ++) {
            tempDepList[i].quantity = 0;
          }
          setTourDepItemList(tempDepList)
          

        });
      } catch (error) {
        console.log('There was an error', error);
      }

  }, [router.isReady, idCompany]);

  useEffect(()=>{
    
    const url = api().onlineBookingConfigList
    const url2 = api().referenceList
    const url3 = api().iPayConfigList
      try {
          setLoading(true)

          const fetch1 = fetch(url)
          .then(rawResult => rawResult.json())
          .then(jsonData => {
              console.log(jsonData)
              console.log("parsedData", JSON.parse(jsonData))
              const parsedData = JSON.parse(jsonData)
              const onlineBookingConfigList = parsedData.onlineBookingConfigList
              setIdCompany(onlineBookingConfigList[onlineBookingConfigList.length-1].idCompany)
          });

          const fetch2 = fetch(url2)
          .then(rawResult => rawResult.json())
          .then(jsonData => {
              console.log(jsonData)
              console.log("referenceList", JSON.parse(jsonData))
              const parsedData = JSON.parse(jsonData)
              const malaysia = parsedData.countryList.filter((value)=>{  // put malaysia first
                return value.countryName == "Malaysia"
              })
              const rest = parsedData.countryList.filter((value)=>{
                return value.countryName != "Malaysia"
              })
              const countryData = [...malaysia, ...rest]
              setCountry(countryData)
          });

          const fetch3 = fetch(url3)
          .then(rawResult => rawResult.json())
          .then(jsonData => {
              console.log(jsonData)
              console.log("iPayConfigList", JSON.parse(jsonData))
              const parsedData = JSON.parse(jsonData)
              setIPayConfigListId(parsedData?.ipayConfigList[0]?.id || 1)
          });

        Promise.all([fetch1, fetch2, fetch3]).then(function(values) {
          setLoading(false)
        }); 
        } catch (error) {
          console.log('There was an error', error);
        }
  },[])


  useEffect(()=>{
    // calculate the total room count and amount incurred
    let tempAggregateData = {
      adultRoom : {
        quantity : 0,
        amount : 0
      },
      childWithBedRoom : {
        quantity : 0,
        amount : 0
      },
      childWithNoBedRoom : {
        quantity : 0,
        amount : 0
      },
      infantRoom : {
        quantity : 0,
        amount : 0
      },
    }
    for (const key in roomData) {
      for (let i =0 ; i < tourDepItemList.length ; i ++) {
        if (tourDepItemList[i].code == "FT_SGL" && roomData[key].adultRoomCount == 1) {
          tempAggregateData.adultRoom.quantity += 1
          tempAggregateData.adultRoom.amount = tempAggregateData.adultRoom.quantity * tourDepItemList[i].amount
        }
        if (tourDepItemList[i].code == "FT_TWN" && roomData[key].adultRoomCount == 2) {
          tempAggregateData.adultRoom.quantity += 2
          tempAggregateData.adultRoom.amount = tempAggregateData.adultRoom.quantity * tourDepItemList[i].amount
        }
        if (tourDepItemList[i].code == "FT_CWB" && roomData[key].childRoomWithBedCount == 1) {
          tempAggregateData.childWithBedRoom.quantity += 1
          tempAggregateData.childWithBedRoom.amount = tempAggregateData.childWithBedRoom.quantity * tourDepItemList[i].amount
        }
        if (tourDepItemList[i].code == "FT_CNB" && roomData[key].childRoomWithoutBedCount == 1) {
          tempAggregateData.childWithNoBedRoom.quantity += 1
          tempAggregateData.childWithNoBedRoom.amount = tempAggregateData.childWithNoBedRoom.quantity * tourDepItemList[i].amount
        }
        if (tourDepItemList[i].code == "FT_INFT" && roomData[key].infantRoomCount == 1) {
          tempAggregateData.infantRoom.quantity += 1
          tempAggregateData.infantRoom.amount = tempAggregateData.infantRoom.quantity * tourDepItemList[i].amount
        }
      }
    }
    console.log("tempAggregateData", tempAggregateData)
    setAggregateData(tempAggregateData)
  }, [roomData])

  const handleRoomChange = (componentId , adultRoomCount, childRoomWithBedCount, childRoomWithoutBedCount, infantRoomCount) => {
    // update the roomcount
    setRoomData((roomData) => ({ ...roomData, [componentId]: {adultRoomCount, childRoomWithBedCount, childRoomWithoutBedCount, infantRoomCount} }));
  }
  const removeRoomFromRoomData=(roomId)=>{
    setRoomData(roomData => {
      const {[roomId]: id, ...rest} = roomData;
      return rest;
    });
  }

  const start=()=>{
    setTimer(900)
    intervalId.current = setInterval(()=>{
      setTimer((timer)=>timer-1)
    }, 1000) 
  }

  useEffect(()=>{
    if (timer < 1) {
      setTimer(null)
      clearInterval(intervalId.current);
      if (timer != null) {
        alert("Times up")
        cancelBooking()
      }
    }
  }, [timer])

  const cancelBooking=()=>{
    //call cancel booking api
    setLoading(true)
    const idBooking = successfulBookingId
    let url = `/api/cancelBooking`
    try {
      fetch(url, {
          method: 'POST',
          body: JSON.stringify({id : idBooking }),
      })
      .then(rawResult => rawResult.json())
      .then(jsonData => {
          console.log(jsonData)
          setLoading(false)
          console.log("/api/cancelBooking", JSON.parse(jsonData))
          const parsedData = JSON.parse(jsonData)
          const successful = parsedData.successful
          if (successful) {
            location.href = '/'
          } else {
            alert("Error , please try again later")
            location.href = '/'
          }
      });
    } catch (error) {
        console.log('There was an error', error);
    }
  }

  return (
    <Layout>
        <TourProvider value={{ 
          loading, setLoading,
          loadingText, setLoadingText,
          iPayConfigListId, setIPayConfigListId,
          country, setCountry,
          idCompany,
          successfulBookingId, setSuccessfulBookingId,
          tourDepItemList, setTourDepItemList,
          aggregateData, setAggregateData,
          roomData, setRoomData,
          tourPackage, setTourPackage,
          dep, setDep,
          totalHeadCount, setTotalHeadCount,
          handleRoomChange,
          removeRoomFromRoomData,
          userInputData, setUserInputData,
        }}>
        <div className="container" style={{paddingTop: '120px'}}>
            {/*Left & Right Col Combined*/}
          <div className="d-flex justify-content-center flex-wrap gap-md-2 pt-xl-5 pb-5 gap-3 gap-xl-0">
            {/*Main Left Container*/}
            <div className="container col-xxl-8 col-12 g-0">
              {/* <button onClick={()=>console.log("roomData", roomData)}>xxxxxxx</button> */}
                {/*Headline*/}
                <h1 className="py-lg-2 pt-5 pb-3 mb-lg-4 headline-booking" style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700}}>MAKE A BOOKING</h1>
                <DetailsCard idTourPkg={idTourPkg} />
                <BookingForm 
                  start={start}
                />
            </div>
            {/*SUMMARY PART ID*/}
            <div id="summary_price" className="col-xxl-3 col-12 rounded-5 m-0 mt-xl-5" style={{height: 'fit-content'}} >
              <BookingSummary 
                timer={timer}
              />
            </div>
          </div>
        </div>
        {loading && <Loading text={loadingText} />}
        </TourProvider>
    </Layout>
  )
}

