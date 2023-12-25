import React, {Component} from 'react';
import LearningSectionType2 from '../LearningSectionType2';
import LearningSectionType21 from '../LearningSectionType2_1';
import LearningSectionType22 from '../LearningSectionType2_2';
import InterestedSection from '../InterestedSection';


class InterestConArea extends Component {
    render() {
        return (
            <>
                <div className="learning-section-wrap bg-gray">
                    <LearningSectionType2/>
                    <LearningSectionType21/>
                    <LearningSectionType22/>
                    <InterestedSection/>
                </div>
            </>
        )
    }

}

export default InterestConArea