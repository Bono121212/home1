import React from 'react';

const CourseConditions = () => {
    return (
        <div className="course-conditions">
            <div className="box-head">
                <h3 className="title">이수조건</h3>
                <div className='stat-area'>
                    <div className="stat-item">
                        <span className="stat-label">
                            <i aria-hidden="true" className="icon stat-comment"></i>
                            <strong className="tit">My Comment</strong>
                        </span>
                        <span className="stat-count">
                            <em className="count">0건</em>
                            <span className="split">/</span>
                            <span className="total">10건</span>
                        </span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">
                            <i aria-hidden="true" className="icon stat-comment-reply"></i>
                            <strong className="tit">My Reply</strong>
                        </span>
                        <span className="stat-count">
                            <em className="count">0건</em>
                            <span className="split">/</span>
                            <span className="total">5건</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="box-body">
                <p className='desc-title'>본 과정은 조건 수행 시 자동으로 이수 처리됩니다.</p>
                <ul className='desc-explain'> {/* admin에서 입력한것 */}
                    <li>1. Posts 게시판에 올라온 타(他) 학습자 게시물을 읽어보고 댓글 10개 이상 작성</li>
                    <li>2. Posts 게시판에 과제 질문에 대한 자신만의 적절하고 성실한 답변 작성 (공백 포함 300자 이상)</li>
                </ul>
            </div>
        </div>
    )
}
export default CourseConditions;
