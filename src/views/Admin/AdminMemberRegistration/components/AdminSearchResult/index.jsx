import React, { Component } from "react";

class AdminSearchResult extends Component {
  render() {
    return (
      <table className="ui admin_table_result">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>업로드 결과</th>
            <td>
              <div className="upload_result">
                전체 <span>99</span>명
              </div>
              <div className="upload_result">
                멤버 등록 처리 대상 <span>96</span>명
              </div>
            </td>
            <td className="admin_result_right">
              <span>※ 멤버 일괄 등록 완료 버튼을 눌러주세요.</span>
              <button class="ui button admin_table_button" disabled="" tabindex="">멤버 일괄 등록 완료</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearchResult;
