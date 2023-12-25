import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class TextRadio01 extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comments-sort">
        <div className="f-left">
          <div>총 <strong>32개의 댓글</strong></div>
        </div>
        <div className="f-right">
          <Radio
            className="base"
            label="최신순"
            name="radioGroup"
            value="value01"
            checked={this.state.value === "value01"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="좋아요순"
            name="radioGroup"
            value="value02"
            checked={this.state.value === "value02"}
            onChange={this.handleChange}
          />
          <Radio
            className="base"
            label="나의글"
            name="radioGroup"
            value="value03"
            checked={this.state.value === "value03"}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default TextRadio01;
