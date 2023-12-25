import React from "react";
import { Icon } from "semantic-ui-react";

const CommentNoData = () => {
	return (
		<div className="no-cont-wrap">
			<Icon className="no-contents80" />
			<span className="blind">콘텐츠 없음</span>
			<div className="text">등록된 댓글이 없습니다.</div>
			<div className="text03">댓글을 등록해 주세요.</div>
		</div>
	);
};

export default CommentNoData;
