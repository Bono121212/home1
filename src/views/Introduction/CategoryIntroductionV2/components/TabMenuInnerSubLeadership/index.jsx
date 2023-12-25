import React from 'react';
import { Link } from 'react-router-dom';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import LeadershipLevel from "../../../../../images/all/leadership-con-01-v-2.png";
import LeadershipLevelEng from "../../../../../images/all/leadership-con-01-eng-v-2.png";
import LeadershipLevelChn from "../../../../../images/all/leadership-con-01-chn-v-2.png";
import './style.css';

const TabMenuInnerSubLeadership = () => {
    return (
        <>
            <div className="college-cont-map leadership">
                <div className="belt">
                    <div className='guide-area'>
                        <div className="guide-text">
                            <p className='p_link'>각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                        </div>
                        <div className="guide-btn">
                            <Link
                                to="https://mysuni.sk.com/suni-main/lecture/category/CLG00007/channels/pages/1"
                                className="item-button"
                            >
                                <img src={CourseBook} alt="" />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className='map-area'>
                        <img src={LeadershipLevel} useMap="#Map" alt=""/>
                        <map name="Map">
                            <area shape="rect" coords="240,101,389,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-671/view" alt="심리학으로 풀어보는 리더십 Talk 리더의 고민" />
                            <area shape="rect" coords="399,101,548,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-5pr/view" alt="심리학으로 풀어보는 리더십 Talk 이런 고민 있나요?" />
                            <area shape="rect" coords="558,101,707,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8xu/view" alt="프로일잘러의 시크릿 노트" />
                            <area shape="rect" coords="717,101,866,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-vp/cube/CUBE-13u/view/Video" alt="리더에게 자기 통찰은 왜 중요한가?" />
                            <area shape="rect" coords="876,101,1025,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1fg/view" alt="Leadership Pain Point 자기성장" />
                            <area shape="rect" coords="1035,101,1184,181" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13rd/cube/CUBE-h7a/view/ClassRoomLecture" alt="다독다독" />

                            <area shape="rect" coords="240,191,389,251" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-xk/cube/CUBE-15p/view/Video" alt="Developing Self-Awareness" />
                            <area shape="rect" coords="399,191,548,251" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gq/view" alt="Leadership Self Assessment" />
                            <area shape="rect" coords="558,191,707,251" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-xf/cube/CUBE-15k/view/Video" alt="Cultivation a Growth Mindset" />
                            <area shape="rect" coords="717,191,866,251" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-yd/cube/CUBE-16i/view/Video" alt="Learning Agility" />
                            <area shape="rect" coords="876,191,1025,251" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-y2/cube/CUBE-167/view/Video" alt="How to Develop Your Carear Plan" />

                            <area shape="rect" coords="240,293,389,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-65j/view" alt="좋은 리더가 되기 위한 팁 Ⅰ" />
                            <area shape="rect" coords="399,293,548,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-6lq/view" alt="좋은 리더가 되기 위한 팁 II" />
                            <area shape="rect" coords="558,293,707,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-aa4/view" alt="마음을 얻는 리더 Transformation Leadership" />
                            <area shape="rect" coords="717,293,866,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-71i/view" alt="성장과 성과를 이끄는 Coaching Leadership" />
                            <area shape="rect" coords="875,293,1024,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-5id/view" alt="1on1 리더와 팀원을 바꾸는 30분의 기적" />
                            <area shape="rect" coords="1035,293,1184,373" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14ti/view" alt="상시성과리딩을 위한 1on1 Workshop" />

                            <area shape="rect" coords="240,383,388,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-w6/cube/CUBE-14b/view/Video" alt="리더의 공감능력" />
                            <area shape="rect" coords="399,383,547,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-y6/cube/CUBE-16b/view/Video" alt="Inclusive Leadership" />
                            <area shape="rect" coords="558,383,706,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8yh/view" alt="Motivation Designer 구성원들의 동기를 디자인하는 리더십" />
                            <area shape="rect" coords="718,383,866,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1fk/view" alt="Leadership Pain Point 구성원 육성" />
                            <area shape="rect" coords="877,383,1025,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-7fj/view" alt="스마트한 리더의 위임 What, Who, How" />
                            <area shape="rect" coords="1036,383,1184,463" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-ack/view" alt="성공하는 리더의 갈등관리 Solution" />
                            <area shape="rect" coords="240,473,388,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-7kq/view" alt="세대 이해 - 86, X, MZ가 만났을 때" />
                            <area shape="rect" coords="399,473,547,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-we/cube/CUBE-14j/view/Video" alt="소피커- 소신 있는 스피커 세대" />
                            <area shape="rect" coords="558,472,706,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-w9/cube/CUBE-14e/view/Video" alt="복세편살- 복잡한 세상 돈 준만큼 일한다" />
                            <area shape="rect" coords="718,473,866,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-vu/cube/CUBE-13z/view/Video" alt="갑분퇴- 갑자기 분위기 퇴근?" />
                            <area shape="rect" coords="876,473,1024,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-wr/cube/CUBE-14w/view/Video" alt="취저- 요즘 애들의 워너비 사람" />
                            <area shape="rect" coords="1036,473,1184,533" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-vw/cube/CUBE-141/view/Video" alt="고답이- 고답이에겐 사이다" />
                            <area shape="rect" coords="240,575,389,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-5xc/view" alt="Remote Leadership 스마트워크 시대 리더의 도전 비대면 성과 코칭" />
                            <area shape="rect" coords="399,575,548,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1fj/view" alt="Leadership Pain Points Performance" />
                            <area shape="rect" coords="557,575,706,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1fh/view" alt="Leadership Pain Points 건강한 조직 운영" />
                            <area shape="rect" coords="718,575,867,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-71h/view" alt="리더라면 설득력 있게 스토리텔링 하라" />
                            <area shape="rect" coords="876,575,1025,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-6ch/view" alt="전략적 사고 보이는 것을 보는 리더의 힘" />
                            <area shape="rect" coords="1035,575,1184,655" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-vj/cube/CUBE-13n/view/Video" alt="관점을 디자인하라" />

                            <area shape="rect" coords="240,665,389,745" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14qm/view" alt="Boundaryless Collaboration 세상에서 협업이 제일 쉬웠어요" />
                            <area shape="rect" coords="399,665,548,745" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1fi/view" alt="Leadership Pain Points 시너지/협업" />
                            <area shape="rect" coords="558,665,707,745" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-v3/cube/CUBE-137/view/Video" alt="스티브잡스는 어떻게 쓸데없는 회의와 보고를 줄였을까?" />

                            <area shape="rect" coords="240,755,389,835" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-yb/cube/CUBE-16g/view/Video" alt="Leading with Vision" />
                            <area shape="rect" coords="399,755,548,835" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-yu/cube/CUBE-16z/view/Video" alt="Strategic Thinking" />
                            <area shape="rect" coords="558,755,707,835" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-yz/cube/CUBE-174/view/Video" alt="Using Question to Foster Critical Thinking and Curiosity" />
                            <area shape="rect" coords="717,755,866,835" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-xw/cube/CUBE-161/view/Video" alt="Facilitation Skill for Managers and Leaders" />
                            <area shape="rect" coords="876,755,1025,835" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-yl/cube/CUBE-16q/view/Video" alt="Negotiation Foundations" />

                            <area shape="rect" coords="241,877,389,957" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-671/view" alt="심리학으로 풀어보는 리더십 Talk 변화의 시작" />
                            <area shape="rect" coords="400,877,548,957" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-69m/view" alt="Deep Change &amp; Leadership 목적기반의 딥체인지실천 가이드" />
                            <area shape="rect" coords="558,877,706,957" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gt/view" alt="Deep Change Leadership 이해" />
                            <area shape="rect" coords="717,877,865,957" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12o6/view" alt="Mindset 행복의 출발점, 성장을 말하다" />
                            <area shape="rect" coords="876,877,1024,957" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-729/view" alt="진정성이 이끄는 리더의 길" />
                            <area shape="rect" coords="1035,877,1184,957" href={()=>alert('라이브 준비중입니다.')} alt="Ignite Leadership Program" />

                            <area shape="rect" coords="239,967,388,1047" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12tx/view" alt="리더의 정체성 나와 조직을 움직이는 힘" />
                            <area shape="rect" coords="399,967,548,1047" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12sa/view" alt="리더의 언어 Meaningful Conversation" />
                            <area shape="rect" coords="558,967,707,1047" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-5uk/view" alt="Deep Change와 기업문화를 혁신하다" />
                            <area shape="rect" coords="717,967,866,1047" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1445/view" alt="혁신 기업과  리더의 성공 습관 Calculated Risk Taking" />
                            <area shape="rect" coords="876,967,1025,1047" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-az3/view" alt="영화로 만나는 Deep Change Leadership I, II" />
                            <area shape="rect" coords="1035,967,1184,1047" href={()=>alert('라이브 준비중입니다.')}  alt="Leadership Transformation" />

                            <area shape="rect" coords="241,1057,390,1137" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8r6/view" alt="리더십, 인문학에 길을 묻다 I, II" />
                            <area shape="rect" coords="400,1057,549,1137" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14ft/view" alt="모두 그렇게 리더가 된다 (송은이,정재승,이철승,최재천, 이어령)" />
                            <area shape="rect" coords="559,1057,708,1137" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-144o/view" alt="의사결정 A to Z 인간의 편향과 의사결정의 심리학" />
                            <area shape="rect" coords="717,1057,866,1137" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-6bu/cube/CUBE-8vk/view/Video" alt="위기극복을 위한 Resilient Leadership" />
                            <area shape="rect" coords="876,1057,1025,1137" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14vd/view" alt="Leader’ Diary 혁신 리더의 다이어리" />
                        </map>
                    </div>
                </div>
            </div>
        </>
    )
}

const TabMenuInnerSubLeadershipEng = () => {
    return (
        <>
            <div className="college-cont-map leadership">
                <div className="belt">
                    <div className='guide-area' />
                    <div className='map-area'>
                        <img src={LeadershipLevelEng} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

const TabMenuInnerSubLeadershipChn = () => {
    return (
        <>
            <div className="college-cont-map leadership">
                <div className="belt">
                    <div className='guide-area' />
                    <div className='map-area'>
                        <img src={LeadershipLevelChn} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { TabMenuInnerSubLeadership, TabMenuInnerSubLeadershipEng, TabMenuInnerSubLeadershipChn }
