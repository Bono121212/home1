import React, {Component} from 'react'
import {Icon, Image,  Menu, Button, Popup, Checkbox, Dimmer} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../sample.css';
import './style.css'
import classNames from 'classnames';
import CategoryDetail from '../CategoryDetail/CategoryDetailCareer'
import ProfileCard from './ProfileCard';
import LanguageSelectPopup from './LanguageSelectPopup';
import Gsearch from "./Gsearch";
import BtnProfile from '../../images/all/btn-gnb-myprofile.svg'


export default class UserHeader extends Component {
    /*  activeItem : menu,      noticeOpen : 띠배너,
        write : 검색창 쓰기,    isGfield : 검색창 제어,                 isAuto : 검색 자동완성창 제어,
        isOpen : 알림창 제어,   isMain : main,통합검색화면에만 true,    isFixed : header sticky,
        isChecked : 결과내 재검색 check제어,     isSearch : 결과내재검색 display제어 */
    state = {activeItem: '', noticeOpen: true, isGfield :false , isAuto : false, isOpen : false, isMain : false, isFixed :false, write: '',isChecked : false, isSearch : false};

    /* menu, 띠배너 */
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    closeNotification = () => this.setState({noticeOpen: false})

    /* main 통합검색field, scroll Event */
    gfieldRef = React.createRef();

