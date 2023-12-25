import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class TextRadio01 extends Component {
  state = { value: "value51" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="매우만족"
          name="radioGroup1"
          value="value51"
          checked={this.state.value === "value51"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="만족"
          name="radioGroup1"
          value="value52"
          checked={this.state.value === "value52"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="보통"
          name="radioGroup1"
          value="value53"
          checked={this.state.value === "value53"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="불만"
          name="radioGroup1"
          value="value54"
          checked={this.state.value === "value54"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="매우불만"
          name="radioGroup1"
          value="value55"
          checked={this.state.value === "value55"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextRadio01;
