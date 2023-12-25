import React, { Component } from "react";

// const selectOptions02 = [
//   { key: "all", value: "all", text: "전체" },
//   { key: "subject", value: "subject", text: "제목" },
//   { key: "contents", value: "contents", text: "내용" },
//   { key: "writer", value: "writer", text: "작성자" },
// ];

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
            <th>그룹명<span>*</span></th>
            <td>
            <input type="text" placeholder="그룹명을 입력해주세요." />
            </td>
          </tr>
          <tr>
            <th>그룹 설명<span>*</span></th>
            <td>
              <input type="text" placeholder="그룹 설명을 입력해주세요." />
            </td>
          </tr>
          <tr>
            <th>그룹장</th>
            <td>
              <input type="text" placeholder="그룹장을 선택해주세요." />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch;
