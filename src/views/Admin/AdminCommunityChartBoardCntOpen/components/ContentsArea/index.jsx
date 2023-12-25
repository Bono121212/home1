import React, { Component } from "react";
import { Segment, Image, Button, Select } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import TableTitle from "../TableTitle";
import Paging from "../Paging";
import Paging02 from "../Paging02";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import ChartTable from "../ChartTable";
import ChartTable02 from "../ChartTable02";
import ImgGraph from "../../../../../images/all/graph3.png";

const selectOptions01 = [
  {key: "select", value: "select", text: "Select" },
  {key: "count", value: "count", text: "조회수" },
  {key: "reply", value: "reply", text: "댓글" },
  {key: "like", value: "like", text: "좋아요" },
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

            <TableTitle />
            <div className="chart-wrapper board-chart">
              <Image src={ImgGraph}/>{/* chart 1200*371 */}
            </div>
            <div className="table-area">
              <div className="table-top-area">
                <div className="top-left-side">
                  <Select
                    placeholder="Select"
                    className="ui small-border"
                    defaultValue={selectOptions01[0].value}
                    options={selectOptions01}
                  />
                  <Button className="view-bttn open" icon> {/*icon 변경, 열기/닫기 변경 */}
                    상위 게시글 닫기
                    <i className="icon blue-down"/>
                  </Button>
                </div>
              </div>
              {/* 상위 게시글 active(여닫는 게시물) / 페이지수 1,2만 제공*/}
              <div className="table-wrapper">
                <div className="acc-table active">
                  <ChartTable02/>
                  <Paging02 />
                </div>
              </div>


              {/* 고정되어있는 하위 게시물 */}
              <div className="table-top-area">
                <div className="top-right-side">
                  <Button className="post excel-down" icon>
                    <i className="icon excel-down"/>
                    엑셀 다운로드
                  </Button>
                </div>
              </div>
              <div className="table-wrapper">
                <ChartTable />
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
