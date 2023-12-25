import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class ContentRadio01 extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="전혀 그렇지 않다"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="그렇지 않다"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="보통이다"
          name="radioGroup"
          value="value03"
          checked={this.state.value === "value03"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="그렇다"
          name="radioGroup"
          value="value04"
          checked={this.state.value === "value04"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="매우 그렇다"
          name="radioGroup"
          value="value05"
          checked={this.state.value === "value05"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ContentRadio01;
