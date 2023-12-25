import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

class ChartTable extends Component {
    render(){
        return(
          <Table className="chart-table">
            <colgroup>
              <col width="80px"/>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col width="80px"/>
              <col width="80px"/>
              <col width="80px"/>
              <col width="100px"/>
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No.</Table.HeaderCell>
                <Table.HeaderCell>소속사</Table.HeaderCell>
                <Table.HeaderCell>소속조직(팀)</Table.HeaderCell>
                <Table.HeaderCell>닉네임</Table.HeaderCell>
                <Table.HeaderCell>성명</Table.HeaderCell>
                <Table.HeaderCell>E-Mail</Table.HeaderCell>
                <Table.HeaderCell>방문수</Table.HeaderCell>
                <Table.HeaderCell>게시글</Table.HeaderCell>
                <Table.HeaderCell>좋아요</Table.HeaderCell>
                <Table.HeaderCell>댓글</Table.HeaderCell>
                <Table.HeaderCell>등급</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>SK 텔레콤</Table.Cell>
                <Table.Cell>전략기획팀</Table.Cell>
                <Table.Cell singleLine>요리보고조리보는둘리</Table.Cell>
                <Table.Cell>김호이</Table.Cell>
                <Table.Cell>ss123456789501583241@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>대표관리자</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>SK하이닉스</Table.Cell>
                <Table.Cell>경영지원팀</Table.Cell>
                <Table.Cell singleLine>HIHI</Table.Cell>
                <Table.Cell>김하이</Table.Cell>
                <Table.Cell>hello@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>멤버</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>SK C&#38;C</Table.Cell>
                <Table.Cell>디자인팀</Table.Cell>
                <Table.Cell singleLine>그래그래</Table.Cell>
                <Table.Cell>김그래</Table.Cell>
                <Table.Cell>yes@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>그룹장</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>SK 건설</Table.Cell>
                <Table.Cell>CS 3팀</Table.Cell>
                <Table.Cell singleLine>둘리</Table.Cell>
                <Table.Cell>김호이</Table.Cell>
                <Table.Cell>ho2@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>그룹장</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>SK C&#38;C</Table.Cell>
                <Table.Cell>전략기획팀</Table.Cell>
                <Table.Cell singleLine>지오니</Table.Cell>
                <Table.Cell>박지원</Table.Cell>
                <Table.Cell>jiwoni@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>멤버</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>SK 건설</Table.Cell>
                <Table.Cell>CS 2팀</Table.Cell>
                <Table.Cell singleLine>Summer</Table.Cell>
                <Table.Cell>한여름</Table.Cell>
                <Table.Cell>ss@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>멤버</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>SK 텔레콤</Table.Cell>
                <Table.Cell>전략기획팀</Table.Cell>
                <Table.Cell singleLine>써니</Table.Cell>
                <Table.Cell>김선희</Table.Cell>
                <Table.Cell>suni@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>대표관리자</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>SK하이닉스</Table.Cell>
                <Table.Cell>경영지원팀</Table.Cell>
                <Table.Cell singleLine>스펀지밥</Table.Cell>
                <Table.Cell>이세정</Table.Cell>
                <Table.Cell>ssak@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>멤버</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>SK 텔레콤</Table.Cell>
                <Table.Cell>마케팅팀</Table.Cell>
                <Table.Cell singleLine>콜라</Table.Cell>
                <Table.Cell>이써니</Table.Cell>
                <Table.Cell>coke@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>그룹장</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>SK 건설</Table.Cell>
                <Table.Cell>전략기획팀</Table.Cell>
                <Table.Cell singleLine>둘리</Table.Cell>
                <Table.Cell>김호이</Table.Cell>
                <Table.Cell>ho22@sk.com</Table.Cell>
                <Table.Cell><Link to="#">202</Link></Table.Cell>
                <Table.Cell><Link to="#">15</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell><Link to="#">10</Link></Table.Cell>
                <Table.Cell>멤버</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )
    }
}

export default ChartTable;