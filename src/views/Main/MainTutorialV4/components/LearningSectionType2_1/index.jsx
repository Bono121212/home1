import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import LearningLoopType2B from '../LearningLoopType2B';


class LearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type2">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>김써니님</strong>이 <br/><strong>관심 가질만한 과정</strong>을 <br/>
                        모아봤어요~</div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <LearningLoopType2B swipeName="swiperCommend2"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningSection