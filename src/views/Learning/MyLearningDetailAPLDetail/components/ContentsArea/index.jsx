import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
                <div className='apl-form-wrap create'>
                    <Form>
                        <div className="section-tit">
                            <span className='text1'>승인정보</span>
                        </div>
                        <div className="create-detail type-apl">
                            <dl>
                                <dt>생성자 및 등록일자</dt>
                                <dd>
                                    <span>김써니</span>
                                    <span className="l">2021.11.10 17:57:54</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>처리상태</dt>
                                <dd>
                                    <span className='blue'>승인</span>
                                    <span className="l">2021.11.10 17:57:54</span>
                                </dd>
                            </dl>
                        </div>

                        <div className="section-tit">
                            <span className="text1">교육정보</span>
                        </div>
                        <Table className="create">
                            <Table.Body>
                                <Table.Row>
                                    <Table.HeaderCell>교육명</Table.HeaderCell>
                                    <Table.Cell>모든 구성원들의 한단계 발전을 위해</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>교육형태</Table.HeaderCell>
                                    <Table.Cell>기타-직접입력 &gt; On-Line Video 특강</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Channel</Table.HeaderCell>
                                    <Table.Cell>AI</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>교육기간</Table.HeaderCell>
                                    <Table.Cell>2020.05.29~2020.06.29</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>교육기관</Table.HeaderCell>
                                    <Table.Cell>Youtube &amp; Facebook</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>교육시간</Table.HeaderCell>
                                    <Table.Cell>02시간 00분</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>교육내용</Table.HeaderCell>
                                    <Table.Cell>
                                        <div>
                                            Youtube를 보면서 “AI와 Block chain과의 상관관계는 어떻게 되는가?”라는 주제로 학습을 하였습니다. Facebook에서도 비슷한 강의가 있어서 함께 들어봤는데 의외로 나쁘지 않았어요 3시간 정도 들었는데 2시간만 교육시간으로 인정해주세요.
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>첨부파일</Table.HeaderCell>
                                    <Table.Cell>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                        <div>
                                            <Link to="#">Education UX/UI class_1.avi</Link>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>승인자</Table.HeaderCell>
                                    <Table.Cell>
                                        <div>
                                            <span>이의연</span>
                                            <span className="l">SKI</span>
                                            <span className="l">LMS</span>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        {/*버튼*/}
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}

export default ContentsArea;