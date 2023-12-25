import React, {Component} from 'react';
import {
    Sticky, Menu, Segment, Dropdown, Icon, Button
} from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';
import MyBadgeModal from '../../../../../components/Badges/MyBadgeModal';
import SNSListPopup from '../../../../../components/Badges/SNSListPopup';

const levelOptions = [
    { key: '0', value: 'all', text: '전체 Level'},
    { key: '1', value: 'level1', text: 'Level1'},
    { key: '2', value: 'level2', text: 'Level2'},
    { key: '3', value: 'level3', text: 'Level3'},
]

class ContentsArea extends Component {

    state = {
        activeItem: 'EarnedBadgeList'
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
                                Badge List<span className="count">+22</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ChallengingBadgeList'
                                active={activeItem === 'ChallengingBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/ChallengingBadgeListV2"
                            >
                                도전중 Badge<span className="count">+4</span>
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

                <Segment className='full'>
                    <div className='top-guide-title'>
                        <div className='list-number'>총 <strong>22개</strong>의 Badge를 획득하였습니다.</div>
                        <div className='right-wrap'>
                            <Dropdown
                                className='small-border s160'
                                placeholder='전체 Level'
                                selection
                                options={levelOptions}
                            />
                        </div>
                    </div>

                    {/*Badge list*/}
                    <div className="badge-list-v2 has_btn">
                        <ul>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />

                                {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <div className='list-sns completed'>
                                        <Button className="link"><span>공유하기</span></Button>
                                        <div className="ui popup li-sns visible">
                                            <div className="inner">
                                                <ul>
                                                    <li>
                                                        <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                    </li>
                                                    <li>
                                                        <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                    </li>
                                                    <li>
                                                        <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'Digital HR Transformation Digital HR Transformation'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'yellow'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'반도체 Biz. Essential'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'green'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal cooperation={true} />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'orange'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={true} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'디자인씽킹 Essentials'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'skyblue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal cooperation={true} />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'반도체 Biz. Essential'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'green'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal cooperation={true} />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'특허분쟁 Advanced'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'yellow'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <MyBadgeModal />
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* list more */}
                    <div className="more-comments">
                        <Button icon className="left moreview"><Icon className='moreview'/>list more</Button>
                    </div>

                    {/*콘텐츠 없음*/}
                    <div className='no-cont-wrap'>
                        <Icon className='no-contents80'/>
                        <div className='text'>
                            획득한 Badge가 없습니다.<br/>등록된 Badge 리스트에서 원하는 Badge에 도전해보세요.
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