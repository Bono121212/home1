import React, {Component} from 'react';
import BadgeSection from '../BadgeSection';
import DeadlineSection from '../DeadlineSection';
import LearningSection4 from '../LearningSection4';

class ProgressConArea extends Component {
    render() {
        return (
            <>
                {/* 23-08-23 페르소나 기능건으로 묶음 삭제 */}
                {/* <div className="learning-section-wrap">
                </div> */}
                <BadgeSection/>
                <DeadlineSection/>
                <LearningSection4/>
            </>
        )
    }

}

export default ProgressConArea