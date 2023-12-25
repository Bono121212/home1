import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType1 from '../LearningLoopType1';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">                
                    <div className="section-head">
                        <div className="sec-tit-txt">
                            <div className="section-count-big">
                                <strong>선택한 채널명</strong> 의 학습 과정 입니다. <strong>(23)</strong>
                            </div>
                        </div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <LearningLoopType1 swipeName="swiperRequired"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection