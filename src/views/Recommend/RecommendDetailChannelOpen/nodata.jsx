import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const RecommendDetailChannelOpen = () => (
    <section className='content mylearning'>
        <TitleArea/>
        <ContentsArea nodata />
    </section>
);

export default RecommendDetailChannelOpen
