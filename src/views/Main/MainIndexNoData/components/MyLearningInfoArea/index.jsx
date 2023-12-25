import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
    Table, Image,
} from "semantic-ui-react";
import MyLearningAdditional from '../MyLearningAdditional';


class MyLearningInfoArea extends Component {
    render() {
        return (
            <>
                {/* .my-learning-area */}
                <div className="main-info-box">
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <div className="ui profile">
                                        <div className="pic s80">
                                            <Image src="/images/all/profile-80-px.png" alt="프로필사진 임시이미지"/>
                                        </div>
                                    </div>
                                    <div className="user">
                                        <div className="hello">안녕하세요</div>
                                        <div className="user-name">
                                            <strong className="ellipsis">Ellizabeth Samantha Victoria Ophelia</strong>
                                            <span>님</span>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">총 학습시간</div>
                                    <Link to="#">
                                        <span className='waiting'>학습대기중</span>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">완료된 학습</div>
                                    <Link to="#">
                                        <span className="big">00</span>
                                        <span className="small">개</span>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">My Stamp</div>
                                    <Link to="#">
                                        <span className="big">00</span>
                                        <span className="small">개</span>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">My Badge</div>
                                    <Link to="#">
                                        <span className="big">00</span>
                                        <span className="small">개</span>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                {/* // .my-learning-area */}

                <MyLearningAdditional />
            </>
        )
    }
}

export default MyLearningInfoArea;