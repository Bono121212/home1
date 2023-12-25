import React, {Component} from 'react';
import LearningSectionType2 from '../LearningSectionType2';
import LearningSectionType21 from '../LearningSectionType2_1';
import LearningSectionType22 from '../LearningSectionType2_2';
import InterestedSection from '../InterestedSection';


class InterestConArea extends Component {
    render() {
        return (
            <>
                {/* 23-08-23 페르소나 기능건으로 묶음 삭제 */}
                {/* <div className="learning-section-wrap">
                </div> */}
                <LearningSectionType2/>
                <LearningSectionType21/>
                <LearningSectionType22/>
                <InterestedSection/>
            </>
        )
    }

}

export default InterestConArea