import {useState, useEffect, forwardRef} from 'react'
// eslint-disable-next-line react/display-name
const PhoneInput = forwardRef(function ( props, ref ) {

  /*
    props 
      -title: string
      -placeholder: string
      -id: string
      -ref: ref
  */

  return (
    <div className="w-100 input-box-2">
        <label htmlFor="exampleInput" className="form-label input-label fw-bold mt-3">{props.title}</label>
        <input 
          type="number" 
          className="form-control input-box" 
          {...props}
          ref={ref}
        />
    </div>
  )
})


export default InputText