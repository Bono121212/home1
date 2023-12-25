import React, { Component } from "react";
import classNames from "classnames";

class ClearInputBoxSearch extends Component {
  state = { focus: false, write: "" };

  render() {
    return (
      <div
        className={classNames("ui input admin_search_input", {
          focus: this.state.focus,
          write: this.state.write,
        })}
      >
        <input
          type="text"
          placeholder="그룹명을 입력해주세요."
          value={this.state.write}
          onClick={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onChange={(e) => this.setState({ write: e.target.value })}
        />
        <button class="ui button admin_text_button" disabled="" tabindex="-1">검색</button>
      </div>
    );
  }
}

export default ClearInputBoxSearch;
