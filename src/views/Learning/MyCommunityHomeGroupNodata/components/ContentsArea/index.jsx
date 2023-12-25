import React, { Component, createRef } from "react";
import { Segment, Icon } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";
// import TableTitle from "../TableTitle";
// import CardListBoard from "../CardListBoard";
// import Paging from "../Paging";
import TabMenu from "../TabMenu";

class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "MyCommunity" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div ref={this.contextRef}>
        <Segment className="full">
          <div className="course-detail-center community-containter">
            <LnbMenu />
            <div className="community-home-contants">
              {/* Header */}
              <div className="course-info-header">
                <Surveyheader />
              </div>

              {/* Tab */}
              <TabMenu />

              <div className="mycommu-appro-nodata">
              총 <strong>0개의 그룹</strong>
              </div>

              <div className="no-cont-wrap border-bottom">
                <Icon className="no-contents80" />
                <span className="blind">콘텐츠 없음</span>
                <div className="text">생성된 그룹이 없습니다!</div>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
