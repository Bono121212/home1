import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";
import MyLearningAdditional from "../MyLearningAdditional";
//import ProgressBar from "../ProgressBar";
import PersonalTab from "../PersonalTab";
import BubblePopupBg from "../BubblePopupBg";
import BubblePopupCom from "../BubblePopupCom";
import BubblePopupTime from "../BubblePopupTime";
import profile from "../../../../../images/all/profile-110-06.png";
import Parsonal_btn from "../../../../../images/all/btn-pboard-open.png";
import Parsonal_btn_close from "../../../../../images/all/btn-pboard-close.png";
import gr_img from "../../../../../images/all/gr.png";

class MyLearningInfoArea extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ?  activeIndex - 1: index;
    this.setState({ activeIndex: newIndex });
  };

  // 퍼스널보드
  render() {
    const { activeIndex } = this.state;

    return (
      <>
        {/* .my-learning-area */}
        <div className="main-personal-wrap">
          <div className="main_personal">
            <div class="ui profile inline">
              <div class="pic s60">
                <img
                  src={profile}
                  alt="프로필사진 임시이미지"
                  class="ui image"
                />
              </div>
            </div>
            <div className="personal-header-title">
              <h3>김써니님</h3>
              <p>
                mySUNI에 오신 걸 환영합니다. 앞으로 다양한 콘텐츠를 가장 먼저
                전해드릴게요 :)
              </p>
            </div>
            <div className="main-gauge-box">
              <div className="main-gauge">
                <span className="gauge-badge">Badge</span>
                <BubblePopupBg />
              </div>

              <div className="main-gauge">
                <span className="gauge-badge">2021년 완료학습</span>
                <BubblePopupCom />
              </div>

              <div className="main-gauge ">
                <span className="gauge-badge">2021년 학습시간</span>
                <BubblePopupTime />
              </div>
            </div>
            {/* main-gauge-box */}

            <div className="main-stu-time">
              <span>
                하루 <em>3시간 30분</em> 학습, 일주일 <em>5일</em> 출석
              </span>
              <button type="button" className='org-active' />
            </div>
          </div>
        </div>

        {/* // .my-learning-area */}

        <Accordion>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
            className="transiton-sty"
          >
            <img src={activeIndex !== 1 ? Parsonal_btn : Parsonal_btn_close} alt="" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div className="personal-contents">
              <div className="personal-card">
                <div className="personal-card-item">
                  <div className="card-item-tit">
                    <a href={()=>false} className="card-item-link">
                      <h3>Badges</h3>
                    </a>
                    <span>보유중인 전체 Badge 갯수</span>
                  </div>
                  <div className="card-item-con hei">
                    <div className="card-gauge-bar color-sv">
                      <span className="gauge-tit">MY Badges</span>
                      <div className="card-gauge-bar sty2 color-sv">
                        <div className="rangeBox">
                          <div class="range">
                            <div
                              style={activeIndex !== 0 ? {width: '40%'} : {width: 0}}
                              className="percent"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <span className="gauge-number">
                        <strong>23</strong>개
                      </span>
                    </div>
                    <div className="card-gauge-bar">
                      <span className="gauge-tit">우리 회사 평균</span>
                      <div className="card-gauge-bar sty2">
                        <div className="rangeBox">
                          <div class="range">
                            <div
                              style={activeIndex !== 0 ? {width: '30%'} : {width: 0}}
                              className="percent"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <span className="gauge-number">
                        <strong>10</strong>개
                      </span>
                    </div>
                  </div>
                </div>
                <div className="personal-card-item">
                  <div className="card-item-tit">
                    <a href={()=>false} className="card-item-link">
                      <h3>학습 시간</h3>
                    </a>
                    <span>2021년 완료 학습</span>
                  </div>
                  <div className="card-item-con">
                    <div className="card-gauge-bar color-manage">
                      <span className="gauge-tit">MY 학습시간</span>
                      <div className="card-gauge-bar sty2 color-blue">
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
              </div>

              <div className='personal-card-item-box'>
                <div className="personal-card-item ">
                  <div className="card-item-tit mb23">
                    <a href={()=>false} className="card-item-link">
                      <h3>학습 시간 상세</h3>
                    </a>
                    <span>2021년 기준</span>
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
              </div>

              <div className='personal-card-item-box'>
                <div className="personal-card-item">
                  <div className="card-item-tit mb18">
                    <a href={()=>false} className="card-item-link">
                      <h3>College별 학습 비중</h3>
                    </a>
                    <span>전체 College 중 Top5</span>
                  </div>
                  <div className="card-item-con sty2">
                    <div className="item-con-box">
                      <div className="item-con-left">
                        <div className="card-gauge-bar sty2 color-global">
                          <div className="rangeBox">
                            <div class="range">
                              <div
                                style={activeIndex === 0 ? {width: 0} : {width: '100%'}}
                                className="percent"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="card-gauge-bar sty2 color-sv">
                          <div className="rangeBox">
                            <div class="range">
                              <div
                                style={{
                                  width: "0%",
                                }}
                                className="percent"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="card-gauge-bar sty2 color-semi">
                          <div className="rangeBox">
                            <div class="range">
                              <div
                                style={activeIndex === 0 ? {width: 0} : {width: '15%'}}
                                className="percent"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="card-gauge-bar sty2 color-manage">
                          <div className="rangeBox">
                            <div class="range">
                              <div
                                style={activeIndex === 0 ? {width: 0} : {width: '75%'}}
                                className="percent"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="card-gauge-bar sty2 color-inno">
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
                          <div className="gauge-number glo">
                            <em className="col-con">Global</em>
                            <strong>
                              32<em>%</em>
                            </strong>
                          </div>
                          <div className="gauge-number sv">
                            <em className="col-con">SV</em>
                            <strong>
                              24<em>%</em>
                            </strong>
                          </div>
                          <div className="gauge-number semi">
                            <em className="col-con">반도체</em>
                            <strong>
                              10<em>%</em>
                            </strong>
                          </div>
                          <div className="gauge-number mana">
                            <em className="col-con">Management</em>
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
              </div>
            </div>

            <div className="personal-card-item right-card">
              <div className="card-item-tit">
                <h3>우리 회사 인기 코스</h3>
                <span>2021.01.28~2021.02.03</span>
              </div>
              <div className="card-item-con">
                <PersonalTab />
              </div>
            </div>
          </Accordion.Content>
        </Accordion>

        <MyLearningAdditional />
      </>
    );
  }
}



export default MyLearningInfoArea;
