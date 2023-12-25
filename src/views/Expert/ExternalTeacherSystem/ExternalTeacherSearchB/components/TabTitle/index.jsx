import React, {Component, createRef} from 'react';
import {Segment, Sticky, Menu, Label, List} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TabTitle extends Component {
    contextRef = createRef()
    state = {activeItem: 'LearnerManagement'}

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
            </div>
        )
    }
}

export default TabTitle