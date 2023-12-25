import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class BoardWriteRadio3 extends Component {
  state = { value: "typeList" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="board-write-radio bwr2">
        <Radio
          className="base"
          label="노출"
          name="RecomType"
          value="recomYes"
          checked={this.state.value === "recomYes"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="비노출"
          name="RecomType"
          value="recomNo"
          checked={this.state.value === "recomNo"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BoardWriteRadio3;
