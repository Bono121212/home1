import React, { Component } from "react";
import CVod4A from "../CVod4A";
import CVod4B from "../CVod4B";

class ListBox extends Component{
    render() {
        return(
            <div className="list_img_box flex mg14 lst_line">
                <CVod4A />
                <CVod4A />
                <CVod4B />
                <CVod4B />
                <CVod4A />
                <CVod4B />
                <CVod4A />
                <CVod4A />
                <CVod4B />
                <CVod4B />
                <CVod4A />
                <CVod4A />
            </div>
        )
    }
}

export default ListBox