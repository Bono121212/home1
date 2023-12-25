import React from 'react';

import './style.css';



import TCLnb from './components/TCLnb';
import TCSlide from './components/TCSlide';
import TCContents from './components/TCContents';

const TempleteC = () => (
    <section className='templete_complete'>
        <div className="templete_type_c">
            <TCLnb/>

            <TCSlide/>

            <TCContents />
        </div>
    </section>
);

export default TempleteC