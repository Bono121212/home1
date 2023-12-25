import React, {Component} from 'react';

import {
    Segment,
    Form,
    Table
} from "semantic-ui-react";
import ButtonGroup from '../ButtonGroup';

class ContentsArea extends Component {
    render(){
        return(
            <Segment className='full'>
                <div className='apl-form-wrap'>
                    <Form>
                        <div className='result-view'>
                            <div className='title'>결제 요청 정보</div>
                            <dl className='in'>
                                <dt>신청자</dt>
                                <dd>유은미</dd>
                            </dl>
                            {/*0514 조직정보 추가*/}
                            <dl className='in'>
                                <dt>조직</dt>
                                <dd>플랫폼 개발 1팀</dd>
                            </dl>
                            <dl className='bl'>
                                <dt>학습정보</dt>
                                <dd>
                                    <Table className='view-table'>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.HeaderCell>과정명</Table.HeaderCell>
                                                <Table.Cell>AI 101</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>학습유형</Table.HeaderCell>
                                                <Table.Cell>Classroom</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>신청한 차수</Table.HeaderCell>
                                                <Table.Cell>1</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>(차수)교육기간</Table.HeaderCell>
                                                <Table.Cell>2020.02.20~2020.03.20</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>강의장소</Table.HeaderCell>
                                                <Table.Cell>SK C&C 본사 지하 1층 대강당</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>인당 교육 금액</Table.HeaderCell>
                                                <Table.Cell>₩1,000,000</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </dd>
                            </dl>
                            <div className='title mt50'>결제 승인 정보</div>
                            <dl className='bl'>
                                <dd>
                                    <Table className='view-table'>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.HeaderCell>결제상태</Table.HeaderCell>
                                                <Table.Cell className='blue'>반려</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.HeaderCell>승인자 의견</Table.HeaderCell>
                                                <Table.Cell>
                                                    유은미씨는 2020년 03월 04일에 지방 출장 스케쥴이 잡혀 있습니다. 출장 스케줄 확인 후 다른 차수로 재신청 해주시길 바랍니다
                                                    유은미씨는 2020년 03월 04일에 지방 출장 스케쥴이 잡혀 있습니다. 출장 스케줄 확인 후 다른 차수로 재신청 해주시길 바랍니다.
                                                    유은미씨는 2020년 03월 04일에 지방 출장 스케쥴이 잡혀 있습니다. 출장 스케줄 확인 후 다른 차수로 재신청 해주시길 바랍니다.
                                                    유은미씨는 2020년 03월 04일에 지방 출장 스케쥴이 잡혀 있습니다. 출장 스케줄 확인 후 다른 차수로 재신청 해주시길 바랍니다.
                                                    유은미씨는 2020년 03월 04일에 지방 출장 스케쥴이 잡혀 있습니다. 출장 스케줄 확인 후 다른 차수로 재신청 해주시길 바랍니다..
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </dd>
                            </dl>
                        </div>
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}

export default ContentsArea;