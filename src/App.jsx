import { useState, useEffect } from "react";
import "./App.css";

function App() {
 const [counter, setCounter] = useState(0);


useEffect(() => {
 const key = setInterval(() => {
  setCounter(count => count + 1)
  }, 1000);


return () => {
  clearInterval(key);
};

}, [])



  return (
    <>
     <p>{counter} seconds have passed.</p>
    </>
  );
}

export default App;


// Completed useEffect reading and exercises. 4/2/24