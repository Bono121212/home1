import React from "react";

const ReportDetailWrap = (props) => {
	return (
		<div className="report-sec report-detail-sec">
			<div className="report-header">
				<h2 className="report-title">Report 내용</h2>
				<p className="report-date">2022.10.21 제출완료</p>
			</div>
			<div className="report-segment">
				<p className="para">
					사람들이 결정을 내리는 방식은 복잡하며, 점점 더 복잡해지고 있습니다. 그래도 구매 행동에 대해서는 몇 가지 알려진 사실들 있습니다. 구매 의도 유발과 구매 결정 사이에 일어나는 일들이 선형적이지 않다는 것, 그리고 사람마다 다른 복잡한 터치 포인트가 얽혀 있다는 점은 우리 모두 알고 있습니다.
				</p>
				<p className="para">
					인터넷은 발달을 거듭하면서 가격만을 비교하던 도구에서 사실상 모든 것을 비교하는 도구로 변모하게 되었습니다. 이 점은 수년간에 걸쳐 Google 검색에서 확인할 수 있는 구매 행동의 변화를 통해 분명히 알 수 있습니다. 예를 들어, ‘저렴한(cheap)'과 ‘최고의(best)'라는 단어를 살펴보겠습니다. 전 세계적으로 ‘최고의’에 대한 검색 관심도가 ‘저렴한’에 대한 검색 관심도를 훨씬 능가했습니다.¹ 세계적으로 독일, 인도, 이탈리아와 같은 국가에서 ‘저렴한’과 ‘최고의’를 현지 언어로 번역해봤을 때도 차이가 있었다는 부분이 주목할만한 예시입니다.
				</p>

				<div className="define-sec">
					<h3 className="define-title">첨부파일</h3>
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
export default ReportDetailWrap;
