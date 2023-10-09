import { CruiseContext } from "/global/global_context";
import Image from 'next/image'
import Link from 'next/link';
import React, {useState, useEffect, useContext, useRef} from 'react'
import ProgressBar from '../../ProgressBar'
import CruiseOverview from './CruiseOverview'
import Traveller from './Traveller'
import Summary from './Summary'
import Payment from './Payment'
import Confirmation from './Confirmation'
// import { useDebounce } from 'use-debounce';
import { cloneDeep } from 'lodash'

export default function BookingForm(props) {

    const [ progressIndex, setProgressIndex] = useState(0)
    const [ inputData, setInputData] = useState({ // default value
    })


    const nextPage=()=>{
        setProgressIndex(progressIndex + 1)
    }

    const prevPage=()=>{
        if (progressIndex > 0) {
            setProgressIndex(progressIndex - 1)
        }
    }

    useEffect(()=>{
        console.log("inputData", inputData)
    }, [inputData])

    const onChange=(input, inputData, callback="")=>{
        console.log("onChange", input.id, input.value, input)
        let inputDataClone = cloneDeep(inputData)
        if (input.type === "checkbox") {  // for checkbox
            inputDataClone[input.id] = input.checked ? "true" : ""
            setInputData(inputDataClone)
        } else {  //for not checkbox
            inputDataClone[input.id] = input.value
            setInputData(inputDataClone)
        }
        typeof callback === 'function' && callback()
    }

    return (
        <div className="card d-flex flex-column shadow mt-3 p-lg-5 p-4 shadow-lg border-0" style={{borderRadius: '30px'}}>
            {/*NAVIGATION PART ICON*/}
            <div id="progress_div" >
                <ProgressBar index={progressIndex}/>
            </div>
            <div className="divider-container">
                <div className="bar-divider-1"> </div>
            </div>
                <CruiseOverview 
                    nextPage={nextPage} 
                    prevPage={prevPage} 
                    tourDepItemList={props.tourDepItemList}
                    dep={props.dep}
                    start={props.start}
                    progressIndex={progressIndex}
                />
                <Traveller 
                    nextPage={nextPage} 
                    prevPage={prevPage} 
                    onChange={onChange}
                    inputData={inputData}
                    progressIndex={progressIndex}
                />
                <Summary 
                    nextPage={nextPage} 
                    prevPage={prevPage} 
                    inputData={inputData}
                    progressIndex={progressIndex}
                />
                <Payment nextPage={nextPage} prevPage={prevPage} progressIndex={progressIndex} />
                <Confirmation nextPage={nextPage} prevPage={prevPage} progressIndex={progressIndex} />
        </div>
    )
    
}



