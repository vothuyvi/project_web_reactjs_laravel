import React from "react";
import ReactDOM from "react-dom";
import SwiftSlider from "react-swift-slider";

const Slidersmall = () => {
  const data = [
    {
      id: "1",
      src:
        "http://lav2.gq/DOAN_WEB/images/n4.jpg",
    },
    {
      id: "2",
      src:
        "http://lav2.gq/DOAN_WEB/images/n2.jpg",
    },
    {
      id: "3",
      src:
        "http://lav2.gq/DOAN_WEB/images/n3.jpg",
    },
  ];
  return (
    <div>
      <SwiftSlider data={data} height={700} showDots={false} />
    </div>
  );
};
export default Slidersmall;
