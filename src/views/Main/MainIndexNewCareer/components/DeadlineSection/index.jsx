import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType1C from '../LearningLoopType1C';


class DeadlineSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>수강신청 임박</strong>한 과정</div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <LearningLoopType1C swipeName="swiperRequired"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default DeadlineSection