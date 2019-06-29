import React, { Component } from "react";

import Plateau from "./Plateau";
import Rovers from "./Rovers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "5 5",
      rovers: [
        { position: "1 2 N", instructions: "LMLMLMLMM" },
        { position: "3 3 E", instructions: "MMRMMRMRRM" },
        { position: "99a 999 W", instructions: "LMRa" },
        { position: "", instructions: "" },
        { position: "", instructions: "" },
        { position: "", instructions: "" },
        { position: "", instructions: "" },
        { position: "", instructions: "" },
        { position: "", instructions: "" },
        { position: "", instructions: "" }
      ]
    };

    this.handlePlateauChange = this.handlePlateauChange.bind(this);
    this.handleRoverChange = this.handleRoverChange.bind(this);
  }

  handlePlateauChange(event) {
    this.setState({ size: event.target.value });
  }

  handleRoverChange(event, index) {
    const { name, value } = event.target;

    this.setState(prevState => {
      const rovers = prevState.rovers.map((rover, i) => {
        if (i === index) {
          return { ...rover, [name]: value };
        }
        return rover;
      });
      return { rovers };
    });
  }

  render() {
    return (
      <div className="App">
        <Plateau
          size={this.state.size}
          handleChange={this.handlePlateauChange}
        />
        <Rovers
          size={this.state.size}
          rovers={this.state.rovers}
          handleChange={this.handleRoverChange}
        />
      </div>
    );
  }
}
export default App;
