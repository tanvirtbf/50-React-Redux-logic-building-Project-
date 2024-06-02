import { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import data from "./data";
import "./styles.css";

export default function SampleAccordian() {
  const [selected, setSelected] = useState(null);
  const [isEnable, setIsEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const singleClick = (id) => {
    setSelected(selected === id ? null : id);
  };
  const doubleClick = (id) => {
    const multiArr = [...multiple];
    const searchIndex = multiArr.indexOf(id);
    if (searchIndex === -1) multiArr.push(id);
    else multiArr.splice(searchIndex, 1);
    setMultiple(multiArr);
    console.log(multiArr);
  };

  return (
    <div className="main">
      <div className="row">
        <div className="accordian-btn">
          <button onClick={() => setIsEnable(!isEnable)}>
            {isEnable ? "Disable" : "Enable"} Multi Selection
          </button>
        </div>
        <div className="accordian-item">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="items" key={item.id}>
                <div
                  className="items-heading"
                  onClick={() =>
                    isEnable ? doubleClick(item.id) : singleClick(item.id)
                  }
                >
                  <h2>{item.question}</h2>
                  <span>
                    {selected === item.id ? (
                      <FaArrowAltCircleDown className="arrow" />
                    ) : (
                      <FaArrowAltCircleUp className="arrow" />
                    )}
                  </span>
                </div>
                <div className="items-text">
                  {isEnable
                    ? multiple.indexOf(item.id) !== -1 && (
                        <div className="content">{item.answer}</div>
                      )
                    : selected === item.id && (
                        <div className="content">{item.answer}</div>
                      )}
                </div>
              </div>
            ))
          ) : (
            <h1>Data not found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
