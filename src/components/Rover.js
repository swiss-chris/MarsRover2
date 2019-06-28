import React from "react";

import calculateNewPosition from "../logic/movements";

const Rover = props => {
  return (
    <div>
      <input
        name="position"
        value={props.rover.position}
        onChange={props.handleChange}
        placeholder="999 999 W"
        pattern="\d{1,3} \d{1,3} [NESW]"
        maxLength="9"
      />
      <input
        name="instructions"
        value={props.rover.instructions}
        onChange={props.handleChange}
        placeholder="LMRRMLM"
        maxLength="1000"
        pattern="[LRM]{0,1000}"
      />
      <input
        value={calculateNewPosition(
          props.rover.position,
          props.rover.instructions,
          props.size
        )}
        disabled={!props.size.match(/\d{1,3} \d{1,3}/)}
      />
    </div>
  );
};

export default Rover;
