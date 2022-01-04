import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAns,
  loadBackSpace,
  loadButtons,
  loadClear,
} from "../Redux/CalculatorRedux/CalculatorAction";


export const CalculatorApp = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);
  const [cal, setCal] = useState();

  return (
    <div className="cal">
      {/* <pre>{JSON.stringify(calculator)}</pre> */}
      <input
        type="text"
        value={calculator.ans.length === 0 ? calculator.number : calculator.ans}
        onChange={(e) => setCal(e.target.value)}
        placeholder="0"
      />
      <table>
        <tr>
          <td>
      <button onClick={() => dispatch(loadClear())} className="light_white">
        AC
      </button>
      </td> 
      <td>
      <button onClick={() => dispatch(loadBackSpace())} className="light_white">
        C
      </button>
     </td> 
      <td> 
      <button
        onClick={() => dispatch(loadButtons("%"))}
        className="light_white"
      >
        %
      </button>
      </td>
      <td>
      <button onClick={() => dispatch(loadButtons("/"))} className="orange">
        /
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <button onClick={() => dispatch(loadButtons(7))} className="light_black">
        7
      </button>
      </td>
      <td>
      <button onClick={() => dispatch(loadButtons(8))} className="light_black">
        8
      </button>
      </td>
      <td>
      <button onClick={() => dispatch(loadButtons(9))} className="light_black">
        9
      </button>
      </td>
      <td>
      <button onClick={() => dispatch(loadButtons("*"))} className="orange">
        *
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <button onClick={() => dispatch(loadButtons(4))} className="light_black">
        4
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons(5))} className="light_black">
        5
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons(6))} className="light_black">
        6
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons("-"))} className="orange">
        -
      </button>
      </td>
        </tr>
        <tr>
          <td>
      <button onClick={() => dispatch(loadButtons(1))} className="light_black">
        1
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons(2))} className="light_black">
        2
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons(3))} className="light_black">
        3
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadButtons("+"))} className="orange">
        +
      </button>
      </td>
        </tr>
        <tr>
          <td colSpan={2}>
      <button onClick={() => dispatch(loadButtons(0))} className="border">
        0
      </button>
      </td>
          <td>
      <button
        onClick={() => dispatch(loadButtons("."))}
        className="light_black"
      >
        .
      </button>
      </td>
          <td>
      <button onClick={() => dispatch(loadAns())} className="orange">
        =
      </button>
      </td>
        </tr>
      </table>
    </div>
  );
};
