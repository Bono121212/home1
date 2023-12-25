import React, {Component} from 'react'
import classNames from "classnames";
import {Icon} from "semantic-ui-react";

class InputBox extends Component {
    state = {focus: false, write: '혁신, 디자인, Design, 혁신디자인, Deep, change, Deepchange'};

    render() {

        const { placeholder } = this.props;

        return (
            <div className={classNames("ui right-top-count input", { focus: this.state.focus, write: this.state.write })}>
                <span className="count"><span className="now">58</span>/<span className="max">100</span></span>
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


export default InputBox
