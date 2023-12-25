import React, {Component} from 'react';
import { Segment, Select, Card, CardGroup} from 'semantic-ui-react';
import gr_img from "../../../../../images/all/gr.png";
import BubblePopupBg from "../BubblePopupBg";
//import BubblePopupCom from "../BubblePopupCom";
import BubblePopupTime from "../BubblePopupTime";
import BubblePopupStamp from "../BubblePopupStamp";


const selectOptions = [
    { key: "all", value: "all", text: "전체" },
    { key: "2022", value: "2022", text: "2022" },
    { key: "2021", value: "2021", text: "2021" },
    { key: "2020", value: "2020", text: "2020" },
    { key: "2019", value: "2019", text: "2019" },
]


class ContentsArea extends Component {

    state = { activeIndex: 1 };

    render() {

        const { activeIndex } = this.state;

        return (
            <div className="mypage_contents profile-dashboard-contents">
                <strong className="mypage_title">나의 학습 현황</strong>
                <div className="top-line"></div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className='playlist-list list-wrapper'>
                            <div className='gauge-box-wrap'>
                                <div className="main-gauge-box">
                                    <div className="main-gauge">
                                        <span className="gauge-tit">Badge</span>
                                        <BubblePopupBg />
                                    </div>
                                    <div className="main-gauge">
                                        <span className="gauge-tit">Stamp</span>
                                        <BubblePopupStamp/>
                                    </div>
                                    <div className="main-gauge ">
                                        <span className="gauge-tit">2022년 학습시간</span>
                                        <BubblePopupTime />
                                    </div>
                                </div>
                            </div>
                            <div className='personal-content-wrap'>
                                <div className='personal-content-select'>
                                    <div className='select-wrap'>
                                        <Select
                                            placeholder="선택"
                                            className="ui small-border dropdown m0"
                                            defaultValue={selectOptions[1].value}
                                            options={selectOptions}
                                        />
                                    </div>
                                </div>

                                <CardGroup className='personal-content-box-wrap'>
                                    <Card className='personal-content-box'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit">
                                                <a href={()=>false} className="card-item-link">
                                                    <h3>Badges</h3>
                                                </a>
                                                <span>보유중인 전체 Badge 갯수</span>
                                            </div>
                                            <div className="card-item-con">
                                                <div className="card-gauge-bar">
                                                    <span className="gauge-tit">My Badges</span>
                                                    <div className="card-gauge-bar sty2 myBadges">
                                                        <div className="rangeBox">
                                                            <div class="range">
                                                                <div
                                                                style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                                                className="percent"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="gauge-number">
                                                        <strong>11</strong>개
                                                    </span>
                                                </div>
                                                <div className="card-gauge-bar">
                                                    <span className="gauge-tit">우리 회사 평균</span>
                                                    <div className="card-gauge-bar sty2">
                                                        <div className="rangeBox">
                                                            <div class="range">
                                                                <div
                                                                style={activeIndex === 0 ? {width: 0} : {width: '30%'}}
                                                                className="percent"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="gauge-number">
                                                        <strong>3</strong>개
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='personal-content-box time'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit">
                                                <a href={()=>false} className="card-item-link">
                                                    <h3>학습 시간</h3>
                                                </a>
                                                <span>2022년 완료 학습</span>
                                            </div>
                                            <div className="card-item-con">
                                                <div className="card-gauge-bar">
                                                    <span className="gauge-tit">MY 학습시간</span>
                                                    <div className="card-gauge-bar sty2 myLearning">
                                                        <div className="rangeBox">
                                                            <div class="range">
                                                                <div
                                                                style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                                                className="percent"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="gauge-number">
                                                        <strong>63</strong>h&nbsp;<strong>58</strong>m
                                                    </span>
                                                </div>
                                                <div className="card-gauge-bar">
                                                    <span className="gauge-tit">우리 회사 평균</span>
                                                    <div className="card-gauge-bar sty2">
                                                        <div className="rangeBox">
                                                            <div class="range">
                                                                <div
                                                                style={activeIndex === 0 ? {width: 0} : {width: '30%'}}
                                                                className="percent"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="gauge-number">
                                                        <strong>80</strong>h&nbsp;<strong>30</strong>m
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CardGroup>
                                <CardGroup className='personal-content-box-wrap time-detail'>
                                    <Card className='personal-content-box'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit mb23">
                                                <a href={()=>false} className="card-item-link">
                                                <h3>학습 시간 상세</h3>
                                                </a>
                                                <span>2022년 기준</span>
                                            </div>
                                            <div className="card-item-con sty2">
                                                <div className="item-con-box">
                                                    <div className="item-con-left detail">
                                                        <img src={gr_img} alt="" />
                                                    </div>
                                                    <div className="item-con-right detail">
                                                        <div className="card-gauge-bar type2">
                                                            <div className="gauge-number sv">
                                                                <em className="col-con">mySUNI</em>
                                                                <div>
                                                                <strong>
                                                                    22<em>h</em>
                                                                </strong>
                                                                <strong>
                                                                    40<em>m</em>
                                                                </strong>
                                                                </div>
                                                            </div>
                                                            <div className="gauge-number mana">
                                                                <em className="col-con">관계사</em>
                                                                <div>
                                                                <strong>
                                                                    8<em>h</em>
                                                                </strong>
                                                                <strong>
                                                                    23<em>m</em>
                                                                </strong>
                                                                </div>
                                                            </div>
                                                            <div className="gauge-number semi">
                                                                <em className="col-con">강의시간</em>
                                                                <div>
                                                                <strong>
                                                                    17<em>h</em>
                                                                </strong>
                                                                <strong>
                                                                    8<em>m</em>
                                                                </strong>
                                                                </div>
                                                            </div>
                                                            <div className="gauge-number stu">
                                                                <em className="col-con">개인학습</em>
                                                                <div>
                                                                <strong>
                                                                    3<em>h</em>
                                                                </strong>
                                                                <strong>
                                                                    39<em>m</em>
                                                                </strong>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='personal-content-box college'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit mb18">
                                                <a href={()=>false} className="card-item-link">
                                                    <h3>Category별 학습 비중</h3>
                                                </a>
                                                <span>2022년 Top5</span>
                                            </div>
                                            <div className="card-item-con sty2">
                                                <div className="item-con-box">
                                                    <div className="item-con-left">
                                                        <div className="card-gauge-bar sty2 ai">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '32%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 dt">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '24%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 happy">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 sv">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '75%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 inno">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '13%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-con-right">
                                                        <div className="card-gauge-bar">
                                                            <div className="gauge-number ai">
                                                                <em className="col-con">AI</em>
                                                                <strong>
                                                                    32<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number dt">
                                                                <em className="col-con">DT</em>
                                                                <strong>
                                                                    24<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number happy">
                                                                <em className="col-con">행복</em>
                                                                <strong>
                                                                    10<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number sv">
                                                                <em className="col-con">SV</em>
                                                                <strong>
                                                                    8<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number inno">
                                                                <em className="col-con">혁신디자인</em>
                                                                <strong>
                                                                    5<em>%</em>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CardGroup>
                                <CardGroup className='personal-content-box-wrap time-detail'>
                                    <Card className='personal-content-box college'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit mb18">
                                                <a href={()=>false} className="card-item-link">
                                                    <h3>컬러확인</h3>
                                                </a>
                                                <span>2022년 Top5</span>
                                            </div>
                                            <div className="card-item-con sty2">
                                                <div className="item-con-box">
                                                    <div className="item-con-left">
                                                    <div className="card-gauge-bar sty2 global">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '13%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 leader">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '32%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 manage">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '24%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 semi">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 green">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '75%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-con-right">
                                                        <div className="card-gauge-bar">
                                                        <div className="gauge-number global">
                                                                <em className="col-con">Global</em>
                                                                <strong>
                                                                    5<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number leader">
                                                                <em className="col-con">Leadership</em>
                                                                <strong>
                                                                    32<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number manage">
                                                                <em className="col-con">Management</em>
                                                                <strong>
                                                                    24<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number semi">
                                                                <em className="col-con">미래반도체</em>
                                                                <strong>
                                                                    10<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number green">
                                                                <em className="col-con">Green</em>
                                                                <strong>
                                                                    8<em>%</em>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='personal-content-box college'>
                                        <div className="personal-card-item">
                                            <div className="card-item-tit mb18">
                                                <a href={()=>false} className="card-item-link">
                                                    <h3>컬러확인</h3>
                                                </a>
                                                <span>2022년 Top5</span>
                                            </div>
                                            <div className="card-item-con sty2">
                                                <div className="item-con-box">
                                                    <div className="item-con-left">
                                                        <div className="card-gauge-bar sty2 bm">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '32%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 academy">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '24%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 skmanage">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 life">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '75%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-gauge-bar sty2 skinno">
                                                            <div className="rangeBox">
                                                                <div class="range">
                                                                    <div
                                                                    style={activeIndex === 0 ? {width: 0} : {width: '13%'}}
                                                                    className="percent"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-con-right">
                                                        <div className="card-gauge-bar">
                                                            <div className="gauge-number bm">
                                                                <em className="col-con">BM Design &amp; Storytelling</em>
                                                                <strong>
                                                                    32<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number academy">
                                                                <em className="col-con">SK아카데미</em>
                                                                <strong>
                                                                    24<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number skmanage">
                                                                <em className="col-con">SK경영</em>
                                                                <strong>
                                                                    10<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number life">
                                                                <em className="col-con">Life Style</em>
                                                                <strong>
                                                                    8<em>%</em>
                                                                </strong>
                                                            </div>
                                                            <div className="gauge-number skinno">
                                                                <em className="col-con">이노베이션계열 공통</em>
                                                                <strong>
                                                                    5<em>%</em>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default ContentsArea;