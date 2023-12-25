import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import BottomButton from "../BottomButton";
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
              Community Home
            </button>
          </div>
        </div>
        <Segment className="full">
          <div className="admin-container">
            { /* 멤버관리 */ }
            <AdminTab />
            { /* 멤버, 가입대기, 멤버 일괄 등록, 그룹 */ }
            <AdminTab02 />

            <p className="admin_title_p">그룹 정보</p>

            { /* 검색창 */ }
            <AdminSearch />

            <BottomButton />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
