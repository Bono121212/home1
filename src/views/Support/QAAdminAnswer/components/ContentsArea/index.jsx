import React, {Component} from 'react'
import {
    Button, Table, TableBody, TableHeaderCell, TableCell, Radio, Checkbox, Segment, Form, TextArea, Icon
} from 'semantic-ui-react'
import EditForm from '../EditForm';
import AttachFileUpload from '../AttachFileUpload';


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
                                <strong>문의답변</strong>
                            </div>
                            <div className="form-table-wrapper">
                                <Table className="admin-answer-form">
                                    <colgroup>
                                        <col width="240px"/>
                                        <col width="960px"/>
                                    </colgroup>
                                    <TableBody>
                                        <Table.Row>
                                            <TableHeaderCell><span className="impt">답변 내용</span></TableHeaderCell>
                                            <TableCell>
                                                <EditForm />
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>첨부 파일</span></TableHeaderCell>
                                            <TableCell>
                                                <AttachFileUpload/>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span className="impt">처리 상태</span></TableHeaderCell>
                                            <TableCell>
                                                <div className="radio-bttn">
                                                    <Radio
                                                        className='base'
                                                        label='답변대기'
                                                        name='radioGroup'
                                                        value='radio01'
                                                        checked={this.state.value === 'radio01'}
                                                        onChange={this.handleChange}
                                                    />
                                                    <Radio
                                                        className='base'
                                                        label='답변완료'
                                                        name='radioGroup'
                                                        value='radio02'
                                                        checked={this.state.value === 'radio02'}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>메일 발송 여부</span></TableHeaderCell>
                                            <TableCell>
                                                <Checkbox className="base" label="문의자에게 해당 내용을 메일로 발송합니다."/>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>메모</span></TableHeaderCell>
                                            <TableCell>
                                                <TextArea className="memo-ipt" rows='3' placeholder="내용을 입력해주세요."/>
                                                <p><Icon className="info20"/>답변 담당자와 고객센터 부서가 서로 공유되는 메모입니다. 문의자에게는 메모 내용이 공유되지 않습니다.</p>
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
                        <Button className="fix bg">등록</Button>
                    </div>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
