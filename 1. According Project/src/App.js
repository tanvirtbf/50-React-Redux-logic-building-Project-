import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian";

function App() {
  const [selected,setSelected] = useState(null)
  return (
    <div className="App">
      <Accordian />
    </div>
  )
}

export default App;
