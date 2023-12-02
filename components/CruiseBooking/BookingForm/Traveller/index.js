import { CruiseContext } from "/global/global_context";
import { gender, relationship, states, salutation } from '../../../../utils/constants'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState, useEffect, useContext, useRef, forwardRef} from 'react'
import Passenger from './Passenger'
import api from 'api'
import { cloneDeep } from 'lodash'
import InputText from '@component/components/Shared/TextInput';
import DropDownMenu from '@component/components/Shared/DropDownMenu';
import TextArea from '@component/components/Shared/TextArea';
import InputEmail from '@component/components/Shared/EmailInput';
import { throttle } from "lodash";
import debounce from 'lodash.debounce'
import _ from 'lodash';
import { Money } from '@dintero/money'
import { payment_mode } from '@component/utils/constants.js'
import { calculateCruiseTotalAmount } from '@component/utils/payment.js'

export default function Traveller(props) {

    const cruise_context = useContext(CruiseContext);

    const [passengerList, setPassengerList] = useState([])
    const [errorMsg, setErrorMsg] = useState("")
    const [billingPerson, setBillingPerson] = useState(1)

    const first_nameRef = useRef()
    const surnameRef = useRef()
    const nickNameRef = useRef()
    const salutationCdRef = useRef()
    const sexCdRef = useRef()
    const contact_numRef = useRef()
    const emailRef = useRef()
    const address_1Ref = useRef()
    const address_2Ref = useRef()
    const stateRef = useRef()
    const idCountryRef = useRef()
    const postcodeRef = useRef()
    const understoodRef = useRef()
    const ecSurnameRef = useRef()
    const ecGivenNameRef = useRef()
    const ecContactsRef = useRef()
    const ecEmailRef = useRef()
    const ecRelationshipRef = useRef()
    
    // const [debounce] = useState((e) => _.debounce((e, inputData)=>{
    //     console.log("input1", inputData)
    //     console.log("input2", e.target.value, e.target.id, e.target.type)
    //     props.onChange(e.target, inputData, "")
    // }, 300));

    const storeApi=()=>{

        const peopleAmount = cruise_context.peopleAmount || 0
        const infantAmount = cruise_context.infantAmount || 0
        const deposit = cruise_context?.tourPackage?.deposit || 0
        const portCharges_amt = cruise_context?.portCharges_amt || 0

        const fnReturn = calculateCruiseTotalAmount({
            peopleAmount: peopleAmount,
            infantAmount: infantAmount,
            portCharges_amt: portCharges_amt,
            adminChargesPercentage: cruise_context.adminChargesPercentage,
            deposit: cruise_context?.tourPackage?.deposit,
            totalHeadCount: cruise_context?.totalPeople + cruise_context?.totalInfant
        })


        // // CALCULATE TOTAL AMOUNT
        // const amountPreAdminCharges = Money.of(peopleAmount, 'MYR')
        // .add(Money.of(infantAmount, 'MYR'))
        // .add(Money.of(portCharges_amt, 'MYR'))

        // console.log("amountPreAdminCharges", amountPreAdminCharges)

        // const adminCharges = Money.of(amountPreAdminCharges, 'MYR').multiply(cruise_context.adminChargesPercentage)
        // const amountPostAdminCharges = Money.of(amountPreAdminCharges, 'MYR').add(adminCharges)

        // console.log("adminCharges", adminCharges)
        // console.log("amountPostAdminCharges", amountPostAdminCharges)

        // // CALCULATE DEPOSIT AMOUNT
        // const depositAmount = Money.of(cruise_context?.tourPackage?.deposit, 'MYR')
        // .multiply(cruise_context?.totalHeadCount)
        // .toString()

        const body = {
            "salutationCd": salutationCdRef.current.value,
            "surname": surnameRef.current.value,
            "givenName": first_nameRef.current.value,
            "nickName": nickNameRef.current.value,
            "sexCd": sexCdRef.current.value,
            "contactNo": contact_numRef.current.value,
            "email": emailRef.current.value,
            "idCountry": idCountryRef.current.value,
            "addressLine1": address_1Ref.current.value,
            "addressLine2": address_2Ref.current.value,
            "postcode": postcodeRef.current.value,
            "state": states[stateRef.current.value||0],
            "ecSurname": ecSurnameRef.current.value,
            "ecGivenName": ecGivenNameRef.current.value,
            "ecContacts": ecContactsRef.current.value,
            "ecEmail": ecEmailRef.current.value,
            "ecRelationship": relationship[ecRelationshipRef.current.value||0],
            "passengerList": passengerList,
            "paymentInfo": {
                "idIpayConfig": cruise_context.iPayConfigListId,
                "email": emailRef.current.value,    
                "paymentAmt": cruise_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.amountPreAdminCharges : fnReturn.depositAmount,
                "adminChargesPercentage": cruise_context?.selectedPaymentMode == payment_mode.pay_full_amount ? cruise_context.adminChargesPercentage : 0,
                "adminCharges": cruise_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.adminCharges : 0,
                "totalPaymentAmt": cruise_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.amountPostAdminCharges : fnReturn.depositAmount
            }
        }

        console.log("body", body)
        cruise_context.setUserInputData(body)

        props.nextPage()
    }

    useEffect(()=>{
        console.log("passengerList2", passengerList)
    },[passengerList])

    useEffect(()=>{
        let passengerListClone = _.cloneDeep(passengerList);
        for (let i = 0 ; i < passengerListClone.length ; i ++) {
            if (passengerListClone[i].type == "Traveller" && passengerListClone[i].Id == billingPerson) {
                passengerListClone[i].isBillingPerson = true
            } else {
                passengerListClone[i].isBillingPerson = false
            }
        }
        setPassengerList(passengerListClone)
    },[billingPerson])

    const handleInputChange=(type, Id, fieldId, value, passengerList, e)=>{  //verify passenger input
        console.log(type, Id, fieldId, value, e.target.getAttribute('type'))
        let passengerListClone = _.cloneDeep(passengerList);
        console.log("passengerListClone", passengerListClone, passengerList)

        let exists = passengerListClone.filter((value, index)=>{ //check if item exists in array
            return value.type == type && value.Id == Id
        })
        console.log("exists", exists)
        if (exists.length > 0) {  // if exists, update it
            for (let i = 0 ; i < passengerListClone.length ; i ++) {
                if (passengerListClone[i].type == type && passengerListClone[i].Id == Id) {
                    passengerListClone[i][fieldId] = value
                    if (fieldId==="isBillingPerson") {  //handling isBillingPerson
                        setBillingPerson(Id)
                        passengerListClone[i].isBillingPerson = true
                    }
                }
                if (passengerListClone[i].type == "Traveller" && passengerListClone[i].Id == billingPerson) {
                    passengerListClone[i].isBillingPerson = true
                } else {
                    passengerListClone[i].isBillingPerson = false
                }
            }
            console.log("passengerListClone", passengerListClone)
        } else {  // if no, create it
            if (fieldId==="isBillingPerson") {
                passengerListClone.push({
                    type : type,
                    Id : Id,
                    [fieldId] : true
                })
                setBillingPerson(Id)
            } else {
                passengerListClone.push({
                    type : type,
                    Id : Id,
                    [fieldId] : value
                })
            }
        }
        setPassengerList(passengerListClone)

    }

    const verifyInput=()=>{
        setErrorMsg("")
        const checked = understoodRef.current.checked
        let errorMsgArr = []

        if (!checked) {
            errorMsgArr.push(<div>Please tick the agreement checkbox</div>)
        }

        if (!first_nameRef.current.value) {
            errorMsgArr.push(<div>Please input first name.</div>)
        }

        if (!surnameRef.current.value) {
            errorMsgArr.push(<div>Please input surname.</div>)
        }

        if (!contact_numRef.current.value) {
            errorMsgArr.push(<div>Please input contact number.</div>)
        }

        if (salutationCdRef.current.value == -1) {
            errorMsgArr.push(<div>Please select salutation .</div>)
        }

        if (sexCdRef.current.value == -1) {
            errorMsgArr.push(<div>Please select gender .</div>)
        }

        if (stateRef.current.value == -1) {
            errorMsgArr.push(<div>Please select state .</div>)
        }

        if (idCountryRef.current.value == -1) {
            errorMsgArr.push(<div>Please select country .</div>)
        }

        if (!/^(|\d|-)+$/.test(contact_numRef.current.value)) {
            errorMsgArr.push(<div>Please input contact number in correct format</div>)
        }

        if (!emailRef.current.value) {
            errorMsgArr.push(<div>Please input email.</div>)
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailRef.current.value)) {
            errorMsgArr.push(<div>Please input email in correct format</div>)
        }

        if (!address_1Ref.current.value && !address_2Ref.current.value ) {
            errorMsgArr.push(<div>Please input Address.</div>)
        } 

        if (!postcodeRef.current.value) {
            errorMsgArr.push(<div>Please input PostCode.</div>)
        }

        if (!ecGivenNameRef.current.value) {
            errorMsgArr.push(<div>Please input Emergency Contact First Name.</div>)
        }

        if (!ecSurnameRef.current.value) {
            errorMsgArr.push(<div>Please input Emergency Contact Surname.</div>)
        }

        if (!ecEmailRef.current.value) {
            errorMsgArr.push(<div>Please input Emergency Contact Email.</div>)
        }

        if (!ecContactsRef.current.value) {
            errorMsgArr.push(<div>Please input Emergency Contact Phone.</div>)
        }

        if (!/^(|\d|-)+$/.test(ecContactsRef.current.value)) {
            errorMsgArr.push(<div>Please input emergency contact number in correct format</div>)
        }
        
        if (ecRelationshipRef.current.value == -1) {
            errorMsgArr.push(<div>Please select relationship.</div>)
        }

        if (passengerList.length < (cruise_context.totalPeople + cruise_context.totalInfant)) {
            errorMsgArr.push(<div>Please fill in missing passenger details.</div>)
        }

        // verify passenger input
        for (let i = 0 ; i < passengerList.length ; i++ ) {
            const passenger = passengerList[i];
            const index = i + 1
            if (!passenger.hasOwnProperty('givenName')) {
                errorMsgArr.push(<div>Please input traveller {index} first name.</div>)
            }

            if (!passenger.hasOwnProperty('surname')) {
                errorMsgArr.push(<div>Please input traveller {index} surname.</div>)
            }

            if (!passenger.hasOwnProperty('dob')) {
                errorMsgArr.push(<div>Please input traveller {index} date of birth.</div>)
            }

            if (!passenger.hasOwnProperty('passportNo')) {
                errorMsgArr.push(<div>Please input traveller {index} passport no.</div>)
            }

            if (!passenger.hasOwnProperty('dtExpiry')) {
                errorMsgArr.push(<div>Please input traveller {index} passport expiry date.</div>)
            }

            if (!passenger.hasOwnProperty('icNo')) {
                errorMsgArr.push(<div>Please input traveller {index} IC no.</div>)
            }

            if (!passenger.hasOwnProperty('salutationCd') || passenger?.salutationCd == "-1" ) {
                errorMsgArr.push(<div>Please select traveller {index} salutation.</div>)
            }

            if (!passenger.hasOwnProperty('sexCd') || passenger?.sexCd == "-1" ) {
                errorMsgArr.push(<div>Please select traveller {index} gender.</div>)
            }

            if (!passenger.hasOwnProperty('idCountry') || passenger?.idCountry == "-1" ) {
                errorMsgArr.push(<div>Please select traveller {index} nationality.</div>)
            }

        }

        console.log(errorMsgArr)
        if (errorMsgArr.length > 0) {
            setErrorMsg(errorMsgArr)
            location.href = "#topOfForm"
            return
        }
        storeApi()
    }

    const nextPage=()=>{
        verifyInput()
    }

    const fillAllFormInstantly=()=>{
        first_nameRef.current.value = "afsf"
        surnameRef.current.value = "2343asdf"
        nickNameRef.current.value = "af234sf"
        salutationCdRef.current.value = 1
        sexCdRef.current.value = 1
        contact_numRef.current.value = "124234234"
        emailRef.current.value = "asdfasf@asdftyyt.com"
        postcodeRef.current.value = "234234"
        stateRef.current.value = 3
        idCountryRef.current.value = 129
        address_1Ref.current.value = "fghfgrsdplfk opsdkf sf sdf"
        understoodRef.current.checked = true
        ecGivenNameRef.current.value = "fghfgr sdf"
        ecContactsRef.current.value = "234234"
        ecSurnameRef.current.value = "tyrty"
        ecEmailRef.current.value = "asf@adsf.com"
        ecRelationshipRef.current.value = 0
        setPassengerList([
            {
            "Id": 1,
            "type": "Traveller",
            "givenName": "asdf",
            "isBillingPerson": true,
            "surname": "asdf",
            "nickName": "asdf",
            "dob": "2023-11-21",
            "icNo": "34234",
            "sexCd": "0",
            "salutationCd": "0",
            "passportNo": "erwrwe",
            "dtExpiry": "2023-11-23",
            "idCountry": "84"
            },
            {
            "Id": 2,
            "type": "Traveller",
            "givenName": "dsafasdf",
            "isBillingPerson": false,
            "surname": "asdf",
            "nickName": "asdf",
            "dob": "2023-11-22",
            "icNo": "34324",
            "salutationCd": "2",
            "sexCd": "1",
            "passportNo": "sdfdfds",
            "dtExpiry": "2023-11-23",
            "idCountry": "55"
            }
        ])
    }

    return (
        <div style={{ display: `${props.progressIndex == 1 ? "block" : "none"}` }}>
            {/* <div><button onClick={()=>fillAllFormInstantly()}>click me</button></div>  */}
            <h2 id="topOfForm" className="d-flex justify-content-center py-5 headline-order fw-bold" style={{fontFamily: 'Montserrat', fontStyle: "normal"}}>Traveller</h2>
            <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}}>BILLING INFORMATION</h5>
            <hr className="hr mt-0" />
            <div className="text-red-500 break-normal">{...errorMsg}</div>
            {/* <!--FORM MAIN CONTAINER--> */}
            <span className="text-red-600"><sup>* = Mandatory input</sup></span> 
            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
                <InputText id="first_name" placeholder="Enter First Name" title="First Name" ref={first_nameRef} />
                <InputText id="surname" placeholder="Enter Surname" title="Surname" ref={surnameRef} />
                <InputText id="nickName" placeholder="Enter Nickname" title="Nickname" ref={nickNameRef} />
            </div>

            <div className="d-flex flex-row flex-xl-nowrap flex-no-wrap justify-content-start input-column gap-2">
                <DropDownMenu title="Title" id="salutationCd" ref={salutationCdRef} data={salutation} valueKey="code" textKey="text" />
                <DropDownMenu title="Gender" id="sexCd" ref={sexCdRef} data={gender} valueKey="code" textKey="text" />
            </div>
            <div className="d-flex flex-row flex-xl-nowrap flex-no-wrap align-items-end justify-content-start input-column gap-2">
                <InputText id="contact_num" placeholder="Enter Contact Number" title="Contact Number" ref={contact_numRef} tooltipText="Only numbers and - allowed" />
                <InputEmail id="email" placeholder="Enter Email Address" title="Email" ref={emailRef} tooltipText="Format: abc@def.com" />
            </div>

            <div className="d-flex flex-row flex-xl-nowrap justify-content-start input-column gap-2">
                <InputText id="address_1" placeholder="Enter Address 1" title="Address Line 1" ref={address_1Ref} />
            </div>

            <div className="d-flex flex-row flex-xl-nowrap justify-content-start input-column gap-2">
                <InputText id="address_2" placeholder="Enter Address 2" title="Address Line 2" ref={address_2Ref} required={false} />
            </div>
        
            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-0 gap-xl-2">
                <InputText id="postcode" placeholder="Enter Postcode Number" title="Postcode" ref={postcodeRef} />
                <DropDownMenu title="State" id="state" ref={stateRef} data={states} />
                <DropDownMenu title="Country/Region" id="idCountry" ref={idCountryRef} data={cruise_context.country} textKey="countryName" valueKey="idCountry" />
            </div>

            <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" id="understoodChkbox" ref={understoodRef} />
                <label className="form-check-label mb-4" htmlFor="understoodChkbox" style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 400}}> I understand that surcharges and entry visa may be applicable for non-Malaysian passport holder </label>
            </div>

            <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}}>EMERGENCY CONTACT</h5>
            <hr className="hr mt-0" />

            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
                <InputText id="ecGivenName" placeholder="Enter First Name" title="First Name" ref={ecGivenNameRef}  />
                <InputText id="ecSurname" placeholder="Enter Surname" title="Surname" ref={ecSurnameRef}  />
            </div>

            <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-0 gap-xl-2">
                <InputText id="ecContacts" placeholder="Enter Phone Number" title="Phone Number" ref={ecContactsRef} tooltipText="Only numbers and - allowed" />
                <InputEmail id="ecEmail" placeholder="Enter Email" title="Email" ref={ecEmailRef} tooltipText="Format: abc@def.com" />
                <DropDownMenu title="Relationship" id="ecRelationship" ref={ecRelationshipRef} data={relationship} />
            </div>

            <br/>
            <br/>
            <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, fontSize: '19px', lineHeight: '23px', textTransform: 'uppercase', color: '#500000'}}>Passenger Details</h5>
            <hr className="hr mt-0" />

            <div style={{marginBottom: 0, borderRadius: 0}}>
                {
                    new Array(cruise_context?.totalPeople).fill("").map((value,index)=>{
                        return <Passenger 
                                key={index} 
                                id={index+1} 
                                type="Traveller" 
                                handleInputChange={handleInputChange} 
                                country={cruise_context?.country}
                                passengerList={passengerList}
                                billingPerson={billingPerson}
                             />

                    })
                }

                {
                    cruise_context?.totalInfant > 0 && 
                    <Passenger 
                        key={1}
                        type="Infant"
                        id={1}
                        handleInputChange={handleInputChange}
                        country={cruise_context?.country}
                        passengerList={passengerList}
                    />
                }

            </div>

            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
                <div className="button-container col-md-2 col-5">
                    <button onClick={props.prevPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: '#d1b882',
                            color: 'white' , 
                            display : 'none',
                        }}
                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={nextPage} type="button" className="btn rounded-pill fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: '#d1b882',
                            color: 'white',
                            display : 'block',
                        }}
                        >NEXT</button>
                </div>
            </div>
        </div>
    )
    
  }



