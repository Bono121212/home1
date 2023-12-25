import React, { Component } from "react";
import { Segment, Checkbox } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminTab02 from "../AdminTab02";
import AdminSearch from "../AdminSearch";
import AdminSearchResult from "../AdminSearchResult";
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

            { /* 검색창 */ }
            <AdminSearch />

            { /* 검색결과 */ }
            <AdminSearchResult />

            <TableTitle />
            <table className="ui admin_table">
              <colgroup>
                <col width="70px"/>
                <col width="70px"/>
                <col />
                <col />
                <col />
                <col width="200px"/>
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </th>
                  <th>No.</th>
                  <th>소속사</th>
                  <th>소속 조직(팀)</th>
                  <th>성명</th>
                  <th>닉네임</th>
                  <th>E-mail</th>
                  <th>등록 성공 여부</th>
                  <th>오류 상세</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td>Y</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td>Y</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td class="admin_red">N</td>
                  <td>메일주소 오류</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td class="admin_red">N</td>
                  <td>메일주소 오류</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td>Y</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>99</td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                  <td>Y</td>
                  <td>-</td>
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
