import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

import slideA from "../../../../../images/all/promotion-player-03.png"

class TempleteTypeA extends Component {

    render() {
        return (
            <>
                <div className="templete_type_A">
                    <div className="type_A_slide">
                        <List as="ul">
                            <List as="li"><Image src={slideA} alt="슬라이드이미지1"/></List>
                        </List>
                    </div>
                
                </div>
            </>
        );
    }
}

export default TempleteTypeA;
