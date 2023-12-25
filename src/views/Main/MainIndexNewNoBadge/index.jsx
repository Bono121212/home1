import React from 'react'

import '../MainIndexNew/style.css';
import {
    MyLearningInfoArea, MiddleBannerArea, LearningConArea, InterestConArea, ProgressConArea2
} from '../MainIndexNew/components'


const MainIndexNewNoBadge = () => (
    <section className='content main main-sty2'>
        <div className="main-wrap personal-wrap">

            {/* 마이학습 요약정보 20211019 재작업 */}
            <MyLearningInfoArea/>

            {/* 배너영역 */}
            <MiddleBannerArea/>

            {/* 학습카드 영역1 : 권장과정(핵인싸), 신규, 인기 */}
            <LearningConArea/>

            {/* 학습카드 영역2 : 관리자추천, 찜해둔 과정, 관심채널 */}
            <InterestConArea/>

            {/* 학습카드 영역3 : 도전뱃지, 핫토픽, 수강신청임박 */}
            <ProgressConArea2/>
        </div>
    </section>
);

export default MainIndexNewNoBadge
