import React from "react";
import Editor from "../../../../Editor";
import AttachFileUpload from "../AttachFileUpload";
import BoardWriteCheckbox from "../BoardWriteCheckbox";
import BubblePopup from "../BubblePopup";

const PostWriteWrap = (props) => {
	return (
		<div className="post-write-wrap">
			<div className="post-header">
				<h2 className="post-title">현재 수행 또는 계획 중인 업무를 린보드 5개 항목에 맞춰 가설을 정리하여 작성해  보세요.</h2>
				<span className="post-required"><span className="star">*</span> 표시는 필수 입력 사항입니다.</span>
			</div>
			<div className="post-body">
				<div className="form-contants-v2">
					<form className="form">
						<div className="field">
							<div className="field-title">
								<label className="title">제목<span className="star">*</span></label>
								<div className="count">
									<em className="now">0</em>
									<span className="max">/100</span>
								</div>
							</div>
							<div className="field-content">
								<input type="text" className="input" maxLength="100" placeholder="제목을 입력해주세요."/>
								<BoardWriteCheckbox />
							</div>
						</div>
						<div className="field">
							<div className="field-title">
								<label className="title">내용<span className="star">*</span></label>
							</div>
							<div className="field-content">
								<div className="ui editor-wrap">
									<Editor placeholder="내용을 입력해주세요." />
							</div>
							</div>
						</div>
						<div className="field">
							<div className="field-title">
								<label className="title">첨부파일</label>
								<div className="utils">
									<BubblePopup />
									<button class="ui button btn-upload">파일 업로드</button>
								</div>
							</div>
							<div className="field-content">
								<AttachFileUpload />
							</div>
						</div>
						<div class="page-action">
							<div className="group-left">
								<button class="ui button fix black">목록</button>
							</div>
							<div className="group-right">
								<button class="ui button fix line">저장</button>
								<button class="ui button fix bg">제출</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
export default PostWriteWrap;
