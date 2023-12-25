import React from 'react';
import { Link } from 'react-router-dom';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import BmdImg02 from "../../../../../images/all/bmd-con-01-v-2.png";
import BmdImg02Eng from "../../../../../images/all/bmd-con-01-eng-v-2.png";
import BmdImg02Chn from "../../../../../images/all/bmd-con-01-chn-v-2.png";
import './style.css';

const TabMenuInnerSubBM = () => {
    return (
        <>
            <div className="college-cont-map BM">
                <div className='belt'>
                    <div className='guide-area'>
                        <div className="guide-text">
                            <p className='p_link'>각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                        </div>
                        <div className="guide-btn">
                            <Link
                                to="https://mysuni.sk.com/suni-main/lecture/category/CLG00020/channels/pages/1"
                                className="item-button"
                            >
                                <img src={CourseBook} alt="" />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className='map-area'>
                        <img src={BmdImg02} useMap="#Map" alt='전체 커리큘럼 Flow' />
                        <map name="Map">
                            <area
                                shape="rect"
                                coords="394,101,585,161"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8c9/view`}
                                alt="As Is BM Sustainability"
                            />
                            <area
                                shape="rect"
                                coords="594,101,785,161"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a8f/view`}
                                alt="BM 환경 분석"
                            />
                            <area
                                shape="rect"
                                coords="794,101,985,161"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14qo/view`}
                                alt="Macro 환경변화"
                            />
                            <area
                                shape="rect"
                                coords="994,101,1185,161"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14uu/view`}
                                alt="궁금한 BM 이야기 Y"
                            />
                            <area
                                shape="rect"
                                coords="394,172,585,232"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a8e/view`}
                                alt="Sustainable BM 혁신의 중요성"
                            />
                            <area
                                shape="rect"
                                coords="594,172,785,232"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a8g/view`}
                                alt="BM Framework &amp; SK BM혁신 노력"
                            />
                            <area
                                shape="rect"
                                coords="794,172,985,232"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a94/view`}
                                alt="SK의 Deep Change BM디자인"
                            />
                            <area
                                shape="rect"
                                coords="994,172,1185,232"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14vq/view`}
                                alt="BM Design의 의미와 필요성"
                            />
                            <area
                                shape="rect"
                                coords="394,241,585,303"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a8s/view`}
                                alt="신규 BM 발굴 전략"
                            />
                            <area
                                shape="rect"
                                coords="594,241,785,301"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14v0/view`}
                                alt="BM Design 방법론"
                            />
                            <area
                                shape="rect"
                                coords="394,353,585,414"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a1p/view`}
                                alt="Overview / Strategy"
                            />
                            <area
                                shape="rect"
                                coords="594,353,785,414"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a1w/view`}
                                alt="Deal Structuring / Due Diligence"
                            />
                            <area
                                shape="rect"
                                coords="794,353,985,414"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a1y/view`}
                                alt="Valuation /  Negotiation"
                            />
                            <area
                                shape="rect"
                                coords="994,353,1185,414"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a20/view`}
                                alt="Legal / PMI /  Value-up"
                            />
                            <area
                                shape="rect"
                                coords="394,423,585,484"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-afq/view`}
                                alt="Deal structuring &amp; Financing"
                            />
                            <area
                                shape="rect"
                                coords="594,423,785,484"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a23/view`}
                                alt="Legal"
                            />
                            <area
                                shape="rect"
                                coords="794,493,985,554"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-asr/view`}
                                alt="인수금융"
                            />
                            <area
                                shape="rect"
                                coords="594,493,785,554"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-asq/view`}
                                alt="사모펀드"
                            />
                            <area
                                shape="rect"
                                coords="394,493,585,554"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-asm/view`}
                                alt="법률적 개관 및 사례"
                            />
                            <area
                                shape="rect"
                                coords="994,493,1185,554"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ahq/view`}
                                alt="SK의 Portfolio Deep Change"
                            />
                            <area
                                shape="rect"
                                coords="394,605,585,664"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ay6/view`}
                                alt="Financial Story 이해"
                            />
                            <area
                                shape="rect"
                                coords="594,605,785,664"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6z1/view`}
                                alt="Financial Acumen"
                            />
                            <area
                                shape="rect"
                                coords="794,605,985,664"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1316/view`}
                                alt="Financial Story 방법론 "
                            />
                            <area
                                shape="rect"
                                coords="994,605,1185,664"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-130v/view`}
                                alt="2021 이천포럼 Financial Story"
                            />
                            <area
                                shape="rect"
                                coords="394,675,585,734"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7bw/view`}
                                alt="금융기관 둘러보기"
                            />
                            <area
                                shape="rect"
                                coords="594,675,785,734"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ac8/view`}
                                alt="자산운용사 / 연기금"
                            />
                            <area
                                shape="rect"
                                coords="794,675,985,734"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ag2/view`}
                                alt="밴처캐피탈 / 투자은행"
                            />
                            <area
                                shape="rect"
                                coords="994,675,1185,734"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12rb/view`}
                                alt="PEF"
                            />
                            <area
                                shape="rect"
                                coords="394,745,585,804"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14ii/view`}
                                alt="SK Inc."
                            />
                            <area
                                shape="rect"
                                coords="594,745,785,804"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14ir/view`}
                                alt="SKI/ SKGC"
                            />
                            <area
                                shape="rect"
                                coords="794,745,985,804"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14iu/view`}
                                alt="SK E&amp;S"
                            />
                            <area
                                shape="rect"
                                coords="994,745,1185,804"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14it/view`}
                                alt="SK EP/ SKC"
                            />
                            <area
                                shape="rect"
                                coords="394,858,585,917"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12su/view`}
                                alt="Financial Story 실행력 강화를 위한 Governance"
                            />
                            <area
                                shape="rect"
                                coords="394,927,585,987"
                                href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14uk/view`}
                                alt="SK의 Governance 혁신 G Story 다큐"
                            />
                        </map>
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubBMEng = () => {
    return (
        <>
            <div className="college-cont-map BM">
                <div className='belt'>
                    <div className='guide-area' />
                    <div className='map-area'>
                        <img src={BmdImg02Eng} alt='전체 커리큘럼 Flow' />
                    </div>
                </div>
            </div>

        </>
    )
}
const TabMenuInnerSubBMChn = () => {
    return (
        <>
            <div className="college-cont-map BM">
                <div className='belt'>
                    <div className='guide-area' />
                    <div className='map-area'>
                        <img src={BmdImg02Chn} alt='全部课程' />
                    </div>
                </div>
            </div>
        </>
    )
}
export { TabMenuInnerSubBM, TabMenuInnerSubBMEng, TabMenuInnerSubBMChn }
