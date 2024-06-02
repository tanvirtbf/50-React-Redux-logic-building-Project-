import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection] = useState(false);
  const [multiple,setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    let searchIndex = copyMultiple.indexOf(getCurrentId)
    if(searchIndex === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(searchIndex,1)
    setMultiple(copyMultiple)
    console.log('hello')
  }
  return (
    <div className="wrapper">
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>{`${enableMultiSelection ? 'Enable' : 'Disable'} Multi Section`}</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) : ()=> handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {selected === dataItem.id ? (
                    <IoMdArrowDropdownCircle className="arrow" />
                  ) : (
                    <IoMdArrowDropupCircle className="arrow" />
                  )}
                </span>
              </div>
              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id) !== -1 && 
                <div className="content">{dataItem.answer}</div> :
                selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              }
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
