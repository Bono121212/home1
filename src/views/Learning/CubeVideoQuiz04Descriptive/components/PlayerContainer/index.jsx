import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import Player from "../Player";

const PlayerContainer = (props) => {
	return (
		// 비디오 섹션
		<CubeDetailSec className="cube-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Video</span>
							<span className="ui label text">40m</span>
						</div>
					</div>
					<div className="detail-sec-body">
						<Player scrollValue={props.scrollValue} stickyValue={props.stickyValue} scrollBottom={props.scrollBottom} />
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<Player scrollValue={props.scrollValue} stickyValue={props.stickyValue} scrollBottom={props.scrollBottom} />
			}
		</CubeDetailSec>
	);
};
export default PlayerContainer;
