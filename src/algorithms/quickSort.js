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

export const quickSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  quickSortHelper(arrayOfObj, 0, n - 1, toDispatchArray);

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};

const quickSortHelper = (arrayOfObj, low, high, toDispatchArray) => {
  if (low < high) {
    let pi = partition(arrayOfObj, low, high, toDispatchArray);
    quickSortHelper(arrayOfObj, low, pi - 1, toDispatchArray);
    quickSortHelper(arrayOfObj, pi + 1, high, toDispatchArray);
  } else if (low === high) {
    toDispatchArray.push(setColorOfBar(arrayOfObj[low].id, FINAL_COLOR));
  }
};

const partition = (arrayOfObj, low, high, toDispatchArray) => {
  let pivot = arrayOfObj[high].height;
  toDispatchArray.push(setColorOfBar(arrayOfObj[high].id, WARNING_COLOR));

  let i = low;

  for (let j = low; j <= high - 1; j++) {
    toDispatchArray.push(
      setPairColor(
        arrayOfObj[j].id,
        arrayOfObj[high].id,
        SUCCESS_COLOR,
        SUCCESS_COLOR
      )
    );

    if (arrayOfObj[j].height < pivot) {
      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[high].id,
          DANGER_COLOR,
          DANGER_COLOR
        )
      );

      swap(arrayOfObj, j, i);

      toDispatchArray.push(
        swapHeightsOfBars(
          arrayOfObj[i].id,
          arrayOfObj[j].id,
          arrayOfObj[i].height,
          arrayOfObj[j].height
        )
      );

      toDispatchArray.push(
        setPairColor(
          arrayOfObj[j].id,
          arrayOfObj[high].id,
          SUCCESS_COLOR,
          SUCCESS_COLOR
        )
      );

      i++;
    }

    toDispatchArray.push(
      setPairColor(
        arrayOfObj[j].id,
        arrayOfObj[high].id,
        PRIMARY_COLOR,
        PRIMARY_COLOR
      )
    );
  }

  swap(arrayOfObj, i, high);

  toDispatchArray.push(
    swapHeightsOfBars(
      arrayOfObj[i].id,
      arrayOfObj[high].id,
      arrayOfObj[i].height,
      arrayOfObj[high].height
    )
  );

  toDispatchArray.push(setColorOfBar(arrayOfObj[high].id, PRIMARY_COLOR));
  toDispatchArray.push(setColorOfBar(arrayOfObj[i].id, FINAL_COLOR));

  return i;
};
