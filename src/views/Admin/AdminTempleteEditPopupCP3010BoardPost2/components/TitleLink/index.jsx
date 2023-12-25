import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleLink extends Component {

    render() {
        return (
            <>
               <div className="title_link">
                    <Link to="/">공지사항</Link>
               </div>
            </>
        );
    }
}

export default TitleLink;
