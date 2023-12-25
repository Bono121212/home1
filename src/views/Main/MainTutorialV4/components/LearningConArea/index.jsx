import React, {Component} from 'react';
import LearningSection from '../LearningSection';
import LearningSection2 from '../LearningSection2';
import LearningSection3 from '../LearningSection3';


class LearningConArea extends Component {
    render() {
        return (
            <>
                <div className="learning-section-wrap">
                    <LearningSection/>
                    <LearningSection2/>
                    <LearningSection3/>
                </div>
            </>
        )
    }

}

export default LearningConArea