import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";
import matter06 from "../../../../../images/all/matter01.png"
import matter07 from "../../../../../images/all/matter02.png"

class TextRadio04 extends Component {
  state = { value: "value41" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
          <Radio
            className="base"
            label="자연을 느낄 수 있는 조용한 들판"
            name="radioGroup4"
            value="value41"
            checked={this.state.value === "value41"}
            onChange={this.handleChange}
          />
          <img src={matter06} alt="" />

          <Radio
            className="base"
            label="바람을 느낄 수 있는 산 정상"
            name="radioGroup4"
            value="value42"
            checked={this.state.value === "value42"}
            onChange={this.handleChange}
          />
          <img src={matter07} className="img-mb30" alt="" />
      </div>
    );
  }
}

export default TextRadio04;
