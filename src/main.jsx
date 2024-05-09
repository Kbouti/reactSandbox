import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState, useEffect } from "react"

import ClassInput from './class.jsx'
import Count from './count.jsx'


import FunctionalInput from "./practice.jsx"

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








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Shithead person =  {kevin}/> */}
    {/* <FunctionalInput/> */}
    <Count/>
    <ClassInput/>
  </React.StrictMode>,
)


// Log reading 4/2