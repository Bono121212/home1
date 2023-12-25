import React, { Component } from "react";
import {Icon, Image} from "semantic-ui-react";
// import {Link} from "react-router-dom";

import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class CommunityNodata extends Component {
    render() {
        return (
        <>
            <div className="community_nodata">
                <Icon>
                    <Image src={Nodata}/>
                </Icon>
                <p>
                    운영중인 커뮤니티가 없습니다.
                </p>
            </div>
        </>
        );
    }
}

export default CommunityNodata;