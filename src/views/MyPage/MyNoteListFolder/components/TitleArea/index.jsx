import React, { Component, createRef } from "react";
import { Image, Label, Icon, Button } from "semantic-ui-react";

/* const yearList = [
  {
    key: "2019",
    text: "2019",
    value: "2019",
  },
  {
    key: "2018",
    text: "2018",
    value: "2018",
  },
  {
    key: "2017",
    text: "2017",
    value: "2017",
  },
  {
    key: "2016",
    text: "2016",
    value: "2016",
  },
  {
    key: "2015",
    text: "2015",
    value: "2015",
  },
]; */

class TitleArea extends Component {
  contextRef = createRef();
  state = { activeItem: "Comment" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
                  <span>오늘도 지식이 쑥쑥 자라나고 있어요!</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cell">
            <div className="cell-inner">
              <div className="stamp-wrap">
                <Label className="stamp">
                  <div>
                    <a href={()=>false}>
                      <span className="text1">Badge</span>
                      <span className="text3">9</span>
                      <span className="text5">개</span>
                    </a>
                  </div>
                </Label>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="cell-inner">
              <div className="stamp-wrap">
                <Label className="stamp">
                  <div>
                    <a href={()=>false}>
                      <span className="text1">Stamp</span>
                      <span className="text2">20</span>
                      <span className="text6">개</span>
                    </a>
                  </div>
                </Label>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="cell-inner">
              <div className="ui statistic total-time">
                <Button className="btn-total-time">
                  <Label className="onlytext">
                    <span>
                      <strong>2021년</strong>
                      학습시간
                    </span>
                  </Label>
                  <div className="value2">
                    <strong>63</strong>
                    <span>h</span>
                    <strong className="min">58</strong>
                    <span>m</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleArea;
