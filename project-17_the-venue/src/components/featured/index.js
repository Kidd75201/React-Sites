import React from "react";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />

      {/* <div className="artist_name">
        <div className="wrapper">Dallas Mavericks</div>
      </div> */}

      <TimeUntil />
    </div>
  );
};

export default Featured;
