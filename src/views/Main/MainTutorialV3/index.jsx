import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
    SearchArea,
    TutorialModal
} from './components'

const MainTutorialV3 = () => (
    <section className='content main'>
        <div className="main-wrap">
            <TutorialModal/>
            <TitleArea/>
            <SearchArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default MainTutorialV3
