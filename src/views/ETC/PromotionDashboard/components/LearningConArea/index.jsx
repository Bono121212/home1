import React, {Component} from 'react';
import MyLearningSection from '../MyLearningSection';
import SkillSection from '../SkillSection';
import LearningSection from '../LearningSection';
import LearningSection2 from '../LearningSection2';
import LearningSection3 from '../LearningSection3';
import HotTopicSection from '../HotTopicSection';
import LearningPlaylistSection from '../LearningPlaylistSection';

class LearningConArea extends Component {
    render() {
        return (
            <>
                {/* 23-08-23 페르소나 기능건으로 묶음 삭제 */}
                {/* <div className="learning-section-wrap">
                </div> */}
                <MyLearningSection/>
                <SkillSection/>
                <LearningSection/>
                <LearningSection2/>
                <LearningSection3/>
                <HotTopicSection/>
                <LearningPlaylistSection/>
            </>
        )
    }

}

export default LearningConArea