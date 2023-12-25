import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch02 from "../AdminSearch02";
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

            { /* 검색창 - sub */ }
            <AdminSearch02 />

            <TableTitle />
            <table className="ui admin_table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>그룹명</th>
                  <th>멤버수</th>
                </tr>
              </thead>
            </table>
            <div className="no-cont-wrap">
              <Icon className="no-contents80" />
              <span className="blind">콘텐츠 없음</span>
              <div className="text">그룹이 없습니다.</div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
