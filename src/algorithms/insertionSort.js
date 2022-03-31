import { toDispatch } from "../toDispatch";
import {
  setIsRunning,
  setPairColor,
  swapHeightsOfBars,
} from "../actions";
import {
  DANGER_COLOR,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  swap,
} from "../utils";

export const insertionSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  let i;
  for (i = 1; i < n; i++) {
    let key = arrayOfObj[i].height;
    let j = i - 1;
    while (j >= 0 && arrayOfObj[j].height > key) {

      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[j + 1].id,
          SUCCESS_COLOR,
          SUCCESS_COLOR
        )
      );

      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[j + 1].id,
          DANGER_COLOR,
          DANGER_COLOR
        )
      );

      swap(arrayOfObj, j, j + 1);

      toDispatchArray.push(
        swapHeightsOfBars(
          arrayOfObj[j].id,
          arrayOfObj[j + 1].id,
          arrayOfObj[j].height,
          arrayOfObj[j + 1].height
        )
      );

      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[j + 1].id,
          PRIMARY_COLOR,
          PRIMARY_COLOR
        )
      );

      j = j - 1;
    }
  }

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};
