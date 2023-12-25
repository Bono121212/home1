import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class BoardWriteRadio extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-radio">
        <Radio
          className="base"
          label="노출"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="비노출"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BoardWriteRadio;
