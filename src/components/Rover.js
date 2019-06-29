import React from "react";

import calculateNewPosition from "../logic/movements";
import {
  isValidInstructions,
  isValidStartAndSize,
  isValidSize,
  isValidStart
} from "../logic/validators";
import { FormControl } from "react-bootstrap";

const Rover = props => {
  return (
    <tr>
      <td>
        <FormControl
          name="position"
          value={props.rover.position}
          onChange={props.handleChange}
          maxLength="9"
          className={
            !props.rover.position ||
            isValidStartAndSize(props.rover.position, props.size) ||
            (isValidStart(props.rover.position) && !isValidSize(props.size))
              ? ""
              : "error"
          }
          placeholder="999 999 W"
          aria-label="position"
        />
      </td>

      <td>
        <FormControl
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
      </td>

      <td>
        <FormControl
          value={calculateNewPosition(
            props.rover.position,
            props.rover.instructions,
            props.size
          )}
          disabled
        />
      </td>
    </tr>
  );
};

export default Rover;
