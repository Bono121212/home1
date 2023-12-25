import React, {Component} from 'react'
import {
    Button,
    Icon,
    Rating,
    Checkbox,
    Label,
    Popup,
    Radio,
    Select,
    Modal,
    Dropdown, Image, Step
} from 'semantic-ui-react'


import './style.css';
import {
    ToggleButtonRound01,
    ToggleButtonRound,
    ToggleButton,
    // AccordionStyled,
    CalendarBig,
    Calendar,
    ClearInputBox,
    ClearInputBoxAction,
    ClearInputBoxAction01,
    ClearInputBoxSearch,
    ClearInputBoxSearch01,
    RoundRadio,
    RoundRadio01,
    RectIcon,
} from './components'

import confirmPng from '../../images/all/confirm.png';
import alertPng from '../../images/all/alert.png';
import profileImg56px from '../../images/all/profile-56-px.svg'
import profileImg38px from '../../images/all/profile-38-px.svg'
import { Link } from 'react-router-dom';
import ImgCommunity from "../../images/all/btn-gnb-comminfo.svg";
import ImgProfile from "../../images/all/btn-gnb-myprofile.svg";
import BtnLang from '../../images/all/btn-gnb-lang.svg';
// import btnEmoji from "../../images/all/btn-emoji.svg";
// import btnEmojiOn from "../../images/all/btn-emoji-on.svg";


const selectOptions01 = [
    {key: 'val01', value: 'val01', text: 'Classroom'},
    {key: 'val02', value: 'val02', text: 'e-learning'},
    {key: 'val03', value: 'val03', text: 'Video'},
    {key: 'val04', value: 'val04', text: 'Audio'},
    {key: 'val05', value: 'val05', text: 'Webpage'},
    {key: 'val05', value: 'val06', text: 'Experiential'},
    {key: 'val05', value: 'val07', text: 'Document'},
    {key: 'val05', value: 'val08', text: 'Community'},
    {key: 'val05', value: 'val08', text: 'Test'},
];


const selectOptions02 = [
    {key: 'val01', value: 'val01', text: 'All'},
    {key: 'val02', value: 'val02', text: 'a'}
];

const yearList = [
    {
        key: '2019',
        text: '2019',
        value: '2019',
    },
    {
        key: '2018',
        text: '2018',
        value: '2018',
    },
    {
        key: '2017',
        text: '2017',
        value: '2017',
    },
    {
        key: '2016',
        text: '2016',
        value: '2016',
    },
    {
        key: '2015',
        text: '2015',
        value: '2015',
    },
];

