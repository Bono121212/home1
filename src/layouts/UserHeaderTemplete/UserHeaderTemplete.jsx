import React, { Component } from 'react';
import { Icon, Image, Button, Popup } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

import ProfileCard from './ProfileCard';
import PopCommunityInfo from './PopCommunityInfo';
import '../sample.css';
import './UserHeaderTemplete.css';
import ImgProfile from "../../images/all/btn-gnb-myprofile.svg";
import ImgCommunity from "../../images/all/btn-gnb-comminfo.svg";



export default class UserHeaderTemplete extends Component {
    state = {activeItem: '', focus: false, write: '', noticeOpen: true };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    closeNotification = () => this.setState({noticeOpen: false});

    render() {

        return (
            <>
                <section className="header lms">{/*lms 추가  신규 컨텐트 일경우*/}
                    <div className="group group2">
                        <div className="cont-inner">
                            <div className="g-logo">
                                <Link to="/main/MainIndexNew">
                                    <Icon className="sk-university"><span className="blind">my suni</span></Icon>
                                </Link>
                            </div>

                            <div className="g-title">
                                행복의 출발점 성장을 말하다 행복의 출발점 성장을 말하다 행복의 출발점
                            </div>

                            {/* 210615 추가작업 */}
                            <div className="g-join">
                                {/* b_join에 waiting 클래스 추가되면 아이콘및 텍스트(가입하기-->가입대기) 변경됩니다.  */}
                                <Button className="b_join">
                                    <Icon />
                                    <span>가입하기</span>
                                </Button>
                                {/* <Button className="b_join waiting">
                                    <Icon />
                                    <span>가입대기</span>
                                </Button> */}
                            </div>

                            <div className="g-search search">
                                <div className={classNames("ui h38 search input", {
                                    focus: this.state.focus,
                                    write: this.state.write
                                })}>
                                    <input type="text" placeholder="검색어를 입력하세요."
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

                            {/* 순서변경 : 커뮤니티정보 > 알림 > 프로필*/}
                            <div className="g-info info">

                                {/* 커뮤니티 정보 */}
                                <Popup
                                    className="pop_community"
                                    trigger={
                                        <Button className="btn_com">
                                            <Image src={ImgCommunity} alt='커뮤니티아이콘'/>
                                        </Button>
                                    }
                                    position='bottom left'
                                    on='click'
                                >
                                    <Popup.Content>
                                        <PopCommunityInfo />
                                    </Popup.Content>
                                </Popup>


                                {/* 알림정보 */}
                                <a href={()=>false} className="lms-alarm lms-on"><span>알람</span></a>
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
                                        <a href={()=>false} className="lms-alarm-item not-read">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                        <a href={()=>false} className="lms-alarm-item">
                                            <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                            <span className="lms-alarm-time">2020.09.26 09:09</span>
                                        </a>
                                    </div>
                                </div>

                                {/* 프로필 정보 */}
                                <Popup
                                    className="pop_profile"
                                    trigger={
                                        <Button className="btn_user">
                                            <span><Image src={ImgProfile} alt='profile'/></span>
                                            {/* <Image src={ImgProfile} alt='profile'/> */}
                                        </Button>
                                    }
                                    position='bottom right'
                                    on='click'
                                >
                                    <Popup.Content>
                                        { /*프로필사진 셋팅전 */}
                                        <ProfileCard />
                                    </Popup.Content>
                                </Popup>
                            </div>
                        </div>
                    </div>

                </section>
            </>
        )
    }
}