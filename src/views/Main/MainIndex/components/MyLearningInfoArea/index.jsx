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
                    <Table className="main_index_top">
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
                                    <div className="title">2021년 학습시간</div>
                                    <Link to="#">
                                        <span className="big">180</span>
                                        <span className="small h">h</span>
                                        <span className="big">20</span>
                                        <span className="small m">m</span>
                                    </Link>
                                    <Link to="#" className="main_sub_all">
                                        &#40;누적
                                        <span className="big2">260</span>
                                        <span className="small2">h</span>
                                        <span className="big2">30</span>
                                        <span className="small2">m</span>
                                        &#41;
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title completeLearning">2021년 완료학습</div>
                                    <Link to="#">
                                        <span className="big">30</span>
                                        <span className="small">개</span>
                                    </Link>
                                    <Link to="#" class="main_sub_all">
                                        &#40;누적
                                        <span className="big2">209</span>
                                        <span className="small2 h">개</span>
                                        &#41;
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">My Stamp</div>
                                    <Link to="#">
                                        <span className="big">28</span>
                                        <span className="small">개</span>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="title">My Badge</div>
                                    <Link to="#">
                                        <span className="big">20</span>
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