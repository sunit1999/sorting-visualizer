export const toDispatch = (dispatch, toDispatchArray, animationSpeed) => {
  for (let i = 0; i < toDispatchArray.length; i++) {
    setTimeout(() => {
      dispatch(toDispatchArray[i]);
    }, i * animationSpeed);
  }
};
