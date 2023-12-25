import React, { Component } from "react";
import { Select } from "semantic-ui-react";

const selectOptions03 = [
  { key: "html", value: "html", text: "HTML" },
];

class AdminSearch02 extends Component {
  render() {
    return (
      <table className="ui admin_table_search sub">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>유형<span>*</span></th>
            <td>
            <Select
                    placeholder="전체"
                    className="ui small-border admin_tab_select"
                    defaultValue={selectOptions03[0].value}
                    options={selectOptions03}
                  />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch02;
