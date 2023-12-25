import React, { Component } from "react";
import { List, Radio } from "semantic-ui-react";

class SelectRadio01 extends Component {
    state = {};

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <List>
            <List.Item>
                <Radio
                    label="RadioOption01"
                    name="radioGroup"
                    value="radio01"
                    checked={this.state.value === "radio01"}
                    onChange={this.handleChange}
                    defaultChecked
                />
            </List.Item>
            <List.Item>
                <Radio
                    label="RadioOption02"
                    name="radioGroup"
                    value="radio02"
                    checked={this.state.value === "radio02"}
                    onChange={this.handleChange}
                />
            </List.Item>
            <List.Item>
                <Radio
                    label="RadioOption03"
                    name="radioGroup"
                    value="radio03"
                    checked={this.state.value === "radio03"}
                    onChange={this.handleChange}
                />
            </List.Item>
            <List.Item>
                <Radio
                    className="base"
                    label="RadioOption04"
                    name="radioGroup"
                    value="radio04"
                    checked={this.state.value === "radio04"}
                    onChange={this.handleChange}
                />
            </List.Item>
            </List>
        );
    }
}

export default SelectRadio01;
