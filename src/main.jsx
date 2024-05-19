import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState, useEffect } from "react"

import ClassInput from './input.jsx'
import FunctionalInput from "./practice.jsx"

import InputRetry from './retry.jsx'

const kevin = {
  name:"Kevin",
  isShithead: false,
}

const bikeThief = {
  name: "Jerry",
  "isShithead": true,
}


function Shithead({person}) {
  if (person.isShithead){
    return (
      <div>{person.name} is a shithead.</div>
    )
  } else {
    return (
      <div>{person.name} is not a shithead. Nice!</div>
    )
  }
}

// Test test 5/18







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Shithead person =  {kevin}/> */}
    {/* <FunctionalInput/> */}
    {/* <ClassInput/> */}
    <InputRetry name="Kevin"/>
  </React.StrictMode>,
)


// Log reading 4/2