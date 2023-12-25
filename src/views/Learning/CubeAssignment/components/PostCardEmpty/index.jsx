import React from "react";
import { Icon } from "semantic-ui-react";

const PostCardEmpty = () => {
	return (
		<div className="post-card-empty">
			<div className="no-cont-wrap">
				<Icon className="no-contents80" />
				<span className="blind">콘텐츠 없음</span>
				<div className="text">검색결과가 없습니다.</div>
				<button className="btn-list">목록으로 돌아가기</button>
			</div>
		</div>
	);
}
export default PostCardEmpty;
