import React from "react";
import { Icon } from "semantic-ui-react";

const PostCardNoData = () => {
	return (
		<div className="post-card-empty">
			<div className="no-cont-wrap">
				<Icon className="no-contents80" />
				<span className="blind">콘텐츠 없음</span>
				<div className="text">게시글이 없습니다.</div>
				<div className="text02">첫 게시글을 작성해보세요.</div>
			</div>
		</div>
	);
}
export default PostCardNoData;
