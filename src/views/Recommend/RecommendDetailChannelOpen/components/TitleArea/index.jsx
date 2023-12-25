import React, { Component, createRef } from "react";
import { Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TitleArea extends Component {
  contextRef = createRef();
  state = { activeItem: "Comment" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="main-info-area content-division">
        <div className="progress-info-wrap personal-channel">
          <div className="cell">
            <div className="cell-inner personal-inner">
              <div className="profile">
                <div className="pic">
                  <Image
                    src="/images/all/profile-56-px.png"
                    alt="프로필사진 임시이미지"
                  />
                </div>
              </div>
              <div className="text-info">
                <div className="name">김써니님</div>
                <div className="part">
                  <span>우리 회사 인기 채널을 확인해 볼까요?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cell">
            <div className="cell-inner">
              {/*
              <div className="recommend-info">
                <div className="personal-channel-list">
                  <h3>최근 학습중인 채널</h3>
                  <span className="toggle toggle4" aria-pressed="false">
                    AI Manufacturing Press
                  </span>
                  <span className="toggle toggle4" aria-pressed="false">
                    Culture &#38; Value
                  </span>
                  <span className="toggle toggle4" aria-pressed="false">
                    CLX University
                  </span>
                </div>
                <div className="personal-channel-list">
                  <h3>우리 회사 인기 채널</h3>
                  <span className="toggle toggle4" aria-pressed="false">
                    GC Green Channel
                  </span>
                  <span className="toggle toggle4" aria-pressed="false">
                    SK C&#38;C 공통
                  </span>
                  <span className="toggle toggle4" aria-pressed="false">
                    AI Manufacturing Press AI Manufacturing Press
                  </span>
                </div>
              </div>
             */}
            </div>
          </div>

          <div className="cell">
            <div className="cell-inner">
              <div className="recommend-info personal-channel-header">
                <Label className="onlytext">
                  <span className="personal-channel-tit">
                    <Link to={"/mypage/channel-change-modal"}>관심 채널</Link>
                  </span>
                </Label>
                <span className="value1">
                  <span className="text01">24</span>
                  <span className="text04">개</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleArea;
