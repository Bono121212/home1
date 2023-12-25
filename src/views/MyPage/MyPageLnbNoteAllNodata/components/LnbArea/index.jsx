import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import ProfileCard from "../ProfileCard";

import IconBadge from '../../../../../images/all/icon-mypage-menu-badge.svg';
import IconStamp from '../../../../../images/all/icon-mypage-menu-stamp.svg';
import IconNote from '../../../../../images/all/icon-mypage-menu-note.svg';

class LnbArea extends Component {

    render() {
        return (
            <div className="mypage_lnb">
                <div className="inner">
                    <ProfileCard />

                    <div className="mypage_menu_list">
                        <ul>
                            <li><Image src={IconBadge} alt="뱃지"/><Link to="">My Badge</Link></li>
                            <li><Image src={IconStamp} alt="스탬프"/><Link to="">My Stamp</Link></li>
                            <li className="active"><Image src={IconNote} alt="노트"/><Link to="">Note</Link></li>
                        </ul>
                        <div className="logout-area">
                            <Button>Logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LnbArea;
