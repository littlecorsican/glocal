import Layout from '../components/Layout'
import React, {useState, useEffect, forwardRef } from 'react'
import Image from 'next/image';

export default forwardRef(function CustomDropDown(props, ref) {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [displayDropDown, setDisplayDropDown] = useState("none")
  const [title, setTitle] = useState(props.title)

  const handleClick=()=>{
    if (displayDropDown == "none") {
      setDisplayDropDown("block")
    } else {
      setDisplayDropDown("none")
    }
  }

  useEffect(()=>{
    if (props.defaultValue) {
      console.log("defaultValue",props.defaultValue)
      setSelectedIndex(props.defaultValue)
      setTitle(props.data[props.defaultValue-1])
    }
  },[props.defaultValue])

  const handleChangeValue=(value, index, e)=>{
    let valueContainer = value
    if (props.objectKey != "") {
      valueContainer = value[props.objectKey] 
    }
    setSelectedIndex(index+1)
    setTitle(valueContainer)
    handleClick()
    if (props.callback) {
      props.callback(index , props.title)
    }
  }
  
  return (
    <div className="d-flex col-12">
      <div className="d-flex col-12">
        <button className="d-flex justify-content-between align-items-center px-2 py-1 col-12 dropdown rounded-1" style={{gap: '10px', color: '#460000', fontFamily: '"Montserrat"', backgroundColor: '#f5f5f5', border: '1px solid #e8e2d6'}} data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick} >
          <p className="m-0" style={{color: '#460000', fontFamily: '"Montserrat"'}} key={selectedIndex} index={selectedIndex} ref={ref}>
            {title}
          </p>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <svg width={1} height={30} viewBox="0 0 1 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="-2.18557e-08" x2="0.500002" y2={40} stroke="#B8B09D" />
            </svg>
            <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8674 0.520508H0.804165C0.0913501 0.520508 -0.271782 1.55312 0.239293 2.16623L7.77092 11.2015C8.08026 11.5726 8.59133 11.5726 8.9008 11.2015L16.4324 2.16623C16.9434 1.55312 16.5802 0.520508 15.8674 0.520508Z" fill="black" />
            </svg>
          </div>
        </button>
        <ul className="dropdown-menu justify-content-end flex-column overflow-auto p-0 text-center " style={{fontFamily: '"Poppins"', minWidth: '256px', maxHeight: '263px', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)' , margin : 'margin', transform:'translate(12px, 42px)', display : displayDropDown}}> 
        {/* inset : '0px auto auto 0px' */}
          {
            props.data != undefined && props.data.length > 0 && props.data.map((value,index)=>{
              return (
                <li className="d-flex justify-content-center align-items-center m-0" style={{borderBottom: "1px solid #CDCDCD"}} key={index} onClick={(e)=>handleChangeValue(value,index, e)}>
                    {(index+1) === selectedIndex ? 
                        <h6 className="dropdown-item py-3 mb-0 " style={{ display : "flex"}}>
                          {props.radio && <img  src="/icons/radio_button_selected.png" className="img-fluid pe-2 rounded-5" alt="radiobutton" id="image" />}
                          {props.radio ? 
                            <span>{props.objectKey=="" ? value : value[props.objectKey]}</span> 
                          : 
                            <span style={{color: "#EA242D"}}>{props.objectKey=="" ? value : value[props.objectKey]}</span> }
                        </h6>
                    :
                      <h6 className="dropdown-item py-3 mb-0 " style={{ display : "flex"}}>
                        {props.radio && <img  src="/icons/radio_button.png" className="img-fluid pe-2" alt="radiobutton" id="image"  />}
                        {props.objectKey=="" ? value : value[props.objectKey]}
                      </h6>
                    }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
})
