import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
    TestModal
} from './components'

const TestDetail = () => (
    <section className='content learning bg-white'>
        <div className="test-view-wrap">
            <div className="test-view">
                <TestModal/>
                <TitleArea/>
                <ContentsArea/>
            </div>
        </div>
    </section>
);

export default TestDetail
