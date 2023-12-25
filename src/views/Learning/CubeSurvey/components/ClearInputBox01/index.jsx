import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox01 extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui h48 input", { focus: this.state.focus, write: this.state.write })}>
                <span className="count">
                          <span className="now">0</span>/
                          <span className="max">100</span>
                        </span>
                <input type="text" placeholder="답변을 입력해주세요. (최대 입력 글자 수 확인 필요)"
                       readOnly
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
            </div>

        )
    }
}


export default ClearInputBox01
