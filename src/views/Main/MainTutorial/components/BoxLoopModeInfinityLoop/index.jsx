import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image} from "semantic-ui-react";

const BoxLoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    }
    return (
        <Swiper {...params} className='swiper-container'>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div style={{
                        display: 'block',
                        width: '100%',
                        height: '240px',
                        background: '#333',
                        color: '#fff'
                    }}>
                        <Image src='/images/all/img-promotion.jpg' alt=''/>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div style={{
                        display: 'block',
                        width: '100%',
                        height: '240px',
                        background: '#333',
                        color: '#fff'
                    }}>
                        <Image src='/images/all/img-promotion.jpg' alt=''/>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div style={{
                        display: 'block',
                        width: '100%',
                        height: '240px',
                        background: '#333',
                        color: '#fff'
                    }}>
                        <Image src='/images/all/img-promotion.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </Swiper>
    )
};
export default BoxLoopModeInfinityLoop;