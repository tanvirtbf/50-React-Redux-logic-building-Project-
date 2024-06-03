import { useState } from "react";
import "./styles.css";

const SampleRandomColor = () => {
  const [colorType ,setColorType] = useState('hex')
  const [color,setColor] = useState('#000000')
  
  function generateHex(length){
    return Math.floor(Math.random()*length)
  }
  const whatHex = () => {
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'

    for(let i = 0; i<6; i++){
      hexColor += hex[generateHex(hex.length)]
    }
    setColor(hexColor)
  }
  const whatRgb = () => {

  }
  return (
    <div className="random-color-div" style={{background:color}}>
      <div>
        <button onClick={()=> setColorType('hex')}>Hex Color</button>
        <button onClick={()=> setColorType('rgb')}>RGB Color</button>
        <button onClick={colorType === 'hex' ? whatHex : whatRgb}>Generate Color</button>
      </div>
    </div>
  );
};

export default SampleRandomColor;
