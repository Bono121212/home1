import React, {Component} from 'react'
import classNames from "classnames";
import {Icon} from "semantic-ui-react";

class ClearInputBoxSearch extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui h38 search input", {focus: this.state.focus, write: this.state.write})}>
                <input type="text" placeholder="닉네임을 입력하세요"
                       value={this.state.write}
                       onClick={() => this.setState({focus: true})} onBlur={() => this.setState({focus: false})}
                       onChange={(e) => this.setState({write: e.target.value})}
                />
                {/* <Icon className="clear link" onClick={() => this.setState({write: ''})}/> */}
                <Icon className="search link"/>
            </div>
        )
    }
}

export default ClearInputBoxSearch
