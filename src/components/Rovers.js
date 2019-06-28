import React from "react";

import Rover from "./Rover";

const Rovers = props => {
  return (
    <div>
      <h2>Rovers</h2>
      {props.rovers.map((rover, index) => (
        <Rover
          key={index}
          rover={rover}
          size={props.size}
          handleChange={event => props.handleChange(event, index)}
        />
      ))}
    </div>
  );
};

export default Rovers;
