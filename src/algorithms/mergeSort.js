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

export const mergeSort = (arrayOfObj, dispatch, animationSpeed) => {
  let toDispatchArray = [];
  let n = arrayOfObj.length;
  toDispatchArray.push(setIsRunning(true));

  mergeSortHelper(arrayOfObj, 0, n - 1, toDispatchArray);

  toDispatchArray.push(setIsRunning(false));
  toDispatch(dispatch, toDispatchArray, animationSpeed);
};

const mergeSortHelper = (arrayOfObj, lo, hi, toDispatchArray) => {
  if (lo >= hi) return;

  let mid = Math.floor(lo + (hi - lo) / 2);

  mergeSortHelper(arrayOfObj, lo, mid, toDispatchArray);
  mergeSortHelper(arrayOfObj, mid + 1, hi, toDispatchArray);
  inPlaceMerge(arrayOfObj, lo, hi, toDispatchArray);
};

const nextGap = (gap) => {
  if (gap <= 1) return 0;
  return Math.floor(Math.ceil(gap / 2.0));
};

const inPlaceMerge = (arrayOfObj, lo, hi, toDispatchArray) => {
  let gap = hi - lo + 1;

  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    for (let i = lo; i + gap <= hi; i++) {
      let BASE_COLOR =
        gap === 1 && hi - lo + 1 === arrayOfObj.length
          ? FINAL_COLOR
          : PRIMARY_COLOR;
      toDispatchArray.push(
        setPairColor(
          arrayOfObj[i].id,
          arrayOfObj[i + gap].id,
          SUCCESS_COLOR,
          SUCCESS_COLOR
        )
      );
      if (arrayOfObj[i].height > arrayOfObj[i + gap].height) {
        toDispatchArray.push(
          setPairColor(
            arrayOfObj[i].id,
            arrayOfObj[i + gap].id,
            DANGER_COLOR,
            DANGER_COLOR
          )
        );

        swap(arrayOfObj, i, i + gap);

        toDispatchArray.push(
          swapHeightsOfBars(
            arrayOfObj[i].id,
            arrayOfObj[i + gap].id,
            arrayOfObj[i].height,
            arrayOfObj[i + gap].height
          )
        );

        toDispatchArray.push(
          setPairColor(
            arrayOfObj[i].id,
            arrayOfObj[i + gap].id,
            SUCCESS_COLOR,
            SUCCESS_COLOR
          )
        );
      }
      toDispatchArray.push(
        setPairColor(
          arrayOfObj[i].id,
          arrayOfObj[i + gap].id,
          BASE_COLOR,
          BASE_COLOR
        )
      );
    }
  }
};

/* const merge = (arr, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}; */
