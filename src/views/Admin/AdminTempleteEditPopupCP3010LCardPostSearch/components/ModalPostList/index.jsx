import React, { Component } from "react";
import { Table, Image, Icon } from "semantic-ui-react";
import Nodata from "../../../../../images/all/no-contents-80-px.svg";


class ModalList extends Component {
    render(){
        return(
            <div className="table_wrap">
                <Table selectable>
                    <colgroup>
                        <col width="240px"/>
                        <col width="540px"/>
                        <col />
                    </colgroup>
                    <Table.Header>
                        <Table.HeaderCell>Category /Channel</Table.HeaderCell>
                        <Table.HeaderCell>추천 과정명</Table.HeaderCell>
                        <Table.HeaderCell>적용</Table.HeaderCell>
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