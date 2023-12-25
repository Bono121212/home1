import React, {Component} from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

//import Calendar from '../Calendar';
//import ClearInputBoxSearch from '../ClearInputBoxSearch';
import Paging from '../Paging';


class CardSearchResult extends Component {
    render() {
        return (
            <div className="table_card">
                <Table>
                    <colgroup>
                        <col width="60px"/>
                        <col width="600px"/>
                        <col width="120px"/>
                        <col width="160px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell><span className="hidden">선택여부</span></Table.HeaderCell>
                            <Table.HeaderCell>과정명</Table.HeaderCell>
                            <Table.HeaderCell>생성자</Table.HeaderCell>
                            <Table.HeaderCell>등록일자</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox
                                    className="base"
                                    name="radioGroup"
                                    value="oldest"
                                />
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.맞춰보세요.맞춰보세요.맞춰보세요</p></Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox
                                    className="base"
                                    name="radioGroup"
                                    value="oldest"
                                />
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.맞춰보세요.맞춰보세요.맞춰보세요</p></Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox
                                    className="base"
                                    name="radioGroup"
                                    value="oldest"
                                />
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.맞춰보세요.맞춰보세요.맞춰보세요</p></Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox
                                    className="base"
                                    name="radioGroup"
                                    value="oldest"
                                />
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.맞춰보세요.맞춰보세요.맞춰보세요</p></Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                {/* 페이징 */}
                <Paging />
            </div>
        )
    }
}


export default CardSearchResult
