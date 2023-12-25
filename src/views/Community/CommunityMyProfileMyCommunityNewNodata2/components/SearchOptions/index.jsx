import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

class SearchOptions extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="open-tab-radio">
        <Radio
          className="base"
          label="최근 가입순"
          name="radioGroup"
          value="value01"
          checked={this.state.value === "value01"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="최신글순"
          name="radioGroup"
          value="value02"
          checked={this.state.value === "value02"}
          onChange={this.handleChange}
        />
        <Radio
          className="base"
          label="가나다순"
          name="radioGroup"
          value="value03"
          checked={this.state.value === "value03"}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchOptions;
