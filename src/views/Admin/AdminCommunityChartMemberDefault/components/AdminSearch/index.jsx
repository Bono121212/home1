import React, { Component } from "react";
import { Table, Select} from "semantic-ui-react";
import ClearInputBoxSearch from '../ClearInputBoxSearch';

const selectOptions = [
  {key: "all", value: "all", text: "전체"},
  {key: "company", value: "company", text: "소속사"},
  {key: "team", value: "team", text: "소속조직(팀)"},
  {key: "name", value: "name", text: "이름"},
  {key: "nickname", value: "nickname", text: "닉네임"},
  {key: "email", value: "email", text: "E-Mail"},
  {key: "level", value: "level", text: "등급"},
]

class AdminSearch extends Component {
  render() {
    return (
      
      <Table className="admin tab_top">
        <colgroup>
          <col width="150px"/>
          <col />
        </colgroup>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>검색어</Table.HeaderCell>
            <Table.Cell>
              <Select
                placeholder="전체"
                className="ui small-border admin_tab_select"
                defaultValue={selectOptions[0].value}
                options={selectOptions}
              />
              <ClearInputBoxSearch />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    );
  }
}

export default AdminSearch;
