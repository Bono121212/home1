import React from "react";
import CommentForm from "../../../../../components/Comment/CommentForm";
import CommentNoData from "../../../../../components/Comment/CommentNoData";
import InfoGuide from "./InfoGuide";
import InfoStat from "./InfoStat";
import {
	Icon,
	Button,
	Label
} from "semantic-ui-react";

const BlendedSectionDiscussionNodata = () => {
	return (
		<div className="blended blended-discussion">
			{/* Contents Header */}
			<div className="contents-header-v2">
				<div className="title-area">
					<div className="header">
						<h2>웹 3.0 시대, 먼저 충격받는 사람이 승자다!</h2>
						{/* 학습전 l-step0, 학습중 l-step1~10, 학습완료 complete (10% 단위) */}
						<span class="label-state-cube complete"><span>cube 학습완료</span></span>
					</div>
				</div>
			</div>
			{/* // Contents Header */}

			{/* Discussion Area */}
			<div className="discussion-area">
				{/* Info Area */}
				<div className="info-area">
					{/* 토론안내/이수조건 */}
					<InfoGuide />
					<InfoStat />
				</div>
				{/* // Info Area */}

				{/* Comment Area */}
				<div className="comment-area">
					{/* 코멘트입력/정렬/댓글/페이징 */}
					<CommentForm />
					<CommentNoData />
				</div>
				{/* // Comment Area */}
			</div>
			{/* // Discussion Area */}
		</div>
	);
};

export default BlendedSectionDiscussionNodata;
