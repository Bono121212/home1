import React from 'react'

import './style.css';
import {Image} from "semantic-ui-react";

const Error404 = () => (
    <section className='center-content bg-white full'>
        <div className="align error404">
            <div>
                <Image src='/images/all/404.png' alt='not found' />
            </div>
            <div className="not-found-text">페이지를 찾을 수 없습니다.</div>
            <button className="ui button bg fix back">이전 페이지로 가기</button>
        </div>
    </section>
);

export default Error404
