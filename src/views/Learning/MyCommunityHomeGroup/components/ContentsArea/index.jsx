import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../../components/Surveyheader";

import TableTitle from "../TableTitle";
import CardListBoard from "../../components/CardListBoard";
// import CardList01 from "../../components/CardList01";
// import CardList02 from "../../components/CardList02";
// import CardList03 from "../../components/CardList03";
import Paging02 from "../../components/Paging02";
import TabMenu from "../../components/TabMenu";

class ContentsArea extends Component {
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

              <div className="group-card-list">
                {/* Table-열린상태 */}
                <CardListBoard cardOpenFlag={true} />
                <CardListBoard cardOpenFlag={false} />
                <CardListBoard cardOpenFlag={false} />
                <CardListBoard cardOpenFlag={false} />
              </div>

              {/* 페이징 */}
              <Paging02 />
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
