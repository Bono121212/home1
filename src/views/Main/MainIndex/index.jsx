import React from 'react'

import './style.css';
import {
    MyLearningInfoArea, MyWorksInProgress, MiddleBannerArea, LearningContentsArea, RecommendLearningArea, 
} from './components'

const MainIndex = () => (
    <section className='content'>
        <div className="main-wrap">

            {/*20200609 레이아웃 변경*/}
            {/*마이학습 요약정보*/}
            <MyLearningInfoArea/>

            {/*학습 중 & 도전뱃지*/}
            <MyWorksInProgress/>

            {/*검색 및 배너영역*/}
            <MiddleBannerArea/>

            {/*필수권장 & 신규 & 인기*/}
            <LearningContentsArea/>

            {/*추천채널*/}
            <RecommendLearningArea/>

        </div>
    </section>
);

export default MainIndex
