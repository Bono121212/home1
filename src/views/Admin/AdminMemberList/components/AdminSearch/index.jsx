import React, { Component } from "react";
import { Radio, Select } from "semantic-ui-react";
import ClearInputBoxSearch from "../ClearInputBoxSearch";
import Calendar from "../Calendar";

const selectOptions02 = [
  { key: "all", value: "all", text: "전체" },
  { key: "subject", value: "subject", text: "제목" },
  { key: "contents", value: "contents", text: "내용" },
  { key: "writer", value: "writer", text: "작성자" },
];


class AdminSearch extends Component {

  state = { value: "all" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <table className="ui admin_table_top">
        <colgroup>
          <col width="100px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>가입일자</th>
            <td>
              <div className="preview">
                <Calendar />
              </div>
            </td>
          </tr>
          <tr>
            <th>멤버등급</th>
            <td>
              <div className="admin_table_radio">
                <Radio
                  className="base"
                  label="전체"
                  name="optionGroup"
                  value="all"
                  checked={this.state.value === "all"}
                  onChange={this.handleChange}
                />
                <Radio
                  className="base"
                  label="관리자"
                  name="optionGroup"
                  value="admin"
                  checked={this.state.value === "admin"}
                  onChange={this.handleChange}
                />
                <Radio
                  className="base"
                  label="멤버"
                  name="optionGroup"
                  value="member"
                  checked={this.state.value === "member"}
                  onChange={this.handleChange}
                />
              </div>
            </td>
          </tr>
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

export default AdminSearch;
