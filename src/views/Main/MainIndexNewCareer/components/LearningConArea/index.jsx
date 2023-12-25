import React, {Component} from 'react';
// import MyLearningSection from '../MyLearningSection';
// import SkillSection from '../SkillSection';
// import LearningSection from '../LearningSection';
// import LearningSection2 from '../LearningSection2';
// import LearningSection3 from '../LearningSection3';
// import HotTopicSection from '../HotTopicSection';
// import LearningPlaylistSection from '../LearningPlaylistSection';
import SkillRecommendSection from '../SkillRecommendSection';
import SkillRecommendSectionType2 from '../SkillRecommendSectionType2';
import SkillRecommendSectionType3 from '../SkillRecommendSectionType3';
import SkillRecommendSectionNoData from '../SkillRecommendSectionNoData';

class LearningConArea extends Component {
    render() {
        return (
            <>
                {/* 23-08-23 페르소나 기능건으로 묶음 삭제 */}
                {/* <div className="learning-section-wrap">
                </div> */}
                {/* <MyLearningSection/> */}
                
                <SkillRecommendSectionNoData />         {/* 2023-10 신규추가 */}
                <SkillRecommendSection />               {/* 2023-10 신규추가 */}
                <SkillRecommendSection nodata={true} /> {/* 2023-10 신규추가 */}
                <SkillRecommendSectionType2 />          {/* 2023-10 신규추가 */}
                <SkillRecommendSectionType3 />          {/* 2023-10 신규추가 */}
                
                {/* <SkillSection/>
                <LearningSection/>
                <LearningSection2/>
                <LearningSection3/>
                <HotTopicSection/>
                <LearningPlaylistSection/> */}
            </>
        )
    }

}

export default LearningConArea
