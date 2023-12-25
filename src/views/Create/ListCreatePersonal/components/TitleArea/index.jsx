import React, { Component } from "react";
import { Image, Button, Icon } from "semantic-ui-react";

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
                    src="/images/all/profile-56-px.png"
                    alt="프로필사진 임시이미지"
                  />
                </div>
                <button>
                  <Icon className="my20" />
                  <span className="blind">my</span>
                </button>
              </div>
              <div className="text-info">
                <div className="name">김써니님</div>
                <div className="part">
                  <span>나만의 학습 콘텐츠를 만들어 보세요.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cell create-wrap personal-create">
            <Button className="personal line">
              <Icon className="create16" />
              <span className="blind">Create</span>
              <span>Create</span>
            </Button>
            <Button className="personal line">
              <Icon className="movie16" />
              <span className="blind">Create Movie</span>
              <span>Create Movie </span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleArea;
