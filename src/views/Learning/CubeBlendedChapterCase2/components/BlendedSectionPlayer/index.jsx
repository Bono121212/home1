import React from "react";
// import { Link } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

const BlendedSectionPlayer = () => {
	return (
		<div className="blended blended-player">
			{/* Contents Header */}
			<div className="contents-header-v2">
				<div className="title-area">
					<div className="header">
						<h2>웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						{/* 학습전 l-step0, 학습중 l-step1~10, 학습완료 complete (10% 단위) */}
						<span class="label-state-cube complete"><span>cube 학습완료</span></span>
					</div>
				</div>
				<div className="right-area">
					<div className="header-link">
						<Button className="btn-link">
							<Icon className="ask"></Icon>
							<span className="blind">학습노트</span>
						</Button>
					</div>
				</div>
			</div>
			{/* // Contents Header */}

			{/* Player Area */}
			<div className="player-area">
				<div className="player-list">
					<div className="player-video">
						{/* 외부영상 */}
						<div className="external">
							<div className="external-bg">
								<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/sample-img-cp.png" alt="외부영상 썸네일" />
							</div>
							<div className="external-cont">
								<p>아래 ‘학습하기’ 버튼 클릭 시, 외부 사이트로 연결됩니다.</p>
								<div className="btns">
									<button type="button" className="btn btn-url">
										<i className="icon copy" aria-hidden="true"></i>
										<span>http://www.linkedin.com/view/dsdssdlsk/pages</span>
									</button>
									<a href={()=>false} target="_blank" rel="noopener noreferrer" className="btn btn-learn">
										<i className="icon newpage" aria-hidden="true"></i>
										학습하기
									</a>
								</div>
							</div>
							<div className="external-toast">
								{/* is-visible (없는 상태로 시작) > is-visible (addClass 2초 후 removeClass) */}
								<div className="toast base is-visible">
									<p>클립보드에 복사되었습니다.</p>
								</div>
							</div>
						</div>
						{/* // 외부영상 */}
						{/* Panopto */}
						{/* <div className="video">
							<div class="video-container " id="video-container" tabindex="0">
								<div id="panopto-embed-player" class="video-player-embed">
									<iframe src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=3150d497-b26d-48ca-89d1-ad9c0027a4b7&amp;remoteEmbed=true&amp;remoteHost=https%3A%2F%2Fstg.mysuni.sk.com&amp;embedApiId=panopto-embed-player&amp;interactivity=none&amp;showtitle=false&amp;showBrand=false&amp;offerviewer=false&amp;hideoverlay=true&amp;instance=STG-MYSUNI-SAML" height="430" width="100%" allow="autoplay; fullscreen" frameborder="0" allowfullscreen="" title={` `}></iframe>
								</div>
							</div>
						</div> */}
						{/* Panopto */}
					</div>
					<div className="player-thumb">
						<div tabindex="0" className="item">
							<div className="item-thumb">
								<img src="http://placeimg.com/320/240/nature" alt="" class="img" />
							</div>
							<div className="item-title">
								<p className="title">
									커뮤니티 시대가 온다.
								</p>
								<span class="label-state-cube complete"><span>cube 학습완료</span></span>
							</div>
						</div>
						<div tabindex="0" className="item">
							<div className="item-thumb">
								<img src="http://placeimg.com/320/240/nature" alt="" class="img" />
							</div>
							<div className="item-title">
								<p className="title">
									기업보다 개인이 유리한 커뮤니티 시대가 온다.
								</p>
								<span class="label-state-cube l-step2"><span>cube 학습중</span></span>
							</div>
						</div>
						<div tabindex="0" className="item">
							<div className="item-thumb">
							<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/sample-img-cp.png" alt="" class="img" />
							</div>
							<div className="item-title">
								<p className="title">
									슈퍼 개인이란? 커뮤니티 크리에이터와의 공통점과 차이점
								</p>
								<span class="label-state-cube l-step8"><span>cube 학습중</span></span>
							</div>
						</div>
						<div tabindex="0" className="item is-selected">
							<div className="item-thumb">
								<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/sample-img-cp.png" alt="" class="img" />
							</div>
							<div className="item-title">
								<p className="title">
									슈퍼 개인이란? 커뮤니티 크리에이터와의 공통점과 차이점은 기업보다 개인이 유리한 커뮤니티 시대가 온다.
								</p>
								<span class="label-state-cube l-step0"><span>cube 학습전</span></span>
							</div>
						</div>
						<div tabindex="0" className="item">
							<div className="item-thumb">
								<img src="http://placeimg.com/320/240/nature" alt="" class="img" />
							</div>
							<div className="item-title">
								<p className="title">
									슈퍼 개인이란? 커뮤니티 크리에이터와의 공통점과 차이점은 기업보다 개인이 유리한 커뮤니티 시대가 온다.
								</p>
								<span class="label-state-cube l-step0"><span>cube 학습전</span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* // Player Area */}
		</div>
	);
};

export default BlendedSectionPlayer;
