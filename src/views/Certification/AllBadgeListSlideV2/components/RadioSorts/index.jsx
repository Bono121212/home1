import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

export default class RadioSorts extends Component {
    state = {value : 'all'}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="radio-buttons">
                <Radio
                    className="base"
                    label='전체'
                    value='all'
                    checked={this.state.value === 'all'}
                    onChange={this.handleChange}
                    name='raioGroup'
                />
                <Radio
                    className="base"
                    label='mySUNI'
                    value='mySUNI'
                    checked={this.state.value === 'mySUNI'}
                    onChange={this.handleChange}
                    name='raioGroup'
                />
                <Radio
                    className="base"
                    label='멤버사'
                    value='membersCorp'
                    checked={this.state.value === 'membersCorp'}
                    onChange={this.handleChange}
                    name='raioGroup'
                />
            </div>
        )
    }
}
