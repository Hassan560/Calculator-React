import {
  CAL_ANS,
  CAL_BUTTON,
  CAL_CLEAR,
  CAL_BACKSPACE,
} from "./CalculatorActionTypes";

const initialState = {
  number: "",
  ans: "",
};

const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAL_BUTTON:
      return {
        ...state,
        number: state.number.concat(action.payload),
      };
    case CAL_ANS:
      try {
        return {
          ...state,
          ans: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ans: "Error",
        };
      }
    case CAL_CLEAR:
      return {
        ...state,
        number: "",
        ans: "",
      };
    case CAL_BACKSPACE:
      return {
        ...state,
        number: state.number.slice(0, -1),
        ans: "",
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
