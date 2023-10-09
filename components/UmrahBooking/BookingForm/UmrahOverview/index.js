import { UmrahContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useCallback, useRef, useContext} from 'react'
import React from 'react';
import Rooms from './Rooms'
import api from 'api'
import { cloneDeep } from 'lodash';



export default function Overview(props) {

    const roomState = {
        id : 1
    }

    const [roomList, setRoomList] = useState([roomState])
    const [roomData, setRoomData] = useState({})
    const [backBtnEnabled, setBackBtnEnabled] = useState(false)
    const [backBtnDisplay, setBackBtnDisplay] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [nextBtnDisplay, setNextBtnDisplay] = useState(true)
    // const [totalHeadCount, setTotalHeadCount] = useState(0)

    const checkbox1 = useRef()
    const checkbox2 = useRef()

    const umrah_context = useContext(UmrahContext)

    const checkIfCanEnableNext=()=>{
        let headCount = 0
        console.log("checkIfCanEnableNext", roomData)
        for (const key in roomData) {
            headCount += roomData[key].adultRoomCount
            headCount += roomData[key].childRoomWithBedCount
            headCount += roomData[key].childRoomWithoutBedCount
            headCount += roomData[key].infantRoomCount
        }
        console.log("headCount", headCount)
        if (headCount > 0 && checkbox1.current.checked == true && checkbox2.current.checked == true) {
            umrah_context.setTotalHeadCount(headCount)
            setNextBtnEnabled(true)
        } else {
            umrah_context.setTotalHeadCount(headCount)
            setNextBtnEnabled(false)
        }
    }

    useEffect(()=>{
        checkIfCanEnableNext()
    }, [roomData])

    const addRoomCount=()=> {
        const newRoomState = cloneDeep(roomState)
        const newRoomList = cloneDeep(roomList)
        newRoomState.id = roomList.length + 1
        newRoomList.push(newRoomState)
        setRoomList(newRoomList)
    }

    useEffect(()=>{
        console.log("roomList", roomList)
    }, [roomList])


    const removeRoomCount=(id)=>{
        console.log(id, roomList)
        let tempArr = roomList
        let tempArr2 = []
        for (let i =0 ; i < tempArr.length; i++) {  // removed the room by id
            if (tempArr[i].id == id) {
                tempArr.splice(i, 1)
                break
            }
        }
        for (let i =0 ; i < tempArr.length; i++) {  // repopulate the room id
            const newRoomState = cloneDeep(roomState)
            newRoomState.id = i+1
            tempArr2.push(newRoomState)
        }
        console.log("tempArr2", tempArr2)
        setRoomList([...tempArr2])
    }

    useEffect(()=>{
        setRoomData(umrah_context?.roomData)
    },[umrah_context])


    const nextPage=()=> {

        //  populate tourDepItemList
        console.log("tourDepItemList", umrah_context.tourDepItemList)
        console.log("roomData", umrah_context.roomData)
        let tourDepItemListClone = _.cloneDeep(umrah_context.tourDepItemList)
        for (const key in umrah_context.roomData) {
            if (umrah_context.roomData[key].adultRoomCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_SGL") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "APT_ADT") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "FUEL_ADT") {
                        tourDepItemListClone[i].quantity += 1
                    }
                }
            } 
            if (umrah_context.roomData[key].adultRoomCount == 2) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_TWN") {
                        tourDepItemListClone[i].quantity += 2
                    }
                    if (tourDepItemListClone[i].code == "APT_ADT") {
                        tourDepItemListClone[i].quantity += 2
                    }
                    if (tourDepItemListClone[i].code == "FUEL_ADT") {
                        tourDepItemListClone[i].quantity += 2
                    }
                }
            }
            if (umrah_context.roomData[key].childRoomWithBedCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_CWB") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "APT_CHD") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "FUEL_CHD") {
                        tourDepItemListClone[i].quantity += 1
                    }
                }
            }
            if (umrah_context.roomData[key].childRoomWithoutBedCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_CNB") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "APT_CHD") {
                        tourDepItemListClone[i].quantity += 1
                    }
                    if (tourDepItemListClone[i].code == "FUEL_CHD") {
                        tourDepItemListClone[i].quantity += 1
                    }
                }
            }
            if (umrah_context.roomData[key].infantRoomCount == 1) {
                for(let i = 0 ; i < tourDepItemListClone.length ; i++) {
                    if (tourDepItemListClone[i].code == "FT_INFT") {
                        tourDepItemListClone[i].quantity += 1
                        break
                    }
                }
            }
        }
        console.log("tourDepItemListClone", tourDepItemListClone)


        const url = `/api/makeBookingOnline`
        // umrah_context.setLoading(true)
        // try {
        //     fetch(url, {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             idCompany: umrah_context.idCompany,
        //             idTourDep: umrah_context.dep.idBase,
        //             bookingChargeItemList:tourDepItemListClone,
        //             quantity : 1,}),
        //         headers : {
        //             // "Access-Control-Allow-Origin": "https://trevabook.ddns.net/",
        //             // "Access-Control-Allow-Credentials": "true",
        //             // "Access-Control-Allow-Methods": "GET,OPTIONS,DELETE,PATCH,POST,PUT",
        //             // "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Authorization",
        //             "Content-Type" : "application/json",
        //         }

        //     })
        //     .then(rawResult => rawResult.json())
        //     .then(jsonData => {
        //         console.log(jsonData)
        //         console.log("parsedData", JSON.parse(jsonData))
        //         umrah_context.setLoading(false)
        //         const parsedData = JSON.parse(jsonData)
        //         const idBooking = parsedData.idBooking
        //         const successful = parsedData.successful
        //         if (successful) {
        //             umrah_context.setSuccessfulBookingId(idBooking)
        //             umrah_context.start()
        //             props.nextPage()
        //         } else {
        //             alert("Error , please try again later")
        //         }
        //     });
        // } catch (error) {
        //     console.log('There was an error', error);
        // }
        // console.log(umrah_context)
        props.nextPage()
    }

  return (
        <>
            <h2 className="d-flex justify-content-center py-5 headline-order" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>TOUR OVERVIEW</h2>
            <div id="room_div">
                {
                    roomList.map((value,index)=>{
                        if (index == 0) {
                            return <Rooms id={value.id} key={value.id} addRoomCount={addRoomCount} />
                        } else {
                            return <Rooms id={value.id} key={value.id} removeRoomCount={removeRoomCount} />
                        }
                        
                    })
                }
            </div>
            {/*TERMS AND CONDITIONS*/}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" ref={checkbox1} onChange={checkIfCanEnableNext} />
                <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> I understand and agree that this tour will be conducted in English . </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" ref={checkbox2} onChange={checkIfCanEnableNext} />
                <label className="form-check-label mb-4" htmlFor="flexCheckChecked2" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}>
                Tour member must ensure he/she is medically and physically fit for travel. Please disclose any physical, medical, or other special needs that require special attention at the time of booking. T&amp;C Apply
                </label>
            </div>
            
            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                <div className="button-container col-md-2 col-5">
                    <button onClick={props.prevPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: backBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white' , 
                            display : backBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {backBtnEnabled ? false: true}
                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: nextBtnEnabled ? '#d1b882' : '#cdcdcd', 
                            color: 'white',
                            display : nextBtnDisplay ? 'block' : 'none',
                        }}
                        disabled = {nextBtnEnabled ? false: true}
                        >NEXT</button>
                </div>
            </div>
        </>
    )
}
