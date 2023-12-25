import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleLink extends Component {

    render() {
        return (
            <>
               <div className="title_link">
                    <Link to="/">타이틀 영역입니다</Link>
               </div>
            </>
        );
    }
}

export default TitleLink;
