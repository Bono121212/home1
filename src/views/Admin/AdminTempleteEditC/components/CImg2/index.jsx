import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test2.png"

class CImg2 extends Component {

    render() {
        return (
            <div className="compo_img compo2">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={sample} />
                    </div>
                </Link>
            </div>
        );
    }
}

export default CImg2;
