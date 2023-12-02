import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';


export default function IncrementCount(props) {

    // const [count, setCount] = useState(0)


    // useEffect(()=>{
    //   props.setCount(count)
    // }, [count])


  
   return (
    <div className="d-flex flex-column">
        <h6 style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 700}}>{props.title}</h6>
        <div className="d-flex flex-row justify-content-between" style={{background: '#F5F5F5', width: '153px'}} >
          <button className="p-2" style={{border: '1px solid #CDCDCD'}} 
            onClick={()=>{
                if (props.title == "Adult") { 
                  if (props.count > 1) {
                    props.setCount((count) => count - 1)
                  } else {
                    alert("Adult cannot be less than 1")
                  }
                } 
                else if (props.count > 0 ) {
                  props.setCount((count) => count - 1) // prevent number going below zero
                }
                
              }
            }>
            <img src="/images/minus.png" />
          </button>
          <p className="d-flex align-items-center justify-content-center m-0 w-100 children_p" id="children_1" style={{fontFamily: '"Montserrat"', border: '1px solid #CDCDCD'}}>{props.count}</p>
          <button className="p-2" style={{border: '1px solid #CDCDCD'}} onClick={()=>{
            console.log("incrementcount",props.count, props.occupancyCount, props.limit)
                if (props.title == "Adult" && props.occupancyCount.adult+1 > props.limit.adult) { 
                  alert("Maximum occupancy per room is 2 adult + 1 child + 1 infant")
                } else if ((props.title == "Children With Bed (< 12 yrs)" || props.title == "Children Without Bed (< 12 yrs)") && props.occupancyCount.children+1 > props.limit.children) {
                  alert("Maximum occupancy per room is 2 adult + 1 child + 1 infant")
                } else if (props.title == "Infant (< 12 yrs)" && props.occupancyCount+1 > props.limit.infant) {
                  alert("Maximum occupancy per room is 2 adult + 1 child + 1 infant")
                } else {
                  props.setCount((count) => count + 1)
                }
            }}
          >
            <img src="/images/plus.png" />
          </button>
        </div>
      </div>
   )

  }











