import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import ClearInputBoxSearch from "../ClearInputBoxSearch";
// import ClearInputBoxSearchNone from "../ClearInputBoxSearchNone";

const selectOptions02 = [
  { key: "all", value: "all", text: "전체" },
  { key: "subject", value: "subject", text: "제목" },
  { key: "contents", value: "contents", text: "내용" },
  { key: "writer", value: "writer", text: "작성자" },
];

class AdminSearch02 extends Component {
  render() {
    return (
      <table className="ui admin_table_search">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>검색어</th>
            <td>
            <Select
                placeholder="전체"
                className="ui small-border admin_tab_select"
                defaultValue={selectOptions02[0].value}
                options={selectOptions02}
              />
              <ClearInputBoxSearch />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch02;
