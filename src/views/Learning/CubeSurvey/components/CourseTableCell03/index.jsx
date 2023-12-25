import React, { Component } from "react";
import { Radio, Table } from "semantic-ui-react";

class CourseTableCell extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <>
            <Table.Cell>업무에 적용 가능한가요?</Table.Cell>
            <Table.Cell>
              <Radio
                className="base"
                name="radioGroup03"
                value="value01"
                checked={this.state.value === "value01"}
                onChange={this.handleChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Radio
                className="base"
                name="radioGroup03"
                value="value02"
                checked={this.state.value === "value02"}
                onChange={this.handleChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Radio
                className="base"
                name="radioGroup03"
                value="value03"
                checked={this.state.value === "value03"}
                onChange={this.handleChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Radio
                className="base"
                name="radioGroup03"
                value="value04"
                checked={this.state.value === "value04"}
                onChange={this.handleChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Radio
                className="base"
                name="radioGroup03"
                value="value05"
                checked={this.state.value === "value05"}
                onChange={this.handleChange}
              />
            </Table.Cell>
</>
    );
  }
}

export default CourseTableCell;
