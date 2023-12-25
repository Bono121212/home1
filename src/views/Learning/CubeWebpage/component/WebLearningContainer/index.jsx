import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import LinkContainer from "../LinkContainer";

const WebLearningContainer = (props) => {
	return (
		<CubeDetailSec className="cube-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Webpage</span>
							<span className="ui label text">1h 40m</span>
							<span className="ui label text primary">학습중</span>
							{/* <span className="ui label text done">학습완료</span> */}
						</div>
					</div>
					<div className="detail-sec-body">
						<LinkContainer />
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<>
					<LinkContainer />
				</>
			}
		</CubeDetailSec>
	);
};
export default WebLearningContainer;
