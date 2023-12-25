import React, {Component} from 'react'
import classNames from "classnames";
import {Icon} from "semantic-ui-react";

class LinkUrlBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui right-top-count input admin", { focus: this.state.focus, write: this.state.write })}>
                <input type="text" placeholder="https://" className="bg"
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


export default LinkUrlBox
