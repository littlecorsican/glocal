import {useState, useEffect, forwardRef} from 'react'
// eslint-disable-next-line react/display-name
const EmailInput = forwardRef(function ( props, ref ) {

  /*
    props 
      -title: string
      -placeholder: string
      -onChange: fn
      -id: string
      -ref: ref
      -required:boolean
      -tooltipText: string
  */

  const [showTooltipText, setShowTooltipText] = useState(false)

  return (
    <div className="w-100 input-box-2">
        <label htmlFor="exampleInput" className="form-label input-label fw-bold mt-3">
          {props.title}
          {!props.required? <span className="text-red-600"><sup>*</sup></span> : null}
        </label>
        <input 
          type="email" 
          className="form-control input-box" 
          {...props}
          ref={ref}
          onFocus={()=>{
            setShowTooltipText(true)
          }}
          onBlur={()=>{
            setShowTooltipText(false)
          }}
        />
        {showTooltipText && <div className="text-red-600 text-xs">
          {props?.tooltipText}
        </div>}
        {!showTooltipText && <p></p>}
    </div>
  )
})


export default EmailInput