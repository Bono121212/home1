import React from 'react'

import './style.css';
import {
    MyLearningInfoArea
} from './components'

// import AiDtModal from './components/AiDtModal';

const MainPersonalBoardEvent = () => (
    <section className='content main'>
        <div className="main-wrap personal-wrap">
            {/*20200609 레이아웃 변경*/}
            {/*마이학습 요약정보*/}
            <MyLearningInfoArea/>

            {/* <AiDtModal /> */}

            {/*학습 중 & 도전뱃지*/}
            {/* <MyWorksInProgress/> */}

            {/*검색 및 배너영역*/}
            {/* <MiddleBannerArea/> */}

            {/*필수권장 & 신규 & 인기 + 추천과정 0622*/}
            {/* <LearningContentsArea/> */}

            {/*추천채널*/}
            {/*<RecommendLearningArea/>*/}

        </div>
    </section>
);

export default MainPersonalBoardEvent
