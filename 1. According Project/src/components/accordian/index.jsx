import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  };
  console.log(selected)
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>
                  <FaPlus />
                </span>
              </div>
              {
                selected === dataItem.id ?   
                <div className="content">{dataItem.answer}</div>
                : null
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
