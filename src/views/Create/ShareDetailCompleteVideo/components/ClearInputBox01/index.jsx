import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui h48 input", { focus: this.state.focus, write: this.state.write })}>
                <input type="text" placeholder="직접입력 선택 시 활성화 됩니다."
                       // value='EBS 중학'
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
            </div>

        )
    }
}


export default ClearInputBox
