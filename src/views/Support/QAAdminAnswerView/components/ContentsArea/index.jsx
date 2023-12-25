import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {
   Button, Table, TableBody, TableHeaderCell, TableCell, Segment, Form
} from 'semantic-ui-react'


class ContentsArea extends Component {
    state = {value:'radio01'}
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <Segment className="full">
                <div className="content-admin-write">
                    <Form>
                        <Form.Field>
                            <div className="admin-answer-top">
                                <strong>문의 답변</strong>
                            </div>
                            <div className="form-table-wrapper">
                                <Table className="admin-answer-form">
                                    <colgroup>
                                        <col width="240px"/>
                                        <col width="960px"/>
                                    </colgroup>
                                    <TableBody>
                                        <Table.Row>
                                            <TableHeaderCell><span>담당자 정보</span></TableHeaderCell>
                                            <TableCell>
                                                <div>
                                                    <span>담당조직</span>
                                                    <span>이한나</span>
                                                    <span>SK C&amp;C</span>
                                                    <span>전략기획팀</span>
                                                    <span>skks03@sk.com</span>
                                                    <strong>답변완료</strong>
                                                    <span>2021.09.08</span>
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>답변 내용</span></TableHeaderCell>
                                            <TableCell>
                                                <p>
                                                    {`안녕하세요,
                                                    BM디자인전문가 과정은 선발과정으로 올해 초 각 관계사로부터 상반기 수강생을 접수받아 진행하였습니다.
                                                    하반기 역시 관계사 HRD 조직을 통해 선발할 예정이며, 일정은 아직 정해지지 않았습니다. 감사합니다.`}
                                                </p>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>첨부 파일</span></TableHeaderCell>
                                            <TableCell>
                                                <Link to="/" className="link">
                                                    <span className="ellipsis">12348567865248632ds8seasdlkfjwiekdifskeieieksdidkflskd.png</span>
                                                </Link>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>문의자 메일 발송</span></TableHeaderCell>
                                            <TableCell>
                                                <div>
                                                    <strong>Y</strong>
                                                    <span>담당조직</span>
                                                    <span>이한나</span>
                                                    <span>SK C&amp;C</span>
                                                    <span>전략기획팀</span>
                                                    <span>skks03@sk.com</span>
                                                    <span>2021.09.08</span>
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>만족도 조사 결과</span></TableHeaderCell>
                                            <TableCell>
                                                <div>
                                                    <strong>좋아요</strong>
                                                    {/* <strong>아쉬워요</strong> */}
                                                    <span>빠른 답변 감사합니다!</span>
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>메모</span></TableHeaderCell>
                                            <TableCell>
                                                <p className="admin-answer-memo">접수받은 당일, 문의자에게 유선으로 1차 안내 드렸습니다.</p>
                                            </TableCell>
                                        </Table.Row>
                                    </TableBody>
                                </Table>
                            </div>
                        </Form.Field>
                    </Form>
                </div>
                <div className='supt-bottom'>
                    <div className="bttn-area">
                        <Button className="fix line">목록</Button>
                        <Button className="fix bg">수정</Button>
                    </div>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
