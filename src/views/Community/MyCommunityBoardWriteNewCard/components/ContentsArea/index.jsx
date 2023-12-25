import React, { Component, createRef } from "react";
import { Segment, Form, Icon, Button, Table } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";
import Editor from "../Editor";
import AttachFileUpload from "../AttachFileUpload";
// import BoardWriteRadio from "../BoardWriteRadio";
import BoardWriteCheckbox from "../BoardWriteCheckbox";
import ModalSelectCard from "../ModalSelectCard";

class ContentsArea extends Component {
    contextRef = createRef();
    state = { activeItem: "MyCommunity" };
    state = { activeIndex: 0, popup: true };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }

    render() {
        const { activeIndex, popup } = this.state;

        return (
            <div ref={this.contextRef}>
                <Segment className="full">
                    <div className="course-detail-center community-containter">
                        <LnbMenu />

                        <div className="community-home-contants">
                            {/* Header */}
                            <div className="course-info-header">
                                <Surveyheader />
                            </div>
                            <div className="community-contants">
                                <div className="form-contants">
                                    <Form>
                                        <Form.Field>
                                        {/* 공지 등록 체크박스 */}
                                        <BoardWriteCheckbox />
                                        <div className="ui right-top-count input">
                                            <span className="count">
                                            <span className="now">0</span>/
                                            <span className="max">100</span>
                                            </span>
                                            <input
                                            type="text"
                                            placeholder="제목을 입력해 주세요. (최대 입력 글자 수 확인 필요)"
                                            />
                                            <Icon className="clear link" />
                                            <span className="validation">
                                            You can enter up to 100 characters.
                                            </span>
                                        </div>
                                        </Form.Field>

                                        <Form.Field>
                                        <label>본문</label>
                                        <div className="ui editor-wrap">
                                            <Editor />
                                        </div>
                                        </Form.Field>

                                        <Form.Field>
                                        <label>파일첨부</label>
                                        <div className="report-attach">
                                            <AttachFileUpload />
                                        </div>
                                        </Form.Field>

                                        <Form.Field>
                                            <label>추천 과정</label>
                                            <Button
                                                active={activeIndex === 1}
                                                index = {1}
                                                onClick={this.handlePopup}
                                                className="btn_select"
                                            >
                                                Card 선택
                                            </Button>

                                            {/* 카드선택 팝업 */}
                                            {
                                                popup && <ModalSelectCard />
                                            }


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
                                                                <Button className="btn_down"><span className="hidden">아래로이동</span></Button>
                                                                <Button className="btn_up"><span className="hidden">위로이동</span></Button>
                                                                <Button className="btn_delete"><span className="hidden">삭제</span></Button>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><p className="ellipsis">추천 과정명이 들어가는데요 최대 몇글자가 들어가는지는 맞춰보세요.</p></Table.Cell>
                                                            <Table.Cell>김써니</Table.Cell>
                                                            <Table.Cell>2020.12.15 14:52:39</Table.Cell>
                                                            <Table.Cell>
                                                                <Button className="btn_down"><span className="hidden">아래로이동</span></Button>
                                                                <Button className="btn_up"><span className="hidden">위로이동</span></Button>
                                                                <Button className="btn_delete"><span className="hidden">삭제</span></Button>
                                                            </Table.Cell>
                                                        </Table.Row>

                                                    </Table.Body>
                                                </Table>
                                            </div>
                                        </Form.Field>
                                    </Form>

                                    {/* Bottom */}
                                    <div class="survey-preview">
                                        <button class="ui button fix bg">등록</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default ContentsArea;
