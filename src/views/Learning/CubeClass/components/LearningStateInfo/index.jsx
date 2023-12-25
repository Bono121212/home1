import React from "react";
import { Link } from "react-router-dom";

const LearningStateInfo = () => {
    return (
        <div className="learning-state-info">
            <div className="inner">
                <ul>
                    <li className="on">
                        <div className="item">
                            <p className="item-title"><span>신청 반려</span></p>
                            <div className="item-desc">
                                <dl><dd><span>현재 '신청 반려'상태입니다.</span></dd></dl>
                                <dl>
                                    <dt><strong>반려사유</strong></dt>
                                    <dd><span>수강 안내 메일을 발송드렸으나, 참석 여부 회신이 없어 반려 처리합니다.<br/>차수 변경은 담당자를 통해 문의 바랍니다.</span></dd>
                                </dl>
                                <dl>
                                    <dt><strong>승인자</strong></dt>
                                    <dd><span>최미향</span><Link to="/" className="link"><span>문의하기</span></Link></dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    
                    <li>
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
                    <li>
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
    )
}

export default LearningStateInfo;