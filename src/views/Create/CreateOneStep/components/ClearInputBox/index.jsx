import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {

        const { placeholder } = this.props;

        return (
            <div className={classNames("ui right-top-count input error", { focus: this.state.focus, write: this.state.write })}>
                <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
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
