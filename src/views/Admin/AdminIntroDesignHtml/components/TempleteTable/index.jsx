import React, { Component } from "react";
import { Radio, Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";

import IconPen from "../../../../../images/all/sample.png";
import samplea from "../../../../../images/all/community-99-template-sample-a-thumb.png";
import sampleb from "../../../../../images/all/community-99-template-sample-b-thumb.png";
import samplec from "../../../../../images/all/community-99-template-sample-c-thumb.png";

import Nodata from "../../../../../images/all/no-contents-80-px.svg";





class TempleteTable extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="list_table intro">
                    {/* 제작된 인트로 있을때 */}
                    <Table>
                        <colgroup>
                            <col />
                            <col width="230px"/>
                            <col width="240px"/>
                            <col width="374px"/>
                            <col width="260px"/>
                        </colgroup>
                        <TableHeader>
                            <Table.Row>
                                <Table.HeaderCell>선택</Table.HeaderCell>
                                <Table.HeaderCell>인트로 썸네일</Table.HeaderCell>
                                <Table.HeaderCell>인트로 타입</Table.HeaderCell>
                                <Table.HeaderCell>인트로명</Table.HeaderCell>
                                <Table.HeaderCell>생성일</Table.HeaderCell>
                            </Table.Row>
                        </TableHeader>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className="t_choice">
                                    <Radio
                                        name="IntroType"
                                        value="basic"
                                        checked={this.state.value === "basic"}
                                        onChange={this.handleChange}
                                    />
                                </Table.Cell>
                                <Table.Cell className="t_thumb">
                                    <div className="thumb">
                                        {/* <Image src={samplea} alt="인트로썸네일" /> */}
                                        <span className="txt"> 제작한 인트로<br/>캡쳐 화면</span>
                                        <Button className="btn_zoom"><Icon /></Button>
                                    </div>
                                </Table.Cell>
                                {/* t_type에  now 클래스 추가되면 '현재사용중' 텍스트 보여집니다*/}
                                <Table.Cell className="t_type now"><span>컨포넌트 타입</span></Table.Cell>
                                <Table.Cell className="t_name">
                                    <span>커뮤니티 기본형이지만 3분기에 바꿀 예정입니다.일단저장</span>
                                    <Button><Icon /></Button>
                                </Table.Cell>
                                <Table.Cell className="t_date">2021.05.17</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell className="t_choice">
                                    <Radio
                                        name="IntroType"
                                        value="news"
                                        checked={this.state.value === "news"}
                                        onChange={this.handleChange}
                                    />
                                </Table.Cell>
                                <Table.Cell className="t_thumb">
                                    <div className="thumb">
                                        {/* <Image src={sampleb} alt="인트로썸네일" /> */}
                                        <span className="txt"> 제작한 인트로<br/>캡쳐 화면</span>
                                        <Button className="btn_zoom"><Icon /></Button>    
                                    </div>
                                </Table.Cell>
                                <Table.Cell className="t_type "><span>HTML타입</span></Table.Cell>
                                <Table.Cell className="t_name">
                                    <span>여름용</span> 
                                    <Button><Icon /></Button>
                                </Table.Cell>
                                <Table.Cell className="t_date">2021.05.18</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>   

                    <div className="btn_box">
                        <Button className="blue"> + 인트로 디자인 추가</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteTable;
