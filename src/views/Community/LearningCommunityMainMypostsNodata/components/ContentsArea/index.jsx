import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Label, Button, Icon,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import JoinedStateCard from "../JoinedStateCard";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Myposts'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner summary">
                        <Label color='blue'>leadership</Label>
                        <span className="detail-tit">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향 Community</span>
                    </div>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Community'
                                active={activeItem === 'Community'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Community<span className="count">+5</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Myposts'
                                active={activeItem === 'Myposts'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My posts
                            </Menu.Item>
                            <Menu.Item
                                name='Overview'
                                active={activeItem === 'Overview'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Overview
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    {/* 우측 sub info  */}
                    <JoinedStateCard/>
                    {/* //우측 sub info */}

                    {/* 좌측 contents */}
                    <div className="contents">
                        <div className="top-guide-title">
                            <Button icon className='left post'><Icon className='post'/>Post</Button>
                        </div>
                        <div className="community-cont">
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">내가 작성한 글이 없습니다.</div>
                            </div>
                        </div>
                    </div>
                    {/* 좌측 contents */}
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
