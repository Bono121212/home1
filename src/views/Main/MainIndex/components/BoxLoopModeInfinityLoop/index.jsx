import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Button, Image} from "semantic-ui-react";

const BoxLoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
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
            <Swiper {...params} className='swiper-container'>
                <div>
                    <Image src='/images/all/promotion-1200-x-240.jpg' alt=''/>
                </div>
                <div>
                    <Image src='/images/all/img-promotion.jpg' alt=''/>
                </div>
                <div>
                    <Image src='/images/all/promotion-1200-x-240.jpg' alt=''/>
                </div>
            </Swiper>
            <div className='navi'>
                <Button className="swiper-button-prev"></Button>
                <div className='swiper-pagination'></div>
                <Button className="swiper-button-next"></Button>
            </div>
        </>
    )
};
export default BoxLoopModeInfinityLoop;