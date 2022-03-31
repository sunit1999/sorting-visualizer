import { toDispatch } from "../toDispatch";
import {
  setColorOfBar,
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
          PRIMARY_COLOR,
          PRIMARY_COLOR
        )
      );
    }

    toDispatchArray.push(setColorOfBar(arrayOfObj[n - i - 1].id, FINAL_COLOR));
  }

  toDispatchArray.push(setColorOfBar(arrayOfObj[n - i - 1].id, FINAL_COLOR));

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};
