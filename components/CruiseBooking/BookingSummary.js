import { CruiseContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'
import api from 'api'

export default function Contact(props) {

  // const [countDown ,setCountDown] = useState(900)
  // const [startCountDown ,setStartCountDown] = useState(false)

  const context = useContext(CruiseContext)
  console.log("context", context)

  const secondsToMin=(countDown)=>{
    let min = Math.floor(countDown / 60)
    let seconds = Math.floor(countDown % 60)
    if (min.toString().length == 1) {
      min = "0" + min
    }
    if (seconds.toString().length == 1) {
      seconds = "0" + seconds
    }
    return min + ":" + seconds
  }


  const { aggregateData, timer, startTimer } = props

  return (
    <div id="summary_div" className="card d-flex justify-content-start flex-column flex-wrap p-4 rounded-5 shadow">
      {timer > 0 && <div className="d-flex flex-wrap justify-content-center justify-content-start p-3 mt-1" style={{background: '#EA242D', borderRadius: '10px'}}>
        <h5 className="m-0 me-2" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF'}}>Booking Closes in</h5>
        <div className="d-flex justify-content-start">
          <input id="minutes" type="text" className="m-0 d-flex border-0 bg-transparent" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', width: '24px'}} disabled />
          <h5 className="m-0 me-1 equal" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF'}}>{secondsToMin(timer)}</h5>
          <input id="seconds" type="text" className="m-0 d-flex border-0 bg-transparent" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', width: '30px'}} disabled />
        </div>
      </div>}
      <h5 className="fw-bold m-0 text-uppercase" style={{fontFamily: 'Montserrat', fontSize: '25px'}}>Booking Summary</h5>
      <h6 className="text-uppercase pt-lg-3 pt-2" style={{fontFamily: '"Montserrat"', fontWeight: 700, lineHeight: '20px', color: '#500000'}}>{props.tourPackage.nameEn} ({props.dep.code})</h6>
      <p style={{fontFamily: '"Poppins"', color: '#0e0001'}}>{props.dep.dtDep}</p>
      {<div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6> Adult/Children </h6>
        <h6>RM {context.peopleAmount ? context.peopleAmount : 0} </h6>
      </div>}
      {<div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6> Infant </h6>
        <h6>RM {context.infantAmount ? context.infantAmount : 0} </h6>
      </div>}
      <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Booking Deposit</h6>
        <h6> RM {parseInt(context.peopleAmount)+parseInt(context.infantAmount)} </h6>
      </div>
      <hr className="hr mt-lg-1" />
      <p className="m-0 fw-bold" style={{fontFamily: '"Poppins"', color: '#b8b09d', letterSpacing: '0.05em'}}>TOTAL DUE</p>
      <h3 className="fw-bold mb-4 m-0" style={{fontFamily: '"Poppins"', color: '#B32129'}}>RM {parseInt(context.peopleAmount)+parseInt(context.infantAmount)}</h3>
      {/* <button type="button" className="btn rounded-pill btn-book" style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, background: '#ea242d', color: '#ffffff'}}>BOOK NOW</button> */}
    </div>
  )
}

