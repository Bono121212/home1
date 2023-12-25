import React, { Component } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import ModalSelectCard from "../ModalSelectCard";

class RcmmdCard extends Component {
    
    state = { activeIndex: 0, popup: false };

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }

    render(){
        const { activeIndex, popup } = this.state;

        return(
            <div className="rmd_form">
                <Form>
                    <Form.Field>
                        <div className="flex sp_bt">
                            <label class="field_tit">추천 과정</label>
                            <Button 
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handlePopup}
                                className="btn_select add_file"
                            >
                                Card 선택
                            </Button>

                            {/* 카드선택 팝업 */}
                            {popup && <ModalSelectCard />}
                        </div>
                        {/* 'Card선택' 버튼 클릭 전에는 아래 테이블(table_card영역)이 보이지 않아야 하고, 
                        팝업에서 선택한 카드가 있을때에는 보여야 합니다. */}
                        <div className="table_card">
                            <Table>
                                <colgroup>
                                    <col width="426px"/>
                                    <col width="120px"/>
                                    <col width="160px"/>
                                    <col width="144px"/>
                                </colgroup>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>과정명</Table.HeaderCell>
                                        <Table.HeaderCell>생성자</Table.HeaderCell>
                                        <Table.HeaderCell>등록일자</Table.HeaderCell>
                                        <Table.HeaderCell><span className="hidden">위치정렬</span></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.맞춰보세요.맞춰보세요.맞춰보세요</p></Table.Cell>
                                        <Table.Cell>김써니</Table.Cell>
                                        <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                                        <Table.Cell>
                                            <Button className="white btn_down"><span className="hidden">아래로이동</span></Button>
                                            <Button className="white btn_up"><span className="hidden">위로이동</span></Button>
                                            <Button className="white btn_delete"><span className="hidden">삭제</span></Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.</p></Table.Cell>
                                        <Table.Cell>김써니</Table.Cell>
                                        <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                                        <Table.Cell>
                                            <Button className="white btn_down"><span className="hidden">아래로이동</span></Button>
                                            <Button className="white btn_up"><span className="hidden">위로이동</span></Button>
                                            <Button className="white btn_delete"><span className="hidden">삭제</span></Button>
                                        </Table.Cell>
                                    </Table.Row>                        
                                </Table.Body>
                            </Table>
                        </div>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

export default RcmmdCard;