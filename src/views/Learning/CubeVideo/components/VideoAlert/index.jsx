import React from "react";
import { Link } from "react-router-dom";

const VideoAlert = (props) => {
	return (
        <>
            { props.visible &&
                <div className="video-alert">
                    <div className="video-alert-body">
                        <div class="video-alert-icon">
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icon-video-alert.svg" alt="Alert" />
                        </div>
                        <div class="video-alert-cont">
                            <div className="title">
                                <strong>이 강의를 학습하기 전에 <br /> 필수로 학습해야하는 선수 과정이 있었네요!</strong>
                            </div>
                            <div className="explain">
                                <p><Link to="">[필수] 커뮤니티 우수활동자 학습 시간 부여 _프로토콜</Link></p>
                                <p><Link to="">[필수] 가속화되는 전기차 시장 전망 및 협력 방안</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
	);
};
export default VideoAlert;
