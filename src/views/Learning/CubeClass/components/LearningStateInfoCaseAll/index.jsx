import React from "react";
import { Link } from "react-router-dom";

const LearningStateInfoCaseAll = () => {
    return (
        <>
        <div className="learning-state-info">
            <div className="inner">
                <ul>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>승인대기</span></p>
                            <div className="item-desc">
                                <dl><dd><span>현재 '승인대기'상태입니다.</span></dd></dl>
                                <dl>
                                    <dt><strong>승인자</strong></dt>
                                    <dd><span>최선희</span><Link to="/" className="link"><span>문의하기</span></Link></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>학습 예정</span></p>
                            <div className="item-desc">
                                <dl><dd><span>현재 '학습 기간 전'입니다. <br/>학습 시작일까지 조금만 더 기다려주세요!</span></dd></dl>
                                <dl>
                                    <dt><strong>학습기간</strong></dt>
                                    <dd><span>YYYY.MM.DD - YYYY.MM.DD</span></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>미이수</span></p>
                            <div className="item-desc">
                                <dl><dd><span>미이수 처리되었습니다.</span></dd></dl>
                                <dl>
                                    <dt><strong>담당자</strong></dt>
                                    <dd><span>최선희</span><Link to="/" className="link"><span>문의하기</span></Link></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="learning-state-info">
            <div className="inner">
                <ul>
                    <li>
                        <div className="item">
                            <p className="item-title"><span>승인완료</span><em>YYYY.MM.DD 00:00 승인</em></p>
                            <div className="item-desc">
                                <dl><dd><span>현재 '승인대기'상태입니다.</span></dd></dl>
                                <dl>
                                    <dt><strong>승인자</strong></dt>
                                    <dd><span>최선희</span><Link to="/" className="link"><span>문의하기</span></Link></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>학습중</span></p>
                            <div className="item-desc">
                                <dl><dd><span>현재 '학습중'입니다. <br/><strong>애자일 리더십 Workshop_online 과정</strong>을 통해 한 단계 더 성장하고 계신가요? </span></dd></dl>
                                <dl>
                                    <dt><strong>학습기간</strong></dt>
                                    <dd><span>YYYY.MM.DD - YYYY.MM.DD</span></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>이수</span></p>
                            <div className="item-desc">
                                <dl><dd><span>담당자 확인 후 이수 처리되었습니다. </span></dd></dl>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        </>
    )
}

export default LearningStateInfoCaseAll;