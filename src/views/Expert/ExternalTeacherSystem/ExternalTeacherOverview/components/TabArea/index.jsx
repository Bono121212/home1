import React, {Component, createRef} from 'react';
import {Segment, Sticky, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ContentsText from "../ContentsText";
import overviewVideoimg from "../../../../../../images/all/overviewVideoimg.PNG";


class TabArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'LectureInfo'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku-teacher'>
                            <Menu.Item
                                name='LectureInfo'
                                active={activeItem === 'LectureInfo'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                강의 정보
                            </Menu.Item>
                            {/* <Menu.Item
                                name='TaskManagement'
                                active={activeItem === 'TaskManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>과제 관리</span>
                            </Menu.Item>
                            <Menu.Item
                                name='TestManagement'
                                active={activeItem === 'TestManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>테스트 관리</span>
                            </Menu.Item> */}
                            <Menu.Item
                                name='LearnerManagement'
                                active={activeItem === 'Comment'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>학습자 관리</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                <Segment className='full'>
                    <div className="course-overview-wrap">
                        <div className="course-detail-center">
                            <div className="main-wrap">
                                <div>
                                    <div className="ui segment full">
                                        {/* 동영상 영역 */}
                                        <div className="course-video-area">
                                            <img src={overviewVideoimg} alt="" />
                                        </div>
                                        <div className="pop-overview lms-sticky-menu">
                                            <div className="lms-fixed-inner">
                                                <a href="#lms-overview" className="lms-act active">강의소개</a>
                                                <a href="#lms-comment" className="lms-comment">코멘트</a>
                                            </div>
                                        </div>
                                        <div class="class-guide-txt fn-parents ql-snow">
                                            <div class="text ql-editor">
                                                <p>
                                                Digital기반 고객 경험 디자인을 위한 주요 키워드 및 사례를 전문가들의 Talk show를 통해 쉽게 알아봅시다!<br/>
                                                <br/>
                                                1&#41; 습관화와 압도적인 경험을 유도하는 고객 서비스 기획 : 개념과 사례<br/>
                                                2&#41; 스마트 기기 등 최신 사례를 통한 고객 기대감 설계 및 확장<br/>
                                                3&#41; Untact/비대면 기반의 고객 경험 설계 개념 및 최신 사례
                                                </p>
                                            </div>
                                        </div>

                                        <div className="badge-detail course-text">
                                        {/* 관련카테고리 , 태그 */}
                                            <ContentsText />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Segment>

            </div>
        )
    }
}

export default TabArea