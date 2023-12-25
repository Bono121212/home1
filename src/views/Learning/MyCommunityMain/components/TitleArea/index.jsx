import React, { Component, createRef } from "react";
import { Label } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-px-sample-1.png";

class TitleArea extends Component {
  contextRef = createRef();
  state = { activeItem: "Comment" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="main-info-area community-main-header">
        <div className="progress-info-wrap">
          <div className="cell">
            <div className="cell-inner">
              <div className="profile">
                <div className="pic">
                  <img src={profile} alt="" />
                </div>
              </div>
              <div className="text-info">
                <div className="name">
                  nickname
                  <button class="ui button orange-arrow2">
                    <i aria-hidden="true" class="icon post"></i>프로필 상세
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="ui statistic community-num">
              <Label className="onlytext">
                <span>Followers</span>
              </Label>
              <div className="value2">296</div>
            </div>
            <div className="ui statistic community-num">
              <Label className="onlytext">
                <span>Following</span>
              </Label>
              <div className="value2">22</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleArea;
