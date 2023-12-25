import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class BoardWriteCheckbox extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-checkbox">
        <Checkbox
          className="base"
          name="radioGroup"
          value="oldest"
        />
      </div>
    );
  }
}

export default BoardWriteCheckbox;
