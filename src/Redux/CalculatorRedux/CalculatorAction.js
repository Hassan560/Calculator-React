import {
  CAL_ANS,
  CAL_BUTTON,
  CAL_CLEAR,
  CAL_BACKSPACE,
} from "./CalculatorActionTypes";

export const loadAns = (number) => {
  return {
    type: CAL_ANS,
    payload: number,
  };
};
export const loadButtons = (number) => {
  return {
    type: CAL_BUTTON,
    payload: number,
  };
};

export const loadClear = (number) => {
  return {
    type: CAL_CLEAR,
    payload: number,
  };
};

export const loadBackSpace = (number) => {
  return {
    type: CAL_BACKSPACE,
    payload: number,
  };
};
