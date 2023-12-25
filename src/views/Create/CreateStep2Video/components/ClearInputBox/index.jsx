import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class ClearInputBox extends Component {
    state = {focus: false, write: ''};

    render() {
        return (
            <div className="ui h48 input time">
                <input type="text"/>
                <label>h</label>
                <Icon className="clear link"/>
            </div>
        )
    }
}


export default ClearInputBox
