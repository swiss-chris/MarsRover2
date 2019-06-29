import React from "react";
import { Table } from "react-bootstrap";

import Rover from "./Rover";

const Rovers = props => {
  return (
    <div className="px-sm-4 py-sm-5 px-xs-1 py-xs-2">
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