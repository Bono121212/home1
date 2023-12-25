import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class CountRadio01 extends Component {
  state = { value: "value51" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="survey-count-wrap">
        <div className="survey-count-text">앞에 오는 텍스트 항목이 들어갑니다</div>
        <div className="survey-count-radio">
          <Radio
            className="base"
            label="1"
            name="countGroup1"
            value="value51"
            checked={this.state.value === "value51"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="2"
            name="countGroup1"
            value="value52"
            checked={this.state.value === "value52"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="3"
            name="countGroup1"
            value="value53"
            checked={this.state.value === "value53"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="4"
            name="countGroup1"
            value="value54"
            checked={this.state.value === "value54"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="5"
            name="countGroup1"
            value="value55"
            checked={this.state.value === "value55"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="6"
            name="countGroup1"
            value="value56"
            checked={this.state.value === "value56"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="7"
            name="countGroup1"
            value="value57"
            checked={this.state.value === "value57"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="8"
            name="countGroup1"
            value="value58"
            checked={this.state.value === "value58"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="9"
            name="countGroup1"
            value="value59"
            checked={this.state.value === "value59"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="10"
            name="countGroup1"
            value="value60"
            checked={this.state.value === "value60"}
            onChange={this.handleChange}
          />
        </div>
        <div className="survey-count-text">뒤에 오는 텍스트 항목이 들어갑니다</div>
      </div>
    );
  }
}

export default CountRadio01;
