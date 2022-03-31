import React from "react";
import BarsContainer from "../BarsContainer/barsContainer";
import Footer from "../Footer/footer";
import "./sortingVisualizer.css";

const SortingVisualizer = (props) => {
  return (
    <div className="sorting-visualizer">
      <BarsContainer />
      <Footer />
    </div>
  );
};

export default SortingVisualizer;
