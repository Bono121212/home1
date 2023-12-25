import React from 'react'

import './style.css';
import {
    MyLearningInfoArea, MyWorksInProgress
} from './components'
import ProfileCard from '../../../layouts/UserHeaderOldV2/ProfileCard';
import ProfileCard2 from '../../../layouts/UserHeaderOldV2/ProfileCard2';

import ProfileCard3 from './components/ProfileCard3'
import ProfileCard4 from './components/ProfileCard4'

const MainPersonalBoardProfile = () => (
    <section className='content main'>
        <div className="main-wrap personal-wrap">


            {/*20200609 레이아웃 변경*/}
            {/*마이학습 요약정보*/}
            <MyLearningInfoArea/>

            {/*학습 중 & 도전뱃지*/}
            <MyWorksInProgress/>

            {/*추천채널*/}
            {/*<RecommendLearningArea/>*/}


            <div style={{display:'flex'}}>
                <ProfileCard/>{/* 프로필설정 후 */}
                <ProfileCard2/>{/* 프로필설정 전 */}

                <ProfileCard3/>{/* 프로필설정 후 */}
                <ProfileCard4/>{/* 프로필설정 전 */}
            </div>
        </div>
    </section>
);

export default MainPersonalBoardProfile
