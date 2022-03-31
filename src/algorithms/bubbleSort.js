import { toDispatch } from "../toDispatch";
import {
  setIsRunning,
  setPairColor,
  swapHeightsOfBars,
} from "../actions";
import {
  DANGER_COLOR,
  FINAL_COLOR,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  swap,
} from "../utils";

export const bubbleSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  let i;
  for (i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[j + 1].id,
          SUCCESS_COLOR,
          SUCCESS_COLOR
        )
      );

      if (arrayOfObj[j].height > arrayOfObj[j + 1].height) {
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
      }

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
          i === n - 2 ? FINAL_COLOR : PRIMARY_COLOR,
          j + 1 === n - i - 1 ? FINAL_COLOR : PRIMARY_COLOR
        )
      );
    }
  }

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};
