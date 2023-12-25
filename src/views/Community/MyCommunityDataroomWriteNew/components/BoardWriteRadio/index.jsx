import React, { Component } from "react";
import { Radio } from "semantic-ui-react";
import BoardWriteCheckbox from "../BoardWriteCheckbox";

class BoardWriteRadio extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-radio">
        <Radio
          className="base"
          label="멤버 공개"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        {/* 피드에 공개하기 체크박스 */}
        <BoardWriteCheckbox />

        
        <Radio
          className="base"
          label="비공개 (본인과 관리자만 게시물 확인)"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />

        
      </div>
    );
  }
}

export default BoardWriteRadio;
