import React from "react";
import SampleImageSlider from "./SampleImageSlider";

const SampleSlider = () => {
  return (
    <div>
      <SampleImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={3}
      />
    </div>
  );
};

export default SampleSlider;
