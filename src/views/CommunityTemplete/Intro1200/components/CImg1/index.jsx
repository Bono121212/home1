import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";


import Banner from "../../../../../images/all/sample-image-100-p.png";


class CImg1 extends Component {

    render() {
        return (
            <div className="compo_img compo1">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={Banner} />
                    </div>
                </Link>
            </div>
        );
    }
}

export default CImg1;
