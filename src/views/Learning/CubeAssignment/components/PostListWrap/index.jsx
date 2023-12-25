import React from "react";
import { Icon, Select } from "semantic-ui-react";
import PostCardEmpty from "../PostCardEmpty";
import PostCardList from "../PostCardList";
import PostCardNoData from "../PostCardNoData";

const PostListWrap = (props) => {
	const selectOptions01 = [
		{ key: "select", value: "select", text: "최신순" },
		{ key: "select", value: "select", text: "인기순" },
		{ key: "select", value: "select", text: "좋아요" },
	]

	return (
		<div className="post-list-wrap">
			<div className="post-toolbar">
				<p className="post-count">총 <strong className="count">{(props.data) ? "1,463" : "0"} 건</strong>의 게시글이 있습니다.</p>
				<div className="post-search">
					<div className="ui search input">
						<input type="text" placeholder="검색어를 입력해주세요." />
						<Icon className='search link'/>
					</div>
					<Select
						placeholder="Select"
						className="ui small-border"
						defaultValue={selectOptions01[0].value}
						options={selectOptions01}
					/>
				</div>
			</div>
			<div className="post-body">
				{(props.data) && <PostCardList />}
				{(props.empty) && <PostCardEmpty />}
				{(props.nodata) && <PostCardNoData />}
			</div>
		</div>
	);
}
export default PostListWrap;
