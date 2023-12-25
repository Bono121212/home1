import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ChartTable extends Component {
    render(){
        return(
          <Table className="chart-table">
            <colgroup>
              <col width="33.33%"/>
              <col />
              <col width="33.33%"/>
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>일자</Table.HeaderCell>
                <Table.HeaderCell>요일</Table.HeaderCell>
                <Table.HeaderCell>조회수</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>2021.05.10</Table.Cell>
                <Table.Cell>월요일</Table.Cell>
                <Table.Cell>13</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.05.07</Table.Cell>
                <Table.Cell>금요일</Table.Cell>
                <Table.Cell>888</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.05.04</Table.Cell>
                <Table.Cell>화요일</Table.Cell>
                <Table.Cell>1,234</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.05.01</Table.Cell>
                <Table.Cell>토요일</Table.Cell>
                <Table.Cell>240</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.28</Table.Cell>
                <Table.Cell>수요일</Table.Cell>
                <Table.Cell>30</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.25</Table.Cell>
                <Table.Cell>일요일</Table.Cell>
                <Table.Cell>16</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.22</Table.Cell>
                <Table.Cell>목요일</Table.Cell>
                <Table.Cell>13</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.19</Table.Cell>
                <Table.Cell>월요일</Table.Cell>
                <Table.Cell>888</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.16</Table.Cell>
                <Table.Cell>금요일</Table.Cell>
                <Table.Cell>1,234</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2021.04.13</Table.Cell>
                <Table.Cell>화요일</Table.Cell>
                <Table.Cell>240</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>        
        )
    }
}

export default ChartTable;