import React, { Component } from "react";
import { Table, TableBody } from "semantic-ui-react";

class ModalList extends Component {
    render(){
        return(
            <div className="table_wrap">
                <Table selectable>
                    <colgroup>
                        <col width="170px"/>
                        <col /> 
                        <col width="120px"/>
                        <col width="80px"/>
                        <col width="80px"/>
                        <col width="110px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.HeaderCell>게시판</Table.HeaderCell>
                        <Table.HeaderCell>제목</Table.HeaderCell>
                        <Table.HeaderCell>작성자</Table.HeaderCell>
                        <Table.HeaderCell>조회수</Table.HeaderCell>
                        <Table.HeaderCell>좋아요</Table.HeaderCell>
                        <Table.HeaderCell>작성일</Table.HeaderCell>
                    </Table.Header>
                    <TableBody>
                        <Table.Row>     
                            {/* 
                                <Table.Cell에 걸려있던 ellipsis클래스를 분리하였습니다.
                                ellipsis는 클래스를 넣을수 있는 span태그를 추가하였습니다. 
                            */}
                            <Table.Cell className="tleft"><span className="ellipsis">r게시판이름이 길</span></Table.Cell>
                            <Table.Cell className="tleft"><span className="ellipsis">반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.</span></Table.Cell>
                            <Table.Cell>캠핑마스터</Table.Cell>
                            <Table.Cell>108</Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>2020.12.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                        <Table.Cell className="tleft "><span className="ellipsis">r게시판이름이 길때에는 어떻게 해야되나요? 알려주세요</span></Table.Cell>
                            <Table.Cell className="tleft "><span className="ellipsis">반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.</span></Table.Cell>
                            <Table.Cell>닥터지</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.12.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                        <Table.Cell className="tleft "><span className="ellipsis">r게시판이름이 길때에는 어떻게 해야되나요? 알려주세요</span></Table.Cell>
                            <Table.Cell className="tleft "><span className="ellipsis">반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.</span></Table.Cell>
                            <Table.Cell>운영자</Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>2020.12.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft "><span className="ellipsis">r게시판이름이 길때에는 어떻게 해야되나요? 알려주세요</span></Table.Cell>
                            <Table.Cell className="tleft "><span className="ellipsis">반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.</span></Table.Cell>
                            <Table.Cell>김선희</Table.Cell>
                            <Table.Cell>15,021</Table.Cell>
                            <Table.Cell>128</Table.Cell>
                            <Table.Cell>2020.12.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft "><span className="ellipsis">r게시판이름이 길때에는 어떻게 해야되나요? 알려주세요</span></Table.Cell>
                            <Table.Cell className="tleft "><span className="ellipsis">반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.</span></Table.Cell>
                            <Table.Cell>Sunyside</Table.Cell>
                            <Table.Cell>136</Table.Cell>
                            <Table.Cell>549</Table.Cell>
                            <Table.Cell>2020.12.15</Table.Cell>
                        </Table.Row>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ModalList;