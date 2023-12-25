import React, { Component } from "react";
import { Segment, Select } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import TableTitle from "../TableTitle";
import Paging from "../Paging";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import ChartTable06 from "../ChartTable06";

const selectOptions01 = [
  { key:"all" , value:"all" , text: "전체"},
  { key:"visit" , value:"visit" , text: "방문수 순"},
  { key:"board" , value:"board" , text: "게시글 순"},
  { key:"reply" , value:"reply" , text: "댓글 순"},
  { key:"like" , value:"like" , text: "좋아요 순"}
]

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

            {/* 커뮤니티 멤버 정보 영역 */}
            <div className="cnt-container">
              <TableTitle />
              <div className="cnt-view">
                <ul>
                  <li>즐겨찾기 한 멤버 수<strong>13</strong></li>
                  <li>가입<strong>80</strong></li>
                  <li>탈퇴/반려<strong>2</strong></li>
                </ul>
              </div>
            </div>

            <div className="table-area">
              <div className="table-top-area">
                <div className="top-left-side">
                  <strong>멤버별 통계 조회</strong>
                </div>
                <div className="top-right-side">
                  <Select
                    placeholder="Select"
                    className="ui small-border"
                    defaultValue={selectOptions01[0].value}
                    options={selectOptions01}
                  />
                </div>
              </div>

              {/* 메뉴통계 + page */}
              <div className="table-wrapper">
                <ChartTable06/>
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
