import React, { Component } from "react";
import CVod3A from "../CVod3A";
import CVod3B from "../CVod3B";

class ListBox extends Component{
    render() {
        return(
            <div className="list_img_box flex mg14 lst_line">
                <CVod3A />
                <CVod3A />
                <CVod3B />
                <CVod3B />
                <CVod3A />
            </div>
        )
    }
}

export default ListBox