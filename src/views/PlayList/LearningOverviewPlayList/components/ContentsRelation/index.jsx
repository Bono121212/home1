import React from "react";
import LearningLoopType1 from "../LearningLoopType1";


const ContentsRelation = () => {
	return (
		<div className="badge-detail border-none" id="lms-related-process">
			<div className="ov-paragraph">
				<div className="section-head">
					<div className="title">
						<h2 className="title-style">이런 과정은 어떠세요?</h2>
					</div>
				</div>
				<LearningLoopType1 swipeName="swiperRelations" />
			</div>
		</div>
	)
}
export default ContentsRelation;
