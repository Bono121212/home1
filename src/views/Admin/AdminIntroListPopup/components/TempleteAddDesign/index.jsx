import React, { Component } from "react";
import { Radio, Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";

import IconPen from "../../../../../images/all/lo-07-05-img.png";


class TempleteAddDesign extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="add_design">
                    <div className="templete_title">
                        <span className="title">타입 선택</span>
                    </div>
                    
                    <div className="add_design_table">
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
                                            label="basic"
                                            name="templeteType"
                                            value="basic"
                                            checked={this.state.value === "basic"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb"><Image src={IconPen} alt="기본 타입" /></Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell className="t_choice">
                                        <Radio
                                            label="news"
                                            name="templeteType"
                                            value="news"
                                            checked={this.state.value === "news"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb"><Image src={IconPen} alt="뉴스/매거진타입" /></Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell className="t_choice">
                                        <Radio
                                            label="multi"
                                            name="templeteType"
                                            value="multi"
                                            checked={this.state.value === "multi"}
                                            onChange={this.handleChange}
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="t_thumb"><Image src={IconPen} alt="멀티미디어타입" /></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>   
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteAddDesign;
