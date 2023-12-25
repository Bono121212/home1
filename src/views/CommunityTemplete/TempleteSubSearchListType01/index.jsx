import React from 'react';

import './style.css';



import TALnb from './components/TALnb';
import TAContents from './components/TAContents';

const TempleteSubSearchListType01 = () => (
    <section className='templete_complete'>
        <div className="templete_type_a">
            <div className="ta_inner">
                <div className="ta_body">
                    <TALnb/>

                    <TAContents />
                </div>
            </div>
        </div>
    </section>
);



export default TempleteSubSearchListType01