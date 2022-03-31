import { v4 } from "uuid";

export const MIN = 1;
export const MAX = 80;
export const PRIMARY_COLOR = "#bc41ea";
export const SUCCESS_COLOR = "#38ca5a";
export const DANGER_COLOR = "#dc3545";
export const WARNING_COLOR = "#ffc107";
export const FINAL_COLOR = "#08befa";

const generateHeights = (totalBars) => {
  let newArr = [];
  let avg = (MAX - MIN) / totalBars;
  for (let i = 0; i < totalBars; i++) {
    newArr.push(i * avg + MIN);
  }
  shuffleArray(newArr);
  return newArr;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const getInitialBars = (totalBars) => {
  const barsHeight = generateHeights(totalBars);
  const allIds = [];

  const allBars = {};
  for (let i = 0; i < totalBars; i++) {
    let barId = v4();
    allIds.push(barId);
    allBars[barId] = {
      id: barId,
      height: barsHeight[i],
      color: PRIMARY_COLOR,
    };
  }

  return {
    allIds,
    allBars,
  };
};

export const swap = (arrayOfObj, i, j) => {
  let temp = arrayOfObj[i].height;
  arrayOfObj[i].height = arrayOfObj[j].height;
  arrayOfObj[j].height = temp;
};
