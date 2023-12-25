import React, {Component} from 'react';
import {  Table, Icon, Image } from 'semantic-ui-react';
//import Calendar from '../Calendar';
//import ClearInputBoxSearch from '../ClearInputBoxSearch';

import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class ResultBoxNodata extends Component {
    
    render() {

        return (
            <div className="result_box">
                <Table>
                    <colgroup>
                        <col width="240px"/>
                        <col width="420px"/>
                        <col width="100px"/>
                        <col width="120px"/>
                        <col width="100px"/>
                        <col width="100px"/>
                        <col width="120px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="r_board">게시판</Table.HeaderCell>
                            <Table.HeaderCell className="r_title">제목</Table.HeaderCell>
                            <Table.HeaderCell className="r_writer">작성자</Table.HeaderCell>
                            <Table.HeaderCell className="r_date">작성일</Table.HeaderCell>
                            <Table.HeaderCell className="r_cnt">조회</Table.HeaderCell>
                            <Table.HeaderCell className="r_reply">댓글</Table.HeaderCell>
                            <Table.HeaderCell className="r_like">좋아요</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>                      
                </Table>

                <div className="nodata">
                    <Icon><Image src={Nodata} alt="" /></Icon>
                    <p className="txt">검색된 게시글이 없습니다.</p>
                </div>   
            </div>
        )
    }
}


export default ResultBoxNodata
