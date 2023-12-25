import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const SurveyResultWrap = (props) => {
	return (
		<CubeDetailSec className="cube-sec cube-test-sec">
			<div className="test-result-wrap is-complete">
				<div className="test-result-header">
					<h1 className="title">공통설문 안내</h1>
					<span className="label-result">참여완료</span>
				</div>
				<div className="test-result-body">
					<div className="test-result-report">
						<div className="inner-cont">
							{(props.type === "complete") &&
								<p className="title"><strong>참여 완료</strong>하였습니다.</p>
							}
							{(props.type === "done") &&
								<p className="title"><strong>이미 응답하였습니다.</strong></p>
							}
							<div className="btn-area">
								<button type="button" className="btn-status">결과 보기</button>
							</div>
						</div>
						<div className="inner-bg">
							<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-learning-test-confirm-img.png" alt="" className="bg" />
						</div>
					</div>
				</div>
			</div>
		</CubeDetailSec>
	);
};
export default SurveyResultWrap;
