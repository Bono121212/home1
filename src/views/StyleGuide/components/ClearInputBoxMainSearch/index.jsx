import React, {Component} from 'react'
import classNames from "classnames";
import {Icon} from "semantic-ui-react";

class ClearInputBoxMainSearch extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui main search input", {focus: this.state.focus, write: this.state.write})}>
                <span className="placeholder">
                    SK University의 다양한 학습 및 포럼에 참여하세요.
                    <span className="orange">AI</span>를 검색해보시는건 어떨까요?
                </span>
                <input type="text" placeholder=""
                       value={this.state.write}
                       onClick={() => this.setState({focus: true})} onBlur={() => this.setState({focus: false})}
                       onChange={(e) => this.setState({write: e.target.value})}
                />
                <Icon className="clear link" onClick={() => this.setState({write: ''})}/>
                <Icon className="search link"/>
            </div>
        )
    }
}

export default ClearInputBoxMainSearch
