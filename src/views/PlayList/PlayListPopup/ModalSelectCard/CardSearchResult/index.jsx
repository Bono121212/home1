import React, {Component} from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
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
                                <Checkbox className="base"/>
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 이만큼 들어갔다가 ellipsis가 적용됩니다 이렇게 적용됩니다. 더길게되면 점점점으로 뒤편글자가 잘립니다. 이렇게 잘려요</p></Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox className="base"/>
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">[Jumping Concert #6] Wifi 쉽게 이해하기</p></Table.Cell>
                            <Table.Cell>김종원</Table.Cell>
                            <Table.Cell>2020.12.15  14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox className="base"/>
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">[21년 제 8회 Open Lab] 자율주행 자동차가 나아갈 길</p></Table.Cell>
                            <Table.Cell>최지영</Table.Cell>
                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox className="base"/>
                            </Table.Cell>
                            <Table.Cell><p className="ellipsis">Live Talk "인플레이션, 이것만은 알고가자."</p></Table.Cell>
                            <Table.Cell>김지훈</Table.Cell>
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
