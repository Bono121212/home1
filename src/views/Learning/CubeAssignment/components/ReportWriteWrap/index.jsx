import React from "react";
import Editor from "../../../../Editor";
import AttachFileUpload from "../AttachFileUpload";
import BubblePopup from "../BubblePopup";

const ReportWriteWrap = (props) => {
	return (
		<div className="report-sec report-write-sec">
			<div className="report-header">
				<h2 className="report-title">Report 내용</h2>
			</div>
			<div className="form-contants-v2">
				<form className="form">
					<div className="field">
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
						<button class="ui button fix line">저장</button>
						<button class="ui button fix bg">제출</button>
						<button class="ui button fix bg" disabled>제출</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default ReportWriteWrap;
