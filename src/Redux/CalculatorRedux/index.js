import { combineReducers } from "redux";
import CalculatorReducer from "./CalculatorReducer";

const Reducer = combineReducers({
  calculator: CalculatorReducer,
});

export default Reducer;
