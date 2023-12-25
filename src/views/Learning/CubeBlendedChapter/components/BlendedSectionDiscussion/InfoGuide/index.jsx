import React from "react";
const InfoGuide = () => {
	return (
		<div className="box info-guide">
			<div className="box-head">
				<h3 className="box-title">토론안내</h3>
			</div>
			<div className="box-body">
				<p>
					본 강의는 담당자가 직접 확인하고, 수동으로 일괄 처리합니다. <br />
					Comment 10건 / Comment Reply 5건을 수행해 주시면, <br />
					자동 이수 처리됩니다.
				</p>
				<ul>
					<li>1. Posts 게시판에 올라온 타(他) 학습자 게시물을 읽어보고 댓글 3개 이상 작성</li>
					<li>2. Posts 게시판에 과제 질문에 대한 자신만의 적절하고 성실한 답변 작성 (공백 포함 300자 이상)</li>
				</ul>
			</div>
		</div>
	);
};
export default InfoGuide;
