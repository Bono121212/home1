import React from 'react';
import './style.css';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import HappyImg01 from '../../../../../images/all/happy-con-01-v-2.png';
import HappyImg03 from '../../../../../images/all/happy-con-03-v-2.png';
import HappyImg01Eng from '../../../../../images/all/happy-con-01-eng-v-2.png';
import HappyImg03Eng from '../../../../../images/all/happy-con-03-eng-v-2.png';
import HappyImg01Chn from '../../../../../images/all/happy-con-01-chn-v-2.png';
import HappyImg03Chn from '../../../../../images/all/happy-con-03-chn-v-2.png';
import { Link } from 'react-router-dom';

const TabMenuInnerSubHappiness = () => {
    return (
        <>
            <div className="college-cont-map happiness">
                <div className="belt">
                    <div className="guide-area">
                        <div className='guide-btn'>
                            <Link to="https://mysuni.sk.com/suni-main/lecture/category/CLG00003/channels/pages/2"
                                className="item-button"
                            >
                                <img src={CourseBook} alt="" />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className="map">
                        <img src={HappyImg01} alt="이렇게 행복을 만들어 가세요." />
                    </div>
                </div>
            </div>

            <div className="college-cont-map happiness">
                <div className='belt'>
                    <div className='map-area'>
                        <img src={HappyImg03} useMap="#Map" alt="전체 커리큘럼 Flow" />
                        <map name="Map">
                            <area shape="rect" coords="214,96,346,155" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13no/view" alt="오늘 나의 일을 즐기는 비밀 Job Crafting" />
                            <area shape="rect" coords="353,96,485,155" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-axw/view" alt="나의 행복 실천 Design: 자기인식" />
                            <area shape="rect" coords="494,96,626,155" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-axx/view" alt="나의 행복 실천 Design: Self" />
                            <area shape="rect" coords="632,96,764,155" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-axy/view" alt="나의 행복 실천 Design: People" />
                            <area shape="rect" coords="773,96,905,155" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-axz/view" alt="나의 행복실 천 Design: Work" />
                            <area shape="rect" coords="214,167,346,225" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8cq/view" alt="공감과 소통" />
                            <area shape="rect" coords="353,167,485,225" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12ow/view" alt="게임으로 경험하는 두려움 없는 조직" />
                            <area shape="rect" coords="214,236,346,280" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-aea/view" alt="그래도 당신이 옳다" />
                            <area shape="rect" coords="353,236,485,280" onClick={() => alert('준비중입니다.')} alt="감성지능의 이해" />
                            <area shape="rect" coords="214,324,346,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1go/view" alt="마음근력키우기1~6" />
                            <area shape="rect" coords="353,324,485,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-5ct/view" alt="긍정습관 만들기" />
                            <area shape="rect" coords="495,324,627,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-7t7/view" alt="슬기로운 행복 생활" />
                            <area shape="rect" coords="635,324,767,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-aeh/view" alt="하루10분 행복홈트 &#40;이해&#41; - 몸챙김과 행복" />
                            <area shape="rect" coords="774,324,906,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-ag3/view" alt="하루10분 행복홈트 &#40;실천&#41; - 기본에 충실한 몸챙김" />
                            <area shape="rect" coords="914,323,1046,405" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-aei/view" alt="하루10분 행복홈트 &#40;실천&#41; - 근력을 키우는 몸챙김" />
                            <area shape="rect" coords="214,414,345,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-agd/view" alt="식탁해:식습관을 부탁해" />
                            <area shape="rect" coords="353,414,485,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-awc/view" alt="행복을 찾아 떠나는 방구석1열 여행" />
                            <area shape="rect" coords="495,414,627,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14tq/view" alt="행복과 공간" />
                            <area shape="rect" coords="635,414,767,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8az/view" alt="일상 속 명상" />
                            <area shape="rect" coords="774,414,906,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8ap/view" alt="명상의 이해" />
                            <area shape="rect" coords="914,414,1046,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14t9/view" alt="오롯이 나에게만 집중하는 시간, Mindfulness" />
                            <area shape="rect" coords="1054,414,1185,496" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14t7/view" alt="더 스트레칭 라이브" />
                            <area shape="rect" coords="214,536,345,598" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-145/view" alt="SK행복경영" />
                            <area shape="rect" coords="353,536,485,598" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-7ws/cube/CUBE-ah5/view/Video" alt="SK행복경영 Talk!Talk!Talk!" />
                            <area shape="rect" coords="496,536,627,598" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12sr/view" alt="행복한 직장 두 갈래의 길" />
                            <area shape="rect" coords="632,536,767,598" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-6pv/view" alt="구성원 행복과 성과" />
                            <area shape="rect" coords="774,536,906, 598" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14pc/view" alt="오늘도 출근합니다" />
                            <area shape="rect" coords="214,605,345,668" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8ic/view" alt="행복지도의 이해" />
                            <area shape="rect" coords="353,605,485,668" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8by/view" alt="행복지도 구축 및 참여사례" />
                            <area shape="rect" coords="496,605,627,668" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-859/cube/CUBE-aov/view/Video" alt="행복측정의 주요 이슈 및 해결방안" />
                            <area shape="rect" coords="632,605,767,668" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-7rg/view" alt="행복추구 및 측정의 혜택" />
                            <area shape="rect" coords="214,676,345,737" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13ug/view" alt="뉴 노멀 시대의 일과 행복" />
                            <area shape="rect" coords="353,676,485,737" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13v4/view" alt="급변하는 시대, 일과 행복의 현재와 미래" />
                            <area shape="rect" coords="496,676,627,737" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13uz/view" alt="일과 행복에 대한 SK구성원의 Blind Talk" />
                            <area shape="rect" coords="632,676,767,737" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-130c/view" alt="일의 기쁨과 슬픔" />
                            <area shape="rect" coords="774,676,906,737" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-130t/view" alt="변화하는 행복의 조건" />
                            <area shape="rect" coords="214,777,345,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gf/view" alt="&#91;행복학 개론&#93; 행복의 정의와 본질" />
                            <area shape="rect" coords="353,777,485,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gh/view" alt="&#91;행복학 개론&#93; 행복의 위력" />
                            <area shape="rect" coords="496,777,627,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gi/view" alt="&#91;행복학 개론&#93; 행복의 조건" />
                            <area shape="rect" coords="632,777,767,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1gj/view" alt="&#91;행복학 개론&#93; 행복을 위한 실천 방법" />
                            <area shape="rect" coords="774,777,906,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-b10/view" alt="행복을 논문으로 읽어드립니다 1" />
                            <area shape="rect" coords="914,777,1046,840" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13ep/view" alt="행복을 논문으로 읽어드립니다 2" />
                            <area shape="rect" coords="214,848,345,929" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-aug/view" alt="&#91;과학의 눈으로 본 행복의 실체&#93; 행복 Two Key Points" />
                            <area shape="rect" coords="353,848,485,929" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-auh/view" alt="&#91;과학의 눈으로 본 행복의 실체&#93; 누가, 왜 행복한가?" />
                            <area shape="rect" coords="496,848,627,929" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12ps/view" alt="&#91;뇌 과학자의 행복 이야기&#93; 뇌 안에 행복이 있을까?" />
                            <area shape="rect" coords="632,848,767,929" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12q1/view" alt="&#91;뇌 과학자의 행복 이야기&#93; 행복의 문을 여는 열쇠-관계" />
                            <area shape="rect" coords="774,848,906,929" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12ru/view" alt="&#91;뇌 과학자의 행복 이야기&#93; 내 행복은 내가 책임진다" />
                            <area shape="rect" coords="214,937,345,983" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13fw/view" alt="감정이 서툰 나에게" />
                            <area shape="rect" coords="353,937,485,983" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-149m/view" alt="나의 마음 처방전 : 번아웃" />
                            <area shape="rect" coords="494,937,625,983" onClick={() => alert('준비중입니다.')} alt="나의 마음 처방전 : 불안" />
                        </map>
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubHappinessEng = () => {
    return (
        <>
            <div className="college-cont-map happiness">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map">
                        <img src={HappyImg01Eng} alt="Create happiness this way." />
                    </div>
                </div>
            </div>

            <div className="college-cont-map happiness">
                <div className='belt'>
                    <div className='map-area'>
                        <img src={HappyImg03Eng} alt="Happiness Category Curriculum" />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubHappinessChn = () => {
    return (
        <>
            <div className="college-cont-map happiness">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map">
                        <img src={HappyImg01Chn} alt="请这样创造幸福。" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map happiness">
                <div className='belt'>
                    <div className='map-area'>
                        <img src={HappyImg03Chn} alt="幸福 Category Curriculum" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { TabMenuInnerSubHappiness, TabMenuInnerSubHappinessEng, TabMenuInnerSubHappinessChn }
