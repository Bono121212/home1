import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Button, Modal, Icon, Table, Label } from "semantic-ui-react";

class SingleClassEnrolmentModal extends Component {
    state = { open: true };
    close = () => this.setState({ open: false });
    render() {
        const { open } = this.state;

        return (
            <Modal open={open} onClose={this.close} className='base w1000 popup-enrolment'>
                <Modal.Header className='res'>
                    수강 신청하기
                    {/* 수강 재신청하기 */}
                    <Button className='close24' onClick={this.close} ><Icon className='close24' /></Button>
                </Modal.Header>
                <Modal.Content className='scrolling-80vh'>
                    <div className='title-area'>
                        <h3 className="title-style">
                            <Label className="onlytext bold size24">
                                <Icon className="seriese" />
                                <span>차수정보</span>
                            </Label>
                        </h3>
                        <div className='inquiry-style'>
                            <span>담당</span>
                            <em className='name'>이화선</em>
                            <Link className="ui icon button left post-s">
                                <Icon className="ask" />문의하기
                            </Link>
                        </div>
                    </div>
                    <div className="table-seriese">
                        <Table>
                            <colgroup>
                                <col width="8%" />
                                <col width="8%" />
                                <col width="14%" />
                                <col width="14%" />
                                <col width="auto" />
                                <col width="14%" />
                                <col width="10%" />
                                <col width="10%" />
                            </colgroup>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>선택</Table.HeaderCell>
                                    <Table.HeaderCell>차수</Table.HeaderCell>
                                    <Table.HeaderCell>신청기간</Table.HeaderCell>
                                    <Table.HeaderCell>교육기간</Table.HeaderCell>
                                    <Table.HeaderCell>장소</Table.HeaderCell>
                                    <Table.HeaderCell>비용</Table.HeaderCell>
                                    <Table.HeaderCell>정원</Table.HeaderCell>
                                    <Table.HeaderCell>상태</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell><Checkbox radio name="radioSeriese" /></Table.Cell>
                                    <Table.Cell><Label className='label-seriese'>1차수</Label></Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>장소가 최대 30자까지 들어갑니다. 장소가 최대 30자</Table.Cell>
                                    <Table.Cell>무료</Table.Cell>
                                    <Table.Cell>48/50</Table.Cell>
                                    <Table.Cell>반려됨</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Checkbox radio name="radioSeriese" /></Table.Cell>
                                    <Table.Cell><Label className='label-seriese'>2차수</Label></Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>서울시 구로구 구로동 큰길로 56</Table.Cell>
                                    <Table.Cell>200,000원</Table.Cell>
                                    <Table.Cell>48/50</Table.Cell>
                                    <Table.Cell>신청 가능</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Checkbox radio name="radioSeriese" /></Table.Cell>
                                    <Table.Cell><Label className='label-seriese'>3차수</Label></Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>서울시 구로구 구로동 큰길로 56</Table.Cell>
                                    <Table.Cell>20,000원</Table.Cell>
                                    <Table.Cell>48/50</Table.Cell>
                                    <Table.Cell>신청 가능</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Checkbox radio name="radioSeriese" /></Table.Cell>
                                    <Table.Cell><Label className='label-seriese'>4차수</Label></Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>2022.01.20 ~ <br/>2022.02.19</Table.Cell>
                                    <Table.Cell>서울시 구로구 구로동 큰길로 56</Table.Cell>
                                    <Table.Cell>무료</Table.Cell>
                                    <Table.Cell>48/50</Table.Cell>
                                    <Table.Cell>신청 가능</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <div className='table-desc'>
                            <p className='desc'><i aria-hidden="true" class="icon noti32"></i><strong>No Show Penalty</strong>일부 과정은 유료 과정이므로 미이수 시에도 비용이 부과되며 개별 비용 부담등 정책은 관계사 별 상이하오니 사별 HR담당에 문의바랍니다.</p>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className='actions'>
                    <Button className='pop p w190'>신청</Button>
                    {/* <Button className='pop p w190'>재신청</Button> */}
                </Modal.Actions>
            </Modal>
        )
    }
}

export default SingleClassEnrolmentModal;