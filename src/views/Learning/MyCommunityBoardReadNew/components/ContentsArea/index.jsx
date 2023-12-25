import React, { Component, createRef } from "react";
import { Icon, Segment, Button, Comment, Popup } from "semantic-ui-react";

import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";
import PagingList from "../PagingList";

import CommentContents from "../CommentContents";
import PhotoComment from "../PhotoComment";
import TestRadio01 from "../TestRadio01";
import BoardDown from "../BoardDown";
import TaskReadBottom02 from "../TaskReadBottom02";
import SetIcon from "../../../../../images/all/commu-btn-menu.png";
import IconRecommend from '../../../../../images/all/icon-community-class.svg';
import CardBelt from "../CardBelt";



class ContentsArea extends Component {
    contextRef = createRef();
    state = { activeItem: "MyCommunity" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        return (
            <div ref={this.contextRef}>
                <Segment className="full">
                    <div className="course-detail-center community-containter comm-card-view">
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
                                        {`SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구 통합 플랫폼인 'SUNI’를 출범시킨다. 국내기업 최고 수준의 교육·연구 전문조직을 운영해야 구성원들이 4차 산업혁명 등 급변하는 경영환경에 선제적으로 대응할 수 있는 역량을 갖추게 돼 결국 딥체인지가 가능하다는 최태원 회장의 경영방침에 따른 것이다.

SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식 출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경 변화에 따라 Human Capital(인적 자본)에 대한 과감한 투자가 절실한 시점"이라며 "구성원들은 SUNI를 통해 미래역량을 기르고 축적하게 될 것이며, 이것이 곧 구성원들의 지속적인 성장과 행복을 위한 변화의 첫걸음이 될 것"이라고 말했다.

실제로 AI와 DT(Digital Transformation)가 확산되면서 대·중소기업 등 전통기업의 종전 업무가 사라지거나 업무 형태가 바뀌는 것은 물론 일의 성과를 좌우하는 핵심 역량도 달라지고 있다. SK그룹은 지난달 태스크포스(TF)를 발족, 개별적으로 운영해온 연수원, 연구소 등을 통합, 변화를 추진하고 있다.`}
                                        </p>
                                    </div>
                                </div>

                                {/* 첨부파일 */}
                                <BoardDown />

                                {/* 추천과정 */}
                                <div className="community-board-down card-slide-list">
                                    <div className="board-down-title">
                                        <p>
                                            {" "}
                                            <img src={IconRecommend} alt="" />
                                            추천 과정
                                        </p>
                                    </div>
                                    <CardBelt />
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
