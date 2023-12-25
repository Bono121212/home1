import React, {Component} from 'react'
import classNames from "classnames";

class URLClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui w624 h48 input", { focus: this.state.focus, write: this.state.write })}>
                <input type="text" placeholder="https://"
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <i aria-hidden="true" className="clear link icon" onClick={() => this.setState({ write: '' })} />
            </div>
        )
    }
}


export default URLClearInputBox
