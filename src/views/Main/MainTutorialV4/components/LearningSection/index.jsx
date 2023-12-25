import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType1A from '../LearningLoopType1A';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt">Deep Change를 위한 <strong>핵인싸 과정</strong></div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        {/* <LearningLoopType1 swipeName="swiperRequired"/> */}
                        {/* 아래는 핵인싸 카드만 넣은 임시파일입니다 */}
                        <LearningLoopType1A swipeName="swiperRequired"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection