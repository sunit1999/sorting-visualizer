import React from "react";
import { useSelector } from "react-redux";
import "./bar.css";

const Bar = ({ barId }) => {
  const { height, color } = useSelector((state) => state.bars.allBars[barId]);

  return (
    <div
      className="bar"
      data-id={barId}
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Bar;
