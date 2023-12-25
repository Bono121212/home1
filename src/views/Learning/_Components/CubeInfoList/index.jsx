import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react";

const CubeInfoList = (props) => {
    const [isFold, setIsFold] = useState(true);
    const [actIdx, setActIdx] = useState(1);
    const [acoIdx1, setAcoIdx1] = useState(false);
    const [acoIdx2, setAcoIdx2] = useState(false);
    const [acoIdx3, setAcoIdx3] = useState(false);
    const handlerFoldToggle = () => {
        setIsFold(!isFold);
        props.propFunction(!isFold);
    }
    return (
        <div className="cube-info-list" style={{"bottom":((props.scrollBottom > 0) ? (props.scrollBottom)+"px" : '0px' )}}>
            <Button className="btn-fold" onClick={handlerFoldToggle}><span className='blind'>접기/펼치기 토글</span></Button>
            <div className="cube-info-wrapper">
                <div className={"cube-info-header"+ ((actIdx === 1) ? " is-selected":"")}>
                    <div className="cube-info-title">
                        <p className='title'><Link onClick={()=>setActIdx(1)}>[마케팅 Essential ②] B2B2C 마케팅 101</Link></p>

                        {/* Progress */}
                        <div className='cube-info-progress'>
                            <div className='progress-info'>
                                {/* <span className="progress-state-learned"><span className="blind">학습 완료</span></span> */}
                                <span className='progress-value'>
                                    <em className="count">2</em>/<em className="total">5</em>&nbsp;학습 완료
                                </span>
                                {/* <span className="progress-state-learning"><span className="blind">학습중</span></span> */}
                            </div>
                            <div className='progress-bar' aria-hidden="true">
                                <div className='progress-active' style={{"width":"calc((100% / 5) * 2)"}}></div>{/* 5개중 2개완료 */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cube-info-body">
                    {/* 승인대기일때만 태그 존재하도록 */}
                    {(props.isWait) &&
                        <>
                            {/* 안내문구 */}
                            <div className="cube-info-wait"><p>학습기간이 아닙니다.</p></div>
                            {/* 클릭방지 오버랩 */}
                            <div className="cube-info-dimmer"></div>
                        </>
                    }
                    {/* accordion-chapter 1 */}
                    <div className={"accordion-chapter" + ((acoIdx1 === true) ? " is-active":"")}>
                        <div className={"accordion-chapter-title" + ((actIdx === 2) ? " is-selected":"")}>
                            <Link className="btn-over-view" onClick={()=>setActIdx(2)}>
                                Chap 1. 첫번째 챕터일때
                            </Link>
                            <button className="btn-accordion" onClick={()=>setAcoIdx1(!acoIdx1)}>총<strong>1개</strong> 강의 구성</button>
                        </div>
                        <div className="accordion-chapter-content">
                            <Link className={"btn-state-cube" + ((actIdx === 3) ? " is-selected":"")} onClick={()=>setActIdx(3)}>
                                <span className="label-state-cube complete"><span>cube 완료상태</span></span>
                                <span className="copy-holder">
                                    <span className="copy-title">문제 정의를 위해 활용할 수 있는 친화적 분석과 방법론</span>
                                    <ul className="type-info">
                                        <li>Video</li>
                                        <li>17m</li>
                                    </ul>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* accordion-chapter 2 */}
                    <div className={"accordion-chapter" + ((acoIdx2 === true) ? " is-active":"")}>
                        <div className={"accordion-chapter-title" + ((actIdx === 4) ? " is-selected":"")}>
                            <Link className="btn-over-view" onClick={()=>setActIdx(4)}>
                                Chap 2. 연속적인 챕터일때
                            </Link>
                            <button className="btn-accordion" onClick={()=>setAcoIdx2(!acoIdx2)}>총<strong>1개</strong> 강의 구성</button>
                        </div>
                        <div className="accordion-chapter-content">
                            <Link className={"btn-state-cube" + ((actIdx === 5) ? " is-selected":"")} onClick={()=>setActIdx(5)}>
                                <span className="label-state-cube complete"><span>cube 완료상태</span></span>
                                <span className="copy-holder">
                                    <span className="copy-title">AI와 SV</span>
                                    <ul className="type-info">
                                        <li>Video</li>
                                        <li>17m</li>
                                    </ul>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Cubes */}
                    <Link className={"btn-state-cube" + ((actIdx === 6) ? " is-selected":"")} onClick={()=>setActIdx(6)}>
                        {/* 큐브유형별 대응: type-talk 추가 */}
                        <span className="label-state-cube type-talk"><span>토론</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI 윤리는 전통적인 윤리와 어떤 점에서 다르다고 생각하세요?</span>
                            <ul className="type-info">
                                <li>Talk</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className={"btn-state-cube" + ((actIdx === 7) ? " is-selected":"")} onClick={()=>setActIdx(7)}>
                        {/* 큐브유형별 대응: type-survey 추가 */}
                        <span className="label-state-cube type-survey"><span>설문</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI 윤리가 우리에게 중요한 이유 </span>
                            <ul className="type-info">
                                <li>Survey</li>
                            </ul>
                        </span>
                    </Link>

                    {/* accordion-chapter 3 */}
                    <div className={"accordion-chapter" + ((acoIdx3 === true) ? " is-active":"")}>
                        <div className={"accordion-chapter-title" + ((actIdx === 8) ? " is-selected":"")}>
                            <Link className="btn-over-view" onClick={()=>setActIdx(8)}>
                                Chap 3. 큐브 중간일때
                            </Link>
                            <button className="btn-accordion" onClick={()=>setAcoIdx3(!acoIdx3)}>총<strong>1개</strong> 강의 구성</button>
                        </div>
                        <div className="accordion-chapter-content">
                            <Link className={"btn-state-cube" + ((actIdx === 9) ? " is-selected":"")} onClick={()=>setActIdx(9)}>
                                <span className="label-state-cube complete"><span>cube 완료상태</span></span>
                                <span className="copy-holder">
                                    <span className="copy-title">AI와 SV</span>
                                    <ul className="type-info">
                                        <li>Video</li>
                                        <li>17m</li>
                                    </ul>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Cubes */}
                    <Link className={"btn-state-cube" + ((actIdx === 10) ? " is-selected":"")} onClick={()=>setActIdx(10)}>
                        <span className="label-state-cube l-step2"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">1. [반도체 클라쓰] Keyword로 알아보는 반도체의 품격 1</span>
                            <ul className="type-info">
                                <li>Blended Contents</li>
                                <li>3h 36m</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className={"btn-state-cube" + ((actIdx === 11) ? " is-selected":"")} onClick={()=>setActIdx(11)}>
                        <span className="label-state-cube l-step2"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">1. [반도체 클라쓰] Keyword로 알아보는 반도체의 품격 1</span>
                            <ul className="type-info">
                                <li>Blended Contents</li>
                                <li>3h 36m</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className={"btn-state-cube" + ((actIdx === 12) ? " is-selected":"")} onClick={()=>setActIdx(12)}>
                        <span className="label-state-cube l-step2"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">1. [반도체 클라쓰] Keyword로 알아보는 반도체의 품격 1</span>
                            <ul className="type-info">
                                <li>Blended Contents</li>
                                <li>3h 36m</li>
                            </ul>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default CubeInfoList

