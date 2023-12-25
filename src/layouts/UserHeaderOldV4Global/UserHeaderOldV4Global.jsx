import React, {Component} from 'react'
import {Icon, Image, List, Menu, Button, Popup, Checkbox, Select } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../sample.css';
import './style.css'

import classNames from 'classnames';
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import ImgProfile56 from "../../images/all/icon.svg";
import ImgProfile110 from "../../images/all/profile-110-px-sample-2@3x.png";

import ProfileCard from './ProfileCard';
import ProfileCard2 from './ProfileCard2';
import LanguageSelectPopup from './LanguageSelectPopup';

export default class UserHeaderV4Global extends Component {
    state = {activeItem: '', focus: false, write: '', noticeOpen: true, activeToggle:'', toggleSample:false};

    handleClick = () => this.setState((prevState) => ({active: !prevState.active}))

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    closeNotification = () => this.setState({noticeOpen: false})

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }


//    addClassSample = () => this.setState({toggleSample: true})

    render() {
        const {activeItem, noticeOpen} = this.state;
        const { activeIndex, popup } = this.state;

        // const { activeToggle, toggleSample } = this.state;

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
                {/* 글로벌 헤더의 경우 g-ab 클래스 추가 커뮤니티 메뉴, 알림창 display제어 */}
                <section className="header lms searchT g-ab">{/*lms 추가  신규 컨텐트 일경우*/}
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

                            <div className="g-search g-ab">{/* class 추가 g-ab*/}
                                <div className={classNames("ui h38 search input", {
                                    focus: this.state.focus,
                                    write: this.state.write
                                })}>
                                    <input type="text" placeholder="Search"
                                            value={this.state.write}
                                            onClick={() => this.setState({focus: true})}
                                            onBlur={() => this.setState({focus: false})}
                                            onChange={(e) => this.setState({write: e.target.value})}
                                    />
                                    <i aria-hidden="true" className="clear link icon"
                                        onClick={() => this.setState({write: ''})}/>
                                    <i aria-hidden="true" className="search link icon"/>
                                </div>
                            </div>
                            {/*0423 회원정보 영역 UI 변경(팝업-마이페이지, 로그아웃 추가)*/}
                            {/* 변경사항 : class : g-ab2 추가*/}
                            <div className="g-info g-info2 g-ab2">

                                {/* 다국어 선택메뉴 추후 추가 */}
                                <LanguageSelectPopup />


                                {/* 영어,중국어 선택시 알림 아이콘없음  상단 g-lang 클래스 추가*/}
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

                                <Popup
                                    className="pop_profile"
                                    trigger={
                                        <Button className="user image label btn_user on ">
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
                            </div>
                        </div>
                    </div>

                    {/*<div className="breadcrumbs community-link">*/}
                    <div className="breadcrumbs">
                        <div className="cont-inner">
                            <div className="ui standard breadcrumb">
                                <a className="section">Home</a>
                                <i className="right chevron icon divider"/>
                                <a className="section">depth1</a>
                                <i className="right chevron icon divider"/>
                                <div className="active section">depth2</div>
                            </div>

                            <div className="lms-right">
                                <Button icon className="btn-black">
                                    커뮤니티로 이동
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        )
    }
}