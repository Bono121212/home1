import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";

import TableTitle from "../TableTitle";
import CardListBoard from "../CardListBoard";
import Paging from "../Paging";
import PagingSearch from "../PagingSearch";

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

               {/* 테이블 제목, 검색 */}
              <TableTitle />

              {/* 테이블 리스트 */}
              <CardListBoard />

              <div className="paging margin-none">
                <Paging />
              </div>

               {/* 페이지 검색 */}
              <PagingSearch />
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
