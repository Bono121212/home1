import React from 'react';

import './style.css';
import {
    TitleArea,
    ContentsArea,
    TestMarkedModal
} from './components';


const TestMarkedDetail = () => (
    <section className='content learning bg-white'>
        <div className="test-view-wrap">
            <div className="test-view">
                <TestMarkedModal/>
                <TitleArea/>
                <ContentsArea/>
            </div>
        </div>
    </section>
);

export default TestMarkedDetail;
