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
                    즐겨찾기한 커뮤니티가 없습니다.
                    <span>관심 있는 커뮤니티를 즐겨찾기 해보세요!</span>
                </p>
            </div>
        </>
        );
    }
}

export default CommunityNodata;