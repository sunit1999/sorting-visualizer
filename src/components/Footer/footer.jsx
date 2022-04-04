import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateBars, setAnimationSpeed } from "../../actions";
import { AlgoBtn } from "../AlgoButtons/algoBtn";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { selectionSort } from "../../algorithms/selectionSort";
import { insertionSort } from "../../algorithms/insertionSort";
import "./footer.css";
import { mergeSort } from "../../algorithms/mergeSort";
import { heapSort } from "../../algorithms/heapSort";
import { quickSort } from "../../algorithms/quickSort";

const Footer = () => {
  const dispatch = useDispatch();

  const totalBars = useSelector((state) => state.bars.allIds.length);
  const animationSpeed = useSelector((state) => state.filter.animationSpeed);
  const isRunning = useSelector((state) => state.filter.isRunning);

  const handleGenerateArray = (e, n = totalBars) => {
    dispatch(generateBars(n));
  };

  const handleSetSpeed = (e, s = animationSpeed) => {
    dispatch(setAnimationSpeed(s));
  };

  return (
    <div className="actions-container">
      {console.log(window.innerWidth)}
      <button disabled={isRunning} onClick={handleGenerateArray}>
        Generate Array
      </button>
      <div className="input-container">
        <div>Length</div>
        <input
          className="bars-slider"
          name="total-bars"
          type="range"
          min="5"
          max={window.innerWidth / 10}
          disabled={isRunning}
          value={totalBars}
          onChange={(e) => handleGenerateArray(e, parseInt(e.target.value))}
        />
      </div>
      <div className="input-container">
        <div>Speed</div>
        <input
          className="speed-slider"
          name="speed"
          type="range"
          min="1"
          step={10}
          max="1000"
          value={animationSpeed}
          disabled={isRunning}
          onChange={(e) => handleSetSpeed(e, parseInt(e.target.value))}
        />
      </div>
      <AlgoBtn algorithm={bubbleSort}>Bubble Sort</AlgoBtn>
      <AlgoBtn algorithm={selectionSort}>Selection Sort</AlgoBtn>
      <AlgoBtn algorithm={insertionSort}>Insertion Sort</AlgoBtn>
      <AlgoBtn algorithm={mergeSort}>Merge Sort</AlgoBtn>
      <AlgoBtn algorithm={quickSort}>Quick Sort</AlgoBtn>
      <AlgoBtn algorithm={heapSort}>Heap Sort</AlgoBtn>
    </div>
  );
};

export default Footer;
