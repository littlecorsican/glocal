import {useState, useEffect, forwardRef} from 'react'
// eslint-disable-next-line react/display-name
const InputText = forwardRef(function ( props, ref ) {

  /*
    props 
      -title: string
      -placeholder: string
      -onChange: fn
      -id: string
      -ref: ref
      -required:booleon
  */

  return (
    <div className="w-100 input-box-2">
        <label htmlFor="exampleInput" className="form-label input-label fw-bold mt-3">
          {props.title}
          {props.required || props.required == undefined ? 
            <span data-tooltip-target="tooltip-default" className="text-red-600">
              <sup>
                *
              </sup>
            </span> 
          : 
            null
          }
        </label>
        <input 
          type="text" 
          className="form-control input-box" 
          {...props}
          ref={ref}
        />
    </div>
  )
})


export default InputText