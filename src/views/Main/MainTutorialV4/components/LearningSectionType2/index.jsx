import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType2B from '../LearningLoopType2B';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type2">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>김써니님</strong>의 <br/>
                        <strong>학습패턴</strong>을 기반으로 <br/>
                        추천 드려요!</div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        {/* B형은 일반 미리보기용 컴포넌트(참고만 해주세요)
                        <LearningLoopType2 swipeName="swiperCommend"/>
                        */}
                        <LearningLoopType2B swipeName="swiperCommend"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection