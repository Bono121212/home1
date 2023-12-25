import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Button, Image} from "semantic-ui-react";

const BoxLoopModeInfinityLoop = () => {

    const params = {
        loop: false,
        effect: 'fade',
        autoplay: {
            delay: 7000,
            disabledOnInteraction: false
        },
        pagination: {
            el: '.navi .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.navi .swiper-button-prev',
            nextEl: '.navi .swiper-button-next'
        }
    }

    return (
        <>
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <Image src='/images/all/promotion-1200-x-240.jpg' alt='' style='width=1000px;height=100px;background=skyblue;'/>
                </div>
                <div className='swiper-slide'>
                    <Image src='/images/all/img-promotion.jpg' alt=''/>
                </div>
                <div className='swiper-slide'>
                    <Image src='/images/all/promotion-1200-x-240.jpg' alt=''/>
                </div>
            </Swiper>
        </>
    )
};
export default BoxLoopModeInfinityLoop;