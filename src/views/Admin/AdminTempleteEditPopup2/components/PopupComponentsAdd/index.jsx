import React, { Component } from "react";
import { Button, Table, Icon, Select } from "semantic-ui-react";

class PopupComponentsAdd extends Component {
    render() {
        const ArrayOptions = [
            { key: '3', value: '3', text: '3' },
            { key: '2', value: '2', text: '2' },
            { key: '1', value: '1', text: '1' },
        ]
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
                                    <li className="focus"><Icon className="slt_style"/><span>스타일 선택</span></li>
                                    <li><Icon className="slt_content"/><span>콘텐츠 선택</span></li>
                                </ol>
                            </div>

                            <div className="add_box">
                                <strong className="add_title">콘텐츠 배열</strong>
                                <Table>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.HeaderCell>가로</Table.HeaderCell>
                                            <Table.Cell>
                                                <Select placeholder="3"  options={ArrayOptions} />
                                                <span>개</span>
                                            </Table.Cell>

                                            <Table.HeaderCell>세로</Table.HeaderCell>
                                            <Table.Cell>
                                                <Select placeholder="2"  options={ArrayOptions} />
                                                <span>개</span>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>

                            <div className="add_box">
                                <strong className="add_title">스타일 선택</strong>
                                <ul className="compo_step">
                                    <li className="active">
                                        <Button>
                                            <Icon className="card_txt"/>
                                            <span>리스트</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="list_txt"/>
                                            <span>카드</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="card_txt_img"/>
                                            <span>카드</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="list_left"/>
                                            <span>좌정렬리스트</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="list_cross"/>
                                            <span>교차정렬리스트</span>
                                        </Button>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="prev">이전</Button>
                            <Button className="next">다음</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponentsAdd;
