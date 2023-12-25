import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Banner from "../../../../../images/all/promotion-1200-x-240.jpg";

class CImg2 extends Component {

    render() {
        return (
            <div className="compo_img compo2">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={Banner} />
                        <p className="grid_txt top left">TopLeft</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CImg2;
