import { UmrahContext } from "/global/global_context";
import { gender, relationship, states, salutation } from 'utils/constants'
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
import _ from 'lodash';
import { Money } from '@dintero/money'
import { payment_mode } from '@component/utils/constants.js'
import { calculateTourTotalAmount } from '@component/utils/payment.js'

export default function Traveller(props) {

    const umrah_context = useContext(UmrahContext);
    console.log("umrah_context", umrah_context)

    const [passengerList, setPassengerList] = useState([])
    const [errorMsg, setErrorMsg] = useState("")
    const [billingPerson, setBillingPerson] = useState({
        roomNo: 1,
        travellerId: 1
    })

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

    // useEffect(()=>{
    //     umrah_context.setUserInputData(null) // clear the userinput data
    // },[])

    const storeApi=()=>{

        const { aggregateData } = umrah_context
        // calculate total amount
        const adultRoom = aggregateData?.adultRoom?.amount || 0
        const childWithBedRoom = aggregateData?.childWithBedRoom?.amount || 0
        const childWithoutBedRoom = aggregateData?.childWithNoBedRoom?.amount || 0
        const infantRoom = aggregateData?.infantRoom?.amount || 0

        const fnReturn = calculateTourTotalAmount({
            adultRoom: adultRoom,
            childWithBedRoom: childWithBedRoom,
            childWithoutBedRoom: childWithoutBedRoom,
            infantRoom: infantRoom,
            adminChargesPercentage: umrah_context.adminChargesPercentage,
            deposit: umrah_context?.umrah_context?.deposit,
            totalHeadCount: umrah_context?.totalHeadCount
        })

        // // CALCULATE TOTAL AMOUNT
        // const amountPreAdminCharges = Money.of(adultRoom, 'MYR')
        // .add(Money.of(childWithBedRoom, 'MYR'))
        // .add(Money.of(childWithoutBedRoom, 'MYR'))
        // .add(Money.of(infantRoom, 'MYR'))

        // console.log("amountPreAdminCharges", amountPreAdminCharges.toString())

        // const adminCharges = Money.of(amountPreAdminCharges, 'MYR').multiply(umrah_context.adminChargesPercentage)
        // const amountPostAdminCharges = Money.of(amountPreAdminCharges, 'MYR').add(adminCharges)

        // console.log("adminCharges", adminCharges.toString())
        // console.log("amountPostAdminCharges", amountPostAdminCharges.toString())

        // // CALCULATE DEPOSIT AMOUNT
        // const depositAmount = Money.of(umrah_context?.tourPackage?.deposit, 'MYR')
        // .multiply(umrah_context?.totalHeadCount)
        // .toString()

        const body = {
            "salutationCd": salutationCdRef.current.value||0,
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
                "idIpayConfig": umrah_context.iPayConfigListId,
                "email": emailRef.current.value,    
                "paymentAmt": umrah_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.amountPreAdminCharges : fnReturn.depositAmount,
                "adminChargesPercentage": umrah_context?.selectedPaymentMode == payment_mode.pay_full_amount ? umrah_context.adminChargesPercentage : 0,
                "adminCharges": umrah_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.adminCharges : 0,
                "totalPaymentAmt": umrah_context?.selectedPaymentMode == payment_mode.pay_full_amount ? fnReturn.amountPostAdminCharges : fnReturn.depositAmount
            }
        }

        console.log("body", body)
        umrah_context.setUserInputData(body)

        props.nextPage()
    }

    useEffect(()=>{
        console.log("passengerList2", passengerList)
    },[passengerList])

    useEffect(()=>{
        let passengerListClone = _.cloneDeep(passengerList);
        for (let i = 0 ; i < passengerListClone.length ; i ++) {
            if (passengerListClone[i].roomNo == billingPerson.roomNo && passengerListClone[i].travellerId == billingPerson.travellerId) {
                passengerListClone[i].isBillingPerson = true
            } else {
                passengerListClone[i].isBillingPerson = false
            }
        }
        setPassengerList(passengerListClone)
    },[billingPerson])

    const handleInputChange=(roomNo, travellerId, fieldId, value)=>{  //verify passenger input
        console.log(roomNo, travellerId, fieldId, value)
        let passengerListClone = _.cloneDeep(passengerList);
        console.log("passengerList", passengerList,passengerListClone )

        let exists = passengerListClone.filter((value, index)=>{ //check if item exists in array
            return value.roomNo == roomNo && value.travellerId == travellerId
        })
        console.log("exists", exists)

        if (exists.length > 0) {  // if exists, update it
            for (let i = 0 ; i < passengerListClone.length ; i ++) {
                if (passengerListClone[i].roomNo == roomNo && passengerListClone[i].travellerId == travellerId) {
                    passengerListClone[i][fieldId] = value
                    if (fieldId==="isBillingPerson") {  //handling isBillingPerson
                        setBillingPerson({
                            roomNo,
                            travellerId
                        })
                        passengerListClone[i].isBillingPerson = true
                    }
                } 
                if (passengerListClone[i].roomNo == billingPerson.roomNo && passengerListClone[i].travellerId == billingPerson.travellerId) {
                    passengerListClone[i].isBillingPerson = true
                } else {
                    passengerListClone[i].isBillingPerson = false
                }
            }
            console.log("passengerListClone", passengerListClone)
        } else {  // if no, create it
            if (fieldId==="isBillingPerson") {
                passengerListClone.push({
                    roomNo : roomNo,
                    travellerId : travellerId,
                    [fieldId] : true
                })
                setBillingPerson({
                    roomNo,
                    travellerId
                })
            } else {
                passengerListClone.push({
                    roomNo : roomNo,
                    travellerId : travellerId,
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

        if (passengerList.length < umrah_context.totalHeadCount) {
            errorMsgArr.push(<div>Please fill in missing passenger details.</div>)
        }

        // verify passenger input
        for (let i = 0 ; i < passengerList.length ; i++ ) {
            const passenger = passengerList[i];
            const travellerId = passenger.travellerId
            const roomNo = passenger.roomNo
            if (!passenger.hasOwnProperty('givenName')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} first name.</div>)
            }

            if (!passenger.hasOwnProperty('surname')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} surname.</div>)
            }

            if (!passenger.hasOwnProperty('dob')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} date of birth.</div>)
            }

            if (!passenger.hasOwnProperty('passportNo')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} passport no.</div>)
            }

            if (!passenger.hasOwnProperty('dtExpiry')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} passport expiry date.</div>)
            }

            if (!passenger.hasOwnProperty('icNo')) {
                errorMsgArr.push(<div>Please input Room {roomNo} traveller {travellerId} IC no.</div>)
            }

            if (!passenger.hasOwnProperty('salutationCd') || passenger?.salutationCd == "-1" ) {
                errorMsgArr.push(<div>Please select Room {roomNo} traveller {travellerId} salutation.</div>)
            }

            if (!passenger.hasOwnProperty('sexCd') || passenger?.sexCd == "-1" ) {
                errorMsgArr.push(<div>Please select Room {roomNo} traveller {travellerId} gender.</div>)
            }

            if (!passenger.hasOwnProperty('idCountry') || passenger?.idCountry == "-1" ) {
                errorMsgArr.push(<div>Please select Room {roomNo} traveller {travellerId} nationality.</div>)
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
        emailRef.current.value = "cyxtf@hotmail.com"
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
            "roomNo": 1,
            "travellerId": 1,
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
            // {
            // "roomNo": 1,
            // "travellerId": 2,
            // "givenName": "dsafasdf",
            // "isBillingPerson": false,
            // "surname": "asdf",
            // "nickName": "asdf",
            // "dob": "2023-11-22",
            // "icNo": "34324",
            // "salutationCd": "2",
            // "sexCd": "1",
            // "passportNo": "sdfdfds",
            // "dtExpiry": "2023-11-23",
            // "idCountry": "55"
            // }
        ])
    }

    return (
        <div style={{ display: `${props.progressIndex == 1 ? "block" : "none"}` }}>
            {/* <div><button onClick={()=>fillAllFormInstantly()}>click me</button></div> */}
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
                <DropDownMenu title="Country/Region" id="idCountry" ref={idCountryRef} data={umrah_context.country} textKey="countryName" valueKey="idCountry" />
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
                    Object.entries(umrah_context.roomData).map((value,index)=>{
                        let totalPeopleCount = 0 // to be used as traveller Id
                        let arr2 =Object.entries(value[1]).map((value2,index2)=>{
                            let arr = new Array(value2[1]).fill(value2[0]).map((value3, index3)=>{
                                totalPeopleCount += 1 
                                return <Passenger 
                                    key={`travellerId-${index3+1}-roomId-${index+1}`} 
                                    roomId={index+1} 
                                    travellerId={totalPeopleCount} 
                                    handleInputChange={handleInputChange} 
                                    billingPerson={billingPerson}
                                />
                            })
                            return arr
                        })
                        return arr2
                    })
                }

            </div>

            {/*BUTTON NEXT PART*/}
            <hr className="hr mt-lg-4" style={{marginTop: '-10px'}} />
            <div className="d-flex button-combined_div d-flex justify-content-between flex-nowrap flex-sm-wrap">
            <div className="button-container col-md-2 col-5">
                    <button type="button" className="button fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: '#d1b882',
                            display : 'none',
                        }}

                    >BACK</button>
                </div>
                <div className="button-container col-md-2 col-5">
                    <button onClick={nextPage} type="button" className="button fw-bold w-100" 
                        style={{
                            fontFamily: '"Montserrat"', 
                            background: '#d1b882',
                            display : 'block',
                        }}
                        >NEXT</button>
                </div>
            </div>
        </div>
    )
    
}

