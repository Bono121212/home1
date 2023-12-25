import React, { Component } from "react";
import { Radio, Button, Icon, Table, TableHeader } from "semantic-ui-react";


class TempleteAddDesign extends Component {
    state = { value: "news" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="add_design">
                    <div className="templete_title">
                        <span className="title">타입 선택</span>
                    </div>
                    
                    <div className="add_design_table">
                        {/* 라디오버튼 선택시 
                            t_thumb안에 있는 Icon에 on클래스 추가시 아이콘 변경됩니다. */}
                        <Table>
                            <colgroup>
                                <col width="84px"/>
                                <col />
                            </colgroup>
                            <TableHeader>
                                <Table.Row>
                                    <Table.HeaderCell>선택</Table.HeaderCell>
                                    <Table.HeaderCell>템플릿 타입</Table.HeaderCell>
                                </Table.Row>
                            </TableHeader>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className="t_choice">
                                        <Radio
                                            name="templeteType"
                                            value="basic"
                                            checked={this.state.value === "basic"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb">
                                        <Icon className="i_layout_a"/> 
                                        <span>기본</span>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell className="t_choice">
                                        <Radio
                                            name="templeteType"
                                            value="news"
                                            checked={this.state.value === "news"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb">
                                        <Icon className="i_layout_b on"/>
                                        <span>뉴스/매거진</span>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell className="t_choice">
                                        <Radio
                                            name="templeteType"
                                            value="multi"
                                            checked={this.state.value === "multi"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb">
                                        <Icon className="i_layout_c"/>
                                        <span>멀티미디어</span>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>   

                        <div className="btn_box">
                            <Button className="list">목록</Button>
                            <Button className="blue">추가</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteAddDesign;
