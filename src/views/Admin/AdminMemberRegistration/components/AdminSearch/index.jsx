import React, { Component } from "react";

class AdminSearch extends Component {
  render() {
    return (
      <table className="ui admin_table_top margin">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>멤버 일괄 등록 양식</th>
            <td className="margin">
              <button class="ui button admin_text_button02" disabled="" tabindex="-1">양식 다운로드</button>
            </td>
          </tr>
          <tr>
            <th>멤버 일괄 등록</th>
            <td>
            <div className="preview admin">
                <div className="ui input file2">
                  <label htmlFor="hidden-new-file2" className="ui button admin_text_button">
                  엑셀 파일 선택
                  </label>
                  <input type="file" id="hidden-new-file2" />
                </div>
              </div>
              <span class="regi_span">※ 엑셀 파일 내 E-mail 이 제대로 입력되어 있는지 확인해주세요.</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch;
