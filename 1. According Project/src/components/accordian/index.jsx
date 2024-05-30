import data from "./data";

export default function Accordian() {
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="title">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
