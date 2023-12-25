import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class ContentRadio02 extends Component {
  state = { value: "value2-01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="전혀 그렇지 않다"
          name="radioGroup2"
          value="value2-01"
          checked={this.state.value === "value2-01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="그렇지 않다"
          name="radioGroup2"
          value="value2-02"
          checked={this.state.value === "value2-02"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="보통이다"
          name="radioGroup2"
          value="value2-03"
          checked={this.state.value === "value2-03"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="그렇다"
          name="radioGroup2"
          value="value2-04"
          checked={this.state.value === "value2-04"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="매우 그렇다"
          name="radioGroup2"
          value="value2-05"
          checked={this.state.value === "value2-05"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ContentRadio02;
