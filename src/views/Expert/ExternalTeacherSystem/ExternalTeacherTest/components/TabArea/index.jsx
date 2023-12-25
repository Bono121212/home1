import React, {Component, createRef} from 'react';
import {Segment, Sticky, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TableTitle from "../TableTitle";
import TableBody from "../TableBody";
import Paging from "../Paging";

class TabArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'TestManagement'}

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
                                active={activeItem === 'LearnerManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>학습자 관리</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                <div className="test-area">
                    <Segment className='full'>

                        {/* 테이블 제목 */}
                        <TableTitle />

                        {/* 테이블 리스트 */}
                        <TableBody />

                        {/* 페이징 */}
                        <Paging />

                    </Segment>
                </div>
            </div>
        )
    }
}

export default TabArea