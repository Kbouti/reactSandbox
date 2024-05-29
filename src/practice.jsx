import { useState, useEffect } from "react";
import React from "react";


import { createContext } from "react";


const ShopContext = createContext({
  products: [], cartItems: [], addToCart: () =>{},
})


const ContextPractice = () => {
  return <h1>Context Practice</h1>
}

export default ContextPractice;