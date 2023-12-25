import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";
//import testImg from "../../../../../images/all/img.png"
import matter01 from "../../../../../images/all/bitmap01.png"
import matter02 from "../../../../../images/all/bitmap02.png"
import matter03 from "../../../../../images/all/bitmap03.png"
import matter04 from "../../../../../images/all/bitmap04.png"
import matter05 from "../../../../../images/all/bitmap05.png"

class TextRadio03 extends Component {
  state = { value: "value31" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup3"
            value="value31"
            checked={this.state.value === "value31"}
            onChange={this.handleChange}
          />
          <img src={matter01} alt="" />
        </div>

        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup3"
            value="value32"
            checked={this.state.value === "value32"}
            onChange={this.handleChange}
          />
          <img src={matter02} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup3"
            value="value33"
            checked={this.state.value === "value33"}
            onChange={this.handleChange}
          />
          <img src={matter03} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup3"
            value="value34"
            checked={this.state.value === "value34"}
            onChange={this.handleChange}
          />
          <img src={matter04} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup3"
            value="value35"
            checked={this.state.value === "value35"}
            onChange={this.handleChange}
          />
          <img src={matter05} alt="" />
        </div>

      </div>
    );
  }
}

export default TextRadio03;
