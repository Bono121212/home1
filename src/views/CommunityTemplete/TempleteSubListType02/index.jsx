import React from 'react';

import './style.css';



import TCLnb from './components/TCLnb';
import TCContents from './components/TCContents';

const TempleteSubListType02 = () => (
    <section className='templete_complete'>
        <div className="templete_type_c">
            <TCLnb/>

            <TCContents />
        </div>
    </section>
);



export default TempleteSubListType02