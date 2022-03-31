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
  WARNING_COLOR,
} from "../utils";

export const selectionSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  let i;
  for (i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[min_idx].id,
          SUCCESS_COLOR,
          SUCCESS_COLOR
        )
      );

      if (arrayOfObj[j].height < arrayOfObj[min_idx].height) {
        toDispatchArray.push(
          setPairColor(
            arrayOfObj[j].id,
            arrayOfObj[min_idx].id,
            DANGER_COLOR,
            DANGER_COLOR
          )
        );

        toDispatchArray.push(
          setPairColor(
            arrayOfObj[j].id,
            arrayOfObj[min_idx].id,
            WARNING_COLOR,
            PRIMARY_COLOR
          )
        );
        min_idx = j;
      } else {
        toDispatchArray.push(
          setPairColor(
            arrayOfObj[j].id,
            arrayOfObj[min_idx].id,
            PRIMARY_COLOR,
            PRIMARY_COLOR
          )
        );
      }
    }

    swap(arrayOfObj, min_idx, i);

    toDispatchArray.push(
      swapHeightsOfBars(
        arrayOfObj[min_idx].id,
        arrayOfObj[i].id,
        arrayOfObj[min_idx].height,
        arrayOfObj[i].height
      )
    );

    toDispatchArray.push(setColorOfBar(arrayOfObj[min_idx].id, PRIMARY_COLOR));
    toDispatchArray.push(setColorOfBar(arrayOfObj[i].id, FINAL_COLOR));
  }

  toDispatchArray.push(setColorOfBar(arrayOfObj[i].id, FINAL_COLOR));

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};
