import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Rover from "./Rover";

const Rovers = props => {
  return (
    <Container>
      <h2>Rovers</h2>
      <Row>
        <Col xs={4} md={4}>
          Position:
        </Col>
        <Col xs={4} md={4}>
          Instructions:
        </Col>
        <Col xs={4} md={4}>
          Final Position:
        </Col>
      </Row>
      {props.rovers.map((rover, index) => (
        <Rover
          key={index}
          rover={rover}
          size={props.size}
          handleChange={event => props.handleChange(event, index)}
        />
      ))}
    </Container>
  );
};

export default Rovers;
