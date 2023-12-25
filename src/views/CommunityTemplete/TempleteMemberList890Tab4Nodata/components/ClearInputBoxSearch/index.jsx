import React, { Component } from "react";
import classNames from "classnames";
import { Icon, Input } from "semantic-ui-react";

class ClearInputBoxSearch extends Component {
  state = { focus: false, write: "" };

  render() {
    return (
      <div
        className={classNames("ui h38 search input", {
          focus: this.state.focus,
          write: this.state.write,
        })}
      >
        <Input
          type="text"
          placeholder="그룹명 입력"
          value={this.state.write}
          onClick={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onChange={(e) => this.setState({ write: e.target.value })}
        />
        <Icon className="search link" />
      </div>
    );
  }
}

export default ClearInputBoxSearch;
