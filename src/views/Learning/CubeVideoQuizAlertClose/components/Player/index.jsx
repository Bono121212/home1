import React, { useEffect } from "react";

const Player = (props) => {
	// 스크롤 상태에 따라서 PIP모드 클래스가 적용되므로, PIP노출기능을 독립적인 클래스로 처리
	const handlerPipClose = () => {
		document.querySelector('.lms-video-sticky').classList.add("is-video-pip-hidden");
	}
	useEffect(() => {
		if (props.scrollValue > props.stickyValue) {
			document.querySelector('.lms-video-sticky').classList.add("is-video-pip");
		} else {
			document.querySelector('.lms-video-sticky').classList.remove("is-video-pip");
		}
	});
	return (
		<div className='video-fixed-holder'>
			<div className="lms-video-sticky" style={{"bottom": ( (props.scrollValue > props.stickyValue) ? ((props.scrollBottom > 0) ? (props.scrollBottom+50)+"px" : '50px' ) : "") }}>
				<div class="video-container" id="video-container" tabindex="0">
					<button type="button" className="btn-pip-close" onClick={handlerPipClose}><span className="blind">PIP 모드 닫기</span></button>
					<div id="panopto-embed-player" class="video-player-embed">
						<iframe src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=3150d497-b26d-48ca-89d1-ad9c0027a4b7&amp;remoteEmbed=true&amp;remoteHost=https%3A%2F%2Fstg.mysuni.sk.com&amp;embedApiId=panopto-embed-player&amp;interactivity=none&amp;showtitle=false&amp;showBrand=false&amp;offerviewer=false&amp;hideoverlay=true&amp;instance=STG-MYSUNI-SAML" height="100%" width="100%" allow="autoplay; fullscreen" frameborder="0" allowfullscreen="" title={` `}></iframe>
					</div>
          <div className="video-overlay-small art">
            <button type="button">
              <span className="copy">퀴즈풀고 이어보기</span>
            </button>
          </div>
				</div>
			</div>
		</div>
	);
};
export default Player;