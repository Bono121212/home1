import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import LinkContainer from "../LinkContainer";
import LearningStateInfo from "../LearningStateInfo";
import LearningStateInfoCaseAll from "../LearningStateInfoCaseAll";

const WebLearningContainer = (props) => {
	return (
		// 비디오 섹션
		<CubeDetailSec className="cube-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Class</span>
							<span className="ui label text">1h 40m</span>
							{/* 학습중일때 primary*/}
							<span className="ui label text primary">학습중</span>
						</div>
					</div>
					<div className="detail-sec-body">
						<LinkContainer />
						<LearningStateInfo />
						<LearningStateInfoCaseAll /> {/* case 모음 */}
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<>
					<LinkContainer />
					<LearningStateInfo />
					<LearningStateInfoCaseAll /> {/* case 모음 */}
				</>
			}
		</CubeDetailSec>
	);
};
export default WebLearningContainer;
