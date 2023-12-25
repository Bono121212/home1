import React from "react";

const VideoOverlay = (props) => {
	return (
        <>
            { props.visible &&
                <div id="video-overlay" class="video-overlay" style={{"cursor": "pointer"}}>
                    <div class="video-overlay-btn">
                        <button><img src="https://image.mysuni.sk.com/suni-asset/public/static/images/all/btn-player-next.png" alt="" /></button>
                    </div>
                    <div class="video-overlay-text">
                        <p>다음 학습 이어하기</p>
                        <h3>비즈니스모델 캔버스 - Case Study : 바이든 대통령의 방한과 반도체/배터리 Geopolitics</h3>
                    </div>
                    <img src="https://image.mysuni.sk.com/suni-asset/public/static/images/all/close-white.png" style={{"float": "right", "margin-top": "13px"}} alt="" />
                </div>
            }
        </>
	);
};
export default VideoOverlay;
