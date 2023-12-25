import React, {Component} from 'react'
import {Icon, Image, List, Menu, Button, Popup, Checkbox, Select } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import classNames from 'classnames';

import CategoryDetail from '../CategoryDetail/CategoryDetail'
// import ImgProfile56 from "../../images/all/img-profile-56-px.png"
import ImgProfile56 from "../../images/all/icon.svg";
import '../sample.css'

const selectOptions02 = [
    { key: "KOR", value: "KOR", text: "KOR" },
    { key: "ENG", value: "ENG", text: "ENG" },
    { key: "CHN", value: "CHN", text: "CHN" },
];

export default class UserHeader extends Component {
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

                <section className="header lms">{/*lms 추가  신규 컨텐트 일경우*/}
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
                            <div className="g-search">
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
                            {/*<div className="g-info">*/}
                                {/*<Link to={'/learning/ov-wrap'}>*/}
                                    {/*<Button className="ui user image label">*/}
                                        {/*<span className="name">이인영이름이길경우처리는</span>*/}
                                        {/*<span className="affiliation">SK C&C 플랫폼 개발 1팀 디자인 1팀 퍼블리싱 2팀</span>*/}
                                        {/*/!* 사진 없을경우 *!/*/}
                                        {/*<Image src='/images/all/img-profile-56-px.png' alt='profile'/>*/}
                                        {/*/!* 사진 있을경우 *!/*/}
                                        {/*/!*<Image src='/images/all/profile-36-px.png' alt='profile'/>*!/*/}
                                    {/*</Button>*/}
                                {/*</Link>*/}
                            {/*</div>*/}

                            {/*0423 회원정보 영역 UI 변경(팝업-마이페이지, 로그아웃 추가)*/}
                            <div className="g-info">
                                <Popup
                                    className="balloon-pop"
                                    trigger={
                                        <Button className="user image label btn_user on">
                                            <span className="name">이름이길경우처리는요렇게</span>
                                            <span className="affiliation">SK C&C 플랫폼 개발 1팀 디자인 1팀 퍼블리싱 2팀</span>
                                            {/* 사진 없을경우 */}
                                            {/* <Image src={ImgProfile56} alt='profile'/> */}
                                            {/* 사진 있을경우 */}
                                            {/*<Image src='/images/all/profile-36-px.png' alt='profile'/>*/}
                                            {/*<a className="lms-alarm lms-on"><span>알람</span></a>*/}

                                            {/* 프로필 설정 알람 */}
                                            <span><Image src={ImgProfile56} alt='profile'/></span>

                                        </Button>
                                    }
                                    position='bottom right'
                                    on='click'
                                >
                                    <Popup.Content>
                                        <ul>
                                            <li>
                                                <a href="/mypage/my-badge-list">
                                                    <i className="balloon mypage icon"/>
                                                    <span>My Page</span>
                                                </a>
                                            </li>
                                            <li className="community-profile">
                                                <a href="/mypage/my-badge-list">
                                                    <i className="balloon community-profile icon"/>
                                                    <span>Community Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <Button>
                                                    <i className="balloon logout icon" />
                                                    <span>Logout</span>
                                                </Button>
                                            </li>
                                        </ul>
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
                            {/* <div className="right">
                                <a href='/support/notice-list-user'>
                                    <i className="support12 icon"/>
                                    <span>고객센터</span>
                                    <i className="arrow8 black-jump icon"/>
                                </a>
                                <div className="help-desk"><Icon className="help-tel"/>고객센터 : 02-6323-9002</div>
                            </div> */}
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