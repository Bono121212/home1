import React from "react";

const OverviewCurriculumSingleLive = (props) => {
    //console.log(props.scrollBottom);
    return (
        // 265(푸터높이) + 40(플로팅간격)
        <div className={"detail-sec ov-floating-sec " + ((props.scroll > 326) ? 'is-visible ' : '')} id="lms-floating"
            style={{"bottom":((props.scrollBottom > 0) ? (props.scrollBottom+40)+"px" : '40px' )}}>
            <div className="detail-sec-inner">
                {/* 시작전 Case - 1. 신청 전 필수 선수과정 Y + Live 예정 */}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-live-wait">
                            <span className="timer">10시간 32분 남음</span>
                            <div className="split"></div>
                            <span className="date">6월 29일 오전 9시 30분 예정</span>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">신청하기</button>
                        </div>
                    </div>
                </div>

                {/* 진행중 Case - 5. 진행중인 Live 1개로 구성된 경우*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-live-title">
                            <p className="title">LIVE가 시작되었어요! <em className="primary">10월 20일 오전 9시 30분 부터 오후 6시 30분 까지 진행됩니다.</em></p>
                        </div>
                        <div className="item-learn">
                            <button type="button" className="btn-cube-learn">학습하기</button>
                        </div>
                    </div>
                </div>

                {/* 종료후(정보형) Case - 8. 종료된 Live + 복수 큐브로 구성된 경우*/}
                <div className="ov-curriculum-single">
                    <div className="curriculum-item">
                        <div className="item-title">
                            <p className="title">[마케팅 Essential ②] B2B2C 마케팅 101</p>
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
export default OverviewCurriculumSingleLive;
