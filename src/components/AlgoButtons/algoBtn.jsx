import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const AlgoBtn = ({ algorithm, children }) => {
  const dispatch = useDispatch();

  const isRunning = useSelector((state) => state.filter.isRunning);
  const animationSpeed = useSelector((state) => state.filter.animationSpeed);

  const arrayOfObj = useSelector((state) => {
    const allIds = state.bars.allIds;
    return allIds.map((barId) => state.bars.allBars[barId]);
  });

  const handleBtnClick = () => {
    const deepCloneArrayOfObj = JSON.parse(JSON.stringify(arrayOfObj));
    algorithm(deepCloneArrayOfObj, dispatch, animationSpeed);
  };

  return (
    <button disabled={isRunning} onClick={handleBtnClick}>
      {children}
    </button>
  );
};
