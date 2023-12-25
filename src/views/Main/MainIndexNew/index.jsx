import React from 'react'

import './style.css';
import './whitestyle.css';//white style
import { MyLearningInfoArea, MiddleBannerArea, LearningConArea, InterestConArea, ProgressConArea} from './components'

const MainIndexNew = () => (
    <section className='content main main-sty2'>
        <div className="main-wrap personal-wrap">

            {/* 마이학습 요약정보 20211019 재작업 */}
            <MyLearningInfoArea/>

            {/* 배너영역 */}
            <MiddleBannerArea/>

            {/* 학습카드 영역1 : 권장과정(핵인싸), 신규, 인기, 플레이리스트, 스킬 */}
            <LearningConArea/>

            {/* 학습카드 영역3 : 관리자추천, 찜해둔 과정, 관심채널 */}
            <InterestConArea/>

            {/* 학습카드 영역4 : 도전뱃지, 핫토픽, 수강신청임박 */}
            <ProgressConArea/>

        </div>
    </section>
);

export default MainIndexNew
