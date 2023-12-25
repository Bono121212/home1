import React from 'react'

import './style.css';
import {Image} from "semantic-ui-react";

const InterestSettingsComplete = () => (
    <section className='center-content bg-white'>
        <div className="align loading">
            <div>
                <Image src='https://image.mysuni.sk.com/suni-asset/public/images/all/icon_onboard_done.png' alt='' />
            </div>
            <div className="loading-text">사용자의 선호 학습 데이터를 기반으로 <br/><strong>맞춤형 학습</strong>을 추천드립니다. <br/>잠시만 기다려 주세요.
            </div>
        </div>
    </section>
);

export default InterestSettingsComplete
