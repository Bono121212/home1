import React, { Component } from "react";
import {Icon, Image} from "semantic-ui-react";

import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class CommunityNodata extends Component {
    render() {
        return (
        <>
            <div className="community_nodata">
                <Icon>
                    <Image src={Nodata}/>
                </Icon>
                {this.props.children}
            </div>
        </>
        );
    }
}

export default CommunityNodata;