import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ChartTable02 extends Component {
    render(){
        return(
          <Table className="chart-table" fixed singleLine>
            <colgroup>
              <col width="100px"/>
              <col/>
              <col width="260px"/>
              <col/>
              <col/>
              <col/>
              <col width="100px"/>
              <col width="100px"/>
              <col width="100px"/>
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No.</Table.HeaderCell>
                <Table.HeaderCell>메뉴</Table.HeaderCell>
                <Table.HeaderCell>제목</Table.HeaderCell>
                <Table.HeaderCell>닉네임</Table.HeaderCell>
                <Table.HeaderCell>성명</Table.HeaderCell>
                <Table.HeaderCell>작성일자</Table.HeaderCell>
                <Table.HeaderCell>조회수</Table.HeaderCell>
                <Table.HeaderCell>좋아요</Table.HeaderCell>
                <Table.HeaderCell>댓글</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>일반 / 재테크 How to</Table.Cell>
                <Table.Cell>연금저축펀드 잘 알아보는 법​</Table.Cell>
                <Table.Cell>둘리</Table.Cell>
                <Table.Cell>김호이</Table.Cell>
                <Table.Cell>2021.03.25​</Table.Cell>
                <Table.Cell>202​</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>300</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>공지 / 경제 Study</Table.Cell>
                <Table.Cell>제 2회 경제 온라인 스터디원 모집​</Table.Cell>
                <Table.Cell>관리자​</Table.Cell>
                <Table.Cell>김써니</Table.Cell>
                <Table.Cell>2021.03.25​</Table.Cell>
                <Table.Cell>60​</Table.Cell>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>200</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>공지 | 경제 Study</Table.Cell>
                <Table.Cell>2021 Feb) Weekly Economic News Weekly Economic News</Table.Cell>
                <Table.Cell>관리자​</Table.Cell>
                <Table.Cell>김써니</Table.Cell>
                <Table.Cell>2021.03.25​</Table.Cell>
                <Table.Cell>2,024</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>100</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>일반 / 재테크 How to</Table.Cell>
                <Table.Cell>무엇이든 물어보세요​</Table.Cell>
                <Table.Cell>짱아</Table.Cell>
                <Table.Cell>김선희</Table.Cell>
                <Table.Cell>2021.03.25​</Table.Cell>
                <Table.Cell>192</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>60</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>일반 / 재테크 How to</Table.Cell>
                <Table.Cell>주식 잘하는 법​</Table.Cell>
                <Table.Cell>스펀지밥</Table.Cell>
                <Table.Cell>진지니</Table.Cell>
                <Table.Cell>2021.03.25​</Table.Cell>
                <Table.Cell>206</Table.Cell>
                <Table.Cell>40</Table.Cell>
                <Table.Cell>20</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )
    }
}

export default ChartTable02;