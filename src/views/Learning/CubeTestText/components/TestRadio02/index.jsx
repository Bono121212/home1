import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class TextRadio02 extends Component {
  state = { value: "value21" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="자연을 느낄 수 있는 조용한 들판"
          name="radioGroup2"
          value="value21"
          checked={this.state.value === "value21"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="바람을 느낄 수 있는 산 정상"
          name="radioGroup2"
          value="value22"
          checked={this.state.value === "value22"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextRadio02;
