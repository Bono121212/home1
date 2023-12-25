import React, { Component } from "react";
import classNames from "classnames";
import { Icon, Button } from "semantic-ui-react";

class ClearInputBoxSearch extends Component {
    state = { focus: false, write: "" };

    render() {
        return (
            <>
                <div
                    className={classNames("ui input note_input", {
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
                    <Button className="btn_search"><Icon /></Button>
                </div>
            </>
        );
    }
}

export default ClearInputBoxSearch;
