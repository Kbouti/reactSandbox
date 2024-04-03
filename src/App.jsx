import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
 const [counter, setCounter] = useState(0);


useEffect(() => {
 setInterval(() => {
  setCounter(count => count + 1)
  }, 1000);
}, [])



  return (
    <>
     <p>{counter} seconds have passed.</p>
    </>
  );
}

export default App;
