import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
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

            {/* default */}

            <div className="no-cont-wrap">
              <Icon className="no-contents80" />
              <span className="blind">콘텐츠 없음</span>
              <div className="text">{`조회일자 및 검색 버튼을 클릭하여\n메뉴별 통계 조회가 가능합니다.`}</div>
            </div>

          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
