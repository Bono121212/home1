import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const TestGuideWrap = (props) => {
	return (
		<CubeDetailSec className="cube-sec cube-test-sec">
			<div className="test-guide-wrap">
				<div className="test-guide-header">
					<div className="inner-cont">
						<h1 className="title">Data로 생각하는 인재되기 (16가지 역량)</h1>
						<p className="explain">
							구성원들의 학습 이해도 확인을 위해 테스트를 진행합니다. <br />
							이해한 내용을 바탕으로 시험에 응시해주세요.
						</p>
						<button className="btn-action">응시하기</button>
					</div>
					<div className="inner-bg">
						<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-learning-test-title-img.png" alt="" className="bg" />
					</div>
				</div>
				<div className="test-guide-body">
					<h2 className="title">Test 참여 안내 </h2>
					<p className="explain">
						위 정보를 확인했으면, 상단 <strong>응시하기</strong> 버튼을 통해 Test에 응시해보세요!
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
						<div className="test-guide-item vertical">
							<div className="icon-area">
								<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-2.svg" alt=""/>
							</div>
							<dl className="cont-area">
								<dt className="tit">이수조건</dt>
								<dd className="txt">이수기준 <strong>7점</strong><br />/ 총점 10점</dd>
							</dl>
						</div>
						<div className="test-guide-item vertical">
							<div className="icon-area">
								<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-3.svg" alt=""/>
							</div>
							<dl className="cont-area">
								<dt className="tit">응시횟수</dt>
								{(props.case === "all") && <dd className="txt"><strong>1회</strong> / 3회</dd>}
								{(props.case === "02") && <dd className="txt">제한없음</dd>}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</CubeDetailSec>
	);
};
export default TestGuideWrap;
