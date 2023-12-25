import React, {Component} from 'react'
import classNames from "classnames";
import {Icon, Button} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className={classNames("ui h38 search input", { focus: this.state.focus, write: this.state.write })}>
                <input type="text" placeholder="Search"
                       value="Essentials"
                       onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                       onChange={(e) => this.setState({ write: e.target.value })}
                />
                <Button className="clear" onClick={() => this.setState({ write: '' })}><Icon className="clear link" /></Button>
                <Button className="search"><Icon className='search link'/></Button>
            </div>
        )
    }
}


export default ClearInputBox
