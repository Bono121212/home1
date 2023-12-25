import React, { Component } from "react";
import { Segment, Button, Image } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import TableTitle from "../TableTitle";
import Paging from "../Paging";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import ImgGraph from "../../../../../images/all/visit-graph-3m.png";
import ChartTable from "../ChartTable";

class ContentsArea extends Component {
  render() {
    return (
      <div>
        <div className="admin_community_top">
          <div className="admin_community">
            <h3>커뮤니티 관리</h3>
            <button>
              <img src={AdminHome} alt="" />
              Community Home</button>
          </div>
        </div>
        <Segment className="full">
          <div className="admin-container chart-container">
            { /* 멤버관리 */ }
            <AdminTab />
            { /* 멤버, 가입대기, 멤버 일괄 등록, 그룹 */ }
            <AdminTab02 />

            { /* 검색창 */ }
            <AdminSearch />

            {/* title & 전체 방문수 */}
            <TableTitle />

            {/* chart */}
            <div className="chart-wrapper">
              <Image src={ImgGraph}/>{/* chart 1200*320 */}
            </div>

            {/* 하단 table */}
            <div className="table-area">
              <div className="table-top-area clfx">
                <div className="top-right-side">
                  <Button className="post excel-down" icon>
                    <i className="icon excel-down"/>
                    엑셀 다운로드
                  </Button>
                </div>
              </div>
              <div className="table-wrapper">
                <ChartTable/>
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
