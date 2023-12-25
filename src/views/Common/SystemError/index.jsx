import React from 'react'

import './style.css';
import {Image} from "semantic-ui-react";

const SystemError = () => (
    <section className='center-content bg-white'>
        <div className="align error404">
            <div>
                <Image src='https://image.mysuni.sk.com/suni-asset/public/images/all/system_error.png' alt='not found' />
            </div>
            <div className="not-found-text">mySUNI 시스템 작업 중입니다.<br/>이용에 불편을 드려 죄송합니다.</div>
        </div>
    </section>
);

export default SystemError
