import React, {Component} from 'react'
import classNames from "classnames";
import {Icon, Button} from "semantic-ui-react";

class ClearInputBoxAction01 extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui input action", {focus: this.state.focus, write: this.state.write})}>
                <input type="text" placeholder="Search..."
                       value={this.state.write}
                       onClick={() => this.setState({focus: true})} onBlur={() => this.setState({focus: false})}
                       onChange={(e) => this.setState({write: e.target.value})}
                />
                <Icon className="clear link" onClick={() => this.setState({write: ''})}/>
                <Button>승인자찾기</Button>
            </div>
        )
    }
}


export default ClearInputBoxAction01
