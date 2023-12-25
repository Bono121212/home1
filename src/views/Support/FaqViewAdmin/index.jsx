import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const FaqViewAdmin = () => (
    <section className='content support'>
        <div className="post-view-wrap">
            <TitleArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default FaqViewAdmin
