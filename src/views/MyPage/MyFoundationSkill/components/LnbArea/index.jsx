import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import ProfileCard from "../ProfileCard";

class LnbArea extends Component {

    render() {
        return (
            <div className="mypage_lnb">
                <div className="inner">
                    <ProfileCard />

                    <div className="mypage_menu_list">
                        <ul className="menu_list">
                            <li><Link to=""><Icon className="IconStatus"/>나의 학습 현황</Link></li>
                            <li><Link to=""><Icon className="IconBadge"/>My Badge</Link></li>
                            <li><Link to=""><Icon className="IconStamp"/>My Stamp</Link></li>
                            <li><Link to="" className="active"><Icon className="IconSkill"/>My Foundation Skill</Link></li>
                        </ul>
                        <ul className="menu_list">
                            <li><Link to=""><Icon className="IconNote"/>Note</Link></li>
                            <li><Link to=""><Icon className="IconPlay"/>Playlist</Link></li>
                        </ul>
                        <ul className="menu_list">
                            <li><Link to=""><Icon className="IconProfile"/>프로필 설정</Link></li>
                        </ul>
                        <div className="logout-area">
                            <Button>Logout<Icon className="logout-16px"/></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LnbArea;
