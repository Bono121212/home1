import React from "react";
import { Button } from "semantic-ui-react";
import CubeDetailSec from "../CubeDetailSec";
import CardCommunitySlide from "../OverviewCommunitySlide";

const OverviewCommunity = () => {
	return (
		<CubeDetailSec className="ov-community-sec" id="lms-community">
			<div className="detail-sec-head">
				<h2 className="detail-sec-title"><em>김써니</em>님,<br />학습과 함께 활동할 수 있는 커뮤니티예요!</h2>
			</div>
			<div className="detail-sec-body">
				{/* 커뮤니티 */}
				<div className="ov-community">
					<div className="title-area">
						<div className="comunity-prifile">
							<div className="thumb">
								<img src="http://placeimg.com/120/60/nature" alt="" />
							</div>
							<div className="title">
								<p>AWS Certification Rush Community AWS Certification Rush Community AWS Certification Rush Community</p>
							</div>
							<div className="info">
								<div className="user-area">
									<span className="icon manager1" aria-hidden="true"></span>{/* manager1, manager2 */}
									<span className="user">허니잼잼잼허니허니잼잼잼허니허니잼잼잼허니</span>
								</div>
								{/* <span className="split"></span> */}
								<span className="member">멤버 260</span>
							</div>
							<div className="action">
								<Button className="btn-action">바로가기</Button>
							</div>
						</div>
					</div>
					<div className="slide-area">
						<CardCommunitySlide />
					</div>
				</div>
				{/* //커뮤니티 */}
			</div>
		</CubeDetailSec>
	);
}
export default OverviewCommunity;
