import {useState, useEffect, forwardRef} from 'react'
// eslint-disable-next-line react/display-name
const DateInput = forwardRef(function ( props, ref ) {

  /*
    props 
      -title: string
      -onChange: fn
      -id: string
      ref : ref
      -required:boolean
  */
  return (
    <div className="w-100 input-box-2">
        <label htmlFor="exampleInput" className="form-label input-label fw-bold mt-3">
          {props.title}
          {!props.required? <span className="text-red-600"><sup>*</sup></span> : null}
        </label>
        <input 
          type="date" 
          className="form-control input-box" 
          {...props}
          ref={ref}
        />
    </div>
  )
})

export default DateInput