import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import LinkContainer from "../LinkContainer";

const WebLearningContainer = (props) => {
	return (
		// 비디오 섹션
		<CubeDetailSec className="cube-sec cube-live-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">(3) Data Robot Demo 및 Q&A - TTC Digital 플랫폼 특강 녹화본 (2월 22일)</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Live</span>
							<span className="ui label text">1h 40m</span>
						</div>
					</div>
					<div className="detail-sec-body">
						{/* 예정 state="wait", 시작 state="ing", 종료 state="end" */}
						<LinkContainer state="wait" />
						<LinkContainer state="on" />
						<LinkContainer state="off" />
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<>
					{/* 예정 state="wait", 시작 state="ing", 종료 state="end" */}
					<LinkContainer state="wait" />
					<LinkContainer state="on" />
					<LinkContainer state="off" />
				</>
			}
		</CubeDetailSec>
	);
};
export default WebLearningContainer;
