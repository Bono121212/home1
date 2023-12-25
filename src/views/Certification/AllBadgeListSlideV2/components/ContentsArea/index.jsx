import React, {Component, createRef} from 'react';
import { Sticky, Menu, Segment, Dropdown, Icon, Radio, Checkbox, Button, Image } from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';
import foundationSkillImg from "../../../../../images/all/foundationSkill-info.png" //https://image.mysuni.sk.com/suni-asset/public/images/all/foundationSkill-info.png
import classNames from 'classnames';
import SNSListPopup from '../../../../../components/Badges/SNSListPopup';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

const levelOptions = [
    { key: '0', value: 'all', text: '전체 Level'},
    { key: '1', value: 'level1', text: 'Level1'},
    { key: '2', value: 'level2', text: 'Level2'},
    { key: '3', value: 'level3', text: 'Level3'},
]

class ContentsArea extends Component {

    state = {
        activeItem: 'AllBadgeList',
        val : 'all',
        isChecked : false,
        visible : false
    }
    buttonRef = createRef();
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    handleItemChange = (e, {value}) => this.setState({val : value})
    handleCheck = (e,{check}) => this.setState({isChecked : check})
    onVisible = () => this.setState({visible : true})
    // popup
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) =>{
        if(!this.buttonRef.current.contains(event.target)){
            this.setState({visible : false})
        }
    }


    render() {

        const { activeItem, val, isChecked, visible } = this.state;

        const CardSwiperType1 = {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 14,
            threshold: 5,
            resistanceRatio: false,
            navigation: {
                nextEl: ".badge-cate-slide-wrap > .cate-slide-next",
                prevEl: ".badge-cate-slide-wrap > .cate-slide-prev",
            },
            speed:500,
        }

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
                                Badge List
                                <span class="count">+22</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ChallengingBadgeList'
                                active={activeItem === 'ChallengingBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/ChallengingBadgeListV2"
                            >
                                도전중 Badge
                                <span class="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedBadgeList'
                                active={activeItem === 'EarnedBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/EarnedBadgeListV2"
                            >
                                My Badge
                                <span class="count">+33</span>
                            </Menu.Item>
                            <NavLink
                                to="/">
                                <div className="item-button round">인증제도 소개</div>
                            </NavLink>
                        </Menu>
                    </div>
                </Sticky>

                <Segment className='full badge-list-page'>
                    {/* 카테고리 slide로 변경 됨 https://mysuni.sk.com/suni-main/community/main/open-communities 카테고리 슬라이드와 동일*/}
                    <div className="badge-category-list badge-cate-swipe">
                        <div className="left badge-cate-slide-wrap">
                            <Button className="cate-slide-prev">
                                {/* <Icon className="prev-on" /> */}
                                <Icon className="prev" />
                            </Button>

                            <div className='cate-slide-content'>
                                <div
                                    className='item-wrap'
                                    //style={{"transform": "translateX(-200px)"}} 200px씩 이동
                                >
                                    <Swiper {...CardSwiperType1}>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='all'
                                                label='전체'
                                                onChange={this.handleItemChange}
                                                checked={val === 'all'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='FoundationSkill'
                                                label='Foundation Skill'
                                                onChange={this.handleItemChange}
                                                checked={val === 'FoundationSkill'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='HotSkill'
                                                label='Hot Skill'
                                                onChange={this.handleItemChange}
                                                checked={val === 'HotSkill'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='AIDT'
                                                label='AI/DT'
                                                onChange={this.handleItemChange}
                                                checked={val === 'AIDT'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='FutureBiz'
                                                label='미래 Biz'
                                                onChange={this.handleItemChange}
                                                checked={val === 'FutureBiz'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='Common'
                                                label='공통직무'
                                                onChange={this.handleItemChange}
                                                checked={val === 'Common'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='Happy'
                                                label='행복경영'
                                                onChange={this.handleItemChange}
                                                checked={val === 'Happy'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='BMDesign'
                                                label='BM Design'
                                                onChange={this.handleItemChange}
                                                checked={val === 'BMDesign'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='value01'
                                                label='admin에서 추가'
                                                onChange={this.handleItemChange}
                                                checked={val === 'value01'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='value02'
                                                label='admin에서 추가2'
                                                onChange={this.handleItemChange}
                                                checked={val === 'value02'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='value03'
                                                label='admin에서 추가3'
                                                onChange={this.handleItemChange}
                                                checked={val === 'value03'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='value04'
                                                label='admin에서 추가4'
                                                onChange={this.handleItemChange}
                                                checked={val === 'value04'}
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <Radio
                                                name='CateGroup'
                                                className='round3'
                                                value='value05'
                                                label='admin에서 추가5'
                                                onChange={this.handleItemChange}
                                                checked={val === 'value05'}
                                            />
                                        </div>
                                    </Swiper>
                                </div>
                            </div>

                            <Button className="cate-slide-next">
                                <Icon className="next" />
                                {/* <Icon className="next-off" /> */}
                            </Button>
                        </div>
                    </div>

                    {/* FoundationSkill인경우 보여주는 설명 그림은 추후 교체예정 */}
                    {val === 'FoundationSkill' &&
                    <div className='cate-info-area'>
                        <span className='img-wrap'>
                            <Image src={foundationSkillImg} alt="FundationSkill 구성" />
                        </span>
                    </div>
                    }
                    {/* counting & radio button */}
                    <div className='top-guide-title'>
                        <div className='list-number'>총 <strong>22개</strong>의 획득할 수 있는 Badge가 있습니다.</div>
                        <div className='right-wrap'>
                            {/* <RadioSorts/> */}
                            <Checkbox
                                className='again_chk'
                                label='Badge Plus'
                                checked={isChecked}
                                onClick={this.handleCheck}
                            />
                            <Dropdown
                                className='small-border s160'
                                placeholder='전체 Level'
                                selection
                                options={levelOptions}
                                defaultValue={levelOptions[0].value}
                            />
                        </div>
                    </div>

                    {/*Badge list*/}
                    <div className="badge-list-v2">
                        <ul>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className='li-badge-bottom'>
                                    {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                    <div className="badge-status completed">
                                        <span>획득</span>
                                    </div>
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
                                    badgeColor={'orange'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={true} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status challenging">
                                        <span>도전중</span>
                                    </div>
                                    <div className='list-sns challenging'>
                                        <Button className="link" disabled><span>공유하기</span></Button>
                                        <div className="ui popup li-sns">
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
                                    badgeName={'반도체 Biz. Essential'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status completed">
                                        <span>획득</span>
                                    </div>
                                    <div className='list-sns completed' ref={this.buttonRef}>
                                        <Button className="link" onClick={this.onVisible}><span>공유하기</span></Button>
                                        <div className={classNames("ui popup li-sns", {"visible" : visible})}>
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
                                    badgeName={'SV Fundamental'}
                                    level='Level2'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind" />
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status challenging">
                                        <span>도전중</span>
                                    </div>
                                    <SNSListPopup status="challenging" />
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'lightgreen'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={true} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status completed">
                                        <span>획득</span>
                                    </div>
                                    <SNSListPopup status="completed" />
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Badge Level1'}
                                    level='Level2'
                                    badgeStyle={true} //linkable
                                    badgeColor={'skyblue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status challenging">
                                        <span>도전중</span>
                                    </div>
                                    <SNSListPopup status="challenging"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'반도체 Biz. Essential'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'green'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
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
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
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
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level3'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'Digital HR Transformation Digital HR Transformation'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'yellow'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status blind">
                                        <span>도전전</span>
                                    </div>
                                    <SNSListPopup status="blind"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'반도체 Biz. Essential'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'green'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status completed">
                                        <span>획득</span>
                                    </div>
                                    <SNSListPopup status="completed"/>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level2'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="li-badge-bottom">
                                    <div className="badge-status challenging">
                                        <span>도전중</span>
                                    </div>
                                    <SNSListPopup status="challenging"/>
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
                            조회된 Badge가 없습니다.
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default ContentsArea