import React, { Component } from "react";
import {Button, Icon} from "semantic-ui-react";

class TopGuideTitle extends Component {
  render() {
    //

    return (
      <div className="table-board-title">
        <div className="list-number">
          총 <strong>99</strong>건의 추천 과정이 있습니다.
        </div>
        <div className="right-wrap board-down-title-right">
          <Button className="post list3" icon><Icon className="list24"/>목록으로 돌아가기</Button>
        </div>
      </div>
    );
  }
}

export default TopGuideTitle;
