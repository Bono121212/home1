import React, {Component} from 'react';
import { Table } from "semantic-ui-react";

class ApproverList extends Component {
    render(){
        return(
            <>
                <Table className='head-fix ml-05-p08'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>회사</Table.HeaderCell>
                            <Table.HeaderCell>부서</Table.HeaderCell>
                            <Table.HeaderCell>이름</Table.HeaderCell>
                            <Table.HeaderCell>직위/직책</Table.HeaderCell>
                            <Table.HeaderCell>이메일</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>SK주식회사 C&C</Table.Cell>
                            <Table.Cell>DW 서비스팀</Table.Cell>
                            <Table.Cell>홍길동</Table.Cell>
                            <Table.Cell>팀장/수석</Table.Cell>
                            <Table.Cell>test@test.com</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    }
}
export default ApproverList;