import React from "react";
import { Image, Tab, List } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import TabMenuInnerSub from "../TabMenuInnerSub";
import TabMenuInnerSubAi from "../TabMenuInnerSubAi";
import TabMenuInnerSubDt from "../TabMenuInnerSubDt";
import CourseBook from "../../../../../images/all/icon-course-book.png";
import BmdBanner from "../../../../../images/all/img-co-11-ttl.png";
import SkBanner from "../../../../../images/all/sk-banner.png";
import SvBanner from "../../../../../images/all/sv-banner.png";
import HappyBanner from "../../../../../images/all/happy-banner.png";
import AiBanner from "../../../../../images/all/Ai-banner.png";
import DtBanner from "../../../../../images/all/Dt-banner.png";

import BmdImg01 from "../../../../../images/all/bmd_con_01.png";
//import BmdImg02 from "../../../../../images/all/bmd_con_02.png";
import SkImg01 from "../../../../../images/all/sk_con_01.png";
//import SemiImg01 from "../../../../../images/all/semi_con_01.png";
//import SemiImg02 from "../../../../../images/all/semi_con_02.png";
//import LeaderImg01 from "../../../../../images/all/leader_con_01.png";
//import LeaderImg02 from "../../../../../images/all/leader_con_02.png";
//import LeaderImg03 from "../../../../../images/all/leader_con_03.png";
import HappyImg01 from "../../../../../images/all/happy_con_01.png";
import HappyImg02 from "../../../../../images/all/happy_con_02.png";
//import HappyImg03 from "../../../../../images/all/happy_con_03.png";
import SvImg01 from "../../../../../images/all/sv_con_01.png";
import SvImg02 from "../../../../../images/all/sv_con_02.png";
//import SvImg03 from "../../../../../images/all/sv_con_03.png";
import DesignImg01 from "../../../../../images/all/design_con_01.png";
//import DesignImg02 from "../../../../../images/all/design_con_02.png";
import InnoLevel from "../../../../../images/all/inno-level.png";

import BmLevel from "../../../../../images/all/bm-level-line.png";
//import LeaderLevel from "../../../../../images/all/leader-level.png";
import LeadershipLevel from "../../../../../images/all/leadership-level.png";
import CardBadge1 from "../../../../../images/all/img-card-badge-lv-1.png";
import CardBadge2 from "../../../../../images/all/img-card-badge-lv-2.png";
import CardBadge3 from "../../../../../images/all/img-card-badge-lv-3.png";
import badgeOpen from "../../../../../images/all/badge-open-blue.png";

//import curriculumn1 from "../../../../../images/all/img-co-6-1.png";
//import curriculumn2 from "../../../../../images/all/img-co-6-2.png";

import globalCurriculumImg from "../../../../../images/all/global-college-top.svg";
import globalCurriculumImgLeft from "../../../../../images/all/global-college-left.png";
import globalLocationImg from "../../../../../images/all/global-college-location-top.png";
import globalLocationImgLeft from "../../../../../images/all/global-college-location-contents.png";

import happycurriculumImg from "../../../../../images/all/happy-curriculum-img.png";
import happycurriculumLeft from "../../../../../images/all/happy-curriculum-left.png";
import energySolution from "../../../../../images/all/energy.png";
import energySolutionImg from "../../../../../images/all/energy-solution-img1.png";
import energySolutionCurr from "../../../../../images/all/energy-solution-img2.png";


