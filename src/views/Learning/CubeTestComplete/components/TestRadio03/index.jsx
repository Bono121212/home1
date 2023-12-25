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

class TextRadio01 extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="course-survey-list">
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup"
            value="value01"
            checked={this.state.value === "value01"}
            onChange={this.handleChange}
          />
          <img src={matter01} alt="" />
        </div>

        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup"
            value="value02"
            checked={this.state.value === "value02"}
            onChange={this.handleChange}
          />
          <img src={matter02} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup"
            value="value03"
            checked={this.state.value === "value03"}
            onChange={this.handleChange}
          />
          <img src={matter03} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup"
            value="value04"
            checked={this.state.value === "value04"}
            onChange={this.handleChange}
          />
          <img src={matter04} alt="" />
        </div>
        <div class="radio-survey-list">
          <Radio
            className="base"
            name="radioGroup"
            value="value05"
            checked={this.state.value === "value05"}
            onChange={this.handleChange}
          />
          <img src={matter05} alt="" />
        </div>
       
      </div>
    );
  }
}

export default TextRadio01;
