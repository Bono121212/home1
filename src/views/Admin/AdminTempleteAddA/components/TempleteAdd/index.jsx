import React, { Component } from "react";
import TempleteAddDesign from "../TempleteAddDesign";
import TempleteAddPreview from "../TempleteAddPreview";


class TempleteAdd extends Component {
    state = { value: "img" };
    handleChange = (e, { value }) => this.setState({ value });

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
