import React, {Component, createRef} from 'react';
import {Segment, Sticky, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AllStatus from "../AllStatus";

class TabArea extends Component {
    contextRef = createRef()
    state = {activeItem: ''}

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
                    <div className="info-list-wrap">
                        <ul className="info-list">
                            <li>
                                <div className="list-inner learner">
                                    <span>신규 학습자</span>
                                    <span>
                                        <strong>+12</strong>명
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner reply">
                                    <span>신규 댓글</span>
                                    <span>
                                        <strong>+8</strong>명
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner task">
                                    <span>과제 제출</span>
                                    <span>
                                        <strong>14</strong>명
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner test1">
                                    <span>테스트</span>
                                    <span>
                                        <strong>87</strong>명
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 학습자 이수현황 & 관계자 별 학습현황 */}
                    <AllStatus />
                </Segment>
            </div>
        )
    }
}

export default TabArea