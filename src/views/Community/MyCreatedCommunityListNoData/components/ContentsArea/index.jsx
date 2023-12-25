import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Menu
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import CommunityList01 from "../CommunityList01";
// import CommunityList02 from "../CommunityList02";
// import CommunityList03 from "../CommunityList03";
// import CommunityList04 from "../CommunityList04";
// import CommunityList05 from "../CommunityList05";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'MyCreatedCommunity'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='MyCommunity'
                                active={activeItem === 'MyCommunity'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Community<span className="count">+5</span>
                            </Menu.Item>
                            <Menu.Item
                                name='MyCreatedCommunity'
                                active={activeItem === 'MyCreatedCommunity'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Created Community
                            </Menu.Item>
                            <Menu.Item
                                name='MyFeed'
                                active={activeItem === 'MyFeed'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Feed<span className="count">+20</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                        <div className="text">내가 만든 Community 학습 과정이 없습니다.</div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
