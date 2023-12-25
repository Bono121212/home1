import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class CountRadio04 extends Component {
  state = { value: "value53" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="survey-count-wrap">
        <div className="survey-count-radio">
          <Radio
            className="base"
            label="1"
            name="countGroup4"
            value="value51"
            checked={this.state.value === "value51"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="2"
            name="countGroup4"
            value="value52"
            checked={this.state.value === "value52"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="3"
            name="countGroup4"
            value="value53"
            checked={this.state.value === "value53"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="4"
            name="countGroup4"
            value="value54"
            checked={this.state.value === "value54"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="5"
            name="countGroup4"
            value="value55"
            checked={this.state.value === "value55"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="6"
            name="countGroup4"
            value="value56"
            checked={this.state.value === "value56"}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default CountRadio04;
