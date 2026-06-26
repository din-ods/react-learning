import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);
let myObj = {
  name:"dinesh",
  age:21
}
let newArry = [1,2,3]
  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-xl">tailwindprops</h1>
    <Card username="chaiorcode" btnText="click me" />
    <Card username="dinesh singh" btnText="visit me" />
    </>
  );
}

export default App;
