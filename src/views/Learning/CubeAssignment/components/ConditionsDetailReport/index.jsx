import React from "react";

const ConditionsDetailReport = (props) => {
	return (
		<div className="conditions-detail-wrap">
			<div className="course-header">
				<h2 className="course-title">이수조건</h2>
				<div className="report-state">
					<strong className="tit">Report 제출 상태</strong>
					{(props.state === "writing") && <span className="state is-writing">작성전</span> }
					{(props.state === "grading") && <span className="state is-grading">채점중</span> }
					{(props.state === "fail") && <span className="state is-fail">불합격</span> }
					{(props.state === "pass") && <span className="state is-pass">합격</span> }
				</div>
			</div>
			<div className="course-body">
				<div class="conditions-desc-wrap">
					<p class="conditions-guide">본 과정은 담당자가 이수 조건 충족 여부를 확인 후 이수 처리해 드립니다.</p>

					<div className="define-sec">
						<h3 className="define-title">작성가이드</h3>
						<p className="para">
							서론, 본론,결론으로 나누어 내용을 작성해주세요. 서론은 주제 선정 동기 및 문제 제기, 간단한 최근 주제 관련 이슈 언급, 본론에서 다룰 내용을 소개해주시면 좋습니다.
							본론에서는 선행 연구 내용의 요약 및 분석을 통한 자신의 연구 내용이 반드시 포함되어야 합니다. 관련 자료는 출처를 표기해주세요.
						</p>
					</div>

					<div className="define-sec">
						<h3 className="define-title">Report 양식</h3>
						<p className="para">과정 담당자가 등록한 양식에 맞춰 Report를 작성해주세요.</p>
						<div className="define-down">
							<div className="define-inner">
								<div className="item">
									<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 1부.pdf</button>
								</div>
								<div className="item">
									<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 2부_별첨자료 포함.pdf</button>
								</div>
								<div className="item">
									<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 2부_별첨자료 포함 이름이 길어서 내려감.pptx</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
	);
}
export default ConditionsDetailReport;
