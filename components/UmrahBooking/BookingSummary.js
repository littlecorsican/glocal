import { UmrahContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'
import api from 'api'
import { Money } from '@dintero/money'
import { payment_mode } from '@component/utils/constants.js'
import { calculateTourTotalAmount } from '@component/utils/payment.js'

export default function BookingSummary(props) {

  // const [countDown ,setCountDown] = useState(900)
  // const [startCountDown ,setStartCountDown] = useState(false)

  const umrah_context = useContext(UmrahContext)

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

  const { timer, startTimer } = props
  const { aggregateData } = umrah_context

  const adultRoom = aggregateData?.adultRoom?.amount || 0
  const childWithBedRoom = aggregateData?.childWithBedRoom?.amount || 0
  const childWithoutBedRoom = aggregateData?.childWithNoBedRoom?.amount || 0
  const infantRoom = aggregateData?.infantRoom?.amount || 0
  const deposit = umrah_context?.tourPackage?.deposit || 0
  const adminChargesPercentage = umrah_context?.adminChargesPercentage || 0
  const totalHeadCount = umrah_context?.totalHeadCount || 0

  return (
    <div id="summary_div" className="card d-flex justify-content-start flex-column flex-wrap p-4 rounded-5 shadow">
      {/* <button onClick={()=>startTimer()}>asdfadf</button> */}
      {timer > 0 && <div className="d-flex flex-wrap justify-content-center justify-content-start p-3 mt-1" style={{background: '#EA242D', borderRadius: '10px'}}>
        <h5 className="m-0 me-2" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF'}}>Booking Closes in</h5>
        <div className="d-flex justify-content-start">
          <input id="minutes" type="text" className="m-0 d-flex border-0 bg-transparent" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', width: '24px'}} disabled />
          <h5 className="m-0 me-1 equal" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF'}}>{secondsToMin(timer)}</h5>
          <input id="seconds" type="text" className="m-0 d-flex border-0 bg-transparent" style={{fontFamily: '"Poppins"', fontWeight: 700, fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', width: '30px'}} disabled />
        </div>
      </div>}
      <h5 className="fw-bold m-0 text-uppercase" style={{fontFamily: 'Montserrat', fontSize: '25px'}}>Booking Summary</h5>
      <h6 className="text-uppercase pt-lg-3 pt-2" style={{fontFamily: '"Montserrat"', fontWeight: 700, lineHeight: '20px', color: '#500000'}}>{umrah_context?.tourPackage?.nameEn} ({umrah_context?.dep?.code})</h6>
      <p style={{fontFamily: '"Poppins"', color: '#0e0001'}}>{umrah_context?.dep?.dtDep}</p>
        {/* adult count */}
      {aggregateData?.adultRoom?.quantity > 0 && <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Adult x{aggregateData.adultRoom.quantity}</h6>
        <h6>RM {aggregateData.adultRoom.amount} </h6>
      </div>}
        {/* children count */}
      {aggregateData?.childWithBedRoom?.quantity > 0 && <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Children With Bed x{aggregateData.childWithBedRoom.quantity}</h6>
        <h6>RM {aggregateData.childWithBedRoom.amount}</h6>
      </div>}
      {aggregateData?.childWithNoBedRoom?.quantity > 0 && <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Children W/O Bed x{aggregateData.childWithNoBedRoom.quantity}</h6>
        <h6>RM {aggregateData.childWithNoBedRoom.amount}</h6>
      </div>}
        {/* infant count */}
      {aggregateData?.infantRoom?.quantity > 0 && <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Infant x{aggregateData.infantRoom.quantity}</h6>
        <h6>RM {aggregateData.infantRoom.amount}</h6>
      </div>}
      <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
        <h6>Admin Charges</h6>
        <h6> {umrah_context?.adminChargesPercentage * 100 || 0}% </h6>
      </div>
      <div className="booking-summary-flex">
        <div className={`${props.selectedPaymentMode == payment_mode.pay_full_amount ? "flex-top-child" : "flex-bottom-child"}`}>
          <hr className="hr mt-lg-1" />
          <p className="m-0 fw-bold" style={{fontFamily: '"Poppins"', color: '#b8b09d', letterSpacing: '0.05em'}}>TOTAL DUE</p>
          <h3 className="fw-bold mb-4 m-0 text-colourdark" style={{fontFamily: '"Poppins"'}}>
            RM {
                props.selectedPaymentMode == payment_mode.pay_full_amount ? 
                calculateTourTotalAmount({
                  adultRoom: adultRoom,
                  childWithBedRoom: childWithBedRoom,
                  childWithoutBedRoom: childWithoutBedRoom,
                  infantRoom: infantRoom,
                  adminChargesPercentage: adminChargesPercentage,
                  deposit: deposit,
                  totalHeadCount: totalHeadCount
                }).amountPostAdminCharges
                :
                calculateTourTotalAmount({
                  adultRoom: adultRoom,
                  childWithBedRoom: childWithBedRoom,
                  childWithoutBedRoom: childWithoutBedRoom,
                  infantRoom: infantRoom,
                  adminChargesPercentage: adminChargesPercentage,
                  deposit: deposit,
                  totalHeadCount: totalHeadCount
                }).depositAmount
              }
          </h3>
        </div>
        <div className={`${props.selectedPaymentMode == payment_mode.pay_full_amount ? "flex-bottom-child" : "flex-top-child"}`}>
          <hr/>
          <div className="d-flex justify-content-between flex-row gap-1 gap-xl-2 m-0" style={{fontFamily: '"Montserrat"', color: '#500000'}}>
            <h6>Booking Deposit</h6>
            <h6> RM {umrah_context?.tourPackage?.deposit * (totalHeadCount)} </h6>
          </div>
        </div>
      </div>
    
      {/* <button type="button" className="btn rounded-pill btn-book" style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, background: '#ea242d', color: '#ffffff'}}>BOOK NOW</button> */}
    </div>
  )
}


