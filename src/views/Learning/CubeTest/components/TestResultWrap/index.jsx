import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const TestResultWrap = (props) => {
	return (
		<>
			{/* Case 이수 */}
			{(props.result === "pass") &&
				<CubeDetailSec className="cube-sec cube-test-sec">
					<div className="test-result-wrap is-pass">
						<div className="test-result-header">
							<h1 className="title">Data로 생각하는 인재되기 (16가지 역량)</h1>
							<span className="label-result">이수</span>
						</div>
						<div className="test-result-body">
							<div className="test-result-report">
								<div className="inner-cont">
									<p className="title"><strong>Test 결과 <em>96점</em>으로 <em>이수</em>하셨습니다!</strong></p>
									<p className="explain">
										Test 이수조건을 통과하셨습니다! <br />
										하단 '결과보기' 버튼을 통해 나의 결과를 확인해보세요!
									</p>
									<div className="btn-area">
										<button type="button" className="btn-result">결과보기</button>
									</div>
								</div>
								<div className="inner-bg">
									<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-learning-test-pass-img.png" alt="" className="bg" />
								</div>
							</div>
							<div className="test-result-info">
								<div className="test-guide-item horizontal">
									<div className="icon-area">
										<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-2.svg" alt=""/>
									</div>
									<dl className="cont-area">
										<dt className="tit">이수조건</dt>
										<dd className="txt">이수기준 <strong>7점</strong> / 총점 10점</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</CubeDetailSec>
			}

			{/* Case 미이수 */}
			{(props.result === "fail") &&
				<CubeDetailSec className="cube-sec cube-test-sec">
					<div className="test-result-wrap is-fail">
						<div className="test-result-header">
							<h1 className="title">Data로 생각하는 인재되기 (16가지 역량)</h1>
							<span className="label-result">미이수</span>
						</div>
						<div className="test-result-body">
							<div className="test-result-report">
								<div className="inner-cont">
									<p className="title"><strong>Test 결과 <em>46점</em>으로 <em>미이수</em>하셨습니다!</strong></p>
									<p className="explain">
										Test 이수조건을 통과하지 못했습니다. 하단 재응시 버튼을 통해 다시 Test를 풀어보세요. <br />
										Test를 재응시 할 경우 문항이 랜덤 출제됩니다.
									</p>
									<div className="btn-area">
										<button type="button" className="btn-result">결과보기</button>
										<button type="button" className="btn-retry">재응시</button>
									</div>
								</div>
								<div className="inner-bg">
									<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-learning-test-fail-img.png" alt="" className="bg" />
								</div>
							</div>
							<div className="test-result-info">
								<div className="test-guide-item horizontal">
									<div className="icon-area">
										<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-2.svg" alt=""/>
									</div>
									<dl className="cont-area">
										<dt className="tit">이수조건</dt>
										<dd className="txt">이수기준 <strong>7점</strong> / 총점 10   점</dd>
									</dl>
								</div>
								<div className="test-guide-item horizontal">
									<div className="icon-area">
										<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-3.svg" alt=""/>
									</div>
									<dl className="cont-area">
										<dt className="tit">응시횟수</dt>
										<dd className="txt"><strong>1회</strong> / 3회</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</CubeDetailSec>
			}

			{/* Case 채점중 */}
			{(props.result === "confirm") &&
				<CubeDetailSec className="cube-sec cube-test-sec">
					<div className="test-result-wrap is-confirm">
						<div className="test-result-header">
							<h1 className="title">Data로 생각하는 인재되기 (16가지 역량)</h1>
							<span className="label-result">채점중</span>
						</div>
						<div className="test-result-body">
							<div className="test-result-report">
								<div className="inner-cont">
									<p className="title"><strong>채점중</strong>입니다.</p>
									<p className="explain">
										관리자가 채점 중에 있습니다. <br />
										채점이 완료되면 메일로 결과를 확인하실 수 있습니다.
									</p>
								</div>
								<div className="inner-bg">
									<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-learning-test-confirm-img.png" alt="" className="bg" />
								</div>
							</div>
							<div className="test-result-info">
								<div className="test-guide-item horizontal">
									<div className="icon-area">
										<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-100-px-learning-icon-3.svg" alt=""/>
									</div>
									<dl className="cont-area">
										<dt className="tit">응시횟수</dt>
										<dd className="txt"><strong>1회</strong> / 3회</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</CubeDetailSec>
			}
		</>
	);
};
export default TestResultWrap;
