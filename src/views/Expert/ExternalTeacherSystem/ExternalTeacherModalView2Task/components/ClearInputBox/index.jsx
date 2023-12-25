import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <>
            <div className={classNames("ui right-top-count input", {focus: this.state.focus, write: this.state.write})}>
                <input placeholder="답변을 입력해주세요. (최대 입력 글자 수 확인 필요)"
                       value={this.state.write}
                       onClick={() => this.setState({focus: true})} onBlur={() => this.setState({focus: false})}
                       onChange={(e) => this.setState({write: e.target.value})}
                />
                <Icon className="clear link" onClick={() => this.setState({write: ''})}/>
                <span className="validation">You can enter up to 100 characters.</span>
            </div>
            <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
            </>
        )
    }
}

export default ClearInputBox
