import React, { Component } from "react";
import { Table, Image, Icon } from "semantic-ui-react";
import Nodata from "../../../../../images/all/no-contents-80-px.svg";


class ModalList extends Component {
    render(){
        return(
            <div className="table_wrap">
                <Table selectable>
                    <colgroup>
                        <col width="170px"/>
                        <col/>
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
                </Table>
                <div className="nodata">
                    <Icon><Image src={Nodata}/></Icon>
                    <p className="txt">검색된 게시글이 없습니다.</p>
                </div>   
            </div>   
        )
    }
}

export default ModalList;