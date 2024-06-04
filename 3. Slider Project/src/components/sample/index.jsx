import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function SampleImageSlider({ url, limit, page }) {
  return (
    <div className="slider-main">
      <h1>Image Slider Project</h1>
      <div className="container">
        <BsArrowLeftCircleFill className="arrows arrow-left" />

        <img alt={"img"} src={""} />
        <BsArrowRightCircleFill className="arrows arrow-right" />
        <span className="circle-indicators">
          <button></button>
        </span>
      </div>
    </div>
  );
}
