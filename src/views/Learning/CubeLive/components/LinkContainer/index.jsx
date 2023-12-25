import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";

const LinkContainer = (props) => {
    return(
        <div className="learning-link-area">
            { (props.state === "wait") &&
                <Link to="/" className="learning-link">
                    <div className="link-thumb">
                        <Image src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-280-px-thumbnail-live-wait.png" alt="" />
                    </div>
                    <div className="link-detail">
                        <p className="link-live"><span className="label-live wait">LIVE 예정</span></p>
                        <p className="link-title"><strong>11월 8일 오후 6시 LIVE 예정입니다. 구성원들에게 학습을 공유해보세요!</strong></p>
                        <p className="link-timer"><span>7일 9시간 32분 남음</span></p>
                    </div>
                    <div className="link-util">
                        <Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
                    </div>
                </Link>
            }
            { (props.state === "on") &&
                <Link to="/" className="learning-link">
                    <div className="link-thumb">
                        <Image src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-280-px-thumbnail-live-on.png" alt="" />
                    </div>
                    <div className="link-detail">
                        <p className="link-live"><span className="label-live on">LIVE 시작</span></p>
                        <p className="link-title"><strong>LIVE가 시작되었습니다. 함께 학습해보아요!</strong></p>
                        <p className="link-timer"><span>11월 8일 오후 6시부터 8시까지 진행됩니다.</span></p>
                    </div>
                    <div className="link-util">
                        <Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
                    </div>
                </Link>
            }
            { (props.state === "off") &&
                <Link to="/" className="learning-link is-disabled">
                    <div className="link-thumb">
                        <Image src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img-280-px-thumbnail-live-off.png" alt="" />
                    </div>
                    <div className="link-detail">
                        <p className="link-live"><span className="label-live off">LIVE 종료</span></p>
                        <p className="link-title"><strong>LIVE가 종료되었습니다. 다시보기 영상으로 다시 만나요!</strong></p>
                        <p className="link-timer"><span>11월 8일 오후 6시에 종료되었습니다.</span></p>
                    </div>
                    <div className="link-util">
                        <Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
                    </div>
                </Link>
            }
        </div>
    )
}

export default LinkContainer;