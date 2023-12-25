import React, {Component, createRef} from 'react';
import {Segment, Sticky, Menu, Button, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import overviewVideoimg from "../../../../../../images/all/overviewVideoimg.PNG";
import CommentContents from '../../../../../Sample/CommentCaseNew/components/CommentContents';
import PhotoCommentNew from '../../../../../Sample/CommentCaseNew/components/PhotoCommentReplyNew';
import TestRadio01 from '../../../../../Sample/CommentCaseNew/components/TestRadio01';

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
                                            <img src={overviewVideoimg} alt=""/>
                                        </div>
                                        <div className="pop-overview lms-sticky-menu">
                                            <div className="lms-fixed-inner">
                                                <a href="#lms-overview" className="lms-act">강의소개</a>
                                                <a href="#lms-comment" className="lms-comment active">코멘트</a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="ui segment full">
                                                <PhotoCommentNew />
                                                <TestRadio01 />
                                                <CommentContents pin={true} secret={false} myPost={false} />
                                                <div className="more-comments">
                                                    <Button icon className='left moreview'>
                                                        <Icon className='moreview' /> more comments
                                                    </Button>
                                                </div>

                                            </div>
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