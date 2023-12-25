import React, {Component} from 'react';
import {
    Sticky, Menu, Segment, Dropdown, Icon, Button
} from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";
import ChallengeBadge01 from "../ChallengeBadge01";
import ChallengeBadge02 from "../ChallengeBadge02";
import ChallengeBadge03 from "../ChallengeBadge03";

const levelOptions = [
    { key: '0', value: 'all', text: '전체 Level'},
    { key: '1', value: 'level1', text: 'Level1'},
    { key: '2', value: 'level2', text: 'Level2'},
    { key: '3', value: 'level3', text: 'Level3'},
]

class ContentsArea extends Component {

    state = {
        activeItem: 'ChallengingBadgeList'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const { activeItem } = this.state;

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku2'>
                            <Menu.Item
                                name='AllBadgeList'
                                active={activeItem === 'AllBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/AllBadgeListSlideV2"
                            >
                                Badge List<span className='count'>+22</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ChallengingBadgeList'
                                active={activeItem === 'ChallengingBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/ChallengingBadgeListV2"
                            >
                                도전중 Badge<span className='count'>+3</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedBadgeList'
                                active={activeItem === 'EarnedBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/EarnedBadgeListV2"
                            >
                                My Badge<span className='count'>+22</span>
                            </Menu.Item>
                            <NavLink
                                to="/">
                                <div className="item-button round">인증제도 소개</div>
                            </NavLink>
                        </Menu>
                    </div>
                </Sticky>

                {/*0707 추가*/}
                {/*도전중 Badge List에는 badge-category 없음*/}
                {/*<BadgeCategory/>*/}

                <Segment className='full'>
                    <div className='top-guide-title'>
                        <div className='list-number'>총 <strong>3개</strong>의 도전중인 Badge가 있습니다.</div>
                        <div className='right-wrap'>
                            <Dropdown
                                className='small-border s160'
                                placeholder='전체 Level'
                                selection
                                options={levelOptions}
                            />
                        </div>
                    </div>

                    {/*도전 중인 Badge List*/}
                    <div className='challenge-wrap'>
                        <ChallengeBadge01/>
                        <hr className='dividing'/>

                        <ChallengeBadge02/>
                        <hr className='dividing'/>

                        <ChallengeBadge03/>
                    </div>
                    {/* list more */}
                    <div className="more-comments">
                        <Button icon className="left moreview"><Icon className='moreview'/>list more</Button>
                    </div>

                    {/*콘텐츠 없음*/}
                    <div className='no-cont-wrap'>
                        <Icon className='no-contents80'/>
                        <div className='text'>
                            도전중인 Badge가 없습니다.<br/>새로운 Badge에 도전해보시겠습니까?
                        </div>
                        <Button icon className='right btn-blue2'>
                            Badge List 바로가기
                            <Icon className='morelink'/>
                        </Button>
                    </div>

                </Segment>
            </div>
        )
    }
}

export default ContentsArea