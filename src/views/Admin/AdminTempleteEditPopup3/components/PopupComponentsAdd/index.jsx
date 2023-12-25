import React, { Component } from "react";
import { Button, Table, Icon, Input } from "semantic-ui-react";

class PopupComponentsAdd extends Component {
    render() {
        return (
            <div className="popup_add">
                <div className="popup_inner">
                    <div className="popup_top">
                        <strong>컴포넌트 추가</strong>
                        <Button className="close"><Icon/></Button>
                    </div>
                    
                    <div className="popup_body">
                        <div className="scroll">

                            <div className="popup_process">
                                <ol className="process">
                                    <li className="after"><Icon className="slt_component"/><span>컴포넌트 선택</span></li>
                                    <li className="after"><Icon className="slt_style"/><span>스타일 선택</span></li>
                                    <li className="focus"><Icon className="slt_content"/><span>콘텐츠 선택</span></li>
                                </ol>
                            </div>
                            
                            <div className="add_box">
                                <strong className="add_title">콘텐츠 타이틀</strong>
                                <Table>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.HeaderCell>제목 입력</Table.HeaderCell>
                                            <Table.Cell>
                                                <Input className="long" placeholder="최대 20자까지 입력할 수 있습니다."/>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>

                            <div className="add_box">
                            <strong className="add_title">콘텐츠 표시 옵션</strong>
                            <Table>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.HeaderCell>표시 배열</Table.HeaderCell>
                                        <Table.Cell>가로 3개 x 세로 2줄</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>높이 설정</Table.HeaderCell>
                                        <Table.Cell><Input />px</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        </div>
                        </div>

                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="prev">이전</Button>
                            <Button className="add">추가</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponentsAdd;