const panes = [
  {
    menuItem: "AI",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges1"
        >
            <div className="college-cont-title ai">
                <div className="belt sub">
                    <div className="label">AI College</div>
                    <div className="strong">
                        AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!
                        </div>
                        <div className="normal">
                        AI Category는 SK 구성원 누구나 알아야 할 기본 지식을 바탕으로,
                        <br />
                        각 산업과 직무에서 AI를 활용하는 실무역량을 배양하고 AI기술
                        전문가로
                        <br />
                        성장할 수 있는 기회를 제공합니다.
                    </div>
                    <div className="panopto sub">
                        <img src={AiBanner} alt="AI Banner"/>
                    </div>
                </div>
            </div>

            <div className="college-free3 sub">
                <div className="tab-menu-wrap">
                    <TabMenuInnerSubAi />
                </div>
            </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "DT",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges2"
        >
            <div className="college-cont-title dt">
                <div className="belt sub">
                    <div className="label">DT</div>
                    <div className="strong">'그룹의 Deep Change는 우리 손으로!’</div>
                    <div className="normal">
                        Digital Skill을 장착하고 고객과 업을 이해하여,
                        <br />
                        SK Deep Change를 맨 앞에서 이끌어 나가실 구성원들을 위한
                        과정들이,
                        <br />
                        여기 DT Category에 마련되어 있습니다.
                    </div>
                    <div className="panopto sub">
                        <img src={DtBanner} alt="DT Banner" />
                    </div>
                </div>
            </div>

            <div className="college-free3 sub">
                <div className="tab-menu-wrap">
                    <TabMenuInnerSubDt />
                </div>
            </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "행복",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges3"
        >
            <div className="college-cont-title happiness">
                <div className="belt sub">
                    <div className="label">행복 College</div>
                    <div className="strong">SK 구성원 전체의 행복을 키워갑니다.</div>
                    <div className="normal">
                        행복에 대한 기본 개념과 SK경영철학의 이해를 기반으로 직장생활을
                        포함한 삶 전반에서
                        <br />
                        행복을 증진할 수 있는 역량을 배양하고 실천함으로써, 나의 행복과
                        SK 구성원 전체의 행복
                        <br />을 실질적으로 만들어나가는 것을 목표로 합니다
                    </div>
                    <div className="panopto sub">
                        <img src={HappyBanner} alt="Happy Banner" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map">
                <div className="belt">
                    <div className="map">
                        <img src={HappyImg01} alt="" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map">
                <div className="belt">
                    <div className="map">
                        <img src={HappyImg02} alt="" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map">
                <div className="belt">
                    <strong className="label">행복 College Curriculum</strong>
                    <div className="map happy">
                        {/* <img src={HappyImg03} /> */}
                        <Image src={happycurriculumImg} className='happy-curriculum-img' alt='Channel,Course,Badge'/>
                        <Image src={happycurriculumLeft} className='happy-curriculum-left' alt='Intermediate, Basic' />
                        <div>
                          <div className="happy-wrap-top">
                          {/* left */}
                          <div>
                            <Link to='about'>행복실천</Link>
                            <div>
                              <div className='contents-3-box'>
                                <Link to='about'>리더/<br/>전문가</Link>
                                <div>
                                  <Link to='about'>리더</Link>
                                  <Link to='about'>전문가</Link>
                                </div>
                              </div>
                              <div className='contents-3-box'>
                                <Link to='about'>조직<br/>행복<br/>실천</Link>
                                <div>
                                  <Link to='about'>행복의<br/>집단역학</Link>
                                  <Link to='about'>행복<br/>실천방법</Link>
                                </div>
                              </div>
                              <div className='contents-3-box type2'>
                                <Link to='about'>개인<br/>행복<br/>실천</Link>
                                <div>
                                  <Link to='about'>자기인식</Link>
                                  <Link to='about'>마음건강</Link>
                                  <Link to='about'>몸건강</Link>
                                </div>
                              </div>
                            </div>

                           {/* ul, li 사용해서 리스트 만들기 */}
                           <div>
                            <div className='happy-list-box type2'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>리더의 행복실천</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>리더의 행복실천<br/>W/S</Link>
                                </List.Item>
                              </List>

                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>행복 분석방법론</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복 측정/분석<br/>W/S</Link>
                                </List.Item>
                              </List>
                            </div>

                            <div className='happy-list-box type2'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>공감과 소통</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>심리적 안전감<br/>만들기</Link>
                                </List.Item>
                              </List>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>SK행복실천사례</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>SK행복실천 W/S</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>나의 업무 재구성</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>팀 업무 재구성</Link>
                                </List.Item>
                              </List>
                            </div>

                            <div className='happy-list-box'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>나의 행복실천<br/>디자인</Link>
                                </List.Item>
                              </List>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>마음근력 키우기 1~6</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>긍정습관 만들기</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>슬기로운 행복생활</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>명상의 이해</Link>
                                </List.Item>
                              </List>
                            </div>

                            <div className='happy-list-box'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>마음근력<br/>Home Training</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>일상 속 명상</Link>
                                </List.Item>
                              </List>

                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>하루 10분, 행복홈트</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>식탁해 :<br/>식습관을 부탁해</Link>
                                </List.Item>
                              </List>
                            </div>
                           </div>

                           <div className='happy-right-box'>
                             <div>
                              <List>
                                <List.Item>
                                  <Link to='about'>행복전문가<br/>Badge</Link>
                                </List.Item>
                                <List.Item>
                                  <Link to='about'>조직행복실천<br/>Badge</Link>
                                </List.Item>
                              </List>
                             </div>
                             <div>
                              <List>
                                <List.Item>
                                  <Link to='about'>마음관리<br/>Badge</Link>
                                </List.Item>
                              </List>
                             </div>
                           </div>
                          </div>
                        </div>
                        <div className="happy-wrap-bottom">
                          <div>
                            <Link to='about'>행복경영</Link>
                            <Link to='about'>행복경영</Link>
                          </div>
                          <div>
                          <div className='happy-list-box'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>SK의 행복경영</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복지도의 이해</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복지도 구축 및<br/>참여 사례</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>SK 행복경영<br/>Talk! Talk!! Talk!!!</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>구성원 행복과<br/>성과</Link>
                                </List.Item>
                              </List>

                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>행복측정의 주요<br/>이슈 및 해결방안</Link>
                                </List.Item>
                              </List>
                            </div>
                          <div className='happy-list-box'>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>행복학 개론 1~4</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복 추구 및<br/>측정의 혜택</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복,<br/>Two Key Point</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>누가, 왜<br/>행복한가?</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>그래도<br/>당신이 옳다</Link>
                                </List.Item>
                              </List>
                              <List as='ul'>
                                <List.Item as='li'>
                                  <Link to='about'>뇌 안에<br/>행복이 있을까?</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복의 문을 여는<br/>열쇠, 관계</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>행복을 논문으로<br/>읽어드립니다</Link>
                                </List.Item>
                                <List.Item as='li'>
                                  <Link to='about'>방구석 1열<br/>랜선여행</Link>
                                </List.Item>
                              </List>
                            </div>
                        </div>
                        <div className='happy-right-box'>
                            <div>
                            <List>
                              <List.Item>
                                <Link to='about'>행복 Fundamental<br/>Badge</Link>
                              </List.Item>
                            </List>
                            </div>
                          </div>
                      </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "SV",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges4"
        >
          <div className="college-cont-title sv">
            <div className="belt sub">
              <div className="label">SV</div>
              <div className="strong">
                내일[Tomorrow+My Work]을 위한 SV, <br />
                기업과 사회의 지속가능성을 위한 필수 역량을 키우는 곳!
              </div>
              <div className="normal">
                Deep Change의 방향을 제시하는 ‘사회적 가치’ <br />
                이해관계자들의 Painpoint를 공감하고 해결하는 역량을 함께
                키워봅시다!
              </div>
              <ul className="tag-wrap">
                <li># 사회문제</li>
                <li># ESG</li>
                <li># SV Biz</li>
                <li># SV 측정</li>
              </ul>
              <div className="panopto sub">
                <img src={SvBanner} alt="SV Banner" />
              </div>
            </div>
          </div>

          <div className="college-cont-map">
            <div className="belt">
              <div className="map">
                <img src={SvImg01} alt="" />
              </div>
            </div>
          </div>

          <div className="college-cont-map">
            <div className="belt">
              <div className="map">
                <img src={SvImg02} alt="" />
              </div>
            </div>
          </div>

          <div className="college-cont-map">
            <div className="belt">
              <div className="map">
                <div class="label sub">전체 커리큘럼</div>
                <div class="ai-top-btn sv">
                  <span class="ai-btn01 sv">
                    Self-directive
                  </span>
                  <span class="ai-btn02 sv2">
                    Interactive
                  </span>
                </div>
                <div className="link_wrapper">
                  <div>
                    <a href={()=>false} className="sv_link_bg">
                      SV Consultant
                    </a>
                  </div>

                  <table className="sv_table">
                    <tbody>
                      <tr>
                        <td>
                          <a href={()=>false}>사회문제 적용</a>
                        </td>
                        <td></td>
                        <td className="td_bo">
                          <a href={()=>false}>ESG 전략 수집</a>
                        </td>
                        <td></td>
                        <td className="td_bo">
                          <a href={()=>false}>SV Executive</a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>SV 측정 Workshop</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <a href={()=>false} className="sv_link_bg">
                      SV Seminar [ESG] [SV Biz] [SV 측정] [사회문제]
                    </a>
                  </div>

                  <table className="sv_table">
                    <tbody>
                      <tr>
                        <td>
                          <a href={()=>false}>사회문제분석 방법론</a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            [실전 ESG]
                            <br />
                            Function 별 ESG
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            [실전 ESG] 영역별
                            <br />
                            평가 세부 Guide
                          </a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>
                            SV BM 실습
                            <br />
                            Facilitator 양성
                          </a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>SV Biz 개발 PJT</a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>SV 측정 실습</a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href={()=>false}>사회문제와 ESG</a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            [실전 ESG]
                            <br />
                            실무 첫걸음
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>ESG와 법률</a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>SV BM 실습</a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>사회문제와 SV BM</a>
                        </td>
                        <td>
                          <a href={()=>false}>SV 측정 적용</a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href={()=>false}>
                            일상에서의
                            <br />
                            사회문제
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            ESG를
                            <br />
                            읽어드립니다
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            ESG의 정석
                          </a>
                        </td>
                        <td className="td_bo">
                          <a href={()=>false}>SV BM 사고력 향상</a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            SV Case Study∙
                            <br />
                            보이는 팟캐스트
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>SV 측정 심화</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <a href={()=>false} className="sv_link_bg">
                      SV Seminar 101
                    </a>
                  </div>
                </div>
                {/* sv_link_wrapper */}

                <div className="sv_bord">
                  <table className="sv_table">
                    <thead>
                      <th colSpan="6">SV Fundamentals</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            사회문제 이해
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            ESG의 이해
                          </a>
                        </td>
                        <td></td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            SV-BM 이해
                          </a>
                        </td>
                        <td></td>
                        <td>
                          <a href={()=>false}>
                            SV 측정
                            <br />
                            Essential
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href={()=>false}>SV 강의소개</a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            SDGs
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            인권경영
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            타 주체들의
                            <br />
                            SV 창출 이해
                          </a>
                        </td>
                        <td>
                          <a href={()=>false}>SV Challenge!</a>
                        </td>
                        <td>
                          <a href={()=>false}>
                            <strong>핵인싸</strong>
                            SV 측정의 이해
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "혁신디자인",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges5"
        >
          <div className="college-cont-title design">
            <div className="belt sub">
              <div className="label">혁신디자인 Category</div>
              <div className="strong">고객을 이해하고 혁신을 디자인하라!</div>
              <div className="normal">
                고객에서 출발하는 Biz. Idea를 발굴하고, 통합적 사고로 고객의{" "}
                <br />
                문제를 해결하며, 끊임없이 일하는 방식을 혁신하는데 필요한 <br />
                구성원 및 조직의 혁신 디자인 역량 향상을 도와드립니다.
              </div>
              <div className="panopto sub">
                <iframe
                  title="audio type"
                  src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D7658f240-2fd6-4f09-97fe-ab43006f0655"
                  width="436"
                  height="245"
                  style={{ padding: "0px", border: "0px" }}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
            </div>
          </div>



          <div className="college-cont-map">
            <div class="belt inno">
              <div className="text-left-box">
                <p class="p_link inno">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
              </div>
              <div class="text-right-box">
                <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00005/channels/pages/1" class="item-button">
                  <img src={CourseBook} alt="" />
                  과정 바로가기
                </a>
              </div>
            </div>
            <div className="belt">
              <div className="map">
                <img src={DesignImg01} alt="" />
              </div>
            </div>
          </div>

          <div className="college-cont-map">
            <div className="belt">
              <div className="map">
                <h1 className="inno-title">
                  “ <strong>통합적 사고</strong>에 기반한{" "}
                  <strong>고객중심</strong> 문제해결,{" "}
                  <strong>일하는 방식</strong> 혁신 ”
                </h1>
                <div className="inno-top-btn">
                  <span>개설예정</span>
                </div>
                <div className="inno-wrap">
                  <img src={InnoLevel} alt="" />

                  <div className="inno-item fi-item">
                    <h3># 디자인씽킹</h3>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="two dashed">
                            <a href={()=>false}>
                              디자인씽킹 <br />
                              코칭 스킬
                            </a>
                          </td>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                        </tbody>
                      </table>
                    </div>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/cube/CUBE-3/lecture-card/LECTURE-CARD-2z">
                              디자인씽킹 <br />
                              Project
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-tx/Course/C-LECTURE-q3">
                              디자인씽킹
                              <br />
                              Team W/S
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-1i0/Course/C-LECTURE-1b3">
                              디자인씽킹 <br />
                              Workshop
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-yv/Course/C-LECTURE-ug">
                              디자인씽킹 Self <br />
                              실습 (SV사례)
                            </a>
                          </td>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <td className="dashed">
                            <a href={()=>false}>
                              서비스 디자인 <br />
                              Intensive
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-131/Course/C-LECTURE-19g">
                              From Ideas to <br />
                              Action - IDEO
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-133/Course/C-LECTURE-19i">
                              Human-Centered <br />
                              Service Design - IDEO
                            </a>
                          </td>
                          <td className="dashed">
                            <a href={()=>false}>
                              기술에서 고객 중심 <br />
                              Biz - Self 실습
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-ys/Course/C-LECTURE-ud">
                              디자인씽킹 사례 <br />
                              (SV)보며 익히기
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-q/Course/C-LECTURE-8">
                              디자인씽킹 - <br />
                              Linkedin
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-1fv/Course/C-LECTURE-19j">
                              Hello Design <br />
                              Thinking - IDEO
                            </a>
                          </td>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <td></td>
                          <td className="dashed">
                            <a href={()=>false}>
                              기술에서 고객 중심 <br />
                              Biz 고민하기
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-124/Course/C-LECTURE-xa">
                              디자인 사고 연습
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="two">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-89/Course/C-LECTURE-6e">
                              처음 만나는 <br />
                              디자인씽킹
                            </a>
                          </td>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-q4/Course/C-LECTURE-m2">
                              창의적 <br />
                              IDEA 발상법
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-83/Course/C-LECTURE-6b">
                              Biz. Ideation
                              <br /> 첫걸음
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="inno-item">
                    <h3># 로지컬씽킹</h3>
                    <div className="logical-box">
                      <div className="logical-list tab01">
                        <ul>
                          <li>
                            <a href={()=>false}>
                              컨설턴트의 일하는 <br />
                              스킬 익히기 <br />
                              (Lv.2)
                            </a>
                          </li>
                          <li>
                            <a href={()=>false}>
                              컨설턴트의 일하는 <br />
                              스킬 익히기 <br />
                              (Lv.1)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="inno-item">
                    <h3># 고객알기</h3>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                        </tbody>
                      </table>
                    </div>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-132/Course/C-LECTURE-19h">
                              Insights for <br />
                              Innovation - IDEO
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-im/Course/C-LECTURE-fi">
                              고객 Research <br />
                              방법
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-ik/Course/C-LECTURE-fg">
                              고객 Needs <br />
                              Finding
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="two">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-8e/Course/C-LECTURE-6d">
                              고객 <br />
                              Need란?
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="inno-item">
                    <h3># 워킹백워드</h3>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                        </tbody>
                      </table>
                    </div>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/cube/CUBE-a2j/lecture-card/LECTURE-CARD-7tb">
                              워킹백워드 <br />
                              Project
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-yr/Course/C-LECTURE-uk">
                              워킹백워드 <br />
                              Workshop
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-je/Course/C-LECTURE-h3">
                              워킹백워드 <br />
                              Tools
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="two">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-7z/Course/C-LECTURE-66">
                              처음 만나는 <br />
                              워킹백워드
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="inno-item orange">
                    <h3># 애자일</h3>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/community/COMMUNITY-1n">
                              애자일 코치 <br />
                              Meetup
                            </a>
                          </td>
                          <td className="dashed-or">
                            <a href={()=>false}>
                              애자일 코치 <br />
                              양성 과정
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/cube/CUBE-781/lecture-card/LECTURE-CARD-33u">
                              애자일 Project
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-14x/Course/C-LECTURE-zn">
                              애자일 리더십 <br />
                              Workshop
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/cube/CUBE-7id/lecture-card/LECTURE-CARD-5da">
                              애자일 Project
                              <br />
                              Management <br />
                              W/S
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-w9/Course/C-LECTURE-s6">
                              애자일 <br />
                              Workshop
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-x/Course/C-LECTURE-7">
                              Agile Management <br />- Linkedin
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-hl/Course/C-LECTURE-ei">
                              애자일 방법론 <br />- Linkedin
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-u9/Course/C-LECTURE-qd">
                              SK 네트웍스 구매팀 <br />
                              애자일 사례
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="small">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-yj/Course/C-LECTURE-u7">
                              애자일 방법론 기초
                            </a>
                          </td>
                          <td className="small">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-11u/Course/C-LECTURE-x3">
                              애자일 에센셜
                            </a>
                          </td>
                          <td className="small">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-fc/Course/C-LECTURE-ch">
                              처음 만나는 애자일
                            </a>
                          </td>
                          <td className="small">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-82/Course/C-LECTURE-6a">
                              Why 애자일
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="inno-item orange">
                    <h3># 오픈콜라보</h3>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                        </tbody>
                      </table>
                    </div>
                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td></td>
                          <td></td>
                          <td className="dashed-or">
                            <a href={()=>false}>오픈 이노베이션 Workshop</a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-oy/Course/C-LECTURE-kz">
                              퓨처캐스팅 <br />
                              Workshop
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-80/Course/C-LECTURE-67">
                              Futurecasting
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-88/Course/C-LECTURE-68">
                              All about <br />
                              오픈 이노베이션
                            </a>
                          </td>
                          <td>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-y6/Course/C-LECTURE-u9">
                              Creative Collabo <br />
                              Skills - Linkedin
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>

                    <div className="inno-li">
                      <table>
                        <tbody>
                          <td className="two">
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-81/Course/C-LECTURE-69">
                              Open
                              <br />
                              Collaboration
                              <br />
                              Tips
                            </a>
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="inno-bottom-wrap">
                  <div className="inno-bottom con01">
                    <ul>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-8c/Course/C-LECTURE-6i">
                          Deep Change와
                          <br />
                          Design 이해
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-8b/Course/C-LECTURE-6h">
                          고객 이해의 중요성 <br />
                          Remind!
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-3/Course/C-LECTURE-3">
                          YouTube <br />
                          디자인 사고 이해
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-rp/Course/C-LECTURE-nj">
                          혁신의 비법
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-7x/Course/C-LECTURE-62">
                          Leading with
                          <br />
                          Innovation
                        </a>
                      </li>
                    </ul>
                    <h3># Deep Change와 Design</h3>
                  </div>

                  <div className="inno-bottom con02">
                    <ul>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00005/channel/CHN0000q">
                          Trend &#38; Insight <br />
                          Report
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-k3/Course/C-LECTURE-gx">
                          도약을 위한 <br />
                          미래 디자인
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00005/course-plan/COURSE-PLAN-f5/Course/C-LECTURE-ca">
                          효율적으로 <br />
                          일하는 Tip
                        </a>
                      </li>
                    </ul>
                    <h3># 혁신 트렌드와 인사이트</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Global",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges6"
        >
            <div className="college-cont-title global">

                <div className="belt sub">
                    <div className="label">Global College</div>
                    <div className="strong">Globalization을 위한 새로운 시작</div>
                    <div className="normal">
                        글로벌 비즈니스의 판을 읽는 'Global Perspective'를 키우고 환경이
                        바뀌어도
                        <br />
                        성과를 만들어 낼 수 있는 ‘Global Manager’를 키우는 것을 목표로
                        합니다.
                        <br />
                        이를 통해 SK그룹의 Globalization에 필요한 Human Capital들을
                        길러내고자 합니다.
                    </div>
                    <ul className="tag-wrap">
                        <li># Geopolitics & Biz</li>
                        <li># Managing Global Biz</li>
                        <li># 지역 전문가</li>
                        <li># Glopedia</li>
                        <li># Global Leader's Table</li>
                    </ul>
                    <div className="panopto sub">
                        <iframe
                            title="audio type"
                            src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D80b7b6d1-c2e6-41c0-9d93-ab42005d5dbf"
                            width="436"
                            height="245"
                            style={{ padding: "0px", border: "0px" }}
                            frameBorder="0"
                            allowFullScreen
                            offerviewer={false}
                            // allow="autoplay"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="college-cont-map">
                <div className="belt">
                    <div className="label">지역전문가 커리큘럼</div>
                    <div className="map">
                        <Image src={curriculumn1}></Image>
                    </div>
                </div>
            </div> */}

            <div className="college-cont-map">

                <div class="belt global flex mb50">
                  <div className="text-left-box">
                    <p class="p_link global">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                  </div>
                  <div class="text-right-box">
                    <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00006/channels/pages/1" class="item-button">
                      <img src={CourseBook} alt="" />
                      과정 바로가기
                    </a>
                  </div>
                </div>

                <div className="belt global">
                    <div className="label">Geopolitics & Biz / Managing Global Biz. 커리큘럼</div>
                    <img src={globalCurriculumImg} className='global-top-img' alt=""/>
                    <img src={globalCurriculumImgLeft} className='global-left-img' alt=""/>
                    <div className="global-belt-wrap">
                      <div className="global-belt flex">
                          <div className="global-curriculum-wrap">
                            <div className="global-component">
                              <div className="global-curriculum-box box-heit140">
                                <div className="curriculum-link-box">
                                  <strong>Biz. Impact 분석</strong>
                                  <Link to='#'>
                                    <span>Geopolitical Scenario Planning</span>
                                  </Link>
                                </div>
                              </div>

                              <div className="global-curriculum-box box-heit220">
                                <div className="curriculum-link-box">
                                  <strong>산업/통상에 미치는 영향</strong>
                                  <div className="link-wrap">
                                    <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-12nx/view'>
                                      <span>Geo. & Biz.<br/>Nexus</span>
                                    </Link>
                                    <div className="link-colum-box">
                                      <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-197/Course/C-LECTURE-13i'>
                                        <span>미-중 Tech 경쟁 Ch.2<br/>(입장 및 대응 방향)</span>
                                      </Link>
                                      <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-s2/Course/C-LECTURE-nq'>
                                        <span>미-중 Tech 경쟁 Ch.1<br/>(법률적/제도적 환경 변화)</span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="global-curriculum-wrap wrap2">
                            <div className="global-component">
                              <div className="global-curriculum-box box-heit370">
                                <div className="curriculum-link-box">
                                  <strong>Global Financial Story</strong>
                                  <div className="link-wrap">
                                    <div className="link-colum-box">
                                      <Link to='#'>
                                        <span>Global Financial Story<br/>케이스 스터디</span>
                                      </Link>
                                      <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-12ts/view'>
                                        <span>Global Financial Story의<br/>이해</span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="global-curriculum-wrap wrap2">
                            <div className="global-component">
                              <div className="global-curriculum-box box-heit370">
                                <div className="curriculum-link-box">
                                  <strong>Diversity Inclusion</strong>
                                  <div className="link-wrap">
                                    <div className="link-colum-box sty2">
                                      <Link to='#'>
                                        <span>글로벌 멤버들과<br/>함께 일하기</span>
                                      </Link>
                                      <Link to='#'>
                                        <span>Diversity<br/>Inclusion의 이해</span>
                                      </Link>
                                      <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-k4/Course/C-LECTURE-gy'>
                                        <span>Diversity<br/>Awareness</span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      {/* //global-belt */}
                      <div className="global-belt flex">
                        <div className="global-curriculum-wrap wrap3">
                          <div className="global-component">
                            <div className="global-curriculum-box box-heit380">
                              <div className="curriculum-link-box">
                                <strong>Why Geopolitics?</strong>
                                <div className="link-wrap big-colum">
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/cube/CUBE-8ba/lecture-card/LECTURE-CARD-638'>
                                    <span>How to manage<br/>Geopolitical<br/>Uncertainties?</span>
                                  </Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/cube/CUBE-8b8/lecture-card/LECTURE-CARD-637'>
                                    <span>Why Geopolitics for<br/>Business?</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="global-curriculum-wrap wrap3 left-mg10">
                          <div className="global-component">
                            <div className="global-curriculum-box">
                              <div className="curriculum-link-box">
                                <strong>지정학적 변화 동향</strong>
                                <div className="link-wrap big-colum">
                                  <div className="link-colum-box">
                                    <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-1dc/Course/C-LECTURE-16q'>
                                      <span>바이든 시대,<br/>국제정세 변화</span>
                                    </Link>
                                    <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-me/Course/C-LECTURE-im'>
                                      <span>국제정세 현상과<br/>본질 Series 3</span>
                                    </Link>
                                    <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-l9/Course/C-LECTURE-i1'>
                                      <span>국제정세 현상과<br/>본질 Series 2</span>
                                    </Link>
                                    <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-io/Course/C-LECTURE-fl'>
                                      <span>국제정세 현상과<br/>본질 Series 1</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="global-curriculum-wrap left-mg10">
                          <div className="global-component">
                            <div className="global-curriculum-box box-heit380">
                              <div className="curriculum-link-box">
                                <strong>Global Communication Skill & Attitude</strong>
                                <div className="link-wrap type2">
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-xz/Course/C-LECTURE-tq'><span>글로벌 비즈니스 매너</span></Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-18/Course/C-LECTURE-x'><span>글로벌 Biz.네트워킹</span></Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-i3/Program/P-LECTURE-r'><span>Biz.이메일</span></Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-kw/Program/P-LECTURE-s'><span>Biz.미팅</span></Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-l3/Program/P-LECTURE-u'><span>프리젠테이션</span></Link>
                                  <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-l1/Program/P-LECTURE-t'><span>Biz.협상</span></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="global-link-bottom">
                          <Link to='https://mysuni.sk.com/suni-main/lecture/college/CLG00006/channel/CHN0000v'>
                            <span>
                              <strong>Global Leader’s Table</strong><br/>
                              (Global Guru들이 들려주는 비즈니스 통찰)
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            {/* <div className="college-cont-map">
                <div className="belt">
                    <div className="label">지역전문가 커리큘럼</div>
                    <div className="map">
                        <Image src={curriculumn2}></Image>
                    </div>
                </div>
            </div> */}

            <div className="college-cont-map">
                <div className="belt global">
                    <div className="label">지역전문가 커리큘럼</div>
                    <img src={globalLocationImg} className='global-top-img2' alt="" />
                    <img src={globalLocationImgLeft} className='global-left-img2' alt="" />
                    <div className="global-belt-wrap section2">
                      <div>
                        <Link to='#'><span>Post 주재원</span></Link>
                        <Link to='#'><span>법인장</span></Link>
                        <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-86s/view'><span>Local Experience<br/>(현채인, 주재원)</span></Link>
                      </div>
                      <table>
                        <colgroup>
                          <col width='169px'/>
                          <col width='169px'/>
                          <col width='169px'/>
                          <col width='169px'/>
                          <col width='169px'/>
                          <col width='169px'/>
                        </colgroup>
                        <thead>
                          <th></th>
                          <th>
                            <span>중국</span>
                          </th>
                          <th>
                            <span>미국</span>
                          </th>
                          <th>
                            <span>베트남</span>
                          </th>
                          <th>
                            <span>헝가리</span>
                          </th>
                          <th>
                            <span>폴란드</span>
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <span>Networking</span>
                            </th>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-hj/Course/C-LECTURE-ek'>중국 GR 기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-kz/Course/C-LECTURE-hs'>Networking with<br/>Americans</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-or/Course/C-LECTURE-ks'>주재원이 알아야 할<br/>베트남, 베트남인</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-8kg/view'>주재원이 알아야 할<br/>헝가리, 헝가리인</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-60u/view'>주재원이 알아야 할<br/>폴란드, 폴란드인</Link>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>Biz 법률</span>
                            </th>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-iz/Course/C-LECTURE-fv'>중국 Biz. 법률 기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-15e/Course/C-LECTURE-100'>미국 Biz. 법률 기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/card/CARD-74q/view'>베트남 Biz. 법률<br/>기초</Link>
                            </td>
                            <td>
                              <Link to='#'>헝가리 Biz. 법률<br/>기초</Link>
                            </td>
                            <td>
                              <Link to='#'>폴란드 Biz. 법률<br/>기초</Link>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>세무/회계</span>
                            </th>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-j0/Course/C-LECTURE-fw'>중국 세무/회계 기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-yw/Course/C-LECTURE-uh'>미국 세무/회계 기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-j9/Course/C-LECTURE-g5'>베트남 세무/회계<br/>기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-r9/Course/C-LECTURE-n2'>헝가리 세무/회계<br/>기초</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-s3/Course/C-LECTURE-nr'>폴란드 세무/회계<br/>기초</Link>
                            </td>
                          </tr>
                          <tr>
                          <th>
                              <span>경제동향</span>
                            </th>
                            <td className='bg-none'>
                              <Link to='#'></Link>
                            </td>
                            <td className='bg-none'>
                              <Link to='#'></Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-iu/Course/C-LECTURE-fr'>베트남 경제동향<br/>및 진출전략</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-199/Course/C-LECTURE-13j'>헝가리 Biz.<br/>Landscape</Link>
                            </td>
                            <td>
                              <Link to='https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-mi/Course/C-LECTURE-iq'>폴란드 Biz.<br/>Landscape</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <colgroup>
                          <col width="169px"/>
                          <col width="169px"/>
                          <col width="169px"/>
                          <col width="169px"/>
                          <col width="169px"/>
                          <col width="169px"/>
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-jq/Course/C-LECTURE-gm">중국</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-k6/Course/C-LECTURE-gz">미국</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-kx/Course/C-LECTURE-hr">베트남</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/cube/CUBE-c0r/lecture-card/LECTURE-CARD-9mb">헝가리</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/cube/CUBE-al8/lecture-card/LECTURE-CARD-8aq">폴란드</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/card/CARD-acm/view">중동</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/card/CARD-12n5/view">인도네시아</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-1bb/Course/C-LECTURE-152">인도</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-1a7/Course/C-LECTURE-14h">CIS</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-lb/Course/C-LECTURE-hx">북한</Link>
                            </td>
                            <td>
                              <Link to="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00006/course-plan/COURSE-PLAN-l7/Course/C-LECTURE-hv">일본</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <colgroup>
                          <col width="528px"/>
                          <col width="528px"/>
                        </colgroup>
                        <tbody>
                          <tr>
                            <td><Link to="https://mysuni.sk.com/suni-main/lecture/college/CLG00006/channel/CHN0006q">중국 Issue &amp; Trend</Link></td>
                            <td><Link to="https://mysuni.sk.com/suni-main/lecture/college/CLG00006/channel/CHN00056">베트남 Issue &amp; Trend</Link></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="global-link-bottom">
                      <Link to='https://mysuni.sk.com/suni-main/lecture/college/CLG00006/channel/CHN0000u'>
                        <span>
                          <strong>Glopedia</strong><br/>
                          (Global 경험을 축적하고 공유하는 커뮤니티)
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>


            {/* 링크연결 작업 진행중 */}
            {/* <div className="college-cont-map">
                <div className="belt">
                    <div className="label">전체 커리큘럼</div>
                    <div className="map">
                        <div className="link_wrapper">
                            <div className="global_wrapper">
                                <div className="global_box">
                                    <div className="global_box_bg">
                                        <div className="badge_box1">
                                            <span className="badge_bk">On+Off</span>
                                        </div>
                                        <a href={()=>false}>
                                            Global Scenario
                                            <br />
                                            Planning
                                        </a>
                                    </div>
                                    <div className="global_box_sm">
                                        <div className="badge_box1">
                                            <span className="badge_wh">Off</span>
                                        </div>
                                        <a href={()=>false}>
                                            Globalization
                                            <br />
                                            Value Creation
                                            <br />
                                            Case Study
                                        </a>
                                    </div>
                                </div>
                                <div className="global_box">
                                    <div className="global_left">
                                        <div className="global_box_lo">
                                            <div className="badge_box1">
                                                <span className="badge_bk">On+Off</span>
                                            </div>
                                            <a href={()=>false}>Geo. & Biz Nexus</a>
                                        </div>
                                        <div className="global_box_lo">
                                            <a href={()=>false}>국제정세 100분 토론</a>
                                        </div>
                                    </div>
                                    <div className="global_right">
                                        <div className="global_box_sm line2">
                                            <a href={()=>false}>
                                                Global Value
                                                <br />
                                                Creation 이해
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="global_wrapper">
                                <div className="global_box">
                                    <div className="global_box_md">
                                        <a href={()=>false}>Diversity Inclusion</a>
                                    </div>
                                    <div className="global_box_md2">
                                        <div className="badge_box1">
                                            <span className="badge_bk">On+Off</span>
                                        </div>
                                        <a href={()=>false}>
                                            Local Leadership
                                            <br />
                                            <em>(Pre주재원/법인장)</em>
                                        </a>
                                    </div>
                                </div>
                                <div className="global_box">
                                    <div className="global_left">
                                        <div className="global_box_sm line2">
                                            <a href={()=>false}>
                                                Diversity
                                                <br />
                                                Awareness
                                            </a>
                                        </div>
                                    </div>
                                    <div className="global_right">
                                        <div className="global_box_lo line2">
                                            <div className="badge_box1">
                                                <span className="badge_wh">Off</span>
                                            </div>
                                            <a href={()=>false}>
                                                Local Experience
                                                <br />
                                                <em>(현채인, 주재원)</em>
                                            </a>
                                        </div>
                                        <div className="global_box_lo line2">
                                            <div className="badge_box1">
                                                <span className="badge_bk">On+Off</span>
                                            </div>
                                            <div class="bedge-box">
                                                <span class="bedge">Badge</span>
                                            </div>
                                            <a href={()=>false}>
                                                지역 전문가
                                                <br />
                                                <em>미국, 중국, 베트남, 헝가리, 폴란드</em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="global_table">
                                <colgroup>
                                    <col width="329px" />
                                    <col width="379px" />
                                    <col width="329px" />
                                </colgroup>
                                <thead>
                                    <th>
                                        <a href={()=>false}>국제정세의 현상과 본질</a>
                                    </th>
                                    <th>
                                        <a href={()=>false}>주요 국가의 이해</a>
                                    </th>
                                    <th>
                                        <a href={()=>false}>Global Communication</a>
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="3">
                                        <a href={()=>false}>
                                            Global Leader’s Table
                                            <br />
                                            <em>(Global Guru들이 들려주는 비즈니스 통찰)</em>
                                        </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                        <a href={()=>false}>
                                            Glopedia
                                            <br />
                                            <em>(Global 경험을 축적하고 공유하는 커뮤니티)</em>
                                        </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Leadership",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges7"
        >
          <div className="college-cont-title leadership">
            <div className="belt sub">
              <div className="label">Leadership College</div>
              <div className="strong">Deep Change Leader로 성장!</div>
              <div className="normal">
                개인별 리더십 진단과 맞춤형 역량 개발 가이드를 지원하고
                <br />
                최신 컨텐츠와 효과적인 학습 환경을 제공하여, 모든 구성원이
                스스로를 성장시키고,
                <br />
                다른 사람의 변화를 촉진하며, 회사(BM,조직)를 혁신하는
                <br />
                Deep Change Leader로 성장하도록 돕습니다.
              </div>
              <ul className="tag-wrap">
                <li># Leading Myself</li>
                <li># Leading People</li>
                <li># Leading Business</li>
                <li># Leadership Clinic</li>
                <li># Deep Change Leadership</li>
              </ul>

              <div className="panopto sub">
                <iframe
                  title="audio type"
                  src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D0b02b5c8-a5b7-438f-9366-ab4200a3bd77"
                  width="436"
                  height="245"
                  style={{ padding: "0px", border: "0px" }}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
            </div>
          </div>

          <div className="college-cont-map">

          <div className="belt leader">
            <div className="text-left-box">
            <p class="p_link ">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
            </div>
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00007/channels/pages/1"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

            <div className="belt">
              <div className="label">전체 커리큘럼</div>
              <div className="map">
                <div class="ai-top-btn leaderShip">
                  <span class="ai-btn01 leader">
                    VoD
                  </span>
                  <span class="ai-btn02 leader sub">
                    Non-VoD
                  </span>
                </div>
                <img src={LeadershipLevel} alt="" />
                <div className="link_wrapper leadership">
                  <div className="leadership_box bg1">
                    <h3>Deep change Leadership</h3>
                    <div className="leadership_list">
                      <ul>
                        <li className="margin_25">
                          <div class="badge_box1 left">
                            <a href="https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-38" className="card-badge-link">
                              <img src={CardBadge3} alt="badge" />
                            </a>
                          </div>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-1ae/Course/C-LECTURE-14n">
                              Leader as Coach<br/>Advanced P/G
                          </a>
                        </li>
                        <li>
                          <div class="badge_box1 left">
                            <a href={()=>false} className="card-badge-link">
                              <img src={CardBadge2} alt="badge" />
                            </a>
                          </div>
                          <a href={()=>false}>
                            Organization
                            <br />
                            Transformation
                          </a>
                        </li>
                        <li>
                          <div class="badge_box1 left">
                            <a href="https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-37" className="card-badge-link">
                              <img src={CardBadge2} alt="badge" />
                            </a>
                          </div>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-1h0/Course/C-LECTURE-1ac">
                            Leader as Coach P/G
                          </a>
                        </li>
                        <li>
                          <div class="badge_box1 left">
                            <a href={()=>false} className="card-badge-link">
                              <img src={CardBadge2} alt="badge" />
                            </a>
                          </div>
                          <a href={()=>false}>
                            Leadership
                            <br />
                            Transformation
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-uu/Course/C-LECTURE-qy" className="leader_blue">
                            진정성이 이끄는 리더의 길
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-ox/Course/C-LECTURE-ky" className="leader_blue">
                            Deep Change & 리더십?- 목적 기반의
                            <br />
                            딥체인지 실천 가이드
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="leadership_list bottom">
                      <ul>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-lc/Course/C-LECTURE-hy" className="leader_blue">
                            딥체인지와 기업문화 혁신
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-u0/Course/C-LECTURE-q5" className="leader_blue">
                            영화로 만나는
                            <br />
                            Deep Change Leadership
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-9o/Course/C-LECTURE-7g" className="leader_blue">
                            Deep Change Leadership 이해
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* //leadership_box bg1 */}
                  <div className="leadership_box bg2">
                    <h3>Leadership Foundation</h3>
                    <ul>
                      <li className="leader_boxwrap margin_sm">
                        {/* 링크 준비중(알럿) */}
                        <p className="non-link">
                            Global Leadership
                            <br />
                            Acceleration P/G
                        </p>
                        <a href={()=>false}>Remote Performance Mgmt.</a>
                        <a href={()=>false}>Impactful Conversation</a>
                        <a href={()=>false}>Drives for Engagement</a>
                        <a href={()=>false}>Leveraging Conflict</a>
                        <a href={()=>false}>EQ Leadership</a>
                      </li>
                      <li className="leader_boxwrap col-blue margin_sm">
                        <div class="badge_box1 left">
                          <a href="https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-36" className="card-badge-link">
                              <img src={CardBadge1} alt="badge" />
                          </a>
                        </div>
                        <p className="non-link">
                          <p>Leadership Essentials</p>
                        </p>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-pe/Course/C-LECTURE-la" className="bg_blue">
                          전략적 사고
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-m8/Course/C-LECTURE-ii" className="bg_blue">
                          Remote Leadership
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-us/Course/C-LECTURE-qw" className="bg_blue">
                          Coaching Leadership
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-ur/Course/C-LECTURE-qv" className="bg_blue">
                          리더의 스토리텔링
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-wr/Course/C-LECTURE-sl" className="bg_blue">
                          스마트한 리더의 위임
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-16w/Course/C-LECTURE-11h" className="bg_blue">
                          Motivation Designer
                        </a>
                      </li>
                      <li>
                        <a href={()=>false} className="leader_blue">
                          갈등의 재발견
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-9n/Course/C-LECTURE-7h" className="leader_blue">
                          Leadership Self-Assessment
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="leadership_box bg3">
                    <h3>Leadership Clinic</h3>
                    <ul>
                      <li className="leader_boxwrap col-blue">
                        <p className="non-link">Leadership Pain Points</p>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-8t/Course/C-LECTURE-6x" className="bg_blue">
                          자기성장
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-8w/Course/C-LECTURE-6z" className="bg_blue">
                          Performance
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-8v/Course/C-LECTURE-7i" className="bg_blue">
                          시너지/협업
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-8u/Course/C-LECTURE-6y" className="bg_blue">
                          건강한 조직 운영
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-8x/Course/C-LECTURE-70" className="bg_blue">
                          구성원 육성
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-o8/Course/C-LECTURE-ka" className="leader_blue">
                          리더의 세계 Ⅰ, Ⅱ
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-ii/Course/C-LECTURE-ff" className="leader_blue">
                          1on1 미팅
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="leadership_box bg4">
                    <h3>Leadership Insight Cafe</h3>
                    <ul>
                      <li className="leader_boxwrap col-blue">
                        <p className="non-link">리더십, 인문학에 길을 묻다</p>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-mc/Course/C-LECTURE-ik" className="bg_blue">
                          카르마 & 다르마
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-162/Course/C-LECTURE-10x" className="bg_blue">
                          고난의 시대에 미래를 보는 리더십
                        </a>
                      </li>
                      <li className="leader_boxwrap col-blue">
                        <p className="non-link">심리학으로 풀어보는 리더십 Talk</p>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-gy/Course/C-LECTURE-dx" className="bg_blue">
                          I. 변화의 시작
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-kb/Course/C-LECTURE-h6" className="bg_blue">
                          II. 이런 고민 있나요?
                        </a>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-of/Course/C-LECTURE-kh" className="bg_blue">
                          III. 리더라서 고민이다
                        </a>
                      </li>
                      <li>
                        <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00007/course-plan/COURSE-PLAN-y1/Course/C-LECTURE-ts" className="leader_blue">
                          세대 이해 – 86, X, MZ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //link_wrapper */}
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Management",
    render: () => (
      <Tab.Pane>
        <div
            className="ui attached tab full segment active"
            data-tab="colleges8"
        >
            <div className="college-cont-title management">
                <div className="belt sub">
                    <div className="label">Management College</div>
                    <div className="strong">
                        Deep Change를 위해 내가 하는 일은 어떻게 바뀌어야 할까요?
                        <br />
                        어떻게 성장할 수 있을까요?
                    </div>
                    <div className="normal">
                        Management Category는 Deep Change를 위한 Biz. 실행 역량 제고를
                        위해 6개 Function Group, 1개 Competency 영역의 직무 역량 학습을
                        제공합니다. Function Group별 지식/전문성 뿐 아니라 여러
                        Function간 결합을 통한 융합/통합 역량 확보도 계획하고 있습니다.
                    </div>
                    <div className="panopto sub">
                        <iframe
                            title="audio type"
                            src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3Db1ebc675-879d-4a0c-a336-ab43009f4752"
                            width="436"
                            height="245"
                            style={{ padding: "0px", border: "0px" }}
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay"
                        />
                    </div>
                </div>
            </div>

            <div className="college-free3 sub">
                <div className="belt">
                    <div className="img">
                        <Image src="/images/all/img-co8-1.png" alt="" />
                    </div>
                </div>

                <div className="tab-menu-wrap">
                    <TabMenuInnerSub />
                </div>
            </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "미래반도체",
    render: () => (
      <Tab.Pane>

        <div
          className="ui attached tab full segment active"
          data-tab="colleges9"
        >
          <div className="college-cont-title semicond">
            <div className="belt sub">
              <div className="label">미래 반도체 College</div>
              <div className="strong">반도체, 미래를 보는 눈을 뜨다.</div>
              <div className="normal">
                SK 구성원 누구에게나 도움이 될 반도체 소양을 높여줄 뿐 아니라{" "}
                <br />
                반도체 산업의 본질을 파악하고, 미래의 기술이 열어갈 세상을 전망
                할 수 <br />
                있도록 도와드립니다.
              </div>
              <div className="panopto sub">
                <iframe
                  title="audio type"
                  src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3Db1ebc675-879d-4a0c-a336-ab43009f4752"
                  width="436"
                  height="245"
                  style={{ padding: "0px", border: "0px" }}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
              <ul className="tag-wrap">
                <li># 반도체 역사</li>
                <li># 반도체 산업 전망</li>
                <li># 반도체 용어</li>
                <li># 반도체 기술 이론</li>
                <li># 반도체 종류</li>
                <li># 미래 기술</li>
                <li># 반도체 Ecosystem</li>
              </ul>
            </div>
          </div>

          <div className="college-cont-map">
          <div className="belt fu">
            <div className="text-left-box">
            <p class="p_link ">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
            </div>
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00019/channels/pages/1"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

            <div className="belt">
              <div className="label">전체 커리큘럼</div>

              <div className="semi-topBackground"></div>
              <div className="map">
              <div className="semi-background">

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan">
                      <div className="semi_txt">
                        <h3>
                          AI Manufacturing <br />
                          Professional
                        </h3>
                        <p>
                          반도체 Engineering + AI/DT접목, <br />
                          제조 IT시스템 최적화 역량 확보로
                          <br /> AI manufacturing 전문가로 <br />
                          Continuous 성장 지원
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['반도체 FAB 생산 운영 전문가']}`}>반도체 FAB 생산 운영 전문가</a>
                          </li>
                          <li className="dashed">
                            <img src={badgeOpen} alt="" />
                            <a href={()=>false}>Smart SCM 전문가</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['반도체 FAB 최적화 전문가']}`}>반도체 FAB 최적화 전문가</a>
                          </li>
                          <li className="dashed">
                            <img src={badgeOpen} alt="" />
                            <a href={()=>false}>
                              AI manufacturing <br />
                              Project (PBL)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="semi_badge">
                      <h4>AI Manufacturing Professional</h4>
                      <dl>
                        <dt>Badge 유형</dt>
                        <dd>미래Biz</dd>
                      </dl>
                      <dl>
                        <dt>Level</dt>
                        <dd>★ ★ ★</dd>
                      </dl>
                      <dl>
                        <dt>인증내용</dt>
                        <dd>
                          AI 활용한 반도체 수요예측, 최적의 생산계획 및 의사결
                          정 역량을 내재화한 전문가
                        </dd>
                      </dl>
                      <dl>
                        <dt>획득 요건</dt>
                        <dd>Course 이수 / Project<br/> 수행 및 pass</dd>
                      </dl>
                      <button type="button">OPEN 예정</button>
                    </div>
                  </div>
                </div>
                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan">
                      <div className="semi_txt">
                        <h3>
                          Hot emerging <br />
                          Tech Insight
                        </h3>
                        <p>
                          미래 반도체 응용 분야별
                          <br />폭 넓은 이해 및 New Biz 창출 위한
                          <br />‘미래 Biz/Tech 탐색의 장’
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle ver-top">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['AI반도체 - Next Tech Trend']}`}>
                              AI반도체
                              <br />
                              <span>Next Tech Trend</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['자동차 반도체, 기회와 도전']}`}>자동차 반도체, 기회와 도전</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Next Generation Semiconductor Packaging Technology']}`}>
                              Next Generation Semiconductor
                              <br />
                              Packaging Technology
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['Neuromorphic Computing : Challenges and Opportunities']}`}>
                              Neuromorphic Computing <br />
                              <span>Challenges and Opportunities</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['양자 컴퓨팅과 양자 암호 기술의 현재와 미래']}`}>
                              양자 컴퓨팅과 양자 암호 <br />
                              기술의 현재와 미래
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan conHeight01">
                      <div className="semi_txt">
                        <h3>
                          Smart factory <br />
                          Fundamental
                        </h3>
                        <p>
                          Smart factory의 기본개념 및 <br />
                          구성요소, 실제 반도체 FAB <br />
                          자동화 System 이해
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle pad">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['Smart Factory구현을 위한 제조 시스템 이해와 의사결정']}`}>
                              Smart Factory 구현을 위한 <br />
                              제조 시스템 이해와 의사결정
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Smart Factory 시스템의 연결과 지능화']}`}>
                              Smart Factory <br />
                              시스템의 연결과 지능화
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['AI 알고리즘 기반 반도체 Factory']}`}>
                              AI 알고리즘 기반<br />
                              반도체 Factory
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['Smart Factory의 구성요소와 사례']}`}>
                              Smart Factory의 <br />
                              구성요소와 사례
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['첨단 기술과 제조의 만남']}`}>첨단 기술과 제조의 만남</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 FAB 자동화 이해']}`}>반도체 FAB 자동화 이해</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="semi_badge">
                      <h4>Smart factory Fundamental</h4>
                      <dl>
                        <dt>Badge 유형</dt>
                        <dd>미래Biz</dd>
                      </dl>
                      <dl>
                        <dt>Level</dt>
                        <dd>★ ★</dd>
                      </dl>
                      <dl>
                        <dt>인증내용</dt>
                        <dd>
                        Smart Factory의 기본<br/>
                        개념과 AI 기반 반도체 제조<br/>
                        IT시스템 이해
                        </dd>
                      </dl>
                      <dl>
                        <dt>획득 요건</dt>
                        <dd>Course 이수 / Test 및<br/>실습과제 수행</dd>
                      </dl>
                      <button type="button">OPEN 예정</button>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan">
                      <div className="semi_txt">
                        <h3>
                          반도체 소재 <br />
                          Fundamental
                        </h3>
                        <p>
                        반도체 소재의 물성 이해 및 개발에<br/>
                        필요한 기초 이론과 반도체 공정 응용을 <br/>
                        포괄적으로 학습
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle ver-top">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['첨단 소재']}`}>첨단 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Lithography 공정 및 소재']}`}>Lithography 공정 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Metallization 공정 및 소재']}`}>Metallization 공정 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Solar Cell 소자 및 소재']}`}>Solar Cell 소자 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Thin Film 공정 및 소재']}`}>Thin Film 공정 및 소재</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['Image Sensor 소자 및 소재']}`}>Image Sensor 소자 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Etching 공정 및 소재']}`}>Etching 공정 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['화합물 반도체 소자 및 소재']}`}>화합물 반도체 소자 및 소재</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Doping 공정 및 소재']}`}>Doping 공정 및 소재</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="semi_badge biz02 biz03">
                      <h4>반도체 소재 Fundamental</h4>
                      <dl>
                        <dt>Badge 유형</dt>
                        <dd>미래Biz</dd>
                      </dl>
                      <dl>
                        <dt>Level</dt>
                        <dd>★ ★</dd>
                      </dl>
                      <dl>
                        <dt>인증 내용</dt>
                        <dd>
                          반도체 공정 / 소자별 핵심<br/>
                          소재 연계 역량
                        </dd>
                      </dl>
                      <dl>
                        <dt>획득 요건</dt>
                        <dd>
                          Course 이수 /  Test 및<br/>
                          과제 수행
                        </dd>
                      </dl>
                      <button type="button">OPEN 예정</button>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan">
                      <div className="semi_txt">
                        <h3>
                          AI 반도체 <br />
                          Fundamental
                        </h3>
                        <p>
                          인공지능(AI)을 처리하는 AI <br />
                          하드웨어의 종류, 동작 원리와 <br />
                          HW개발에 필요한 기본개념 이해
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['[Computing System 이해] 컴퓨터 동작의 이해']}`}>
                              [Computer System] <br />
                              <span>컴퓨터 동작의 이해</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[AI HW 개론] AI Model']}`}>
                              [AI HW 개론]
                              <br />
                              <span>AI Model</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[AI HW 이해] DNN HW 가속기 아키텍처']}`}>
                              [AI HW 이해] <br />
                              <span> DNN HW 가속기 아키텍쳐</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] Fundamentals']}`}>
                              [HW 개발] <br />
                              <span>Fundamentals</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] CPU Micro-Architecture']}`}>CPU Micro-Architecture</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] SoC 설계 Flow']}`}>SoC 설계 Flow</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['[AI HW 개론] AI Hardware']}`}>
                              [AI HW 개론] <br />
                              <span>AI Hardware</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[AI HW 개론] AI Platform']}`}>
                              [AI HW 개론] <br />
                              <span>AI Platform</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[AI HW 이해] DNN 알고리즘 및 워크로드 특성']}`}>
                              [AI HW 이해]
                              <br />
                              <span>DNN 알고리즘 및 워크로드 특성</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] Analog Design']}`}>
                              [HW 개발]
                              <br />
                              <span>Analog Design</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] Digital Design']}`}>Digital Design</a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[HW 개발] SoC 설계 사례 - Mobile Computing']}`}>
                              SoC 설계 사례 <br />
                              <span>Mobile Computing</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan conHeight03">
                      <div className="semi_txt">
                        <h3>반도체 Tech Essential</h3>
                        <p>
                          非 이공계 구성원도 쉽게 이해할 수<br />
                          있는 반도체 용어와 기술 이해
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle ver-mid bom">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['한방에 이해하는 꿀잼 반도체']}`}>
                              <strong>핵인싸</strong>
                              한방에 이해하는 <br />
                              꿀잼 반도체
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 What - 반도체 Tech 지식백과']}`}>
                              반도체 What
                              <br />
                              <span>반도체 Tech 지식백과</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['[CEO특강_SK하이닉스 이석희 사장] 반도체, 미래를 열다']}`}>
                              [CEO특강_SK하이닉스 이석희 사장]
                              <br />
                              <span>반도체, 미래를 열다</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['전자기기의 구조와 동작원리']}`}>
                              슬기로운 IT 생활 <br />
                              <span>전자기기의 구조와 동작원리</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 제대로 이해하기 - 기본편']}`}>
                              반도체 제대로 이해하기 <br />
                              (기본편)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="semi_badge">
                      <h4>반도체 Tech Essential</h4>
                      <dl>
                        <dt>Badge 유형</dt>
                        <dd>미래Biz</dd>
                      </dl>
                      <dl>
                        <dt>Level</dt>
                        <dd>★</dd>
                      </dl>
                      <dl>
                        <dt>인증 내용</dt>
                        <dd>
                            반도체 Tech 핵심개념 및
                            기술용어 습득
                        </dd>
                      </dl>
                      <dl>
                        <dt>획득 요건</dt>
                        <dd>
                            4개 Course 이수 /  Badge
                            종합 Test 통과 (80점 이상)
                        </dd>
                      </dl>
                      <a href="https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3y" className="cha_btn">도전하기</a>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan">
                      <div className="semi_txt">
                        <h3>반도체 Biz Essential</h3>
                        <p>
                          반도체 Ecosystem과 향후 <br />
                          반도체 산업 변화를 이해하는데 <br />
                          필요한 기본 지식과 Insight 제공
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle ver-top">
                        <ul className="sm">
                          <li>
                            <a href={`${semiconductorLinks['News로 본 반도체 - 다가온 미래, Big Data 시대의 경쟁력 강화']}`}>
                              [News로 본 반도체]
                              <br />
                              <span>
                                다가온 미래, Big Data시대의 경쟁력 강화
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['News로 본 반도체 - 반도체 제품 분류별 시장 분석과 AI 반도체']}`}>
                              [News로 본 반도체] <br />
                              <span>
                                반도체 제품 분류별 시장 분석과 AI반도체
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['News로 본 반도체 - 반도체의 미래와 우리의 준비']}`}>
                              [News로 본 반도체]
                              <br />
                              <strong>핵인싸</strong>
                              <span>
                                반도체의 미래와 우리의 준비
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 Industry 이해 Part2. 무모한 도전에서 챔피언이 된 삼성전자']}`}>
                              [반도체 Industry 이해 Part2] <br />
                              <span>무모한 도전에서 챔피언이 된 삼성전자</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 Industry 이해 Part4. 펩리스와 파운드리- 거대한 IDM 사이의 기회와 전략']}`}>
                              [반도체 Industry 이해 Part4] <br />
                              <span>
                                펩리스와 파운드리 - 거대한 IDM사이의 <br />
                                기회와 전략
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['News 심층분석 - 미국의 대중 제재와 반도체 시장의 변화']}`}>
                              News 심층 분석 <br />
                              <span>미국의 대중 제재와 반도체 시장의 변화</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="sm">
                          <li>
                            <a href={`${semiconductorLinks['News로 본 반도체 - Data Centric World']}`}>
                              [News로 본 반도체]
                              <br />
                              <span>Data Centric World</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['News로 본 반도체 - 반도체 Value Chain In-depth 분석']}`}>
                              [News로 본 반도체]
                              <br />
                              <span>반도체 Value Chain In-depth 분석</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 Industry 이해 Part1. 반도체 산업의 기본 개념과 시장 경쟁구도']}`}>
                              [반도체 Industry 이해 Part1]
                              <br />
                              <span>
                                반도체 산업의 기본 개념과 시장 경쟁구도
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 Industry 이해 Part3. CPU의 강자 인텔의 과거 현재 미래']}`}>
                              [반도체 Industry 이해 Part3]
                              <br />
                              <span>CPU의 강자 인텔의 과거 현재 미래</span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['반도체 Industry 이해 Part5. 무한 경쟁시대의 미래 전망 - 반도체 기업들의 도전과 과제']}`}>
                              [반도체 Industry 이해 Part5]
                              <br />
                              <span>
                                무한 경쟁시대의 미래전망 - 반도체 기업들의{" "}
                                <br />
                                도전과 과제
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href={`${semiconductorLinks['Covid-19이 반도체 Supply Chain에 미치는 영향']}`}>
                            Covid-19이 반도체 Supply Chain에 <br />미치는 영향
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="semi_badge biz">
                      <h4>반도체 Biz Essential</h4>
                      <dl>
                        <dt>Badge 유형</dt>
                        <dd>미래Biz</dd>
                      </dl>
                      <dl>
                        <dt>Level</dt>
                        <dd>★</dd>
                      </dl>
                      <dl>
                        <dt>인증 내용</dt>
                        <dd>
                            반도체 산업 이해와 분석에
                            필요한 기본지식 확보
                        </dd>
                      </dl>
                      <dl>
                        <dt>획득 요건</dt>
                        <dd>
                            10개 Course 이수 /<br/>
                            Badge 종합 Test 통과<br/>
                            (80점 이상)
                        </dd>
                      </dl>
                      <a href="https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3x" className="cha_btn">도전하기</a>
                    </div>
                  </div>
                </div>

                <div className="semi_wrap">
                  <div className="semi_belt">
                    <div className="semi_chan conHeight02">
                      <div className="semi_txt">
                        <h3>반도체 Introduction</h3>
                        <p>
                          재미있고 흥미로운 Story로, <br />
                          반도체 학습을 처음 시작하는 <br />
                          구성원들을 위한 과정
                        </p>
                      </div>
                    </div>
                    <div className="semi_course">
                      <div className="semi_course_middle">
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['[입문] 반쓸신잡 - 반도체 산업의 과거, 현재, 그리고 미래']}`}>
                              반쓸신잡 <br />
                              <span>반도체 산업의 과거, 현재 그리고 미래</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={`${semiconductorLinks['반도체 클라쓰 - Keyword로 알아보는 반도체의 품격']}`}>
                              반도체 클라쓰 <br />
                              <span>Keyword로 알아보는 반도체 품격</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Green",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges11"
        >
          <div className="college-cont-title energy">
            <div className="belt sub">
            <div className="panopto sub">
                <Image src={energySolution}/>
              </div>
              <div className="label">Green</div>
              <div className="strong">
                에너지솔루션 College에서 진화한 “Green Category”
              </div>
              <div className="normal">
                환경 사업이 만드는 새로운 세상, 환경의 중요성에 대한 인식을 제고하고, <br />
                탄소중립, 수소, 자원순환, 에너지솔루션 등에 필요한 전문지식을 학습하여,<br />
                Green Deep Change에 한걸음 한걸음 나아가는 것을 목표로 하고 있습니다.<br />
                환경 사업의 성공을 위한 우리의 도전, Green Start !
              </div>
            </div>
          </div>

          <div className="college-cont-map energe">
            <div className="belt">
                <div className="map">
                    <Image src={energySolutionImg} />
                </div>
            </div>
          </div>
          <div className="college-cont-map energe">
            <div className="belt">
                <div className="label energy">Environment College Curriculum</div>
                <div className="map">
                    <Image src={energySolutionCurr} />
                </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "BM Design & Storytelling",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges8"
        >
          <div className="college-cont-title bmd">
            <div className="belt sub">
              <div className="label">BM Design &#38; Storytelling</div>
              <div className="strong">Ideate and Accelerate Deep Change!</div>
              <div className="normal">
                BM Design 전문가 양성 및 Biz Financial Story Design/ Telling 역량 강화를
                적극 지원함으로써 <br />
                그룹/관계사 Deep Change 성과 창출에 기여하겠습니다.
              </div>
              <ul className="tag-wrap">
                <li># BM혁신</li>
                <li># Sustainable BM</li>
                <li># BM Design</li>
                <li># Portfolio Management</li>
                <li># Financial Story</li>
                <li># Storytelling</li>
                <li># Stakeholder</li>
              </ul>
              <div className="panopto sub">
                <img src={BmdBanner} alt="BM Design Banner" />
              </div>
            </div>
          </div>

          <div className="college-cont-map">
            <div className="belt fu">
                <div className="text-left-box">
                  <p className="p_link" style={{color: '#bd38a5'}}>각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                </div>
                <div className="text-right-box">
                  <a
                    href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channels/pages/1"
                    className="item-button"
                  >
                    <img src={CourseBook} alt="" />
                    과정 바로가기
                  </a>
                </div>
              </div>
            <div className="belt">
              <div className="map">
                <img src={BmdImg01} alt=""/>
              </div>
            </div>
          </div>

          <div className="college-cont-map">

            <div className="belt">
              <div className="label">전체 커리큘럼</div>
              <div class="bm-top-btn">
                <span class="bm-btn01">On-Line</span>
                <span class="bm-btn02">Blended</span>
                <span class="bm-btn03">Off-Line</span>
              </div>
              <div className="map">
                <img src={BmLevel} alt="" />
                <div className="bm-wrap">
                  <div className="bm-flex">
                    <div className="bm-bg-box bg_type01">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN00081">BM Design @ Work</a>
                      </h3>
                      <p>( 사전 Becoming BM Designer 과정 이수 필수 )</p>
                      <ul className="list_flex">
                        <li className="bmDesignBox">
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1fr/Course/C-LECTURE-19c">
                            BM Design 실습 <br />
                            (4주)
                          </a>
                        </li>
                        <li className="bmDesignBox">
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1go/Course/C-LECTURE-19u">
                            디커플링 Workshop <br />
                            (2일)
                          </a>
                        </li>
                        <li className="bmDesignBox">
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1gn/Course/C-LECTURE-19t">
                            환경∙에너지 <br />
                            BM Design 실습 <br />
                            (4주)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bm-bg-box bg_type02">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN0007o">
                        Storytelling @ Work
                          </a></h3>
                      <div className="bm-flex">
                        <ul className="list_bm bg_white">
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/cube/CUBE-crs/lecture-card/LECTURE-CARD-acl">CEO 1:1 과정</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/cube/CUBE-cru/lecture-card/LECTURE-CARD-acj">6R Storytelling Workshop</a>
                          </li>
                        </ul>
                        <ul className="list_bm bg_white">
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/cube/CUBE-crt/lecture-card/LECTURE-CARD-ack">
                              Leader Storytelling <br />
                              Workshop
                            </a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/cube/CUBE-crv/lecture-card/LECTURE-CARD-aci">FS 전문가 심포지엄</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bm-flex">
                    <div className="bm-bg-box bg_type01">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN00083">
                        Becoming BM Designer
                        </a>
                      </h3>
                      <ul className="list_flex md">
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-12v/Course/C-LECTURE-xw">
                            Ⅰ. As-Is BM <br />
                            Sustainability
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1fh/Course/C-LECTURE-191">Ⅱ. BM 환경 분석</a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-12x/Course/C-LECTURE-xy">
                            Ⅲ. 신규 BM <br />
                            발굴 전략
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bm-flex">
                    <div className="bm-bg-box line_type01">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN0007n">
                        M&#38;A Design
                        </a>
                      </h3>
                      <div className="bm-flex">
                        <ul className="list_bm">
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1da/Course/C-LECTURE-17d">Ⅰ. M&#38;A 강의소개</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dp/Course/C-LECTURE-17f">
                              Ⅲ. 대상 선정 &#38; <br />
                              Deal Structuring
                            </a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dr/Course/C-LECTURE-17h">Ⅴ. Valuation</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dt/Course/C-LECTURE-17j">Ⅶ. Legal</a>
                          </li>
                          <li>
                            <a href={()=>false}>
                              [심화I] Deal Structuring <br />
                              &#38; Financing
                            </a>
                          </li>
                        </ul>
                        <ul className="list_bm">
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dv/Course/C-LECTURE-17e">Ⅱ. M&#38;A Strategy</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dq/Course/C-LECTURE-17g">Ⅳ. Due Diligence</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1ds/Course/C-LECTURE-17i">Ⅵ. Negotiation</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1du/Course/C-LECTURE-17k">Ⅷ. PMI &#38; Value-up</a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1dw/Course/C-LECTURE-17l">[심화Ⅱ] Legal</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bm-bg-box line_type01 height100">
                      <h3><a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN0007p ">Becoming Storyteller</a></h3>
                      <div className="bm-flex">
                        <ul className="list_bm">
                          <li>
                            <a href={()=>false}>
                              Financial Storytelling <br />
                              글로벌 사례 연구
                            </a>
                          </li>
                          <li>
                            <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1gs/Course/C-LECTURE-19y">
                              [Focus] Financial <br />
                              Society Partnership
                            </a>
                          </li>
                        </ul>
                        <ul className="list_bm">
                          <li>
                            <a href={()=>false}>6R 관점 Stakeholder 이해</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bm-flex">
                    <div className="bm-bg-box line_type01">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN00082">
                        BM Design Take-off</a></h3>
                      <ul className="list_flex md">
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1fg/Course/C-LECTURE-190">
                            Ⅰ . Sustainable BM <br />
                            혁신 중요성
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1fi/Course/C-LECTURE-192">
                            Ⅱ. BM Framework <br />
                            &#38; SK BM 혁신 노력
                          </a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-1fj/Course/C-LECTURE-193">
                            Ⅲ. BM / Deep Change <br />
                            Design과 실행
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bm-bg-box line_type01">
                      <h3>
                        <a href="https://mysuni.sk.com/suni-main/lecture/college/CLG00020/channel/CHN00084">
                        Defining Storytelling
                        </a>
                          </h3>
                      <ul className="list_flex md">
                        <li>
                          <a href={()=>false}>Financial Story 이해</a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/course-plan/COURSE-PLAN-u7/Course/C-LECTURE-qb">Financial Acumen</a>
                        </li>
                        <li>
                          <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00020/cube/CUBE-crx/lecture-card/LECTURE-CARD-acg">
                            투자자 관점에서 본 <br />
                            Financial Story
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "SK아카데미",
    render: () => (
      <Tab.Pane>
        <div
          className="ui attached tab full segment active"
          data-tab="colleges10"
        >
          <div className="college-cont-title skacademy">
            <div className="belt">
              <div className="img">
                <img src={SkBanner} alt="SK Academy Banner"/>
              </div>
              <div className="label">SK아카데미 College</div>
              <div className="strong">
                “나무를 키우듯, 인재를 키워온 SK인재육성의 산실”
              </div>
              <div className="normal">
                SK아카데미는 SKMS/Values 전파를 통해 SK 기업문화의 토대를
                강화하고, <br />
                체계적인 육성 Pipeline에 따라 미래 경영자와 Biz. 전문가를
                육성합니다.
              </div>
              <ul className="tag-wrap">
                <li># 신입사원</li>
                <li># 영입구성원</li>
                <li># 신임팀장</li>
                <li># 신임임원</li>
                <li># 영입임원</li>
                <li># HLP</li>
                <li># 여성리더</li>
                <li># 역량 School</li>
                <li># HR Conference</li>
                <li># Global HR Seminar</li>
              </ul>
            </div>
          </div>
          <div className="college-cont-map skacademy">
            <div className="belt">
              <div className="label">전체 커리큘럼</div>
              <div className="map">
                <img src={SkImg01} alt="" />
              </div>
            </div>
          </div>

          <div className="college-tag skacademy">
            <div className="belt">
              <div className="label chip5">SKMS / SK Values</div>
              <div className="strong">
                신입/영입구성원 대상 SKMS/핵심가치 전파와 신임팀장의 행복경영
                실천을 위한 역할 정립
              </div>
              <ul className="tag-wrap">
                <li># 신입사원</li>
                <li># 영업구성원</li>
                <li># 신임팀장</li>
                <li># 신임임원</li>
                <li># 영입임원</li>
                <li># SKMS 강사양성</li>
              </ul>
              <div className="label chip6">미래경영자 육성</div>
              <div className="strong">
                SK Leadership Pipeline 및 Assessment와 연계한 체계적인
                미래경영자 육성
              </div>
              <ul className="tag-wrap">
                <li># HLP</li>
                <li># 여성리더</li>
              </ul>
              <div className="label chip7">역량 School</div>
              <div className="strong">
                mySUNI의 Management Category와 연계, 그룹 공통 직무 및 Biz.
                전문역량 강화
              </div>
              <ul className="tag-wrap">
                <li># 전략 Intermediate/Advanced</li>
                <li># 마케팅 Intermediate/Advanced</li>
                <li># 재무 Intermediate/Advanced</li>
                <li># HR Intermediate/Advanced</li>
                <li># 구매 Intermediate/Advanced</li>
                <li># 법무</li>
                <li># IP(지식재산)</li>
                <li># M&A</li>
                <li># 사업개발</li>
                <li># 협상</li>
                <li># Biz. Contract</li>
                <li># HR Analytics</li>
                <li># HR Conference</li>
                <li># Global HR Seminar</li>
              </ul>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

const TabMenuInner = () => <Tab panes={panes} className="tab-menu-inner sub" />;

export default TabMenuInner;

const semiconductorLinks = {
  '[입문] 반쓸신잡 - 반도체 산업의 과거, 현재, 그리고 미래': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-fl/Course/C-LECTURE-co',
  '반도체 클라쓰 - Keyword로 알아보는 반도체의 품격': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-fj/Course/C-LECTURE-cm',
  'News로 본 반도체 - 다가온 미래, Big Data 시대의 경쟁력 강화': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-fi/Course/C-LECTURE-cl',
  'News로 본 반도체 - Data Centric World': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ra/Course/C-LECTURE-n5',
  'News로 본 반도체 - 반도체 제품 분류별 시장 분석과 AI 반도체': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-rc/Course/C-LECTURE-n6',
  'News로 본 반도체 - 반도체 Value Chain In-depth 분석': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-uw/Course/C-LECTURE-r0',
  'News로 본 반도체 - 반도체의 미래와 우리의 준비': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-v0/Course/C-LECTURE-r2',
  'News 심층분석 - 미국의 대중 제재와 반도체 시장의 변화': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-127/Course/C-LECTURE-xg',
  '반도체 Industry 이해 Part1. 반도체 산업의 기본 개념과 시장 경쟁구도': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-lk/Course/C-LECTURE-i6',
  '반도체 Industry 이해 Part2. 무모한 도전에서 챔피언이 된 삼성전자': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-nu/Course/C-LECTURE-jw',
  '반도체 Industry 이해 Part3. CPU의 강자 인텔의 과거 현재 미래': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ot/Course/C-LECTURE-ku',
  '반도체 Industry 이해 Part4. 펩리스와 파운드리- 거대한 IDM 사이의 기회와 전략': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-pg/Course/C-LECTURE-lb',
  '반도체 Industry 이해 Part5. 무한 경쟁시대의 미래 전망 - 반도체 기업들의 도전과 과제': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-qs/Course/C-LECTURE-mo',
  '한방에 이해하는 꿀잼 반도체': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-fh/Course/C-LECTURE-ck',
  '슬기로운 IT생활 - 전자기기의 구조와 동작원리': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-mm/Course/C-LECTURE-is',
  '반도체 What - 반도체 Tech 지식백과': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-fg/Course/C-LECTURE-cj',
  '반도체 제대로 이해하기 - 기본편': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ff/Course/C-LECTURE-ci',
  '[CEO특강_SK하이닉스 이석희 사장] 반도체, 미래를 열다': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00017/course-plan/COURSE-PLAN-k8/Course/C-LECTURE-h2',
  '[Computing System 이해] 컴퓨터 동작의 이해': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-vr/Course/C-LECTURE-ro',
  '[AI HW 개론] AI Hardware': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-14n/Course/C-LECTURE-ze',
  '[AI HW 개론] AI Model': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ze/Course/C-LECTURE-uu',
  '[AI HW 개론] AI Platform': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-yk/Course/C-LECTURE-u8',
  '[HW 개발] Fundamentals': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-x3/Course/C-LECTURE-sw',
  '[HW 개발] CPU Micro-Architecture': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-zu/Course/C-LECTURE-vg',
  '[HW 개발] Analog Design': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-11q/Course/C-LECTURE-x1',
  '[HW 개발] Digital Design': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-yx/Course/C-LECTURE-ui',
  '[HW 개발] SoC 설계 Flow': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-wn/Course/C-LECTURE-sh',
  '[HW 개발] SoC 설계 사례 - Mobile Computing': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-wl/Course/C-LECTURE-sf',
  '[AI HW 이해] DNN HW 가속기 아키텍처': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-y2/Course/C-LECTURE-tt',
  '[AI HW 이해] DNN 알고리즘 및 워크로드 특성': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-xl/Course/C-LECTURE-tb',
  '첨단 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-18l/Course/C-LECTURE-131',
  'Lithography 공정 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-154/Course/C-LECTURE-zs',
  'Etching 공정 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-12r/Course/C-LECTURE-xs',
  'Metallization 공정 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-11w/Course/C-LECTURE-x5',
  'Doping 공정 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-wg/Course/C-LECTURE-sb',
  'Thin Film 공정 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-vl/Course/C-LECTURE-ri',
  'Image Sensor 소자 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-18k/Course/C-LECTURE-130',
  '화합물 반도체 소자 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-yb/Course/C-LECTURE-u1',
  'Solar Cell 소자 및 소재': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ww/Course/C-LECTURE-sq',
  'Smart Factory구현을 위한 제조 시스템 이해와 의사결정': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ux/Course/C-LECTURE-r1',
  'Smart Factory의 구성요소와 사례': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-vp/Course/C-LECTURE-rm',
  'Smart Factory 시스템의 연결과 지능화': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-w2/Course/C-LECTURE-ry',
  '첨단 기술과 제조의 만남': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-xw/Course/C-LECTURE-tn',
  'AI 알고리즘 기반 반도체 Factory': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-11v/Course/C-LECTURE-x4',
  '반도체 FAB 자동화 이해': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/cube/CUBE-afs/lecture-card/LECTURE-CARD-860',
  'Neuromorphic Computing : Challenges and Opportunities': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-ve/Course/C-LECTURE-rb',
  'AI반도체 - Next Tech Trend': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-vn/Course/C-LECTURE-rk',
  '자동차 반도체, 기회와 도전': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-vs/Course/C-LECTURE-rp',
  '양자 컴퓨팅과 양자 암호 기술의 현재와 미래': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-xi/Course/C-LECTURE-t7',
  'Next Generation Semiconductor Packaging Technology': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-12u/Course/C-LECTURE-xu',
  '반도체 FAB 생산 운영 전문가': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-1ap/Course/C-LECTURE-14u',
  '반도체 FAB 최적화 전문가': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/course-plan/COURSE-PLAN-1aq/Course/C-LECTURE-14v',
  'Smart SCM 전문가	준비 중입니다.': 'Alert',
  'AI Manufacturing Project(PBL)	준비 중입니다.': 'Alert',
  'Covid-19이 반도체 Supply Chain에 미치는 영향': 'https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00017/course-plan/COURSE-PLAN-on/Course/C-LECTURE-kp'
}