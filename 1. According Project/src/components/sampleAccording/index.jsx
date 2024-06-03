import "./styles.css";

export default function SampleAccordian() {
  return (
    <div className="main">
      <div className="row">
        <div className="accordian-btn">
          <button>Multi Selection</button>
        </div>
        <div className="accordian-item">
          <div className="items">
            <div className="items-heading">
              <h2>question</h2>
              <span>icon</span>
            </div>
            <div className="items-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              incidunt!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
