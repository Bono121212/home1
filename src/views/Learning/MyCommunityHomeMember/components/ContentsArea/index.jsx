import React, { Component, createRef } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../../components/LnbMenu";
import Surveyheader from "../../components/Surveyheader";
import TableTitle from "../TableTitle";
import CardListBoard from "../../components/CardListBoard";
import Paging from "../../components/Paging";
import TabMenu from "../../components/TabMenu";

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

              {/* 테이블 제목, 검색 */}
              <TableTitle />

              {/* Table-열린상태 */}
              <CardListBoard />

              {/* 페이징 */}
              <div className="paging mb0">
                <Paging />
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
