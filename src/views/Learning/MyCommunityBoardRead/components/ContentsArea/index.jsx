import React, { Component, createRef } from "react";
import { Icon, Segment, Button, Comment, Popup } from "semantic-ui-react";

import LnbMenu from "../../components/LnbMenu";
import Surveyheader from "../../components/Surveyheader";
import PagingList from "../../components/PagingList";

import CommentContents from "../../components/CommentContents";
import PhotoComment from "../../components/PhotoComment";
import TestRadio01 from "../../components/TestRadio01";
import BoardDown from "../../components/BoardDown";
import TaskReadBottom02 from "../../components/TaskReadBottom02";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";
import SetIcon from "../../../../../images/all/commu-btn-menu.png";


class ContentsArea extends Component {
    contextRef = createRef();
    state = { activeItem: "MyCommunity" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        return (
            <div ref={this.contextRef}>
                <Segment className="full">
                    <div className="course-detail-center community-containter">
                        <LnbMenu />
                        <div className="community-home-contants">
                            {/* Header */}
                            <div className="course-info-header">
                                <Surveyheader />

                                <Comment.Actions>
                                    <Popup
                                    className="balloon-pop myCumu_btn commu_bubble_popup"
                                    trigger={
                                        <div className="right top sub-menu">
                                        <Button icon className="img-icon ui user">
                                            <img src={SetIcon} alt="" />
                                            <span className="blind">북마크</span>
                                        </Button>
                                        </div>
                                    }
                                    position="bottom right"
                                    on="click"
                                    >
                                        <Popup.Content className="community-ballon-content">
                                            <ul>
                                                <li className="community-profile">
                                                    <Button>
                                                        <i className="balloon icon popupUrl" />
                                                        <span>URL 복사</span>
                                                    </Button>
                                                </li>
                                                <li>
                                                    <Button>
                                                        <i className="balloon icon popupBook" />
                                                        <span>북마크 추가</span>
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Popup.Content>
                                    </Popup>
                                </Comment.Actions>

                            </div>
                            <div className="community-contants">
                                <div className="class-guide-txt fn-parents ql-snow">
                                    <div className="text ql-editor">
                                        <p>
                                        SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구
                                        통합 플랫폼인 'SUNI’를 출범시킨다. 국내기업 최고 수준의
                                        교육·연구 전문조직을 운영해야 구성원들이 4차 산업혁명 등
                                        급변하는 경영환경에 선제적으로 대응할 수 있는 역량을
                                        갖추게 돼 결국 딥체인지가 가능하다는 최태원 회장의
                                        경영방침에 따른 것이다.
                                        </p>
                                    </div>
                                </div>

                                {/* 첨부파일 */}
                                <BoardDown />

                                {/* 프로필 */}
                                <div className="community-board-card">
                                    <img src={CommentImg04} alt="" />
                                    <div className="board-card-title">
                                        <h3>Han2030</h3>
                                        <h4>만나서 반갑습니다. 자신을 소개할 수 있는 간단한 인사말을 넣어주세요!</h4>
                                    </div>
                                </div>

                                {/* 버튼 4개 */}
                                <TaskReadBottom02 />

                                <PhotoComment />

                                {/* Radio */}
                                <div className="course-radio">
                                    <TestRadio01 />
                                </div>

                                {/* 게시판 */}
                                <CommentContents />

                                {/* More Comments */}
                                <div className="more-comments padding-margin">
                                    <Button icon className="left moreview">
                                        <Icon className="moreview" /> more comments (15)
                                    </Button>
                                </div>

                                {/* 이전글, 다음글 */}
                                <div className="paging">
                                    <PagingList />
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
