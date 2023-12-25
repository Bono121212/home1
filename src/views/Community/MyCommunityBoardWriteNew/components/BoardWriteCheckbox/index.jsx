import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class BoardWriteCheckbox extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
        // feed_chkbox 클래스 추가 부탁드립니다.
      <div className="board-write-checkbox feed_chkbox">
        <Checkbox
          className="base"
          label="피드에 공개하기"
          name="radioGroup"
          value="피드에공개하기"
        />
      </div>
    );
  }
}

export default BoardWriteCheckbox;
