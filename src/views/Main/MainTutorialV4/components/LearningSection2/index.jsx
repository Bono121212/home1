import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType1B from '../LearningLoopType1B';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt">따끈따끈 <strong>신규 과정</strong></div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        {/* LearningLoopType1 - B형은 일반 미리보기용 컴포넌트(참고만 해주세요) */}
                        <LearningLoopType1B swipeName='swiperNew'/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection