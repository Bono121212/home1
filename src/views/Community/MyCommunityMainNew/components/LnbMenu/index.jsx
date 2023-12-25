import React, { Component } from "react";
import { Select } from "semantic-ui-react";

import CommunityMainLeftCard01 from "../CommunityMainLeftCard01";
import CommunityMainLeftCard02 from "../CommunityMainLeftCard02";
import CommunityMainLeftCard03 from "../CommunityMainLeftCard03";
import CommunityMainLeftCard04 from "../CommunityMainLeftCard04";
import FavoritesTab from "../FavoritesTab";

const selectOptions01 = [
  { key: "last-writing", value: "last-writing", text: "최신글순" },
  { key: "last-join", value: "last-join", text: "최근가입순" },
  { key: "Alphabetically", value: "Alphabetically", text: "가나다순" },
];

class JoinedStateCard extends Component {
    state = { activeItem: "AllList" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        return (
            <div className="community-left community-main-left community-left-v2">
                <div className="sub-info-box">
                    <div className="commnuity-left-top scroll">
                        {/* [전체, 즐겨찾기, 운영중] 탭  */}
                        <FavoritesTab />

                        <Select
                        placeholder="선택해주세요"
                        className="dropdown w302 selection"
                        options={selectOptions01}
                        value="last-writing"
                        />
                    </div>
                    <div className="commu-home-scroll">
                        <CommunityMainLeftCard01 />
                        <CommunityMainLeftCard02 />
                        <CommunityMainLeftCard03 />
                        <CommunityMainLeftCard04 />
                        <CommunityMainLeftCard01 />
                        <CommunityMainLeftCard02 />
                        <CommunityMainLeftCard03 />
                        <CommunityMainLeftCard04 />
                        <CommunityMainLeftCard03 />
                        <CommunityMainLeftCard04 />
                        <CommunityMainLeftCard01 />
                        <CommunityMainLeftCard02 />
                    </div>
                </div>
            </div>
        );
    }
}

export default JoinedStateCard;
