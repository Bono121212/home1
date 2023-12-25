import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class TextRadio01 extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <Radio
          className="base"
          label="근육에 공급되는 에너지가 감소한다"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="스트레스 호르몬이 분비된다"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="편도체가 활성화된다"
          name="radioGroup"
          value="value03"
          checked={this.state.value === "value03"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="전전두엽의 활성화가 감소한다"
          name="radioGroup"
          value="value04"
          checked={this.state.value === "value04"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextRadio01;
