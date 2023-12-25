import React from "react";
import { List } from "semantic-ui-react";
import CubeDetailSec from "../CubeDetailSec";

const OverviewCategory = () => {
	return (
		<CubeDetailSec className="ov-category-sec" id="lms-category">
			<div className="detail-sec-head">
				<h2 className="detail-sec-title">관련 Category</h2>
			</div>
			<div className="detail-sec-body">
				<List bulleted>
					<List.Item>
						<div className="title">AI</div>
						<div className="detail">
							AI Biz Essential / AI Tech Biginner / Language AI / AI Tech
							Advanced / Speech AI
						</div>
					</List.Item>
				</List>
			</div>
		</CubeDetailSec>
	)
}
export default OverviewCategory;
