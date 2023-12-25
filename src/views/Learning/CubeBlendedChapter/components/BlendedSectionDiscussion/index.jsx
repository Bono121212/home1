import React from "react";
import { Button, Icon } from "semantic-ui-react";
import CommentForm from "../../../../../components/Comment/CommentForm";
import CommentSort from "../../../../../components/Comment/CommentSort";
import CommentContents from "../../../../../components/Comment/CommentContents";
import Pagination from "../../../../../components/Comment/Pagenation";
import InfoGuide from "./InfoGuide";
import InfoStat from "./InfoStat";

const BlendedSectionDiscussion = () => {
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
				<div className="right-area">
					<div className="header-link">
						<Button className="btn-link">
							<Icon className="ask"></Icon>
							<span className="blind">학습노트</span>
						</Button>
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
					<CommentSort />
					<CommentContents />
					<Pagination />
				</div>
				{/* // Comment Area */}
			</div>
			{/* // Discussion Area */}
		</div>
	);
};

export default BlendedSectionDiscussion;
