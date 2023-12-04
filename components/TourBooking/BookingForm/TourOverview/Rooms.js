import { TourContext } from 'global/global_context';
import React, {useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import IncrementCount from './IncrementCount'

export default function Rooms(props, ref) {

    const [adult, setAdult] = useState(0)
    const [childWithBed, setChildren] = useState(0)
    const [childWithoutBed, setChildrenWithoutBed] = useState(0)
    const [infant, setInfant] = useState(0)
    const [occupancyCount, setOccupancyCount] = useState(1)

    const occupancyLimit = {
        adult: 2,
        children: 1,
        infant: 1
    }

    const tour_context = useContext(TourContext)

    useEffect(()=>{
        tour_context.handleRoomChange(props.id, adult, childWithBed, childWithoutBed, infant)
        console.log("adult + childWithBed + childWithoutBed", adult + childWithBed + childWithoutBed)
        setOccupancyCount({
            adult: adult,
            children:  + childWithBed + childWithoutBed
        })
    }, [adult, childWithBed, infant, childWithoutBed])


   return (
    <div className="mb-xl-5 mb-4">
        <div className="d-flex justify-content-between headline-book-2" id="room_1">
            <p className="" style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}}>
                Room {props.id}
            </p>
            {props.addRoomCount != undefined ? <button type="button" className="btn btn-link text-colourblue" style={{fontFamily: '"Poppins"', fontWeight: 700, marginTop: '-10px', textDecoration: 'none'}} onClick={props.addRoomCount}>
                + Add Room
            </button> : 
                <button type="button" className="btn btn-link" style={{fontFamily: '"Poppins"', fontWeight: 700, color: '#ea242d', marginTop: '-10px', textDecoration: 'none'}} onClick={()=>props.removeRoomCount(props.id)}>
                    - Remove
                </button>
            }
        </div>
        <hr className="hr mt-lg-1 m-0" />
        <div className="mt-4 d-flex flex-row flex-wrap gap-5">
            <IncrementCount title={"Adult"} key="0" setCount={setAdult} limit={occupancyLimit} occupancyCount={occupancyCount} count={adult} />
            <IncrementCount title={"Children With Bed (< 12 yrs)"} key="1" setCount={setChildren} limit={occupancyLimit} occupancyCount={occupancyCount} count={childWithBed}/>
            <IncrementCount title={"Children Without Bed (< 12 yrs)"} key="2" setCount={setChildrenWithoutBed} limit={occupancyLimit} occupancyCount={occupancyCount} count={childWithoutBed} />
            <IncrementCount title={"Infant (< 12 yrs)"} key="3" setCount={setInfant} limit={occupancyLimit} occupancyCount={infant} count={infant} />            
      </div>
    </div>
   )

  }











