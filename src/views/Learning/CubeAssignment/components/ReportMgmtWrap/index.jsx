import React from "react";

const ReportMgmtWrap = (props) => {
	return (
		<div className="report-sec report-mgmt-sec">
			<div className="report-header">
				<h2 className="report-title">담당자 의견</h2>
			</div>
			<div className="report-segment fill">
				<p className="para">
					노인연령 조정은 고령층 복지 외에 수많은 국가 사회적 문제와 밀접하게 연결된다. 매년 조(兆) 단위 적자에 허덕이는 전국 6개 지하철만 해도 65세 이상을 대상으로 하는 무임승차제로 인한 손실이 해마다 2000억~5000억원씩 누적돼간다. ‘소득 하위 70%’가 대상인 기초연금도 이 나이와 연계됩니다.
				</p>
				<p className="para">
					첨부드린 파일 참고하셔서 다시금 작성 부탁드립니다.
				</p>
				<div className="define-sec">
					<h3 className="define-title">참고자료</h3>
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
	);
}
export default ReportMgmtWrap;
