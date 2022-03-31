import { combineReducers } from "redux";

const allBars = (state = {}, action) => {
  switch (action.type) {
    case "GENERATE_BARS":
      return action.payload.allBars;
    case "SWAP_HEIGHTS":
      return {
        ...state,
        [action.id1]: {
          ...state[action.id1],
          height: action.height1,
        },
        [action.id2]: {
          ...state[action.id2],
          height: action.height2,
        },
      };
    case "SET_COLOR_OF_PAIR":
      return {
        ...state,
        [action.id1]: {
          ...state[action.id1],
          color: action.color1,
        },
        [action.id2]: {
          ...state[action.id2],
          color: action.color2,
        },
      };
    case "SET_BAR_COLOR":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          color: action.color,
        },
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "GENERATE_BARS":
      return action.payload.allIds;
    default:
      return state;
  }
};

// const totalBars = (state = 0, action) => {
//   switch (action.type) {
//     case "GENERATE_BARS":
//       return action.payload.allIds.length;
//     default:
//       return state;
//   }
// };

const bars = combineReducers({
  allIds,
  allBars,
});

export default bars;
