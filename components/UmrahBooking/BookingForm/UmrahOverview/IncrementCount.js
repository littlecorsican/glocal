import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';


export default function Rooms(props) {

    const [count, setCount] = useState(0)


    useEffect(()=>{
      props.setCount(count)
    }, [count])


  
   return (
    <div className="d-flex flex-column">
        <h6 style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 700}}>{props.title}</h6>
        <div className="d-flex flex-row justify-content-between" style={{background: '#F5F5F5', width: '153px'}} >
          <button className="p-2" style={{border: '1px solid #CDCDCD'}} 
            onClick={()=>{
                if (count > 0) { // prevent number going below zero
                  setCount((count) => count - 1)
                }
                
              }
            }>
            <img src="/images/minus.png" />
          </button>
          <p className="d-flex align-items-center justify-content-center m-0 w-100 children_p" id="children_1" style={{fontFamily: '"Montserrat"', border: '1px solid #CDCDCD'}}>{count}</p>
          <button className="p-2" style={{border: '1px solid #CDCDCD'}} onClick={()=>{
                if (count < props.limit) { // prevent number going below zero
                  setCount((count) => count + 1)
                }
            }}
          >
            <img src="/images/plus.png" />
          </button>
        </div>
      </div>
   )

  }