class StyleGuide extends Component {
    render() {
        return (
            <div>
                <div className="gWrap">
                    <header>
                        <h1>Skuniversity Publishing Guide</h1>
                    </header>
                    <div className="gCont">
                        {/*Version*/}
                        <section>
                            <h2 class="test">JAVASCRIPT Version (해당 파일은 수정 금지)</h2>
                            <p class="gInfo">/js/semantic.min.js <Link
                                href="https://semantic-ui.com/introduction/getting-started.html"
                                target="_blank" class="link">(Semantic UI - 2.4.1)</Link></p>
                            <p class="gInfo">/js/state.min.js <Link
                                href="https://semantic-ui.com/introduction/getting-started.html"
                                target="_blank" class="link">(Semantic UI - 2.4.1)</Link></p>
                            <p class="gInfo">/js/calendar.min.js <Link href="https://fomantic-ui.com/" target="_blank"
                                                                    class="link">(Fomantic
                                UI - 2.7.8)</Link></p>
                            <p class="gInfo">/js/modal.min.js <Link href="https://fomantic-ui.com/" target="_blank"
                                                                 class="link">(Fomantic
                                UI - 2.7.8) </Link><Link href="https://github.com/Semantic-Org/Semantic-UI/issues/6449"
                                                   target="_blank">Semantic
                                UI - 2.4.1 팝업내에 스크롤 문제</Link></p>
                            <p class="gInfo">/js/swiper.min.js <Link href="https://github.com/nolimits4web/swiper"
                                                                  target="_blank"
                                                                  class="link">
                                <del>(Swiper 5.2.0) ie에서 문제 발생</del>
                                (Swiper 4.5.1)</Link></p>
                            <p class="gInfo">/js/jquery-1.12.4.js <Link href="https://jquery.com/" target="_blank"
                                                                     class="link">(Jquery-
                                1.12.4)</Link></p>
                            <h2 class="test">CSS Version (해당 파일은 수정 금지)</h2>
                            <p class="gInfo">/css/semantic.min.css <Link
                                href="https://semantic-ui.com/introduction/getting-started.html"
                                target="_blank" class="link">(Semantic UI - 2.4.0)</Link></p>
                            <p class="gInfo">/css/calendar.min.css <Link href="https://fomantic-ui.com/" target="_blank"
                                                                      class="link">(Fomantic
                                UI - 2.7.8)</Link></p>
                            <p class="gInfo">/css/swiper.min.css <Link href="https://github.com/nolimits4web/swiper"
                                                                    target="_blank"
                                                                    class="link">(Swiper 5.2.0)</Link></p>
                        </section>
                        {/*Version*/}
                        <section>
                            <h2 className="test">Rule</h2>
                            <p className="gInfo">HTML : semantic-ui 기반 elements를 가져다가 .ui에 class를 추가 정의하여 작성</p>
                            <p className="gInfo">CSS : IE10 ~ , 기타 최신 브라우저 고려하여 작성</p>
                            <p className="gInfo">JAVASCRIPT : 가능하면 바닐라JS로 작성</p>
                        </section>

                        {/* 파이 */}
                        <section>
                            <h2 className="test">파이</h2>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">data-value 값을 조절 0~360값</p>
                                <div className="ui pie w56 empty"/>
                                <div className="ui pie w200 empty"/>
                                <div className="ui pie w56" data-value="150">
                                    <span className="left"/>
                                    <span className="right"/>
                                </div>
                                <div className="ui pie w200" data-value="30">
                                    <span className="left"/>
                                    <span className="right"/>
                                </div>
                            </div>
                        </section>

                        {/* 스텝 */}
                        <section>
                            <h2 className="test">스텝</h2>
                            <p className="gInfo">.create</p>
                            <div className="preview" style={{overflow: 'visible'}}>


                                <Step.Group className='number-step'>
                                    <Step completed>
                                        <Step.Content>
                                            <span className="number"><span className="blind">1</span></span>
                                            <Step.Title>기본정보 및 노출정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                    <Step active>
                                        <Step.Content>
                                            <span className="number"><span className="blind">2</span></span>
                                            <Step.Title>교육정보 및 부가정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                    <Step>
                                        <Step.Content>
                                            <span className="number"><span className="blind">3</span></span>
                                            <Step.Title>교육정보 및 부가정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </div>
                        </section>

                        {/* 팝업 */}
                        <section>
                            <h2 className="test">팝업</h2>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <Popup
                                    content='강좌 취소 시 다음 차수 완료에도 불이익이 갈수 있음'
                                    on='click'
                                    className='ui custom red'
                                    pinned
                                    trigger={<Button icon className='img-icon custom' content='Button'>
                                        <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                />
                                <Modal className="size-mini"
                                    trigger={<Button style={{marginLeft: "20px"}} className="fix bg free">modal confirm</Button>}
                                >
                                    <div className="main">
                                        <Modal.Header>Confirm</Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <Image
                                                wrapped
                                                className="modal-img"
                                                size="medium"
                                                src={confirmPng}
                                                />
                                                <div className="title">모달 타이틀</div>
                                                <p>모달 내용</p>
                                            </Modal.Description>
                                        </Modal.Content>
                                    </div>
                                    <Modal.Actions className="normal twin">
                                        <Button secondary>Cancel</Button>
                                        <Button primary>OK</Button>
                                    </Modal.Actions>
                                </Modal>
                                <Modal className="size-mini"
                                    trigger={<Button style={{marginLeft: "20px"}} className="fix bg free">modal alert</Button>}
                                >
                                    <div className="main">
                                        <Modal.Header>Confirm</Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <Image
                                                wrapped
                                                className="modal-img"
                                                size="medium"
                                                src={alertPng}
                                                />
                                                <div className="title">모달 타이틀</div>
                                                <p>모달 내용</p>
                                            </Modal.Description>
                                        </Modal.Content>
                                    </div>
                                    <Modal.Actions className="normal">
                                        <Button secondary>Cancel</Button>
                                    </Modal.Actions>
                                </Modal>
                            </div>
                        </section>

                        {/* 테이블 */}
                        <section>
                            <h2 className="test">테이블</h2>
                            <p className="gInfo">CSS 테이블 .table-css</p>
                            <div className="preview">
                                <div className="table-css">
                                    <div className="row">
                                        <div className="cell">TEXT</div>
                                        <div className="cell">TEXT</div>
                                    </div>
                                    <div className="row">
                                        <div className="cell vtop">VERTICAL ALIGN TOP</div>
                                        <div className="cell ">TEXT<br/>TEXT</div>
                                    </div>
                                    <div className="row">
                                        <div className="cell v-middle">VERTICAL ALIGN MIDDLE</div>
                                        <div className="cell ">TEXT<br/>TEXT</div>
                                    </div>
                                    <div className="row">
                                        <div className="cell v-bottom">VERTICAL ALIGN BOTTOM</div>
                                        <div className="cell ">TEXT<br/>TEXT</div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        {/* 스크롤 */}
                        <section>
                            <h2 className="test">스크롤 (common.scss 참고)</h2>
                            <p className="gInfo">.scrolling-40vh, scrolling-60vh, scrolling-80vh</p>
                        </section>

                        <h2 className="test">profile</h2>
                        <section>
                            <div className="preview">
                                <div className='ui profile'>
                                    <div className='pic s36'>
                                        <Image src={profileImg38px} alt='프로필사진 임시이미지'/>
                                    </div>
                                </div>
                                <div className="ui profile">
                                    <div className="pic">
                                        {/*프로필 사진 자리*/}
                                        <Image src={profileImg56px} alt="프로필사진 임시이미지"/>
                                    </div>
                                </div>
                                <div className="ui profile">
                                    <div className="pic s80">
                                        {/*프로필 사진 자리*/}
                                        {/*<img src="images/all/profile-56-px.png" alt="프로필사진 임시이미지"/>*/}
                                    </div>
                                </div>
                                <div className="ui profile">
                                    <div className="pic s110">
                                        {/*프로필 사진 자리*/}
                                        {/*<img src="images/all/profile-56-px.png" alt="프로필사진 임시이미지"/>*/}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*Icon*/}
                        <section style={{backgroundColor : '#dadafc'}}>
                            <h2 className="test">아이콘</h2>

                            <p className="gInfo">Logo</p>
                            <div className="preview">
                                <Icon className="sk-university"/><span className="blind">mySUNI</span>
                                {/* <br/>
                                <Icon className="sk-university-login"/><span className="blind">mySUNI</span> */}
                            </div>

                            <p className="gInfo">8 x 8</p>
                            <div className="preview">
                                <Icon className='arrow8 blue-close'/>
                                <Icon className='arrow8 blue-open'/>
                                <Icon className='arrow8 blue-link'/>
                                <Icon className='arrow8 orange-close'/>
                                <Icon className='arrow8 orange-open'/>
                                <Icon className='arrow8 orange-right'/>
                                <Icon className='arrow8 orange-link'/>
                                <Icon className='arrow8 black-jump'/>
                            </div>

                            <p className="gInfo">12 x 12</p>
                            <div className="preview">
                                <Icon className="support12"/>
                            </div>

                            <p className="gInfo">16 x 16</p>
                            <div className="preview">
                                <Icon className="new16"/><span className="blind">new</span>
                                <Icon className="info16"/><span className="blind">infomation</span>
                                <Icon className="delete16"/><span className="blind">delete</span>
                                <Icon className="edit16"/><span className="blind">edit</span>
                                <Icon className="reply16-b"/><span className="blind">reply</span>
                                <Icon className="listmore16"/><span className="blind">list more</span>
                                <Icon className="subinfo-down16"/><span className="blind">subinfo down</span>
                                <Icon className="commu-info16"/><span className="blind">community info</span>
                                <Icon className="commu-info16-2"/><span className="blind">community info2</span>
                                <Icon className="rate16-ov"/><span className="blind">rate</span>
                                <Icon className="rate16"/><span className="blind">rate</span>
                                <Icon className="card-share16"/><span className="blind">share</span>
                                <Icon className="down-orange16"/><span className="blind">down</span>
                                <Icon className="completed16"/><span className="blind">completed</span>
                                <Icon className="card-join16"/><span className="blind">card join</span>
                                <Icon className="card-time16"/><span className="blind">card join</span>
                                <Icon className="reply16"/><span className="blind">reply</span>
                                <Icon className="card-play16"/><span className="blind">play</span>
                                <Icon className="price16"/><span className="blind">price</span>
                                <Icon className="check16"/><span className="blind">check</span>
                                <Icon className="community16"/><span className="blind">community</span>
                                <Icon className="video16"/><span className="blind">video</span>
                                <Icon className="date16"/><span className="blind">date</span>
                                <Icon className="subinfo16"/><span className="blind">sub info</span>
                                <Icon className="up16"/><span className="blind">up</span>
                                <Icon className="commu-list16"/><span className="blind">community list</span>
                                <Icon className="delete-gray16"/><span className="blind">delete</span>
                                <Icon className="reply-gray16"/><span className="blind">reply</span>
                                <Icon className="edit-gray16"/><span className="blind">edit</span>
                                <Icon className="total-time16"/><span className="blind">total time</span>
                                <Icon className="college16"/><span className="blind">college</span>
                                <Icon className="channel16"/><span className="blind">channel</span>
                                <Icon className="class16"/><span className="blind">class</span>
                                <Icon className="error16"/><span className="blind">error</span>
                                <Icon className="tip16"/><span className="blind">support tip</span>
                                <Icon className="supporttel16"/><span className="blind">support tel</span>
                                <Icon className="create16"/><span className="blind">create</span>
                                <Icon className="movie16"/><span className="blind">create movie</span>
                                <Icon className="category16"/>
                                <Icon className="arrow-b-16"/>
                                <Icon className='heart16 active'/><span className='blind'>Like</span>
                                <Icon className='heart16'/><span className='blind'>disLike</span>
                                <Icon className='add-black16'/><span className='blind'>add</span>
                                <Icon className='logout-16px'/><span className='blind'>logout</span>
                            </div>
                            <p className="gInfo">16 x 17</p>
                            <div className="preview">
                                <Icon className="new16x17"/><span className="blind">close</span>
                            </div>

                            <p className="gInfo">17 x 12</p>
                            <div className="preview">
                                <Icon className="arrow-popup-linkedin"/><span className="blind">next</span>
                            </div>

                            <p className="gInfo">20 x 20</p>
                            <div className="preview">
                                <Icon className="my20"/><span className="blind">my</span>
                            </div>

                            <p className="gInfo">22 x 22</p>
                            <div className="preview">
                                <Icon className="clear"/><span className="blind">delete</span>
                            </div>
                            <p className="gInfo">24 x 24</p>
                            <div className="preview">
                                <Icon className="icon delete24"/><span className="blind">delete</span>
                                <Icon className="icon series24"/><span className="blind">series</span>
                                <Icon className="icon play-black24"/><span className="blind">play</span>
                                <Icon className="icon url24"/><span className="blind">period</span>
                                <Icon className="icon card-add24"/><span className="blind">period</span>
                                <Icon className="building24"/><span className="blind">Sk univ</span>
                                <Icon className="listdel24"/><span className="blind">list del</span>
                                <Icon className="filter24"/><span className="blind">filter</span>
                                <Icon className="calendar24"/><span className="blind">date</span>
                                <Icon className="rate24-ov"/><span className="blind">rate</span>
                                <Icon className="rate24"/><span className="blind">rate</span>
                                <Icon className="rate24-line"/><span className="blind">rate</span>
                                <Icon className="check24"/><span className="blind">check</span>
                                <Icon className="disable-check24"/><span className="blind">check disable</span>
                                <Icon className="sitemap24"/><span className="blind">sitemap</span>
                                <Icon className="req24"/><span className="blind">이수조건</span>
                                <Icon className="target24"/><span className="blind">target</span>
                                <Icon className="cancel24"/><span className="blind">cancel</span>
                                <Icon className="tag24"/><span className="blind">tag</span>
                                <Icon className="goto24"/><span className="blind">goto</span>
                                <Icon className="menu24"/><span className="blind">menu</span>
                                <Icon className="down24"/><span className="blind">down</span>
                                <Icon className="down-blue24"/><span className="blind">down</span>
                                <Icon className="down-orange24"/><span className="blind">down</span>
                                <Icon className="drop24-up"/><span className="blind">drop down arrow up</span>
                                <Icon className="drop24-down"/><span className="blind">drop down arrow down</span>
                                <Icon className="goal24"/><span className="blind">goal</span>
                                <Icon className="close24"/><span className="blind">close</span>
                                <Icon className="category24"/><span className="blind">category</span>
                                <Icon className="admin24"/><span className="blind">admin</span>
                                <Icon className="host24"/><span className="blind">host</span>
                                <Icon className="post24"/><span className="blind">post</span>
                                <Icon className="ask24"/><span className="blind">ask</span>
                                <Icon className="imgdelte24"/><span className="blind">imgdelte</span>
                                <Icon className="zoom24"/><span className="blind">zoom</span>
                                <Icon className="photo24"/><span className="blind">photo</span>
                                <Icon className="photo24-w"/><span className="blind">photo</span>
                                <Icon className="search24"/><span className="blind">zoom</span>
                                <Icon className="filter24-w"/><span className="blind">filter</span>
                                <Icon className="filter24-o"/><span className="blind">filter</span>
                                <Icon className="play-orange24"/><span className="blind">play</span>
                                <Icon className="play-black24"/><span className="blind">play</span>
                                <Icon className="play-black24-dim"/><span className="blind">play</span>
                                <Icon className="icon-lms-close"/><span className="blind">close</span>
                            </div>

                            <p className="gInfo">28 x 28</p>
                            <div className="preview">
                                <Icon className="reset"/><span className="blind">reset</span>
                                <Icon className="pagenavi-back-disabled-28"/><span
                                className="blind">back disabled</span>
                                <Icon className="pagenavi-back-noraml-28"/><span className="blind">back</span>
                                <Icon className="pagenavi-next-disabled-28"/><span
                                className="blind">next disabled</span>
                                <Icon className="pagenavi-next-noraml-28"/><span className="blind">next</span>
                            </div>

                            <p className="gInfo">31 x 31</p>
                            <div className="preview">
                                <Icon className="arrow-l-disabled"/>
                                <Icon className="arrow-l-normal"/>
                                <Icon className="arrow-r-disabled"/>
                                <Icon className="arrow-r-normal"/>
                            </div>

                            <p className="gInfo">32 x 32</p>
                            <div className="preview">
                                <Icon className="learning32"/>
                                <Icon className="community32"/>
                                <Icon className="support32"/>
                                <Icon className="noti32"/>
                                <Icon className="price32"/>
                                <Icon className="search32"/>
                                <Icon className="rate32"/>
                                <Icon className="rate32-ov"/>
                                <Icon className="drop32-up"/>
                                <Icon className="drop32-down"/>
                                <Icon className="card-delete32"/>
                            </div>

                            <p className="gInfo">35 x 35</p>
                            <div className="preview">
                                <Icon className="stamp35"/><span className="blind">stamp</span>
                            </div>

                            <p className="gInfo">40 x 40</p>
                            <div className="preview">
                                <Icon className="search40"/>
                            </div>

                            <p className="gInfo">48 x 48</p>
                            <div className="preview">
                                <Icon className="avatar48"/><span className="blind">avatar</span>
                                <Icon className="time48"/><span className="blind">total time</span>
                                <Icon className="complete48"/><span className="blind">complete edu</span>
                                <Icon className="stamp48"/><span className="blind">stamp</span>
                            </div>

                            <p className="gInfo">50 x 50</p>
                            <div className="preview">
                                <Icon className="no-contents50"/><span className="blind">콘텐츠 없음</span>
                                <Icon className='search50'/><span className='blind'>searchIcon</span>
                            </div>

                            <p className="gInfo">56 x 56</p>
                            <div className="preview">
                                <Icon className="icon avatar56"/><span className="blind">avatar</span>
                            </div>

                            <p className="gInfo">60 x 60</p>
                            <div className="preview">
                                <Icon className="thumb60-1"/>
                                <Icon className="thumb60-2"/>
                                <Icon className="thumb60-3"/>
                                <Icon className="thumb60-4"/>
                            </div>

                            <p className="gInfo">80 x 80</p>
                            <div className="preview">
                                <Icon className="no-contents80"/><span className="blind">콘텐츠 없음</span>
                            </div>

                            <p className="gInfo">86 x 86</p>
                            <div className="preview">
                                <Icon className="college-ai86"/><span className="blind">ai</span>
                                <Icon className="college-design86"/><span className="blind">design</span>
                                <Icon className="college-dt86"/><span className="blind">dt</span>
                                <Icon className="college-global86"/><span className="blind">global</span>
                                <Icon className="college-happy86"/><span className="blind">happy</span>
                                <Icon className="college-leadership86"/><span className="blind">leadership</span>
                                <Icon className="college-management86"/><span className="blind">management</span>
                                <Icon className="college-sv86"/><span className="blind">sv</span>
                                <Icon className="college-semicond86"/><span className="blind">반도체</span>
                            </div>

                            <p className="gInfo">110 x 110 </p>
                            <div className="preview">
                                <Icon className="profile110"/>
                            </div>
                        </section>

                        {/* rating */}
                        <section>
                            <h2 className="test">rating</h2>

                            <div className="preview">
                                <Rating icon='star' defaultRating={4} maxRating={5}/>
                            </div>
                            <p className="gInfo">.fixed-rating (기능 없는 별점표시)</p>
                            <div className="preview">
                                <Rating maxRating={5} defaultRating={3} icon='star' disabled/>
                            </div>

                            <p className="gInfo">.rating-num</p>
                            <div className="preview">
                                <Rating defaultRating={4} maxRating={5} disabled className='rating-num'/>
                            </div>

                            <p className="gInfo">.rating-num</p>
                            <div className="preview">
                                <Rating defaultRating={3} maxRating={5} disabled className='rating-num line'/>
                            </div>
                        </section>

                        {/*Button*/}
                        <section>
                            <h2 className="test">Button</h2>

                            <p>.swiper-unit</p>
                            <div className="preview">
                                <Button className="swiper-unit pagination"/>
                                <Button className="swiper-unit pagination active"/>
                                <Button className="swiper-unit prev"/>
                                <Button disabled className="swiper-unit prev"/>
                                <Button className="swiper-unit next"/>
                                <Button disabled className="swiper-unit next"/>
                            </div>

                            <p className="gInfo">.btn-black</p>
                            <div className="preview">
                                <Button icon className="right btn-black">
                                    View all<Icon className="morelink"/>
                                </Button>
                            </div>

                            <p className="gInfo">.btn-complex48</p>
                            <div className="preview">
                                <Button className="btn-complex48">
                                    <span className="i">
                                        <Icon className="time48"/>
                                        <span className="blind">total time</span>
                                    </span>
                                    <span className="t">
                                        <span className="underline">총 학습시간</span>
                                        <span className="div">
                                            <span className="t1">120</span><span className="t2">h</span>
                                            <span className="t1">00</span><span className="t2">m</span>
                                        </span>
                                    </span>
                                </Button>
                                <Button className="btn-complex48">
                                    <span className="i">
                                        <Icon className="time48"/><span className="blind">total time</span>
                                    </span>
                                    <span className="t">
                                        <span className="underline">총 학습시간</span>
                                        <span className="div">
                                                <span className="t4">학습대기중</span>
                                        </span>
                                    </span>
                                </Button>
                                <Button className="btn-complex48">
                                    <span className="i">
                                        <Icon className="complete48"/><span className="blind">complete edu</span>
                                    </span>
                                    <span className="t">
                                        <span className="underline">완료한 학습</span>
                                        <span className="div">
                                                <span className="t1">14</span><span className="t3">개</span>
                                        </span>
                                    </span>
                                </Button>
                                <Button className="btn-complex48">
                                    <span className="i">
                                        <Icon className="stamp48"/><span className="blind">stamp</span>
                                    </span>
                                    <span className="t">
                                        <span className="underline">획득 Stamp</span>
                                        <span className="div">
                                                <span className="t1">14</span><span className="t3">개</span>
                                        </span>
                                    </span>
                                </Button>
                            </div>

                            <p className="gInfo">.btn-blue</p>
                            <div className="preview">
                                <Button icon className="right btn-blue btn-more">
                                    more<Icon className="more2"/>
                                </Button>
                                <Button icon className="right btn-blue btn-hide">
                                    hide<Icon className="hide2"/>
                                </Button>
                                <Button icon className="right btn-blue">
                                    more<Icon className="morelink"/>
                                </Button>
                                <Button icon className="right btn-blue">
                                    View all<Icon className="icon morelink"/>
                                </Button>
                                <Button icon className="right btn-blue">
                                    문의하기<Icon className="arrow-b-16"/>
                                </Button>
                            </div>

                            <p className="gInfo">.btn-blue2</p>
                            <div className="preview">
                                <Button icon className="right btn-blue2">
                                    김유니 님에게 추천하는 학습 과정 보기<Icon className="morelink"/>
                                </Button>
                                <Button icon className="right btn-blue2">
                                    <Icon className="homelink"/>Home
                                </Button>
                            </div>

                            <p className="gInfo">.orange-arrow</p>
                            <div className="preview">
                                <Button className='orange-arrow'><Icon className='post'/>Modify</Button>
                                <Button className='orange-arrow2'><Icon className='post'/>Sign out</Button>
                                <Button className='orange-arrow3'><Icon className='post'/>Image upload</Button>
                            </div>

                            <p className="gInfo">.country</p>
                            <div className="preview">
                                <div className="country-toogle" style={{position: 'relative', top: '0'}}>
                                    <Radio toggle/>
                                </div>
                            </div>

                            <p className="gInfo">.left</p>
                            <div className="preview">
                                <Button icon className='post'>
                                    <Icon className='post'/>Post
                                </Button>

                                <Button icon className="left post">
                                    <Icon className="filter2 icon"/>Filter
                                </Button>
                                <Button className="btn-filter-blue on">
                                    <span>Filter</span>
                                    </Button>
                                <Button icon className="left post ask">
                                    <Icon className="ask24"/>&nbsp;&nbsp; 문의하기
                                </Button>
                                <Button icon className="left post reply">
                                    <Icon className="reply24 icon"/>Reply
                                </Button>

                                <Button icon className="left post list2">
                                    <Icon className="list24 icon"/>List
                                </Button>

                                <Button icon className="left post edit">
                                    <Icon className="edit24 icon"/>Edit
                                </Button>

                                <Button icon className="left post delete">
                                    <Icon className="del24 icon"/>Delete
                                </Button>

                                <Button icon className="left post delete-kr">
                                    <Icon className="del24 icon"/>전체삭제
                                </Button>

                                <Button icon className='postset delete'>
                                    <Icon className='delete'/>Delete
                                </Button>

                                <Button icon className='postset edit2'>
                                    <Icon className='edit2'/>Edit
                                </Button>
                                <Button icon className='postset reply2'>
                                    <Icon className='reply2'/>Reply
                                </Button>

                                <Button icon className='postset active edit2'>
                                    <Icon className='edit2'/>Edit
                                </Button>
                                <Button icon className='postset active reply2'>
                                    <Icon className='reply2'/>Reply
                                </Button>

                                <Button icon className='postset list2'>
                                    <Icon className='list2'/>List
                                </Button>

                                <Button icon className='moreview'>
                                    <Icon className='moreview'/>list more
                                </Button>

                                <Button icon className='moreview'>
                                    <Icon className='moreview'/>more comments (15)
                                </Button>

                                <Button icon className="left underline">
                                    <Icon className="down-blue24"/>Download
                                </Button>

                                <Button icon className="left filter">
                                    <Icon className="filter24"/>Filter
                                </Button>

                                <Button icon className="left filter color2">
                                    <Icon className="filter24-o"/>Filter
                                </Button>

                                <Button icon className='all-dt'>
                                    <Icon className='delete14'/>전체삭제
                                </Button>
                                <Button className='post add'>
                                    + Playlist 추가
                                </Button>
                                <Button className='bl'>만들기</Button>
                                <Button className='cl'>취소</Button>
                                <Button className='btn-control btn-up'><Icon className='chevron up'/></Button>
                                <Button className='btn-control btn-down'><Icon className='chevron down'/></Button>
                                <Button className='btn-delete-list'>선택 삭제</Button>
                                <Label as='Button' className='onlytext btn-add-list'><Icon className='plus round16'/><span>학습카드 추가</span></Label>
                                <Label as='Button' className='onlytext btn-modify-list'><Icon className='cog16'/><span>편집하기</span></Label>
                                <div className='playlist-view-content' style={{display:'inline'}}><div className='list-top active' style={{display:'inline'}}><Label as='Button' className='onlytext btn-modify-list' style={{margin:0}}><Icon className='cog16'/><span>편집완료</span></Label></div></div>
                                <Label as='Button' className='onlytext'><Icon className='share-comm line'/><span>추천하기</span></Label>
                            </div>
                            <p className="gInfo">.right</p>
                            <div className="preview">
                                <div className="content lms">
                                    <div className="header-right-link">
                                        <Link className="ui icon button left post-s">
                                            <Icon className="ask" />문의하기
                                        </Link>
                                        <Link to="#none">
                                            <span className="communityText"><Icon className="communityLink" />커뮤니티로 이동</span>
                                        </Link>
                                        <Button>
                                            <span><Icon className="noteWrite" />Note</span>
                                        </Button>
                                        <Link href="#none">
                                            <span><Icon className='listAdd'/>찜한 과정</span>
                                        </Link>
                                        <Link href="#none">
                                            <span><Icon className='listDelete'/>찜한 과정</span>
                                        </Link>
                                        <Link href="#none">
                                            <span><Icon className="linkCopy" />공유하기</span>
                                        </Link>
                                        <Link href="#none">
                                            <span><Icon className='plAdd'/>Playlist 추가</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <p className="gInfo">.community templete buttons, icons</p>
                            <div className="preview header_left_area">
                                <Button className="post_header" icon> <Icon className="edit_bk"/>수정</Button>
                                <Button className="post_header" icon> <Icon className="delete_bk"/>삭제</Button>
                                <Button className="post_header" icon> <Icon className="share_bk"/>공유</Button>
                                <Button className="post_header" icon> <Icon className="mark_bk"/>저장</Button>
                                <Button className="post_header" icon> <Icon className="list_bk"/>목록</Button>
                                <Label as="a">
                                    <Icon className="likeoff like_on"/>
                                    <Label.Detail>1,004</Label.Detail>
                                </Label>
                                <Label as="a" className="line_left">
                                    <Icon className="commentoff comment_on"/>
                                    <Label.Detail>109</Label.Detail>
                                </Label>
                                <Label as="a">
                                    <Icon className="likeoff likeoff"/>
                                    <Label.Detail>1,004</Label.Detail>
                                </Label>
                                <Label as="a" className="line_left">
                                    <Icon className="commentoff commentoff"/>
                                    <Label.Detail>109</Label.Detail>
                                </Label>
                            </div>

                            <p className="gInfo">.Header buttons, icons (커뮤니티 포함)</p>
                            <div className="preview g-info-new" style={{float:'none'}}>
                                <div className="g-join" style={{display:'inline-block', position:'relative', top:'auto', left:'auto', right:'auto', transform:'translateY(0)'}}>
                                    <Button className="b_join"><Icon /><span></span></Button>
                                </div>
                                <div className="g-info info" style={{display:'inline-block'}}>
                                    <Button className="btn_com">
                                        <Image src={ImgCommunity} alt='커뮤니티아이콘'/>
                                    </Button>
                                </div>
                                <Link className="lms-alarm lms-on" style={{position :'relative', right:'0'}}><span>알람</span></Link>
                                <Button className="btn_user" >
                                    <span><Image src={ImgProfile} alt='profile'/></span>
                                </Button>
                                <Button className="btn_lang">
                                    <Image src={BtnLang} className="btn_lang" alt="다국어선택"/>
                                </Button>

                            </div>

                            <p className="gInfo">.toggle</p>
                            <div className="preview">
                                <ToggleButtonRound01/>
                                <ToggleButtonRound/>
                                <ToggleButton/>
                            </div>

                            {/*삭제버튼*/}
                            <p className="gInfo">.del</p>
                            <div className="preview">
                                <Button className="del">AI</Button>
                                <Button className="del type2">Cloud Developing</Button>
                                <Button className="del default">AI Trend Watch</Button>
                                <Button icon className="img-icon"><Icon className="del"/><span className="blind">del</span></Button>
                                <Button icon className="b-cl" style={{display:'inline-block',position: 'relative',top: 'auto',right: 'auto',transform: 'translateY(0px)'}}><Icon className="b-cl"/></Button>
                                <Button className='close24'><Icon className='close24'/></Button>
                               {/*  <div className="recent_list">
                                    <ul>
                                        <li><strong className="rwd">A.I Vision 분석 플랫폼 ("SmartVision-Drive")</strong><Button className="w_dl"><Icon class="i_dl"/></Button></li>
                                    </ul>
                                </div> */}

                            </div>

                            {/*팝업 긍정 부정*/}
                            <p className="gInfo">.pop</p>
                            <div className="preview">
                                <Button className='w190 pop b'>닫기</Button>
                                <Button className='w190 pop d'>Cancel</Button>
                                <Button className='w190 pop p'>Filter</Button>
                            </div>

                            {/*팝업 full*/}
                            <p className="gInfo">.pop2 (팝업 .actions2 에서 사용되는 버튼 flex:1)</p>
                            <div className="preview">
                                <Button className='pop2 d'>Cancel</Button>
                                <Button className='pop2 p'>Select Download</Button>
                            </div>

                            {/*가로사이즈 유동적인 버튼,*/}
                            {/*width값 없음/height:48px 고정. .p00 클래스 넣어서 가로 패딩 추가.*/}
                            <p className="gInfo">.free</p>
                            <div className="preview">
                                <Button className='free line p23'>Go To This Community</Button>
                                <Button className='free line p18'>상세보기</Button>
                                <Button className='free line p18' disabled>상세보기</Button>
                                <Button className='free bg p18'>상세보기</Button>
                                <Button className='free bg p18' disabled>상세보기</Button>
                            </div>

                            {/*가로 사이즈 고정되어있는 버튼*/}
                            {/*기본: 220x48 사이즈 잡혀있음 (필요시 각 버튼에서 수정), padding:0*/}
                            <p className="gInfo">.fix</p>
                            <div className="preview">
                                <Button className='fix bg'>TEXT</Button>
                                <Button className='fix bg' disabled>TEXT</Button>
                                <Button className='fix line'>TEXT</Button>
                                <Button className='fix line' disabled>TEXT</Button>
                            </div>

                            {/*add personal learning*/}
                            <p className="gInfo">.personal</p>
                            <div className="preview">
                                <Button className='personal line'>+ Add Personal Learning</Button>
                            </div>

                            {/*위에 아이콘 있는 큰 버튼  */}
                            <p className="gInfo">.icon-big-line</p>
                            <div className="preview">
                                <Button className='icon-big-line'><Icon
                                    className='download2'/><span>Download</span></Button>
                                <Button className='icon-big-line'><Icon
                                    name='play2'/><span>Learning Start</span></Button>
                                <Button className='icon-big-line'><Icon className='join'/><span>Join</span></Button>
                            </div>

                            {/*옆에 아이콘 있는 큰 버튼*/}
                            <p className="gInfo">.icon-big-line2</p>
                            <div className="preview">
                                <Button className='icon-big-line2'>
                                    <Icon name='download2'/><span>Download</span>
                                </Button>
                            </div>
                            <div className="preview">
                                <Button icon className="left icon-big-line2">
                                    <Icon className="open"/><span>Panopto 열기</span>
                                </Button>
                            </div>

                            <p className="gInfo">.surv</p>
                            <div className="preview">
                                <Button className="surv">
                                    <span>설문하기</span><Icon className="ar-survay"/>
                                </Button>

                                <Button className="surv">
                                    <span>Report Download</span><Icon className="download3"/>
                                </Button>

                                <Button className="surv">
                                    <span>Complete Survey</span><Icon className="ar-survay"/>
                                </Button>
                            </div>

                            <p className="gInfo">.filter-w</p>
                            <div className="preview">
                                <Button className="filter-w">
                                    <Icon className="filter24-w"/><span>Filter</span>
                                </Button>

                                <Button className="filter-w disabled" disabled>
                                    <Icon className="filter24-w"/><span>Filter</span>
                                </Button>
                            </div>

                            <p className="gInfo">.button .img-icon</p>
                            {/*이미지아이콘 버튼*/}
                            <div className="preview">
                                <Button icon className="img-icon"><i className="zoom2 icon"></i><span
                                    className="blind">확대</span></Button>

                                <Button icon className="img-icon">
                                    <Icon className="bookmark2"></Icon><span
                                    className="blind">마이리스트에저장</span>
                                </Button>

                                <Button icon className="img-icon">
                                    <Icon className="share2"/><span className="blind">공유</span>
                                </Button>

                                <Button icon className="img-icon">
                                    <Icon className="remove3"/><span className="blind">삭제</span>
                                </Button>

                                <Button icon className="img-icon">
                                    <Icon className="photo-edit"/><span className="blind">프로필편집</span>
                                </Button>

                                <Button icon className="img-icon"><i className="arrow-up icon"></i><span
                                    className="blind">card down</span></Button>

                                <Button icon className="img-icon"><i
                                    className="arrow-down icon"></i><span
                                    className="blind">card up</span></Button>

                                <Button icon className="img-icon"><i
                                    className="arrow-up s26 icon"></i><span
                                    className="blind">card down</span></Button>

                                <Button icon className="img-icon"><i className="arrow-down s26 icon"></i><span
                                    className="blind">card up</span></Button>

                                <Button className="img-icon"><i className="photo-edit icon"></i><span
                                    className="blind">프로필편집</span>
                                </Button>

                                <Button icon className="img-icon"><i className="close32 icon"></i><span
                                    className="blind">닫기</span>
                                </Button>

                                <Button icon className="img-icon"><i className="reset icon"></i><span
                                    className="blind">reset</span>
                                </Button>

                                <Button icon className="img-icon"><i className="photo50 icon"></i><span
                                    className="blind">photo</span>
                                </Button>

                                <Button icon className="img-icon"><i
                                    className="photo50-opacity icon"></i><span
                                    className="blind">photo</span></Button>

                                <Button icon className="ui icon button img-icon"><i className="setting17 icon"></i><span
                                    className="blind">setting</span>
                                </Button>

                                <Button icon className="img-icon"><i className="sum-open icon"></i><span
                                    className="blind">summary open</span></Button>

                                <Button icon className="ui icon button img-icon"><i className="sum-close icon"></i><span
                                    className="blind">summary close</span></Button>

                                <Button icon className="img-icon"><i className="del icon"></i><span
                                    className="blind">del</span></Button>

                                <Button icon className="img-icon">
                                    <Icon className="clear2 link"/>
                                </Button>

                                <Button icon className="img-icon">
                                    <Icon className="clear2 disabled link"/>
                                </Button>

                                <Button icon className="img-icon">
                                    <Icon className="clear2 selected link"/>
                                </Button>
                                <div className='right-bttns'>
                                    <Button className='emoji-btn'>
                                        <Icon className="emoji-icon"/>
                                    </Button>
                                    <Button className="img-up-btn">
                                        <div className='ui file task-down'>
                                            <label for='hidden=new-file'><Icon className='img-up'/></label>
                                            <input type="file" id="hidden-new-file"/>
                                            <input type="text" readOnly hidden />
                                        </div>
                                    </Button>
                                    <Button icon className="submit-btn">
                                        <Icon className='icon-submit'/>
                                        <span className="blind">승인버튼</span>
                                    </Button>
                                    <Button className='emoji-btn active'>
                                        <Icon className="emoji-icon"/>
                                    </Button>
                                    <Button className="img-up-btn active">
                                        <div className='ui file task-down'>
                                            <label for='hidden=new-file'><Icon className='img-up'/></label>
                                            <input type="file" id="hidden-new-file"/>
                                            <input type="text" readOnly hidden />
                                        </div>
                                    </Button>
                                    <Button icon className="submit-btn active">
                                        <Icon className='icon-submit'/>
                                        <span className="blind">승인버튼</span>
                                    </Button>
                                </div>
                            </div>

                            <p className="gInfo">.button .icon-line</p>
                            <div className="preview" style={{background: '#ccc'}}>
                                <Button icon className="icon-line">
                                    <Icon className="my"/><span className="blind">Go to my learning</span>
                                </Button>

                                <Button icon className="icon-line">
                                    <Icon className="remove2 icon"/><span className="blind">Remove form my list</span>
                                </Button>

                                <Button icon className="icon-line">
                                    <Icon className="add-list"/><span className="blind">Add to my list</span>
                                </Button>
                            </div>

                            <p className="gInfo">.btn-total-time</p>
                            <div className="preview">
                                <div className="ui statistic total-time">
                                    <Button className="btn-total-time">
                                        <span className="ui label onlytext">
                                            <Icon className="total-time icon"/><span>총 학습시간</span>
                                        </span>
                                        <span className="value2">
                                            <strong>0</strong><span>h</span>
                                            <strong className="min">00</strong><span>m</span>
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <p className="gInfo">.change-channel-of-interest</p>
                            <div className="preview">
                                <Button icon className="img-icon change-channel-of-interest">
                                    <span className="underline">관심 Channel 변경
                                    <Icon className="setting17"/>
                                    </span>
                                </Button>
                            </div>

                            <p className="gInfo">.modal-na</p>
                            <div className="preview">
                                <Button icon className="modal-direction-l">
                                    <Icon className="arrow-l-normal"/>
                                </Button>

                                <Button icon className="modal-direction-l">
                                    <Icon className="arrow-l-disabled"/>
                                </Button>

                                <Button icon className="modal-direction-r">
                                    <Icon className="arrow-r-normal"/>
                                </Button>

                                <Button icon className="modal-direction-r">
                                    <Icon className="arrow-r-disabled"/>
                                </Button>
                            </div>

                        </section>
                        {/*checkbox/radio*/}
                        <section>
                            <h2 className="test">Checkbox / Radio</h2>
                            <div className="preview">
                                <Checkbox label='normal'/>
                                <Checkbox label='checked' defaultChecked/>
                                <Checkbox label='disabled' disabled/>
                                <Checkbox label='checked disabled' defaultChecked disabled/>
                            </div>

                            <p className="gInfo">.black</p>
                            <div className="preview">
                                <Checkbox label='normal' className='black'/>
                                <Checkbox label='defaultChecked' defaultChecked className='black'/>
                                <Checkbox label='disabled' disabled className='black'/>
                                <Checkbox label='defaultChecked disabled' defaultChecked disabled className='black'/>
                            </div>

                            <p className="gInfo">.v-icon</p>
                            <div className="preview">
                                <div className="ui v-icon radio checkbox">
                                    <input type="radio" name="base" checked="checked" tabIndex="0" className="hidden"/>
                                    <label>
                                        <span>
                                            <span>
                                                <span><Image src='/images/all/thumb-card-60-px.jpg' alt=''/></span>
                                                <span><span
                                                    className="text1">Growth Mindset (Leadership Specialist)</span></span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <p className="gInfo">.base</p>
                            <div className="preview">
                                <Checkbox radio label='normal' name='base1' className='base'/>
                                <Checkbox radio label='checked' name='base1' className='base' defaultChecked/>
                                <Checkbox radio label='disabled' name='base1' className='base' disabled/>
                                <Checkbox radio label='checked disabled' name='base1' className='base' defaultChecked
                                          disabled/>
                            </div>

                            <p className="gInfo">.base2</p>
                            <div className="preview">
                                <Checkbox radio label='normal' name='base2' className='base2'/>
                                <Checkbox radio label='checked' name='base2' className='base2' defaultChecked/>
                                <Checkbox radio label='disabled' name='base2' className='base2' disabled/>
                            </div>

                            <p className="gInfo">.round</p>
                            <div className="preview">
                                <RoundRadio/>
                            </div>

                            <p className="gInfo">.round2</p>
                            <div className="preview">
                                <RoundRadio01/>
                            </div>

                            <p className="gInfo">.rect-icon</p>
                            <div className="preview">
                                <RectIcon/>
                            </div>

                            <p className="gInfo">.base</p>
                            <div className="preview">
                                <Checkbox label={<label>AI 공통 <span>(30)</span></label>} className='base'/>
                            </div>
                        </section>

                        {/* Dropdown */}
                        <section>
                            <h2 className="test">dropdown</h2>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <Select placeholder='선택해주세요' className='dropdown selection'
                                        options={selectOptions01}/>
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline</p>
                                <Dropdown
                                    className='inline'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline .tight</p>
                                <Dropdown
                                    className='inline tight'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline .transparent</p>
                                <Dropdown
                                    className='inline transparent'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline .large</p>
                                <Dropdown
                                    className='inline large'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline .large .tight</p>
                                <Dropdown
                                    className='inline large tight'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview" style={{overflow: 'visible'}}>
                                <p className="gInfo">.inline .large .transparent</p>
                                <Dropdown
                                    className='inline transparent large'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>

                            <div className="preview">
                                <p className="gInfo">.small-border</p>
                                <div className="preview" style={{overflow: 'visible'}}>
                                    <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown m0'
                                            defaultValue={selectOptions02[0].value}
                                            options={selectOptions02}/>
                                </div>
                            </div>
                        </section>
                        {/* Dropdown */}

                        {/*Label*/}
                        <section style={{backgroundColor : '#dadafc'}}>
                            <h2 className="test">Label</h2>
                            <p className="gInfo">.tag</p>
                            <div className="preview">
                                <span className="ui label tag">AI</span>
                            </div>

                            <p className="gInfo">.stamp</p>
                            <div className="preview">
                                <Label className="stamp">
                                    <div><span className="text1">획득 Stamp</span></div>
                                    <div>
                                        <Icon className="stamp35"/><span className="text2">x</span>
                                        <span className="text3">12</span>
                                    </div>
                                </Label>
                            </div>

                            <p className="gInfo">.stamp2</p>
                            <div className="preview">
                                <Label className="stamp2">
                                    <div>
                                        <Icon className="stamp48"/>
                                        <span className="text1">x</span>
                                        <span className="text2">12</span>
                                    </div>
                                    <div><span className="text3">획득가능 Stamp</span></div>
                                </Label>
                            </div>

                            <p className="gInfo">.ribbon2</p>
                            <div className="preview">
                                <Label className='ribbon2'>Hotel</Label>
                                <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                            </div>
                            <p className="gInfo">.color</p>
                            <div className="preview">
                                <Label color='purple'>AI</Label>
                                <Label color='violet'>DT</Label>
                                <Label color='yellow'>행복</Label>
                                <Label color='orange'>SV</Label>
                                <Label color='red'>혁신디자인</Label>
                                <Label color='green'>Global</Label>
                                <Label color='blue'>Leadership</Label>
                                <Label color='teal'>Management</Label>
                                {/* <Label color='navy'>SK하이닉스</Label> */}
                                <Label color='marine'>미래반도체</Label>
                                <Label color='bluegreen'>Environment</Label>
                                <Label color='magenta'>BM Design &amp; Storytelling College</Label>
                                <Label color='orange2'>SK아카데미</Label>
                            </div>

                            <p className="gInfo">.channel</p>
                            <div className="preview">
                                <Label className='channel'>
                                    AI
                                </Label>
                            </div>

                            <p className="gInfo">.onlytext (버튼 아님)</p>
                            <div className="preview">
                                {/*normal*/}
                                <Label className="onlytext">
                                    <Icon className="complete"/>
                                    <span>이수 3,300명</span>
                                </Label>
                                <Label className="onlytext">
                                    <Icon className="price"/><span>12,000원</span>
                                </Label>

                                {/*bold*/}
                                <Label className="bold onlytext">
                                    <Icon className="video2"/><span>Video</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="classroom"/><span>Classroom</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="course"/><span>Course</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="e-learning"/><span>e-learning</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="community"/><span>Community</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="experiential"/><span>Experiential</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="documents"/><span>Documents</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="audio"/><span>Audio</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="webpage"/><span>Webpage</span>
                                </Label>
                                <Label className="bold onlytext">
                                    <Icon className="time2"/><span>1h 30m</span>
                                </Label>

                                {/*24size*/}
                                <Label className="onlytext size24">
                                    <Icon className="file2"/><span>Download the learning</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="host"/><span>교육기관 출처</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="goal"/><span>학습목표</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="target"/><span>대상</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="tag2"/><span>태그</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="url"/><span>URL 정보</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="category"/><span>관련 Category</span>
                                </Label>
                                <Label className="onlytext bold">
                                    <Icon className="stamp"/><span>11개</span>
                                </Label>
                                <Label className="onlytext bold">
                                    <Icon className="state"/><span>학습중</span>
                                </Label>
                                <Label className="onlytext">
                                    <Icon className="date"/><span>Completed date : 19. 01. 31</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="document24" /><span>참고자료</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="period" /><span></span>
                                </Label>
                                <Label className="onlytext size24">
                                    <Icon className="cancellation" /><span></span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="series" /><span>차수정보</span>
                                </Label>
                            </div>

                            <p className="gInfo">학습 난이도(버튼아님)</p>
                            <div className="content lms preview">
                                <Label className="onlytext bold size24">
                                    <Icon className="basic"/><span>Basic</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="inter"/><span>Intermediate</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="advanced"/><span>Advanced</span>
                                </Label>
                                <Label className="onlytext bold size24">
                                    <Icon className="export"/><span>Expert</span>
                                </Label>
                            </div>

                            <p className="gInfo">학습 난이도(버튼아님)</p>
                            <div className="content lms preview">
                                <span class="label-state-cube"><span>cube 완료상태</span></span>
                                <span class="label-state-cube proceeding"><span>cube 완료상태</span></span>
                                <span class="label-state-cube complete"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step0"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step1"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step2"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step3"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step4"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step5"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step6"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step7"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step8"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step9"><span>cube 완료상태</span></span>
                                <span class="label-state-cube l-step10"><span>cube 완료상태</span></span>
                            </div>


                        </section>
                        {/*Input*/}
                        <section>
                            <h2 className="test">Input</h2>

                            <p className="gInfo">.h30</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h30 input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h30 input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h30 error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>
                            <p className="gInfo">.h30 .right</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h30 right input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h30 right input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h30 right error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>

                            <p className="gInfo">.h30 .search</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h30 search input">
                                    <input type="text" placeholder="placeholder"/>
                                    <Icon className="clear link"/>
                                    <Icon className='search link'/>
                                </div>
                                <div className="ui h30 search input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                    <Icon className="clear link"/>
                                    <Icon className='search link'/>
                                </div>
                            </div>

                            <p className="gInfo">.h38</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h38 input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h38 input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h38 error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>

                            <p className="gInfo">.h38 .right</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h38 right input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h38 right input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h38 right error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>

                            <p className="gInfo">.h38 .search</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h38 search input">
                                    <input type="text" placeholder="placeholder"/>
                                    <Icon className="clear link"/>
                                    <Icon className='search link'/>
                                </div>
                                <div className="ui h38 search input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                    <Icon className="clear link"/>
                                    <Icon className='search link'/>
                                </div>
                            </div>

                            <p className="gInfo">.h48</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h48 input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h48 input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h48 error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>
                            <p className="gInfo">.h48 .right</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui h48 right input">
                                    <input type="text" placeholder="placeholder"/>
                                </div>
                                <div className="ui h48 right input">
                                    <input type="text" placeholder="쓰기금지" disabled/>
                                </div>
                                <div className="ui h48 right error input">
                                    <input type="text" placeholder="오류"/>
                                    <span className="validation">validation check</span>
                                </div>
                            </div>

                            <p className="gInfo">.h48 .search</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <ClearInputBoxSearch/>
                                <ClearInputBoxSearch01/>
                            </div>

                            <p className="gInfo">.main .search</p>
                            <div className="preview" style={{overflow: 'visible'}}>
                                <div className="ui main search input">
                                    <span className="placeholder">SK University의 다양한 학습 및 포럼에 참여하세요. <span
                                        className="orange">AI</span>를 검색해보시는건 어떨까요?</span>
                                    <input type="text" placeholder=""/>
                                    <Icon className="clear link"/>
                                    <Icon className="search link"/>
                                </div>
                            </div>

                            <p className="gInfo">.action (height 48px)</p>
                            <div className="preview">
                                <ClearInputBoxAction/>
                                <ClearInputBoxAction01/>

                                <div className="ui disabled action input">
                                    <input type="text" placeholder="Search..." disabled/>
                                    <i className="clear link icon"/>
                                    <button className="ui button">승인자찾기</button>
                                </div>

                                <div className="ui disabled action write input">
                                    <input type="text" placeholder="Search..." disabled value="입력된값"/>
                                    <i className="clear link icon"/>
                                    <button className="ui button">승인자찾기</button>
                                </div>
                            </div>

                            <p className="gInfo">.input.file (height 48px)</p>
                            <div className="preview">
                                <div className="ui input file">
                                    <input type="text" readOnly/>
                                    <Icon className="clear link"/>
                                    <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                    <input type="file" id="hidden-new-file"/>
                                </div>
                            </div>

                            <p className="gInfo">.input.file2 (height 48px)</p>
                            <div className="preview">
                                <div className="ui input file2">
                                    <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                    <input type="file" id="hidden-new-file2"/>
                                </div>
                            </div>

                            <p className="gInfo">.right-top-count (우측 상단 카운팅) </p>

                            <div className="preview" style={{paddingTop: '50px'}}>
                                <div className="ui form">
                                    <ClearInputBox/>
                                </div>
                            </div>
                            <div className="preview" style={{paddingTop: '50px'}}>
                                <div className="ui form">
                                    <div className="ui right-top-count input" style={{width: '500px'}}>
                                        {/*error*/}
                                        <span className="count"><span className="now">0</span>/<span
                                            className="max">500</span></span>
                                        <textarea placeholder="500자 이내로 입력하세요."/>
                                        <span className="validation">You can enter up to 500 characters.</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="test">Calendar</h2>
                            <p className="gInfo">.calendar </p>
                            <div className="preview">
                                <CalendarBig/>
                            </div>

                            <p className="gInfo">.calendar h40</p>
                            <div className="preview">
                                <Calendar/>
                            </div>
                        </section>

                        <section>
                            <h2 className="test">이미지 업로드 미리보기 *기능확인용 (ui.js파일내 ui.fxImageUploadPreview)</h2>
                            <div className="preview">
                                <img src="" id="blah" alt='' />
                                <input type="file" id="profileIage"/>
                                <label htmlFor="profileIage">Image upload</label>
                            </div>
                        </section>

                        <section>
                            <h2 className="test">아코디언</h2>
                            <div className="preview">
                                {/* <LinkccordionStyled /> */}
                            </div>
                        </section>

                        <section>
                            <h2 className="test">뺏지</h2>
                            <div className="preview">
                                <div className="acheive-stamp">
                                    <div className="value">3</div>
                                    <div className="label">획득 Stamp</div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}


export default StyleGuide