    searchClick= ()=>{this.setState({ isGfield: true });}
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("scroll", this.handleScroll);
    }
    handleClickOutside = event => {
        if (!this.gfieldRef.current.contains(event.target)) {
          this.setState({ isGfield: false,});
        }
        if(!this.alarmRef.current.contains(event.target)){ //알람
            this.setState({isOpen : false});
        }
    };

    handleChecked = (e,{checked}) => {this.setState({isChecked : checked})};

    handleScroll = () => {
        if(this.state.isMain === false) return; //main page, 통합검색이 아니면 fixed안됨
        if(window.pageYOffset > 0) {
            this.setState({isFixed : true})
        }else{this.setState({isFixed : false})}
    }



    /* 알람 */
    alarmRef = React.createRef();
    handleClick = () =>{
        const open = this.state.isOpen;
        this.setState({isOpen : !open})
    }
    handleClose = () =>{this.setState({isGfield : false})}
    handleChange = (e) => {
        this.setState({write: e.target.value});
        if(this.state.write.length > 1 ){this.setState({isAuto : true})}else{this.setState({isAuto: false})}; //퍼블용
    }

    // 2023-10 퍼블용
    // Category > Contents로 명칭변경 관련
    constructor(props) {
        super(props);
		this.state = { isShow: false }
		this.btnClick = this.btnClick.bind(this);
	}

    btnClick() {
        this.setState(state => ({isShow: !state.isShow}))
	}

    render() {
        const {activeItem, isGfield, isOpen, isFixed, isAuto, isChecked, isSearch} = this.state;

        return (
            <div className={classNames({"margin-bottom-80" : isFixed})}>
                {/* 2021-10 class에 lms-main은 main첫화면+통합검색에만 적용() -- 기타 메뉴에서는 없는 class */}
                {/* 2021-10 sitcky시 section class에 'fixed' 추가 */}
                {/* 2021-10 sitcky시 띠배너 제어를 위해 section > div로 변경해서 header 아래에 두었는데 스타일로 말고 달리 제어가능하시면 section으로 따로 빼도됩니다.*/}
                <section className={classNames("header main-sty2 " ,{"fixed" : isFixed})} ref={this.gfieldRef}>

                    {/* <div className={ classNames('notice-bar', { 'visible' : noticeOpen })}>
                        <div className="inner">
                            <div className="text">
                                <Link to="#" className="ellipsis">[공지] 2020년 6월 20일 04:00~10:00시 까지 서비스 안정화를 위한 시스템 점검이 진행될 예정입니다.</Link>
                            </div>
                            <div className="right">
                                <Checkbox label="오늘 하루 보지 않기" className="black" />
                                <Button className="close2" onClick={this.closeNotification}><span className="blind">close</span></Button>
                            </div>
                        </div>
                    </div> */}


                    {/* 2021-10 검색창 클릭시, 스타일 변경을 위해 클래스 off추가 */}
                    <div className={classNames("group",{'off' : isGfield})}>
                        <div className="cont-inner">
                            <div className="g-logo">
                                <Link to="/main/MainIndexNew">
                                    <i className="sk-university icon"><span className="blind">my suni</span></i>
                                </Link>
                            </div>
                            {/* 2023-10 명칭 변경으로 위치 변경
                            <div className="g-menu-category">
                                <CategoryDetail/>
                            </div> */}
                            <div className="g-menu-area">
                                <Menu className='nav'>
                                    {/* 2023-10 퍼블 추가 */}
                                    <Menu.Item
                                        name='career'
                                        as={Link} to='/Career/'
                                        active={activeItem === 'Career'}
                                        onClick={this.handleItemClick}
                                        className='check-on'
                                    >
                                        Career
                                    </Menu.Item>
                                    <Menu.Item>
                                        {this.state.isShow && 
                                            <div className="new-message">
                                                기존 Category 메뉴가 새로운 이름 <span className='rename-color'>Contents</span>로 바뀌었어요.
                                                <button className='closer' onClick={this.btnClick}><span className='hide'>close</span></button>
                                            </div>
                                        }
                                        <CategoryDetail/>
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

                            {/* 2021-10 검색창 */}
                            <div className="g-search-header" onClick={this.searchClick}>
                                <div className={classNames("search_wrap",{'show_re' : isChecked})}>
                                    <div className="re_text"><span className="ellipsis">데이터</span></div>
                                    <input className="ui input search_ipt"placeholder={ isChecked ? "검색어를 입력해주세요." :"무엇을 배우고 싶으신가요?" } onChange={this.handleChange}/>
                                </div>

                                <Button className="b-search">
                                    <Icon className="search-grey"/>
                                </Button>
                            </div>
                            <Checkbox
                                className={classNames("again_chk",{'on' : isSearch})}
                                label="결과 내 재검색"
                                checked={isChecked}
                                onClick={this.handleChecked}
                            />
                            <Button className="b-cl" icon onClick={this.handleClose}><Icon className="b-cl"/></Button>

                            {/* 2021-10 class명 변경 */}
                            <div className="g-info-new">
                                <div className="g-learn">
                                    <Link className="go-learn">My Learning</Link>
                                </div>
                                <div ref={this.alarmRef}>
                                    <Link className="lms-alarm lms-on" onClick={this.handleClick}><span>알람</span></Link>

                                    <div className={classNames("lms-alarm-list", {'lms-on' : isOpen})}>

                                        {/*2021-10 알림리스트header 삭제*/}
                                        {/* <div className="lms-alarm-header">
                                            <span className="lms-alarm-title">알람</span>
                                            <Button icon className="img-icon">
                                                <Icon className="clear2 selected link"/>
                                            </Button>
                                        </div> */}

                                        <div className="lms-alarm-body">
                                            <Link className="lms-alarm-item not-read">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                            <Link className="lms-alarm-item">
                                                <span className="lms-alarm-copy">‘데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다 데이터 혁신이 답이다’ 에 새로운 전체 공지가 있습니다.</span>
                                                <span className="lms-alarm-time">2020.09.26 09:09</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* profilePopup - 2021-10 : 내용변경 */}
                                <Popup
                                    className="pop_profile"
                                    trigger={
                                        <Button className="user_btn ">
                                            <Image src={BtnProfile} alt="프로필"/>
                                        </Button>
                                    }
                                    position='bottom right'
                                    on='click'
                                >
                                    <Popup.Content>
                                        <ProfileCard />
                                    </Popup.Content>
                                </Popup>

                                {/* 다국어 선택메뉴 - 2021-10 : header 삭제*/}
                                <LanguageSelectPopup />

                            </div>
                        </div>
                        {/* 2021-10 : 검색 영역, 자동완성 popup + dimmer */}
                        <div className="g-search-field">
                            <Gsearch auto={isAuto}/>
                        </div>
                        <Dimmer className="dimm_zidx" active={isGfield} page/>

                    </div>

                    {/* 2021-10 header 에 class가 lms-main(메인,통합검색)인 경우 display : none */}
                    {/*<div className="breadcrumbs community-link">*/}
                    {/* <div className="breadcrumbs">
                        <div className="cont-inner">
                            <div className="ui standard breadcrumb">
                                <Link className="section">Home</Link>
                                <i className="right chevron icon divider"/>
                                <Link className="section">depth1</Link>
                                <i className="right chevron icon divider"/>
                                <div className="active section">depth2</div>
                            </div>

                        </div>
                    </div> */}
                </section>

            </div>
        )
    }
}