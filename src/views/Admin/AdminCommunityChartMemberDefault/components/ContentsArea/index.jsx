import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import TableTitle from "../TableTitle";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";


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

            {/* default */}

            <div className="no-cont-wrap">
              <Icon className="no-contents80" />
              <span className="blind">콘텐츠 없음</span>
              <div className="text">{`검색 버튼을 클릭하여\n멤버 통계 조회가 가능합니다.`}</div>
            </div>

          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
