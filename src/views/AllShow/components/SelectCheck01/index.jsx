import React, { Component } from "react";
import { List, Checkbox } from "semantic-ui-react";

class SelectCheck01 extends Component {
    render() {
        return (
            <List>
            <List.Item>
                <Checkbox
                    label="CheckOption01"
                    name="CheckGroup"
                    value="radio01"
                    defaultChecked
                />
            </List.Item>
            <List.Item>
                <Checkbox
                    label="CheckOption02"
                    name="CheckGroup"
                    value="radio02"
                />
            </List.Item>
            <List.Item>
                <Checkbox
                    label="CheckOption03"
                    name="CheckGroup"
                    value="radio03"
                />
            </List.Item>
            <List.Item>
                <Checkbox
                    label="CheckOption04"
                    name="CheckGroup"
                    value="radio04"
                />
            </List.Item>
            </List>
        );
    }
}

export default SelectCheck01;
