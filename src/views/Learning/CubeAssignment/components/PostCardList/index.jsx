import React from "react";
import PostCard from "../PostCard";

const PostCardList = () => {
	return (
		<div className="post-card-list">
			<PostCard name="김써니" company="SK 주식회사 C&amp;C" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="true" pin="true" file="true" secret="true" />
			<PostCard name="이름이 긴경우는 말줄임으로 처리되어야 합니다. 그래서 이름이 깁니다." company="주식회사 C&amp;C" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정 태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정 태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="true" pin="false" file="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="true" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="false" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="false" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="false" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="false" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="true" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="true" secret="false" />
			<PostCard name="홍길동" company="SK" title="태도를 바꾸려고 하지 마라, 소비자 구매의사결정 과정" myPost="false" pin="false" file="true" secret="false" />
		</div>
	);
}
export default PostCardList;
