import { useState } from "react";
import data from "../accordian/data";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "./styles.css";

export default function SampleAccordian() {
  const [selected,setSelected] = useState(null)
  const [isEnable,setIsEnable] = useState(false)
  const [multiple,setMultiple] = useState([])

  const singleSelected = (id) => {
    setSelected(selected === id ? null : id)
  }
  const multiSelected = (id) => {
    const multi = [...multiple]
    let searchIndex = multi.indexOf(id)
    if(searchIndex === -1) multi.push(id)
      else multi.splice(searchIndex,1)
    setMultiple(multi)
    console.log(multiple)
  }
  return (
    <div className="main">
      <div className="row">
        <div className="accordian-btn">
          <button onClick={()=> setIsEnable(!isEnable)}>{isEnable ? 'Disable' : 'Enable'} Multi Selection</button>
        </div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordian-item" key={item.id}>
              <div className="items">
                <div className="items-heading" onClick={()=> isEnable ? multiSelected(item.id) :singleSelected(item.id)}>
                  <h2>{item.question}</h2>
                  <span>{selected ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}</span>
                </div>
                <div className="items-text">
                {isEnable ? multiple.indexOf(item.id) !== -1 && <p>{item.answer}</p> : selected === item.id ? <p>{item.answer}</p> : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Data Not Found</h1>
        )}
      </div>
    </div>
  );
}
