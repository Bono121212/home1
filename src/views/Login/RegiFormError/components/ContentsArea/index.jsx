import React, { Component } from 'react';
import { Form, Table, TableBody, Icon, Button, Image, Input, Radio } from "semantic-ui-react";
import ImgProfile from '../../../../../images/all/img-profile-56-px.svg';


class ContentsArea extends Component{
    render(){
        return (
            <Form className="terms-content">
                <div className="logo-area">
                    <Icon className="sk-login logo-new"/>
                </div>
                <Form.Field>
                    <div className="header-tit">
                        <span>회원가입</span>
                    </div>
                </Form.Field>
                <Form.Field>
                    <strong className="regi-tit">기본 정보</strong>
                    <Table>
                        <colgroup>
                            <col width="200px"/>
                            <col width="auto"/>
                        </colgroup>
                        <TableBody>
                            <Table.Row>
                                <Table.HeaderCell>사진 profile</Table.HeaderCell>
                                <Table.Cell>
                                    <div className="profile">
                                        <div className="pic">
                                            <Image src={ImgProfile} alt="Profile"/>
                                        </div>
                                        <Button className="icon prf-edit img-icon">
                                            <Icon className="prf-plus"/>
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>성명</Table.HeaderCell>
                                <Table.Cell><strong>최선희</strong></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>연락처</Table.HeaderCell>
                                <Table.Cell><strong>010-1234-5678</strong></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.Cell><strong>mysuni@sk.com</strong></Table.Cell>
                            </Table.Row>
                        </TableBody>
                    </Table>
                </Form.Field>
                <Form.Field>
                    <strong className="regi-tit">추가 정보</strong>
                    <Table>
                        <colgroup>
                            <col width="200px"/>
                            <col width="auto"/>
                        </colgroup>
                        <TableBody>
                            <Table.Row>
                                <Table.HeaderCell>생년월일<span id="type">*</span></Table.HeaderCell>
                                <Table.Cell>
                                    <Input type="text" placeholder="예) 911019"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>성별<span id="type">*</span></Table.HeaderCell>
                                <Table.Cell>
                                    <Radio label="남" name="radioGroup" className="base" />
                                    <Radio label="여" name="radioGroup" className="base" />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>소속(단체명)<span id="type">*</span></Table.HeaderCell>
                                <Table.Cell className="comp">
                                    {/* 직접입력 선택시 input창 */}
                                    <Input type="text" placeholder="입력해주세요."/>
                                </Table.Cell>
                            </Table.Row>
                        </TableBody>
                    </Table>
                </Form.Field>
                <div className="button-area">
                    <Button className="line fix">취소</Button>
                    <Button className="bg fix">확인</Button>
                </div>
            </Form>
        )
    }
}

export default ContentsArea;