const initialState = {
  isRunning: false,
  animationSpeed: 1,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ISRUNNING":
      return {
        ...state,
        isRunning: action.isRunning,
      };
    case "SET_ANIMATION_SPEED":
      return {
        ...state,
        animationSpeed: action.animationSpeed,
      };
    default:
      return state;
  }
};

export default filter;
