import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: 'AI와 Block chain과의 상관관계는 어떻게 되는가?'};

    render() {

        const { placeholder } = this.props;

        return (
            <div className={classNames("ui right-top-count input", { focus: this.state.focus, write: this.state.write })}>
                <span className="count"><span className="now">46</span>/<span className="max">100</span></span>
                <input type="text" placeholder={placeholder}
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
                <span className="validation">You can enter up to 100 characters.</span>
            </div>
        )
    }
}


export default ClearInputBox
