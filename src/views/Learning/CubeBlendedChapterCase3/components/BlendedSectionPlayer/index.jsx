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
						{/* Panopto */}
						<div className="video">
							<div class="video-container " id="video-container" tabindex="0">
								<div id="panopto-embed-player" class="video-player-embed">
									<iframe src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=3150d497-b26d-48ca-89d1-ad9c0027a4b7&amp;remoteEmbed=true&amp;remoteHost=https%3A%2F%2Fstg.mysuni.sk.com&amp;embedApiId=panopto-embed-player&amp;interactivity=none&amp;showtitle=false&amp;showBrand=false&amp;offerviewer=false&amp;hideoverlay=true&amp;instance=STG-MYSUNI-SAML" height="430" width="100%" allow="autoplay; fullscreen" frameborder="0" allowfullscreen="" title={` `}></iframe>
								</div>
								<div id="video-overlay" className="video-overlay">
									<div className="video-overlay-btn">
										<button><img src="https://image.mysuni.sk.com/suni-asset/public/images/all/btn-player-next.png" alt="" /></button>
									</div>
									<div className="video-overlay-text">
										<p>다음 학습 이어하기</p>
										<h3>이천포럼 2021, 이것만은 알고 가자!</h3>
									</div>
									<img src="https://image.mysuni.sk.com/suni-asset/public/static/images/all/close-white.png" alt="Close" style={{"float":"right", "margin-top":"13px"}}/>
								</div>
							</div>
						</div>
						{/* Panopto */}
					</div>
					<div className="player-thumb">
						<div tabindex="0" className="item is-selected">
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
						<div tabindex="0" className="item">
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
