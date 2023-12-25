import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const InterestSettingsPart = () => (
    <section className='bg-white'>
        <div className="interest-content step1">
            <TitleArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default InterestSettingsPart
