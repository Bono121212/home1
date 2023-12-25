import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class TextRadio01 extends Component {
  state = { value: "value11" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="근육에 공급되는 에너지가 감소한다"
          name="radioGroup1"
          value="value11"
          checked={this.state.value === "value11"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="스트레스 호르몬이 분비된다"
          name="radioGroup1"
          value="value12"
          checked={this.state.value === "value12"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="편도체가 활성화된다"
          name="radioGroup1"
          value="value13"
          checked={this.state.value === "value13"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="전전두엽의 활성화가 감소한다"
          name="radioGroup1"
          value="value14"
          checked={this.state.value === "value14"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextRadio01;
