import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch02 from "../AdminSearch02";
import TableTitle from "../TableTitle";
import Paging from "../../components/Paging";
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
            <table className="ui admin_table cursor">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>그룹명</th>
                  <th>멤버수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>We Do Technology,  We make Happiness</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>We Do Technology,  We make Happiness</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>We Do Technology,  We make Happiness</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>We Do Technology,  We make Happiness</td>
                  <td>45</td>
                </tr>
              </tbody>
            </table>
            <Paging />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
