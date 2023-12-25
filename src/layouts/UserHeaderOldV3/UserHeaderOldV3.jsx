import React, {Component} from 'react'
import {Icon, Image, List, Menu, Button, Popup, Checkbox, Select } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../sample.css';

import classNames from 'classnames';
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import ImgProfile56 from "../../images/all/icon.svg";
import ImgProfile110 from "../../images/all/profile-110-px-sample-2@3x.png";

import ProfileCard from './ProfileCard';
import ProfileCard2 from './ProfileCard2';
import Gsearch from './Gsearch';

const selectOptions02 = [
    { key: "KOR", value: "KOR", text: "KOR" },
    { key: "ENG", value: "ENG", text: "ENG" },
    { key: "CHN", value: "CHN", text: "CHN" },
];

export default class UserLayoutV3 extends Component {
    state = {activeItem: '', focus: false, write: '', noticeOpen: true };

    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    closeNotification = () => this.setState({noticeOpen: false})

    render() {
        const {activeItem, noticeOpen} = this.state;

        return (
            <>
                <section className={ classNames('notice-bar', { 'visible' : noticeOpen })}>
                    <div className="inner">
                        <div className="text">
                            <a href={()=>false} className="ellipsis">[공지] 2020년 6월 20일 04:00~10:00시 까지 서비스 안정화를 위한 시스템 점검이 진행될 예정입니다.</a>
                        </div>
                        <div className="right">
                            <Checkbox label="오늘 하루 보지 않기" className="black" />
                            <Button className="close2" onClick={this.closeNotification}><span className="blind">close</span></Button>
                        </div>
                    </div>
                </section>

                <section className="header lms searchT">{/*lms 추가  신규 컨텐트 일경우*/}
                    <div className="group">
                        <div className="cont-inner">
                            <div className="g-logo">
                                <a href="/main/main-index-final">
                                    <i className="sk-university icon"><span className="blind">my suni</span></i>
                                </a>
                            </div>
                            <div className="g-menu-detail">
                                <CategoryDetail/>
                            </div>
                            <div className="g-menu">
                                <Menu className='nav'>
                                    <Menu.Item
                                        name='learning'
                                        as={Link} to='/learning/my-learning-detail-inprogress'
                                        active={activeItem === 'learning'}
                                        onClick={this.handleItemClick}
                                    >
                                        Learning
                                    </Menu.Item>
                                    <Menu.Item
                                        name='recommend'
                                        as={Link} to='/recommend/recommend-detail-channel-open'
                                        active={activeItem === 'recommend'}
                                        onClick={this.handleItemClick}
                                    >
                                        Recommend
                                    </Menu.Item>
                                    <Menu.Item
                                        name='create'
                                        as={Link} to='/create/list-create'
                                        active={activeItem === 'create'}
                                        onClick={this.handleItemClick}
                                    >
                                        Create
                                    </Menu.Item>
                                    <Menu.Item
                                        name='certification'
                                        as={Link} to='/certification/all-badge-list'
                                        active={activeItem === 'certification'}
                                        onClick={this.handleItemClick}
                                    >
                                        Certification
                                    </Menu.Item>
                                    <Menu.Item
                                        name='community'
                                        as={Link} to='/community/mycommunity-Main'
                                        active={activeItem === 'community'}
                                        onClick={this.handleItemClick}
                                    >
                                        Community
                                    </Menu.Item>
                                </Menu>
                            </div>



                            {/*0423 회원정보 영역 UI 변경(팝업-마이페이지, 로그아웃 추가)*/}
                            <div className="g-info">
                                <Popup
                                    className="pop_profile"
                                    trigger={
                                        <Button className="user image label btn_user on">
                                            <span><Image src={ImgProfile56} alt='profile'/></span>
                                        </Button>
                                    }
                                    position='bottom right'
                                    on='click'
                                >
                                    <Popup.Content>
                                        <ProfileCard2 />{ /*프로필사진 셋팅전 */}
                                    </Popup.Content>
                                </Popup>
                                <a className="lms-alarm lms-on"><span>알람</span></a>
                                {/*알림리스트 활성*/}
                                {/*<div className="lms-alarm-list lms-on">*/}
                                <div className="lms-alarm-list">
                                    <div className="lms-alarm-header">
                                        <span className="lms-alarm-title">알람</span>
                                        <Button icon className="img-icon">
                                            <Icon className="clear2 selected link"/>
                                        </Button>
                                    </div>
                                    <div className="lms-alarm-body">
                                        <a className="lms-alarm-item not-read">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 2107 통합검색 */}
                    <div className="g-searchV3">
                        <Gsearch />
                    </div>
                    {/* 2107 통합검색 */}
                </section>

            </>
        )
    }
}