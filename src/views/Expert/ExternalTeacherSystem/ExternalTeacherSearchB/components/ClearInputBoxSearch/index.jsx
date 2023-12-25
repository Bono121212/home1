import React, { Component } from "react";
import classNames from "classnames";

class ClearInputBoxSearch extends Component {
  state = { focus: false, write: "" };

  render() {
    return (
      <>
      <div
        className={classNames("ui input admin_text_input searchb", {
          focus: this.state.focus,
          write: this.state.write,
        })}
      >
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={this.state.write}
          className="searchb-inp"
          onClick={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onChange={(e) => this.setState({ write: e.target.value })}
        />
      </div>
      <button class="ui button admin_text_button searchb" disabled="" tabindex="-1">검색</button>
      </>
    );
  }
}

export default ClearInputBoxSearch;
