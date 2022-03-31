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

export const heapSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arrayOfObj, n, i, toDispatchArray);
  }

  for (let i = n - 1; i >= 0; i--) {
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[0].id,
        arrayOfObj[i].id,
        SUCCESS_COLOR,
        SUCCESS_COLOR
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[0].id,
        arrayOfObj[i].id,
        DANGER_COLOR,
        DANGER_COLOR
      )
    );

    swap(arrayOfObj, 0, i);

    toDispatchArray.push(
      swapHeightsOfBars(
        arrayOfObj[0].id,
        arrayOfObj[i].id,
        arrayOfObj[0].height,
        arrayOfObj[i].height
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[0].id,
        arrayOfObj[i].id,
        SUCCESS_COLOR,
        SUCCESS_COLOR
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[0].id,
        arrayOfObj[i].id,
        PRIMARY_COLOR,
        FINAL_COLOR
      )
    );

    heapify(arrayOfObj, i, 0, toDispatchArray);
  }

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};

const heapify = (arrayOfObj, n, max_idx, toDispatchArray) => {
  let largest = max_idx;
  let left = 2 * max_idx + 1;
  let right = 2 * max_idx + 2;

  if (left < n && arrayOfObj[left].height > arrayOfObj[largest].height)
    largest = left;

  if (right < n && arrayOfObj[right].height > arrayOfObj[largest].height)
    largest = right;

  if (largest !== max_idx) {
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[largest].id,
        arrayOfObj[max_idx].id,
        SUCCESS_COLOR,
        SUCCESS_COLOR
      )
    );

    swap(arrayOfObj, max_idx, largest);

    toDispatchArray.push(
      swapHeightsOfBars(
        arrayOfObj[max_idx].id,
        arrayOfObj[largest].id,
        arrayOfObj[max_idx].height,
        arrayOfObj[largest].height
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[largest].id,
        arrayOfObj[max_idx].id,
        DANGER_COLOR,
        DANGER_COLOR
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[largest].id,
        arrayOfObj[max_idx].id,
        SUCCESS_COLOR,
        SUCCESS_COLOR
      )
    );
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[largest].id,
        arrayOfObj[max_idx].id,
        PRIMARY_COLOR,
        PRIMARY_COLOR
      )
    );

    heapify(arrayOfObj, n, largest, toDispatchArray);
  }
};
