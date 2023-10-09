import { TourContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useCallback, useRef, useContext} from 'react'
import React from 'react';
import Rooms from './Rooms'
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

    const tour_context = useContext(TourContext)

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
            tour_context.setTotalHeadCount(headCount)
            setNextBtnEnabled(true)
        } else {
            tour_context.setTotalHeadCount(headCount)
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
        tour_context.removeRoomFromRoomData(id)
    }

    useEffect(()=>{
        setRoomData(tour_context?.roomData)
    },[tour_context])

  return (
        <div style={{ display: `${props.progressIndex == 0 ? "block" : "none"}` }}>
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
                    <button onClick={props.nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
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
        </div>
    )
}
