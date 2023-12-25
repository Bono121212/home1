import React, {Component} from 'react';
import {Button, Icon, Table} from "semantic-ui-react";

class RegisteredTeacherList extends Component {
    render() {
        return (
            <div className="teacher-list">
                <Table>
                    <Table.Body>
                        <Table.Row>

                            <Table.Cell>
                                <Button className="img-icon">
                                    <Icon className="del-list24"/>
                                    <span className="blind">삭제</span>
                                </Button>
                            </Table.Cell>

                            <Table.Cell>
                                <span className="ellipsis">일이삼사오육칠팔구</span>
                            </Table.Cell>

                            <Table.Cell className="belong">
                                <span>SK주식회사 C&C</span>
                                <span>DW 서비스 1팀</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">강의시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">학습인정시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Button className="img-icon">
                                    <Icon className="del-list24"/>
                                    <span className="blind">삭제</span>
                                </Button>
                            </Table.Cell>

                            <Table.Cell>
                                <span className="ellipsis">신현정</span>
                            </Table.Cell>

                            <Table.Cell className="belong">
                                <span>SK주식회사 C&C</span>
                                <span>DW 서비스 1팀</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">강의시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">학습인정시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Button className="img-icon">
                                    <Icon className="del-list24"/>
                                    <span className="blind">삭제</span>
                                </Button>
                            </Table.Cell>

                            <Table.Cell>
                                <span className="ellipsis">신현정</span>
                            </Table.Cell>

                            <Table.Cell className="belong">
                                <span>SK주식회사 C&C</span>
                                <span>DW 서비스 1팀</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">강의시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                            <Table.Cell className="time">
                                <span className="label">학습인정시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="5" />
                                </div>
                                <span className="h">시간</span>
                                <div className="ui h48 input write">
                                    <input type="text" value="55" />
                                </div>
                                <span className="m">분</span>
                            </Table.Cell>

                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default RegisteredTeacherList