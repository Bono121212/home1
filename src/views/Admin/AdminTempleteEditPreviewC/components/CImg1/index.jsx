import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"


class CImg1 extends Component {

    render() {
        return (
            <div className="compo_img compo1">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={sample} />
                    </div>
                </Link>
            </div>
        );
    }
}

export default CImg1;
