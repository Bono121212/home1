import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {
   Button, Table, TableBody, TableHeaderCell, TableCell, Segment, Form, Radio
} from 'semantic-ui-react'


class ContentsArea extends Component {
    state = {value:'',focus: false, write: '', }
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
                                                    2021.09.08
                                            </TableCell>
                                        </Table.Row>
                                    </TableBody>
                                </Table>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="admin-answer-top">
                                <strong>문의 답변 만족도 조사</strong>                            
                            </div>
                            <div className="form-table-wrapper">
                                <Table className="admin-answer-form">
                                    <colgroup>
                                        <col width="240px"/>
                                        <col width="960px"/>
                                    </colgroup>
                                    <TableBody>
                                        <Table.Row>
                                            <TableHeaderCell><span className="impt">만족도 조사</span></TableHeaderCell>
                                            <TableCell>
                                                <div className="thumb-area">
                                                    <div className="thumb-group">
                                                        <Radio 
                                                            className='thumbs thumbup'
                                                            label={<label for="thumbup"><span className='blind'>만족</span></label>}
                                                            id="thumbup"
                                                            name="thumbGroup"
                                                            value="good"
                                                            checked={this.state.value === "good"}
                                                            onChange={this.handleChange}
                                                        />
                                                        <Radio 
                                                            className='thumbs thumbdown'
                                                            label={<label for="thumbdown"><span className='blind'>불만족</span></label>}
                                                            id="thumbdown"
                                                            name="thumbGroup"
                                                            value="notgood"
                                                            checked={this.state.value === "notgood"}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className='thumb-date blind'>
                                                        <span>2022.06.03</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <TableHeaderCell><span>만족도 조사 의견</span></TableHeaderCell>
                                            <TableCell>
                                                <div className="svy-inpt">
                                                    <div className="ui input">
                                                        <input placeholder="문의 답변에 대한 만족도 의견을 자유롭게 남겨주세요." type="text"/>
                                                    </div>
                                                    <Button className="bg">등록</Button>
                                                </div>
                                            </TableCell>
                                        </Table.Row>
                                    </TableBody>
                                </Table>
                            </div>
                        </Form.Field>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
