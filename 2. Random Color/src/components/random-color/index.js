import React, { useState } from "react";
import "./styles.css";
import { useEffect } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomHex(length) {
    return Math.floor(Math.random() * length);
  }
  const generateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomHex(hex.length)];
    }
    setColor(hexColor);
  };
  const generateRgbColor = () => {
    const r = randomHex(255);
    const g = randomHex(255);
    const b = randomHex(255);
    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  useEffect(()=> {
    if(colorType === 'hex') {
      generateHexColor()
    }else if(colorType === 'rgb'){
      generateRgbColor()
    }
  },[colorType])

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => setColorType("hex")}>Create HEX Color</button>
        <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
        <button
          onClick={colorType === "hex" ? generateHexColor : generateRgbColor}
        >
          Generate Random Color
        </button>
        <div>
          {colorType === "hex" ? (
            <h3>hex value is ${color}</h3>
          ) : (
            <h3>rgb value is ${color}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomColor;
