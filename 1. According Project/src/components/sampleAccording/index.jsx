import { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import data from "./data";
import "./styles.css";

export default function SampleAccordian() {
  const [selected, setSelected] = useState(null);

  const singleClick = (id) => {
    setSelected(selected === id ? null : id);
  };
  const doubleClick = () => {};

  return (
    <div className="main">
      <div className="row">
        <div className="accordian-btn">
          <button>Enable Multi Selection</button>
        </div>
        <div className="accordian-item">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="items">
                <div
                  className="items-heading"
                  onClick={() => singleClick(item.id)}
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
                  {selected === item.id
                    ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    : null}
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
