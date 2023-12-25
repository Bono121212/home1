import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminSearch02 from "../AdminSearch02";
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

            { /* 검색창 - sub */ }
            <AdminSearch02 />

            <div className="admin_html">
              HTML 편집기 영역
            </div>
            <BottomButton />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
