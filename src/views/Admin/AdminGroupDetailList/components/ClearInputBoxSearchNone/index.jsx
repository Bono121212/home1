import React, { Component } from "react";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";

class ClearInputBoxSearchNone extends Component {
  state = { focus: false, write: "" };

  render() {
    return (
      <div
        className={classNames("ui input admin_group_input", {
          focus: this.state.focus,
          write: this.state.write,
        })}
      >
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={this.state.write}
          onClick={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onChange={(e) => this.setState({ write: e.target.value })}
        />
      </div>
    );
  }
}

export default ClearInputBoxSearchNone;
