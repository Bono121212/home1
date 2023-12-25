import React from "react";
import CubeDetailSec from "../CubeDetailSec";
import CubeDetailSecCol from "../CubeDetailSecCol";
import OverviewRelationList from "../OverviewRelationList";
import OverviewBadgeList from "../OverviewBadgeList";
import OverviewBadgeList02 from "../OverviewBadgeList02";


const OverviewRelation = (props) => {
	return (
		<CubeDetailSec className="groups">
			{ props.learn === "true" &&
				<CubeDetailSecCol className="ov-relation-sec" id="lms-relation">
					<div className="detail-sec-head">
						<h2 className="detail-sec-title">이런 과정은 어떠세요?</h2>
					</div>
					<div className="detail-sec-body">
						<OverviewRelationList />
					</div>
				</CubeDetailSecCol>
			}
			{ props.badge === "true" &&
				<CubeDetailSecCol className="ov-badge-sec" id="lms-related-process">
					{/* 획득할 수 있는 뱃지 */}
					<div className="detail-sec-row">
						<div className="detail-sec-head">
							<h2 className="detail-sec-title">도전 가능한 뱃지</h2>
						</div>
						<div className="detail-sec-body">
							<OverviewBadgeList />
						</div>
					</div>
					{/* //획득할 수 있는 뱃지 */}

					{/* 추천뱃지 */}
					<div className="detail-sec-row">
						<div className="detail-sec-head">
							<h2 className="detail-sec-title">추천 뱃지도 도전해 보세요!</h2>
						</div>
						<div className="detail-sec-body">
							<OverviewBadgeList02 />
						</div>
					</div>
					{/* //추천뱃지 */}
				</CubeDetailSecCol>
			}

		</CubeDetailSec>
	)
}
export default OverviewRelation;
