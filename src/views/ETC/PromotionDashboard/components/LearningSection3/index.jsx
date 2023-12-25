import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType1B from '../LearningLoopType1B';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>인기 과정</strong>을 소개해드려요!</div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <LearningLoopType1B swipeName='swiperPopular'/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection