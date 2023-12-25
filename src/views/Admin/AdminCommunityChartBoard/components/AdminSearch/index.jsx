import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import Calendar from "../Calendar";

class AdminSearch extends Component {
  render() {
    return (

      <Table className="admin tab_top">
        <colgroup>
          <col />
          <col />
          <col width="100px"/>
        </colgroup>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>조회일자</Table.HeaderCell>
            <Table.Cell>
              <div className="preview">
                <Calendar />
              </div>
            </Table.Cell>
            <Table.Cell><Button className="bg02">검색</Button></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default AdminSearch;
