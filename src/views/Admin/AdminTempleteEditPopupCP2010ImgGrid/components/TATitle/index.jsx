import React, { Component } from "react";
import {Link} from "react-router-dom";

class TATitle extends Component {

    render() {
        return (
            <>
               <div className="ta_title">
                   <Link to="/">플라스틱 Zero Compaignzzz</Link>
               </div>
            </>
        );
    }
}

export default TATitle;
