import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import FavoritesTab from "../FavoritesTab";
import CommunityNodata from "../CommunityNodata";
import CommunityMainLeftCard01 from "../CommunityMainLeftCard01";
import CommunityMainLeftCard02 from "../CommunityMainLeftCard02";
import CommunityMainLeftCard03 from "../CommunityMainLeftCard03";
import CommunityMainLeftCard04 from "../CommunityMainLeftCard04";

const selectOptions01 = [
	{ key: "last-writing", value: "last-writing", text: "최신글순" },
	{ key: "last-join", value: "last-join", text: "최근가입순" },
	{ key: "Alphabetically", value: "Alphabetically", text: "가나다순" },
];

class JoinedStateCard extends Component {
	render() {
		return (
			<div className="community-left community-main-left community-left-v2">
				<div className="sub-info-box">
					<div className="commnuity-left-top scroll">
						{/* [전체, 즐겨찾기, 운영중] 탭  */}
						<FavoritesTab tabName={this.props.tabName} />

						<Select
							placeholder="선택해주세요"
							className="dropdown w302 selection"
							options={selectOptions01}
							value="last-writing"
						/>
					</div>
					{this.props.nodata
						?
						// 데이타가 없을 때
						<div className="commu-home-scroll">
							{(this.props.tabName === "LikeList") &&
								<CommunityNodata>
									<p>즐겨찾기한 커뮤니티가 없습니다.<span>관심 있는 커뮤니티를 즐겨찾기 해보세요!</span></p>
								</CommunityNodata>
							}
							{(this.props.tabName === "ManageList") &&
								<CommunityNodata>
									<p>운영중인 커뮤니티가 없습니다.</p>
								</CommunityNodata>
							}
						</div>
						:
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
					}
					{/*
						<div className="more-comments community-side">
							<Button icon className="left moreview">
							<Icon className="moreview" /> list more
							</Button>
						</div>
					*/}
				</div>
			</div>
		);
	}
}

export default JoinedStateCard;
