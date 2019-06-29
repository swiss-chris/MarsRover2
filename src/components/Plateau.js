import React from "react";

import { isValidSize } from "../logic/validators";
import { Jumbotron, FormControl } from "react-bootstrap";

const Plateau = props => {
  return (
    <Jumbotron>
      <h2>Plateau Size</h2>
      <p>How large is the plateau on Mars ?</p>
      <FormControl
        value={props.size}
        onChange={props.handleChange}
        placeholder="999 999"
        maxLength="7"
        className={isValidSize(props.size) ? "" : "error"}
      />
    </Jumbotron>
  );
};

export default Plateau;
