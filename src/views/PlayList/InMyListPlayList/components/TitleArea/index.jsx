import React, { Component, createRef } from "react";
import { Label, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import profile from "../../../../../images/all/profile-110-px-sample-1.png";


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
];
 */
class TitleArea extends Component {
    contextRef = createRef();
    state = { activeItem: "Comment" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
      return (
        <div className="main-info-area">
          <div className="progress-info-wrap mypage personal-detail">
            <div className="cell personal-inner">
              <div className="cell-inner">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="cell">
              <div className="cell-inner">
                <div className="stamp-wrap">
                  <Label className="stamp">
                    <div>
                      <Link to="#">
                        <span className="text1 more">Badge</span>
                        <span className="text3">12</span>
                        <span className="text5">개</span>
                      </Link>
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
                      <Link to="#">
                        <span className="text1">Stamp</span>
                        <span className="text2">12</span>
                        <span className="text6">개</span>
                      </Link>
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
                      <strong>120</strong>
                      <span>h</span>
                      <strong>00</strong>
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
