import {useState, useEffect} from 'react'

export default function Button(props) {

  /*
    props 
      -title: string
      -onClick: fn
      -displayCSS: string
      -backgroundCSS: string
      -colorCSS: string
      -disabled: booleon
  */

  return (
    <div className="button-container col-md-2 col-5">
        <button onClick={props.onClick} type="button" className="btn rounded-pill fw-bold w-100" 
            style={{
                fontFamily: '"Montserrat"', 
                background: props.backgroundCSS ? props.backgroundCSS : "#d1b882", 
                color: props.colorCSS ? props.colorCSS : "white", 
                display : props.displayCSS ? props.displayCSS : "block", 
            }}
            disabled = {props.disabled}
        >{props.title}</button>
    </div>
  )
}


