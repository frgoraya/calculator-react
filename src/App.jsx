import React, { useReducer } from "react";
import "./App.css";
import { ACTIONS } from "./utils/actions";
import OperationButton from "./components/button/OperationButtton";
import DigitButton from "./components/button/DigitButtton";
import { reducer } from "./utils/reducer";
import { formatOperand } from "./utils/formatOperand";
import Button from "./components/button/Button";

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <Button
        title="AC"
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      />
      <Button
        title="DEL"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
      />

      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />

      <Button
        title="="
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      />
    </div>
  );
};

export default App;
