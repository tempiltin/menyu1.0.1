import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const ResAbout = (props) => {
  return (
    <div className="container ">
    <div className="row justify-content-center align-center ">
      <h4 className="col-auto "><FiCheckCircle />Stol {props.stolNum}</h4>
    </div>
    <div className="row justify-content-center align-center ">
      <h1 className="col-auto ">{props.resName}</h1>
    </div>
  </div>
  )
}

export default ResAbout;


/* 
bu componenta index.jsx filega ulangan
*/