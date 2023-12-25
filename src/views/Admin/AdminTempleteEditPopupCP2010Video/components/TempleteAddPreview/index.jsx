import React, { Component } from "react";
import { Radio, Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";

import IconPen from "../../../../../images/all/lo-07-05-img.png";

class TempleteAddPreview extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="add_preview">
                <div className="templete_title">
                    <span className="title">미리보기 샘플</span>
                </div>
                <div className="add_preview">
                    templete_add_preview
                </div>
            </div>
        );
    }
}

export default TempleteAddPreview;
