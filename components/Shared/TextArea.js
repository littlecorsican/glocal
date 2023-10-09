import {useState, useEffect} from 'react'

export default function TextArea(props) {

  /*
    props 
      -title: string
      -placeholder: string
      -onChange: fn
      -id: string
      -required:boolean
  */

  return (
    <div className="mb-3">
        <label htmlFor="remarkTextArea" className="form-label input-label mt-3 fw-bold">
          {props.title}
          {!props.required? <span className="text-red-600"><sup>*</sup></span> : null}
        </label>
        <textarea className="form-control w-100 text-area" id={props.id} rows={3} cols={12} defaultValue={""} onChange={props.onChange} />
    </div>
  )
}


