import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
    SurveyModal,
} from './components'

const SurveyDetail = () => (
    <section className='content learning bg-white'>
        <div className="survey-view-wrap">
            <div className="survey-view">
                <SurveyModal/>
                <TitleArea/>
                <ContentsArea/>
            </div>
        </div>
    </section>
);

export default SurveyDetail
