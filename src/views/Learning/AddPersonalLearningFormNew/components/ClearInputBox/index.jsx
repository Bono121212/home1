import React, {Component} from 'react'
import classNames from "classnames";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui right-top-count input", { focus: this.state.focus, write: this.state.write })}>
                <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                <input type="text" placeholder="강좌명을 입력해주세요."
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <i aria-hidden="true" className="clear link icon" onClick={() => this.setState({ write: '' })} />
                <span className="validation">You can enter up to 100 characters.</span>
            </div>
        )
    }
}


export default ClearInputBox
