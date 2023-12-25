import React, { Component } from "react";
import { Radio, Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";

import TempleteTypeA from "../TempleteTypeA";


class TempleteEdit extends Component {

    render() {
        return (
            <div className="templete_edit">  
                {/* 템플릿 수정 */}
                <TempleteTypeA />
            </div>
        );
    }
}

export default TempleteEdit;
