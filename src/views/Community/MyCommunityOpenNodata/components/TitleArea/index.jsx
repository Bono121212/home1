import React, { Component } from "react";
import { Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import profile from "../../../../../images/all/profile-110-px-sample-1.png";

class TitleArea extends Component {
    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap mypage personal-detail">
                    <div className="cell">
                        <div className="cell-inner personal-inner">
                            <div className="profile">
                                <div className="pic">
                                    <Image
                                        src={profile}
                                        alt="프로필사진 임시이미지"
                                    />
                                </div>
                            </div>
                            <div className="text-info">
                                <div className="name">김써니님</div>
                                <div className="part">
                                    <p>mySUNI 커뮤니티에 가입하고 다양한 활동을 즐겨보세요!</p>

                                    <Link to="/" className="ui button orange-arrow2">
                                        프로필 설정하기
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell followers">
                        <div className="cell-inner">
                            <div className="stamp-wrap">
                                <Label className="stamp">
                                    <div>
                                        <Link to="/">
                                            <span className="text1">Followers</span>
                                            <span className="text3">999</span>
                                            <span className="text5">명</span>
                                        </Link>
                                    </div>
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="cell following">
                        <div className="cell-inner">
                            <div className="stamp-wrap">
                                <Label className="stamp">
                                    <div>
                                        <Link to="/">
                                            <span className="text1">Following</span>
                                            <span className="text2">99</span>
                                            <span className="text6">명</span>
                                        </Link>
                                    </div>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleArea;
