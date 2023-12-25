import React from 'react'

import './style.css';
import {
    MyLearningInfoArea
} from './components'

// import AiDtModal from './components/AiDtModal';

const MainPersonalBoardEventV2 = () => (
    <section className='content main'>
        <div className="main-wrap personal-wrap">
            {/*마이학습 요약정보*/}
            <MyLearningInfoArea/>

        </div>
    </section>
);

export default MainPersonalBoardEventV2
