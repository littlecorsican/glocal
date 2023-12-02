import { CruiseContext } from "/global/global_context";
import { gender, salutation } from 'utils/constants'
import React, {useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import InputText from '@component/components/Shared/TextInput';
import DropDownMenu from '@component/components/Shared/DropDownMenu';
import DateInput from '@component/components/Shared/DateInput'
import _ from 'lodash';

export default function Rooms(props) {

   const cruise_context = useContext(CruiseContext)

   // const [debounce] = useState((e) => _.debounce((e, passengerList)=>{
   //    console.log("onChange",e.target.value)
   //    props.handleInputChange(props.type, props.id, e.target.id, e.target.value, passengerList)
   // }, 500));

   const onChange=(e)=>{
      //debounce(e, props.passengerList); 
      props.handleInputChange(props.type, props.id, e.target.id, e.target.value, props.passengerList, e)
   }

   useEffect(()=>{
      console.log(props)
   },[])

   return (
      <div>
         <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}}>{props.type} {props.id}</h5>

         {/* 1st row : names */}
         <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
            <InputText id="givenName" placeholder="Enter Your Given Name" title="Given Name" onChange={onChange} />
            <InputText id="surname" placeholder="Enter Surname" title="Surname" onChange={onChange} />
            <InputText id="nickName" placeholder="Enter Nickname" title="Nickname" onChange={onChange} />
         </div>

         {/* 2nd row  */}
         <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
            <DropDownMenu title="Title" id="salutationCd" onChange={onChange} data={salutation} valueKey="code" textKey="text" />

            <DropDownMenu title="Gender" id="sexCd" onChange={onChange} data={gender} valueKey="code" textKey="text" />

            <InputText id="icNo" placeholder="1234567-00-1234" title="IC No." onChange={onChange} />
            <DateInput title="Date of Birth" id="dob" onChange={onChange} />
         </div>

         {/* 3nd row : */}
         <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
            <InputText id="passportNo" placeholder="A123456789" title="Passport No" onChange={onChange} />
            <DateInput title="Date of Expiry" id="dtExpiry" onChange={onChange} />

            <DropDownMenu title="Nationality" id="idCountry" onChange={onChange} data={cruise_context?.country} textKey="countryName" valueKey="idCountry" />

            <div className="w-100 input-box-2">
               <label htmlFor="remarks" className="form-label input-label fw-bold mt-3">Remark</label>
               <input type="text" className="form-control input-box" id="remarks" placeholder="Enter Your Remark" onChange={onChange} />
            </div>

         </div>
         {props.type == "Traveller" && <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
            <div className="w-100 input-box-2">
               <label htmlFor="isBillingPerson" className="form-label input-label fw-bold mt-3 p-1">Is Billing Person?</label>
               <input type="checkbox" id="isBillingPerson" name="isBillingPerson" value="isBillingPerson" onChange={onChange} checked={props.billingPerson==props.id} />
            </div>
         </div>}
         <br/><br/>
      </div>
   )

  }











