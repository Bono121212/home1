import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image} from "semantic-ui-react";

const ModalLoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }
    return (
        <Swiper {...params} className='swiper-wrapper'>
            <div className="swiper-slide">
                <Image src='/images/all/img-info-01.png' alt=''/>
            </div>
            <div className="swiper-slide">
                <Image src='/images/all/img-info-02.png' alt=''/>
            </div>
            <div className="swiper-slide">
                <Image src='/images/all/img-info-03.png' alt=''/>
            </div>
            <div className="swiper-slide">
                <Image src='/images/all/img-info-04.png' alt=''/>
            </div>
        </Swiper>
    )
};
export default ModalLoopModeInfinityLoop;