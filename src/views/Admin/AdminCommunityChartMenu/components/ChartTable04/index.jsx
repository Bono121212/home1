import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ChartTable extends Component {
    render(){
        return(
          <Table className="chart-table" fixed singleLine>
            <colgroup>
              <col width="660px"/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>메뉴명</Table.HeaderCell>
                <Table.HeaderCell>게시글</Table.HeaderCell>
                <Table.HeaderCell>조회수</Table.HeaderCell>
                <Table.HeaderCell>좋아요</Table.HeaderCell>
                <Table.HeaderCell>댓글</Table.HeaderCell>
                <Table.HeaderCell>상태</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>경제 연구소</Table.Cell>
                <Table.Cell>48</Table.Cell>
                <Table.Cell>809</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>67</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>코로나 이후 경제전망</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>709</Table.Cell>
                <Table.Cell>30</Table.Cell>
                <Table.Cell>13</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>경제 조간 브리핑</Table.Cell>
                <Table.Cell>34</Table.Cell>
                <Table.Cell>203</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>경제 FreeTALK</Table.Cell>
                <Table.Cell>48</Table.Cell>
                <Table.Cell>202</Table.Cell>
                <Table.Cell>46</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>코로나 이후 경제전망</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>126</Table.Cell>
                <Table.Cell>75</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>경제 조간 브리핑</Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>653</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>경제 연구소 이야기</Table.Cell>
                <Table.Cell>91</Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>65</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>경제 FreeTALK</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>12</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>사용중</Table.Cell>
              </Table.Row>
              <Table.Row className="state-dl"> {/* 상태가 삭제일때 state-dl*/}
                <Table.Cell>경제 톡톡 이야기</Table.Cell>
                <Table.Cell>48</Table.Cell>
                <Table.Cell>202</Table.Cell>
                <Table.Cell>24</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>삭제</Table.Cell>
              </Table.Row>
              <Table.Row className="state-dl">
                <Table.Cell>글로벌 경제 News</Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>503</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>삭제</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )
    }
}

export default ChartTable;