import React from 'react';
import { Popup, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import './style.css';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import semiImg01 from "../../../../../images/all/semicon-01-v-2.png";
import semiImg02 from "../../../../../images/all/semicon-02-v-2.png";
import bgBadge01 from "../../../../../images/all/bg-badge-01-v-2.png";
import bgBadge02 from "../../../../../images/all/bg-badge-02-v-2.png";
import bgBadge03 from "../../../../../images/all/bg-badge-03-v-2.png";
import bgBadge04 from "../../../../../images/all/bg-badge-04-v-2.png";
import bgBadge05 from "../../../../../images/all/bg-badge-05-v-2.png";

import semiImgEng01 from "../../../../../images/all/semicon-01-eng-v-2.png";
import semiImgEng02 from "../../../../../images/all/semicon-02-eng-v-2.png";
import semiImgChn01 from "../../../../../images/all/semicon-01-chn-v-2.png";
import semiImgChn02 from "../../../../../images/all/semicon-02-chn-v-2.png";

import bgBadgeEng01 from "../../../../../images/all/bg-badge-01-eng-v-2.png";
import bgBadgeEng02 from "../../../../../images/all/bg-badge-02-eng-v-2.png";
import bgBadgeEng03 from "../../../../../images/all/bg-badge-03-eng-v-2.png";
import bgBadgeEng04 from "../../../../../images/all/bg-badge-04-eng-v-2.png";
import bgBadgeEng05 from "../../../../../images/all/bg-badge-05-eng-v-2.png";

import bgBadgeChn01 from "../../../../../images/all/bg-badge-01-chn-v-2.png";
import bgBadgeChn02 from "../../../../../images/all/bg-badge-02-chn-v-2.png";
import bgBadgeChn03 from "../../../../../images/all/bg-badge-03-chn-v-2.png";
import bgBadgeChn04 from "../../../../../images/all/bg-badge-04-chn-v-2.png";
import bgBadgeChn05 from "../../../../../images/all/bg-badge-05-chn-v-2.png";

const TabMenuInnerSubSemicond = () => {
    return (
        <>
            <div className="college-cont-map semicond">
                <div className="belt">
                    <div className='guide-area'>
                        <div className="guide-text">
                            <p className="p_link">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                        </div>
                        <div className="guide-btn">
                            <Link
                                to="https://mysuni.sk.com/suni-main/lecture/category/CLG00019/channels/pages/1"
                                className="item-button"
                            >
                                <img src={CourseBook} alt="" />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className="map-area">
                        <img src={semiImg01} alt="Badge" useMap="Map1" />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img src={semiImg02} alt="커리큘럼" useMap="#Map2" />
                        <map name="Map2">
                            <area shape="rect" coords="177,189,292,209" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9nm/view`} alt="생산운영 및 최적화" />
                            <area shape="rect" coords="177,213,292,233" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-132p/view`} alt="Smart SCM" />
                            <area shape="rect" coords="177,237,292,257" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14vp/view`} alt="제조 Simulation" />
                            <area shape="rect" coords="175,432,470,452" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-733/view`} alt="Smart Factory구현을 위한 제조 시스템 이해와 의사결정" />
                            <area shape="rect" coords="175,456,470,476" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7b2/view`} alt="Smart Factory의 구성요소와 사례" />
                            <area shape="rect" coords="175,481,470,501" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7ck/view`} alt="Smart Factory 시스템의 연결과 지능화" />
                            <area shape="rect" coords="175,505,470,525" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7k7/view`} alt="첨단 기술과 제조의 만남" />
                            <area shape="rect" coords="175,529,470,549" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-84n/view`} alt="AI 알고리즘 기반 반도체 Factory" />
                            <area shape="rect" coords="690,432,906,452" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7vi/cube/CUBE-afs/view/ClassRoomLecture`} alt="반도체 FAB 자동화 이해" />
                            <area shape="rect" coords="690,456,906,476" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12un/view`} alt="반도체 FAB Scheduling 시스템 이해" />
                            <area shape="rect" coords="690,481,906,501" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1332/view`} alt="SK Hynix Data Platform 사례" />
                            <area shape="rect" coords="175,716,470,736" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-78k/view`} alt="Thin Film 공정 및 소재" />
                            <area shape="rect" coords="175,740,470,760" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7e2/view`} alt="Doping 공정 및 소재" />
                            <area shape="rect" coords="175,764,470,784" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-84s/view`} alt="Metallization 공정 및 소재" />
                            <area shape="rect" coords="175,788,470,808" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8bf/view`} alt="Etching 공정 및 소재" />
                            <area shape="rect" coords="175,812,470,832" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8jl/view`} alt="Lithography 공정 및 소재" />
                            <area shape="rect" coords="175,836,470,856" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7mg/view`} alt="화합물 반도체 소자 및 소재" />
                            <area shape="rect" coords="175,860,470,880" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-97n/view`} alt="Image Sensor 소자 및 소재" />
                            <area shape="rect" coords="175,884,470,904" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7fr/view`} alt="Solar Cell 소자 및 소재" />
                            <area shape="rect" coords="175,908,470,928" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-97q/view`} alt="첨단 소재" />
                            <area shape="rect" coords="175,932,470,952" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12ne/view`} alt="반도체 프리커서 소재 특성과 개발의 이해" />
                            <area shape="rect" coords="175,956,470,976" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12nf/view`} alt="반도체용 불소계 소재 특성과 개발의 이해" />
                            <area shape="rect" coords="690,716,906,736" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12td/view`} alt="증착 소재" />
                            <area shape="rect" coords="690,740,906,760" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-131y/view`} alt="식각 소재" />
                            <area shape="rect" coords="690,764,906,784" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-136m/view`} alt="Photo 공정용 소재" />
                            <area shape="rect" coords="690,788,906,808" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13t9/view`} alt="PKG 소재" />
                            <area shape="rect" coords="690,894,906,914" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12rd/view`} alt="EUV와 미세 Pattern용 포토레지스트" />
                            <area shape="rect" coords="690,918,906,938" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12zm/view`} alt="그래핀과 2차원 소재 연구" />
                            <area shape="rect" coords="690,942,906,962" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-133v/view`} alt="신소재 관상학과 반도체용 강유천체" />
                            <area shape="rect" coords="690,966,906,986" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14lq/view`} alt="인공지능과 신소재 공정의 미래" />
                            <area shape="rect" coords="175,1150,470,1170" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-b2n/view`} alt="모빌리티 패권 전쟁" />
                            <area shape="rect" coords="175,1174,470,1194" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-b2o/view`} alt="가속화되는 전기차 시장전망 및 협력 방안" />
                            <area shape="rect" coords="175,1198,470,1218" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12pt/view`} alt="미래 자동차 산업의 넥스트 노멀: 핵심 Trend 분석" />
                            <area shape="rect" coords="175,1222,470,1242" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12pu/view`} alt="미래 자동차 기술이 그리는 새로운 산업 지도" />
                            <area shape="rect" coords="175,1246,470,1266" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12sf/view`} alt="상상에서 현실로, 자율주행 서비스" />
                            <area shape="rect" coords="175,1270,470,1290" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12sg/view`} alt="모빌리티 플랫폼 혁명" />
                            <area shape="rect" coords="175,1294,470,1314" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12y2/view`} alt="고속 성장중인 차량용 반도체 산업의 미래와 시장분석" />
                            <area shape="rect" coords="175,1318,470,1338" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-132o/view`} alt="미래차 시장 선점을 위한 차량용 반도체의 발전방향" />
                            <area shape="rect" coords="175,1342,470,1362" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-133t/view`} alt="차량용 반도체가 맞이할 미래 시장 예측" />
                            <area shape="rect" coords="175,1366,470,1386" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-137v/view`} alt="차량용 반도체 Value chain 변화에 따른 미래 시나리오" />
                            <area shape="rect" coords="690,1150,1003,1170" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13sq/view`} alt="전통 자동차 OEM_다임러벤츠편" />
                            <area shape="rect" coords="690,1174,1003,1194" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13zu/view`} alt="자율주행 시대를 여는 미래 반도체_Tech Giant_IT기업편(1)" />
                            <area shape="rect" coords="690,1198,1003,1218" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-143x/view`} alt="바퀴 달린 컴퓨터, 핵심은 반도체_ Tech Giant_IT기업편(2)" />
                            <area shape="rect" coords="690,1222,1003,1242" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14d9/view`} alt="미래 Mobility 블루칩_차량용 반도체 기업편" />
                            <area shape="rect" coords="175,1554,470,1574" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7gh/view`} alt="HW 개발 Fundamentals" />
                            <area shape="rect" coords="175,1578,470,1598" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-847/view`} alt="Analog Design" />
                            <area shape="rect" coords="175,1602,470,1622" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7rf/view`} alt="Digital Design" />
                            <area shape="rect" coords="175,1626,470,1646" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7vh/view`} alt="CPU Micro-Architecture" />
                            <area shape="rect" coords="175,1650,470,1670" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7ep/view`} alt="SoC 설계 Flow" />
                            <area shape="rect" coords="175,1674,470,1694" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7ec/view`} alt="SoC 설계 사례-Mobile Computing" />
                            <area shape="rect" coords="175,1782,470,1802" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7bf/view`} alt="컴퓨터 동작의 이해" />
                            <area shape="rect" coords="690,1554,1003,1574" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14h6/view`} alt="국내 최초 AI반도체 SKT SAPEON 개발 Story" />
                            <area shape="rect" coords="690,1578,1003,1598" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8h6/view`} alt="AI Hardware" />
                            <area shape="rect" coords="690,1602,1003,1622" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7sd/view`} alt="AI Model" />
                            <area shape="rect" coords="690,1626,1003,1646" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7ns/view`} alt="AI Platform" />
                            <area shape="rect" coords="690,1733,1003,1753" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7kt/view`} alt="DNN HW 가속기 아키텍처" />
                            <area shape="rect" coords="690,1757,1003,1777" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7j4/view`} alt="DNN 알고리즘 및 워크로드 특성" />
                            <area shape="rect" coords="175,1966,571,1986" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5pa/view`} alt="[CEO특강_SK하이닉스 이석희 사장]반도체, 미래를 열다" />
                            <area shape="rect" coords="175,1990,571,2010" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aws/view`} alt="[SK하이닉스 김진국 CTO 특강] Future of the Semiconductor Technology" />
                            <area shape="rect" coords="175,2014,571,2034" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8c8/view`} alt="Next Generation Semiconductor Packaging Technology" />
                            <area shape="rect" coords="175,2038,571,2058" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7ip/view`} alt="양자 컴퓨팅과 양자 암호 기술의 현재와 미래" />
                            <area shape="rect" coords="175,2062,571,2082" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7bv/view`} alt="자동차 반도체, 기회와 도전" />
                            <area shape="rect" coords="175,2086,571,2106" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7a1/view`} alt="AI반도체 - Next Tech Trend" />
                            <area shape="rect" coords="175,2110,571,2130" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-77f/view`} alt="Neuromorphic Computing : Challenges and Opportunities" />
                            <area shape="rect" coords="175,2134,571,2154" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14o6/view`} alt="삼프로tv X mySUNI: 2022 트렌드 미리보기_Day2 산업 트렌드" />
                            <area shape="rect" coords="175,2158,571,2178" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14xb/view`} alt="AI를 이해하면, 메모리반도체의 미래가 보인다!" />
                            <area shape="rect" coords="690,1966,1003,1986" onClick={() => alert("준비중입니다.")} alt="News of the 반도체 World-메타버스, 반도체의 새로운 기회" />
                            <area shape="rect" coords="165,2293,670,2340" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-531/view`} alt="반도체 What-반도체 tech 지식백과" />
                            <area shape="rect" coords="165,2349,670,2396" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12pv/view`} alt="웨이퍼 What-웨이퍼 tech 지식백과" />
                            <area shape="rect" coords="165,2405,670,2452" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5xw/view`} alt="슬기로운 IT 생활_전자 기기의 구조와 동작원리" />
                            <area shape="rect" coords="680,2293,1185,2340" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-130l/view`} alt="[VR로 체험하는 반도체 인사이드]1. NAND Inside" />
                            <area shape="rect" coords="680,2349,1185,2396" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-130k/view`} alt="[VR로 체험하는 반도체 인사이드]1. DRAM Inside" />
                            <area shape="rect" coords="680,2405,1185,2452" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-530/view`} alt="반도체 제대로 이해하기_기본" />
                            <area shape="rect" coords="165,2540,670,2587" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-534/view`} alt="반도체 클라쓰" />
                            <area shape="rect" coords="165,2597,670,2643" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-533/view`} alt="News로 본 반도체(1~5)" />
                            <area shape="rect" coords="165,2653,670,2699" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5vj/view`} alt="반도체 Industry 이해(1~5)" />
                            <area shape="rect" coords="680,2540,1185,2587" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-86v/view`} alt="News 심층분석" />
                            <area shape="rect" coords="680,2597,1185,2643" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-68a/view`} alt="Covid-19이 반도체 Supply Chain에 미치는 영향" />
                            <area shape="rect" coords="165,2798,670,2844" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-535/view`} alt="반쓸신잡" />
                            <area shape="rect" coords="165,2854,670,2900" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12q2/view`} alt="반도체 위인열전" />
                            <area shape="rect" coords="680,2798,1185,2844" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-532/view`} alt="한방에 이해하는 꿀잼 반도체" />
                        </map>
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "318px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadge03}
                                    alt="Smart Factory Essentail badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "600px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv2"
                                />
                            }
                            content={
                                <img
                                    src={bgBadge04}
                                    alt="반도체 핵심소재 badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "1037px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv2"
                                />
                            }
                            content={
                                <img
                                    src={bgBadge05}
                                    alt="Automative 반도체 badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", bottom: "651px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadge02}
                                    alt="반도체 Tech Essentail badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", bottom: "405px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadge01}
                                    alt="반도체 Biz Essentail badge"
                                />
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubSemicondEng = () => {
    return (
        <>
            <div className="college-cont-map semicond">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map-area">
                        <img
                            src={semiImgEng01}
                            alt="Badge"
                            useMap="Map1" />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img src={semiImgEng02} alt="커리큘럼" useMap="#Map2" />
                        <Popup
                        position="top right"
                        className="p-badge"
                        trigger={
                            <Button
                            style={{position: "absolute",top:"318px", right: "10px"}}
                            className="badge"
                            content="Badge Lv1"
                            />
                        }
                        content={
                            <img 
                            src={bgBadgeEng03}
                            alt="Smart Factory Essentail badge"
                            />
                        }
                        />
                        <Popup
                        position="top right"
                        className="p-badge"
                        trigger={
                            <Button
                            style={{position: "absolute",top:"600px", right: "10px"}}
                            className="badge"
                            content="Badge Lv2"
                            />
                        }
                        content={
                            <img 
                            src={bgBadgeEng04}
                            alt="반도체 핵심소재 badge"
                            />
                        }
                        />
                        <Popup
                        position="top right"
                        className="p-badge"
                        trigger={
                            <Button
                            style={{position: "absolute",top:"1037px", right: "10px"}}
                            className="badge"
                            content="Badge Lv2"
                            />
                        }
                        content={
                            <img 
                            src={bgBadgeEng05}
                            alt="Automative 반도체 badge"
                            />
                        }
                        />
                        <Popup
                        position="top right"
                        className="p-badge"
                        trigger={
                            <Button
                            style={{position: "absolute",bottom:"651px", right: "10px"}}
                            className="badge"
                            content="Badge Lv1"
                            />
                        }
                        content={
                            <img 
                            src={bgBadgeEng02}
                            alt="반도체 Tech Essentail badge"
                            />
                        }
                        />
                        <Popup
                        position="top right"
                        className="p-badge"
                        trigger={
                            <Button
                            style={{position: "absolute",bottom:"405px", right: "10px"}}
                            className="badge"
                            content="Badge Lv1"
                            />
                        }
                        content={
                            <img 
                            src={bgBadgeEng01}
                            alt="반도체 Biz Essentail badge"
                            />
                        }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubSemicondChn = () => {
    return (
        <>
            <div className="college-cont-map semicond">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map-area">
                        <img
                            src={semiImgChn01}
                            alt="Badge"
                            useMap="Map1" />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img src={semiImgChn02} alt="커리큘럼" useMap="#Map2" />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "318px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadgeChn03}
                                    alt="Smart Factory Essentail badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "600px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv2"
                                />
                            }
                            content={
                                <img
                                    src={bgBadgeChn04}
                                    alt="반도체 핵심소재 badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", top: "1037px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv2"
                                />
                            }
                            content={
                                <img
                                    src={bgBadgeChn05}
                                    alt="Automative 반도체 badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", bottom: "651px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadgeChn02}
                                    alt="반도체 Tech Essentail badge"
                                />
                            }
                        />
                        <Popup
                            position="top right"
                            className="p-badge"
                            trigger={
                                <Button
                                    style={{ position: "absolute", bottom: "405px", right: "10px" }}
                                    className="badge"
                                    content="Badge Lv1"
                                />
                            }
                            content={
                                <img
                                    src={bgBadgeChn01}
                                    alt="반도체 Biz Essentail badge"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export { TabMenuInnerSubSemicond, TabMenuInnerSubSemicondEng, TabMenuInnerSubSemicondChn }
