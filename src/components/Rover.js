import React from "react";

import calculateNewPosition from "../logic/movements";
import { isValidInstructions, isValidStartAndSize } from "../logic/validators";
import { Row, Col } from "react-bootstrap";

const Rover = props => {
  return (
    <Row>
      <Col xs={4} md={4}>
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
      </Col>
      <Col xs={4} md={4}>
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
      </Col>
      <Col xs={4} md={4}>
        <input
          value={calculateNewPosition(
            props.rover.position,
            props.rover.instructions,
            props.size
          )}
          disabled
        />
      </Col>
    </Row>
  );
};

export default Rover;
