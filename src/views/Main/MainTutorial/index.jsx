import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
    SearchArea,
    TutorialModal
} from './components'

const MainTutorial = () => (
    <section className='content main'>
        <div className="main-wrap">
            <TutorialModal/>
            <TitleArea/>
            <SearchArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default MainTutorial
