import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const SurveyGuideWrap = (props) => {
	return (
		<CubeDetailSec className="cube-sec cube-test-sec">
			<div className="test-guide-wrap">
				<div className="test-guide-header">
					<div className="inner-cont">
						<h1 className="title">반도체클라쓰 - Keyword로 알아보는 반도체의 품격</h1>
						<button className="btn-action">참여하기</button>
					</div>
					<div className="inner-bg">
						<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-survey-test-title-img.png" alt="" className="bg" />
					</div>
				</div>
				<div className="test-guide-body">
					<h2 className="title">Survey 참여 안내 </h2>
					<p className="explain">
						위 정보를 확인했으면, 상단 <strong>참여하기</strong> 버튼을 통해 Survey에 참여해보세요!
					</p>
					<div className="test-guide-list">
						<div className="test-guide-item vertical">
							<div className="icon-area">
								<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-1.svg" alt=""/>
							</div>
							<dl className="cont-area">
								<dt className="tit">문항개수</dt>
								<dd className="txt">총 <strong>10문항</strong></dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</CubeDetailSec>
	);
};
export default SurveyGuideWrap;
