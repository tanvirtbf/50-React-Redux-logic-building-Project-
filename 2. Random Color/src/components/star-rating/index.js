import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
export default function StarRating({ noOfStars = 5 }) {
  const [rating,setRating] = useState(0)

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return <FaStar key={index} onClick={} onMouseMove={} onMouseLeave={} size={40}/>;
      })}
    </div>
  );
}
