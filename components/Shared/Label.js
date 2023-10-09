import {useState, useEffect} from 'react'

export default function Label(props) {

  /*
    props 
      -title: string

  */

  return (
    <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-start input-column gap-2">
        <div className="input-box-2 w-100">
            <label htmlFor="exampleInput" className="form-label input-label mt-3 fw-bold">{props.title}</label>
        </div>
    </div>
  )
}


