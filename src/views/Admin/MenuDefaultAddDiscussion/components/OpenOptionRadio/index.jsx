import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class OpenOptionRadio extends Component {
  state = { value: "option01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-radio open-option-radio">
        <Radio
          className="base"
          label="공개"
          name="optionGroup"
          value="option01"
          checked={this.state.value === "option01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="비공개"
          name="optionGroup"
          value="option02"
          checked={this.state.value === "option02"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default OpenOptionRadio;
