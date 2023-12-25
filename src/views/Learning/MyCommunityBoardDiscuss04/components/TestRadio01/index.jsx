import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class TextRadio01 extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="Newest"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="Oldest"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />
        <Radio
          className="base radi"
          label="My Comments"
          name="radioGroup"
          value="value03"
          checked={this.state.value === "value03"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextRadio01;
