import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class BoardWriteCheckbox extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-checkbox feed_chkbox">
        <Checkbox
          className="base"
          label="중요 등록"
          name="radioGroup"
          value="oldest"
        />
      </div>
    );
  }
}

export default BoardWriteCheckbox;