import React from "react";

import calculateNewPosition from "../logic/movements";
import { isValidInstructions, isValidStartAndSize } from "../logic/validators";

const Rover = props => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <input
          name="position"
          value={props.rover.position}
          onChange={props.handleChange}
          placeholder="999 999 W"
          maxLength="9"
          className={
            !props.rover.position ||
            isValidStartAndSize(props.rover.position, props.size)
              ? ""
              : "error"
          }
        />
      </div>
      <div className="grid-item">
        <input
          name="instructions"
          value={props.rover.instructions}
          onChange={props.handleChange}
          placeholder="LMRRMLM"
          maxLength="1000"
          className={
            !props.rover.instructions ||
            isValidInstructions(props.rover.instructions)
              ? ""
              : "error"
          }
        />
      </div>
      <div className="grid-item final">
        <input
          value={calculateNewPosition(
            props.rover.position,
            props.rover.instructions,
            props.size
          )}
          disabled
        />
      </div>
    </div>
  );
};

export default Rover;
