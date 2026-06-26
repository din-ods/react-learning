import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 19;
  const addValue = () => {
    // console.log("value added" , Math.random())
    if (counter < 20) {
      // counter = counter + 1;
      setCounter(Counter+1);
      setCounter(prevCounter => prevCounter+1);//apn ne () ye hta diye single line code or clasic js
      setCounter((prevCounter => prevCounter+1));
      setCounter((prevCounter => prevCounter+1));
      setCounter((prevCounter => prevCounter+1));
 
      
    }
  };
  const removeValue = () => {
    // console.log("value added" , Math.random())
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
 
    }
  };
  return (
    <>
      <h2>chai aur react</h2>
      <h2>value count {counter}</h2>
      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
