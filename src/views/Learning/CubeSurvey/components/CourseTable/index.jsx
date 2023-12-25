import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import CourseTableCell from "../CourseTableCell";
import CourseTableCell02 from "../CourseTableCell02";
import CourseTableCell03 from "../CourseTableCell03";
import CourseTableCell04 from "../CourseTableCell04";

class CourseTable extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Table celled fixed singleLine className="test-table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>매우만족</Table.HeaderCell>
            <Table.HeaderCell>만족</Table.HeaderCell>
            <Table.HeaderCell>보통</Table.HeaderCell>
            <Table.HeaderCell>불만족</Table.HeaderCell>
            <Table.HeaderCell>매우불만족</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
            <CourseTableCell />
          </Table.Row>

          <Table.Row>
            <CourseTableCell02 />
          </Table.Row>



          <Table.Row>
            <CourseTableCell03 />
          </Table.Row>



          <Table.Row>
            <CourseTableCell04 />
          </Table.Row>



        </Table.Body>
      </Table>
    );
  }
}

export default CourseTable;
