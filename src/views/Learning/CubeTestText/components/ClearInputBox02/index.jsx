import classNames from 'classnames';
import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox02 extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui right-top-count input", { focus: this.state.focus, write: this.state.write })} style={{width: '100%'}}>
                <span class="count"><span class="now">0</span>/<span class="max">100</span></span>
                <input type="text" className='text-pop'
                       placeholder=""
                       value={this.state.write}
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
                <span class="validation">해당 문항은 필수 항목 입니다.</span>
            </div>
        )
    }
}


export default ClearInputBox02