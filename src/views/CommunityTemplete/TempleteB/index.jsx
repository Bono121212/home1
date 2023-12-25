import React from 'react';

import './style.css';



import TALnb from './components/TALnb';
import TBContents from './components/TBContents';
import TBAside from './components/TBAside';

const TempleteB = () => (
    <section className='templete_complete'>
        {/* 템플릿.뉴스매거진형 -B */}
        <div className="templete_type_b">
            <div className="tb_inner flex">
                {/* 템플릿A/템플릿B - 동일한 LNB */}
                <TALnb/>

                <div className="tb_body">
                    <TBContents />
                </div>

                <TBAside />
            </div>
        </div>
    </section>
);

export default TempleteB