import React, { Component } from "react";
import { Segment, Button, Select } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import Paging from "../Paging";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import ChartTable04 from "../ChartTable04";

const selectOptions01 = [
  {key: "all", value: "all", text: "전체" },
  {key: "board", value: "board", text: "게시글 순" },
  {key: "count", value: "count", text: "조회수 순" },
  {key: "reply", value: "reply", text: "댓글 순" },
  {key: "like", value: "like", text: "좋아요 순" },
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

            <div className="table-area">
              <div className="table-top-area">
                <div className="top-left-side">
                  <strong>메뉴 통계 조회</strong>
                </div>
                <div className="top-right-side">
                  <Select
                    placeholder="Select"
                    className="ui small-border"
                    defaultValue={selectOptions01[0].value}
                    options={selectOptions01}
                  />
                  <Button className="post excel-down" icon>
                    <i className="icon excel-down"/>
                    엑셀 다운로드
                  </Button>
                </div>
              </div>

              {/* 메뉴통계 + page */}
              <div className="table-wrapper">
                <ChartTable04/>
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
