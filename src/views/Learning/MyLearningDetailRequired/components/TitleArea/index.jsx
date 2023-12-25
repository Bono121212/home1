import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import profile56 from '../../../../../images/all/profile-56-px.svg';

class TitleArea extends Component {
    
  render() {
    return (
      <div className="main-info-area">
        <div className="progress-info-wrap mypage personal-detail">
          <div className="cell personal-inner">
            <div className="cell-inner">
              <div className="profile">
                <div className="pic"><img src={profile56} alt="Profile"/></div>
              </div>
              <div className="text-info">
                <div className="name">김써니 님</div>
                <div className="part"><p>오늘도 지식이 쑥쑥 자라나고 있어요.</p></div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="cell-inner">
              <div className="stamp-wrap">
                <Label className="stamp">
                  <div>
                    <Link to="none">
                      <span className="text1">Badge</span><span className="text3">4</span>
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
                      <span className="text2">137</span>
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
                  <Label className="onlytext"><span><strong>2022년</strong>학습시간</span></Label>
                  <div className="value2"><strong>10</strong><span>h</span> <strong>47</strong><span>m</span></div>
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
