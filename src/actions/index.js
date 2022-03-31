import { getInitialBars } from "../utils";

export const generateBars = (totalBars) => {
  const payload = getInitialBars(totalBars);
  return {
    type: "GENERATE_BARS",
    payload,
  };
};

export const setAnimationSpeed = (animationSpeed) => {
  return {
    type: "SET_ANIMATION_SPEED",
    animationSpeed,
  };
};

export const swapHeightsOfBars = (id1, id2, height1, height2) => {
  return {
    type: "SWAP_HEIGHTS",
    id1,
    id2,
    height1,
    height2,
  };
};

export const setIsRunning = (isRunning) => {
  return {
    type: "SET_ISRUNNING",
    isRunning,
  };
};

export const setPairColor = (id1, id2, color1, color2) => {
  return {
    type: "SET_COLOR_OF_PAIR",
    id1,
    id2,
    color1,
    color2,
  };
};

export const setColorOfBar = (id, color) => {
  return {
    type: 'SET_BAR_COLOR',
    id,
    color,
  }
}
