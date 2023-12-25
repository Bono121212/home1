import React, { Component } from "react";
import { Radio, Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";

import TempleteAddDesign from "../TempleteAddDesign";
import TempleteAddPreview from "../TempleteAddPreview";

import IconPen from "../../../../../images/all/lo-07-05-img.png";

class TempleteAdd extends Component {

    render() {
        return (
            <div className="templete_add">
               <TempleteAddDesign />
               <TempleteAddPreview />
            </div>
        );
    }
}

export default TempleteAdd;
