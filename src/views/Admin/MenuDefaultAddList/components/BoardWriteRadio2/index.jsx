import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class BoardWriteRadio2 extends Component {
  state = { value: "typeList" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-radio bwr2">
        <Radio
          className="base"
          label="목록 타입"
          name="ListType"
          value="typeList"
          checked={this.state.value === "typeList"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="이미지 타입"
          name="ListType"
          value="typeImg"
          checked={this.state.value === "typeImg"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BoardWriteRadio2;
