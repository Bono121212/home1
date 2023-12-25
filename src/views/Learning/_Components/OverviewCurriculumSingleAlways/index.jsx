import React from "react";

const OverviewCurriculumSingle = (props) => {
    // console.log(props.scrollBottom, 264-props.scrollBottom+30);
    return (
        // 265(푸터높이) + 40(푸터여백)
        <div className={"detail-sec ov-floating-sec " + ((props.scroll > 326) ? 'is-visible ' : '')} id="lms-floating"
            style={{"bottom":((props.scrollBottom > 0) ? (props.scrollBottom+40)+"px" : '40px' )}}>
            <div className="detail-sec-inner">
                {/* 기본 Case - 1. 필수 선수과정 Y + 최초 접근했을 경우*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-title">
                            <p className="title">필수 선수과정의 카드명이 들어갑니다.  </p>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">선수과정 학습하기</button>
                        </div>
                    </div>
                </div>

                {/* 정보 Case - 2. 필수 선수과정 N + 최초 접근했을 경우*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-title">
                            <p className="title">Snowflake (3) 경쟁력, 핵심 고려사항, 주요 사례, 비용체계 - TTC Digital플랫폼 특강(2월15일)</p>
                            <div className="info">
                                <span className="type">Video</span>
                                <span className="split"></span>
                                <span className="time">35m</span>
                            </div>
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
export default OverviewCurriculumSingle;
