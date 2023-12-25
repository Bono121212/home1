import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Button, Menu
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import CommunityList01 from "../CommunityList01";
import CommunityList02 from "../CommunityList02";
import CommunityList03 from "../CommunityList03";
import CommunityList04 from "../CommunityList04";
import CommunityList05 from "../CommunityList05";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'MyCommunity'}

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
                                My Created Community<span className="count">+1</span>
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
                    <div className="top-guide-title">
                        <div className="list-number">총 <strong>5개</strong>의 리스트가 있습니다.</div>
                    </div>

                    <div className="community-accordion">
                        <CommunityList01/>
                        <CommunityList02/>
                        <CommunityList03/>
                        <CommunityList04/>
                        <CommunityList05/>
                    </div>

                    {/* //card list */}
                    <div className="more-comments">
                        <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                    </div>

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
