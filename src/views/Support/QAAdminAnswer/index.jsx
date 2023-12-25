import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const QAAdminAnswer = () => (
    <section className='content support bg-white'>
        <div className="post-view-wrap">
            <div className="post-view qna qna-admin">
                <TitleArea/>
                <ContentsArea/>
            </div>
        </div>
    </section>
);

export default QAAdminAnswer
