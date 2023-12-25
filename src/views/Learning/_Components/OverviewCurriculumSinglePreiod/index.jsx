import React from "react";

const OverviewCurriculumSinglePreiod = (props) => {
    //console.log(props.scrollBottom);
    return (
        // 265(푸터높이) + 40(푸터여백)
        <div className={"detail-sec ov-floating-sec " + ((props.scroll > 326) ? 'is-visible ' : '')} id="lms-floating"
            style={{"bottom":((props.scrollBottom > 0) ? (props.scrollBottom+40)+"px" : '40px' )}}>
            <div className="detail-sec-inner">
                {/* 기본 Case - 1. 필수 선수과정 Y + 최초 접근했을 경우*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-title">
                            <p className="title">현재 진입한 과정의 카드명이 들어갑니다.</p>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">신청하기</button>
                        </div>
                    </div>
                </div>

                {/* 기간학습형 Case - 4. 수강 신청 Y + 신청한 차수가 취소 기간일 경우 (* 신청한 차수 승인대기일 경우 ‘승인대기’ 상태값 표시)*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-preiod">
                            <div className="no"><strong>3차수</strong></div>
                            <div className="split"></div>
                            <div className="date">
                                <strong>취소기간</strong><span>YYYY-MM-DD ~ YYYY-MM-DD</span>
                                <strong>교육기간</strong><span>YYYY-MM-DD ~ YYYY-MM-DD</span>
                            </div>
                            <div className="split"></div>
                            <div className="state"><strong>학습예정</strong></div>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">취소하기</button>
                        </div>
                    </div>
                </div>

                {/* 기간학습형 Case - 6. 신청한 차수 승인 Y + 학습기간 중일 경우 */}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-preiod">
                            <div className="no"><strong>3차수</strong></div>
                            <div className="split"></div>
                            <div className="date">
                                <strong>교육기간</strong><span>YYYY-MM-DD ~ YYYY-MM-DD</span>
                            </div>
                            <div className="split"></div>
                            <div className="state"><strong>학습중</strong></div>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">학습하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverviewCurriculumSinglePreiod;
