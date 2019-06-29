import React from "react";
import { Table } from "react-bootstrap";

import Rover from "./Rover";

const Rovers = props => {
  return (
    <div>
      <h2>Rovers</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Initial Position</th>
            <th>Instructions</th>
            <th>Final Position</th>
          </tr>
        </thead>
        <tbody>
          {props.rovers.map((rover, index) => (
            <Rover
              key={index}
              rover={rover}
              size={props.size}
              handleChange={event => props.handleChange(event, index)}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Rovers;
