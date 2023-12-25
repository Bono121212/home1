import React, { Component } from "react";

class AdminSearch extends Component {
  render() {
    return (
      <table className="ui admin_table_top none">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>
              그룹명<span>*</span>
            </th>
            <td>
              <input type="text" placeholder="그룹명을 입력해주세요." />
            </td>
          </tr>
          <tr>
            <th>
              그룹 설명<span>*</span>
            </th>
            <td>
              <input type="text" placeholder="그룹설명을 입력해주세요." />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch;
