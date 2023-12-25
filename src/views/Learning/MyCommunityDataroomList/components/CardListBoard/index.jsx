import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class CardListBoard extends Component {
  render() {
    return (
      <div className="mycommunity-board-list">
        <Table className="ml-02-03">
          <colgroup>
            <col width="60%"/>
            <col width="20%"/>
            <col width="20%"/>
          </colgroup>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>제목</Table.HeaderCell>
              <Table.HeaderCell>등록자</Table.HeaderCell>
              <Table.HeaderCell>등록일</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>딥러닝 동향과 관련된 자료 모음입니다.</Table.Cell>
              <Table.Cell>chang</Table.Cell>
              <Table.Cell>2020.09.21 20:00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>딥 러닝과 머신 러닝의 차이</Table.Cell>
              <Table.Cell>EBBLE</Table.Cell>
              <Table.Cell>2020.09.21 20:00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                deep structured learning 참고 자료, 제목이 길 경우 제목이 길
                경우 말줄임…
              </Table.Cell>
              <Table.Cell>tmddnjs78</Table.Cell>
              <Table.Cell>2020.09.21 20:00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>황이석 교수의 Financial Acumen</Table.Cell>
              <Table.Cell>captain</Table.Cell>
              <Table.Cell>2020.09.09 20:00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                [자동차 반도체, 기회와 도전] 1. 자동차 산업의 결정된 미래
              </Table.Cell>
              <Table.Cell>nickname</Table.Cell>
              <Table.Cell>2020.08.28 20:00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CardListBoard;
