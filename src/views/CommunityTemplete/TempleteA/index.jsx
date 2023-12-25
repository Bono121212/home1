import React from 'react';

import './style.css';



import TALnb from './components/TALnb';
import TASlide from './components/TASlide';
import TAContents from './components/TAContents';

const TempleteA = () => (
    <section className='templete_complete'>
        {/* 템플릿.기본형 -A */}
        <div className="templete_type_a">
            <div className="ta_inner">
                <TASlide/>

                <div className="ta_body">
                    {/* 템플릿A/템플릿B - 동일한 LNB */}
                    <TALnb/>

                    <TAContents />
                </div>
            </div>
        </div>
    </section>
);



export default TempleteA