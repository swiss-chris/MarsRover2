import React from "react";

import { isValidSize } from "../logic/validators";

const Plateau = props => {
  return (
    <div>
      <h2>Plateau Size</h2>
      <input
        value={props.size}
        onChange={props.handleChange}
        placeholder="999 999"
        maxLength="7"
        className={isValidSize(props.size) ? "" : "error"}
      />
    </div>
  );
};

export default Plateau;
