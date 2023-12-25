import React, { Component } from "react";
import ClearInputBoxSearch from "../ClearInputBoxSearch";

class AdminSearch02 extends Component {
  render() {
    return (
      <table className="ui admin_table_search sub">
        <colgroup>
          <col width="100px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>검색어</th>
            <td>
              <ClearInputBoxSearch />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch02;
