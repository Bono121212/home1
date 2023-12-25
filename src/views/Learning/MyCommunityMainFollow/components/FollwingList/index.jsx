import React from "react";
import profile80 from "../../../../../images/all/profile-80-px.svg";
import profile80_2 from "../../../../../images/all/img-profile-80-px.svg";
import { Icon } from "semantic-ui-react";

export default function FollowingList () {
    return(
        
        <div className="community-left community-main-left">
            <div className="sub-info-box">
            {/* _Followinglist searcharea */}
                <div className="main-left-search">
                    <div className="ui h38 search input">
                        <input type="text" placeholder="닉네임을 입력하세요."/>
                        <button>
                            <Icon className="search link"/>
                        </button>
                    </div>
                </div>
                <div className="commu-home-scroll">
                    {/* _follwing component */}
                    <div className="community-main-left-contents">
                        <div className="thumbnail">
                            <img src={profile80} alt="thumbnail" />
                        </div>
                        <div className="community-main-left-list">
                            <div className="community-main-left-h3">이름 또는 닉네임</div>
                            <div className="community-main-left-span">
                                Followers<span>15</span>Following<span>27</span>
                            </div>
                        </div>
                    </div>

                    <div className="community-main-left-contents">
                        <div className="thumbnail">
                            <img src={profile80_2} alt="thumbnail" />
                        </div>
                        <div className="community-main-left-list">
                            <div className="community-main-left-h3">이름 또는 닉네임</div>
                            <div className="community-main-left-span">
                                Followers<span>22</span>Following<span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="community-main-left-contents">
                        <div className="thumbnail">
                            <img src={profile80} alt="thumbnail" />
                        </div>
                        <div className="community-main-left-list">
                            <div className="community-main-left-h3">이름 또는 닉네임</div>
                            <div className="community-main-left-span">
                                Followers<span>2</span>Following<span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}