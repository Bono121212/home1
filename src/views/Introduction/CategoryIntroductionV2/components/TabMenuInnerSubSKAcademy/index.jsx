import React from 'react';
import SkImg01 from "../../../../../images/all/sk_con_01.png";
import './style.css';

const TabMenuInnerSubSKAcademy = () => {
    return (
        <>
            <div className="college-cont-map skacademy">
                <div className="belt">
                    <div className='title-area'>
                        <h2 className='title'>전체 커리큘럼</h2>
                    </div>
                    <div className="map-area">
                        <img src={SkImg01} alt="전체 커리큘럼 Flow" />
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
                        <li># M&amp;A</li>
                        <li># 사업개발</li>
                        <li># 협상</li>
                        <li># Biz. Contract</li>
                        <li># HR Analytics</li>
                        <li># HR Conference</li>
                        <li># Global HR Seminar</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default TabMenuInnerSubSKAcademy
