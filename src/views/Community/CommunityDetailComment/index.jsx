import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const CommunityDetailComment = () => (
    <section className='content community'>
        <div className="post-view-wrap">
            <TitleArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default CommunityDetailComment
