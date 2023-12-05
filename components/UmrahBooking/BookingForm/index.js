import { UmrahContext } from 'global/global_context';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect, useContext} from 'react'
import React from 'react';
import ProgressBar from '../../ProgressBar'
import TourOverview from './TourOverview'
import Traveller from './Traveller'
import Summary from './Summary'
import Payment from './Payment'
import {getTourBookingIdToStorage, getTravellerDetails} from 'utils/utils'

export default class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            progressIndex : 0,
            inputData : { // default value
            } 
        };
    }

    nextPage=()=>{
        this.setState((prevState, props) => ({
            progressIndex: prevState.progressIndex + 1
        })); 
    }

    prevPage=()=>{
        if (this.state.progressIndex > 0) {
            this.setState((prevState, props) => ({
                progressIndex: prevState.progressIndex - 1
            })); 
        }
    }

    onChange=(input, callback="")=>{
        console.log(input.id, input.value, input)
        if (input.type === "checkbox") {  // for checkbox
            let inputData = this.state.inputData
            inputData[input.id] = input.checked ? "true" : ""
            this.setState({
                inputData
            },()=>{
                console.log(this.state)
            })
        } else {  //for not checkbox
            let inputData = this.state.inputData
            inputData[input.id] = input.value
            this.setState({
                inputData
            },()=>{
                console.log(this.state)
            })
        }
        typeof callback === 'function' && callback()
    }

    componentDidMount() {
        // const id = getTourBookingIdToStorage()
        // const travellerDetails = getTravellerDetails()
        // if (id && !travellerDetails) {
        //     this.setState({ progressIndex: 1 })
        // } else if (id && travellerDetails) {
        //     this.setState({ progressIndex: 3 })
        // }
    }

    render() {
        const { progressIndex, inputData }  = this.state 
        const { tourDepItemList, dep, start }  = this.props 
        return (
            <div className="card d-flex flex-column shadow mt-3 p-lg-5 p-4 shadow-lg border-0" style={{borderRadius: '30px'}}>
                {/* <button onClick={()=>this.setState({
                    progressIndex : 3
                })}>click me</button> */}
                {/*NAVIGATION PART ICON*/}
                <div id="progress_div" >
                    <ProgressBar index={this.state.progressIndex}/>
                </div>
                <div className="divider-container">
                    <div className="bar-divider-1"> </div>
                </div>
                <TourOverview 
                    nextPage={this.nextPage} 
                    prevPage={this.prevPage} 
                    tourDepItemList={tourDepItemList}
                    dep={dep}
                    start={start}
                    progressIndex={progressIndex}
                />
                <Traveller 
                    nextPage={this.nextPage} 
                    prevPage={this.prevPage} 
                    onChange={this.onChange}
                    //inputData={inputData}
                    progressIndex={progressIndex}
                />
                <Summary 
                    nextPage={this.nextPage} 
                    prevPage={this.prevPage} 
                    //inputData={inputData}
                    progressIndex={progressIndex}
                />
                <Payment nextPage={this.nextPage} prevPage={this.prevPage} progressIndex={progressIndex} />
                {/* <Confirmation nextPage={this.nextPage} prevPage={this.prevPage} progressIndex={progressIndex} /> */}
            </div>
        )
    }
  }



