import React from 'react';

import './style.css';

import CImg1 from './components/CImg1';
import CTxtCard4A from './components/CTxtCard4A';
import CTxtCard4B from './components/CTxtCard4B';
import CTxtList1A from './components/CTxtList1A';
import CTxtList1B from './components/CTxtList1B';
import TitleNoLink from './components/TitleNoLink';



const Intro1200 = () => (
    <div className="templete_complete">
        <div className="intro_design1200">

            <div className="opacity">
                <div className="mg14">
                    <CImg1 />
                </div>
            </div>

            <div className="opacity">
                <TitleNoLink />
                <div className="mg14 flex">
                    <CTxtCard4A />
                    <CTxtCard4B />
                    <CTxtCard4A />
                    <CTxtCard4B />
                    <CTxtCard4B />
                    <CTxtCard4A />
                    <CTxtCard4B />
                    <CTxtCard4A />
                </div>
            </div>


            <div className="opacity">
                <TitleNoLink />
                <div className="mg14 flex">
                    <CTxtList1A />
                    <CTxtList1B />
                </div>
            </div>
        </div>
    </div>
);



export default Intro1200