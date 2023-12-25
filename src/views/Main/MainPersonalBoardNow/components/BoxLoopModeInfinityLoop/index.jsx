import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Button, Image} from "semantic-ui-react";
import bannerImg1 from "../../../../../images/all/img-promotion.jpg";
import bannerImg2 from "../../../../../images/all/promotion-1200-x-240.jpg";

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
                        <Image src={bannerImg1} alt=''/>
                    </div>
                    <div className='swiper-slide'>
                        <Image src={bannerImg2} alt=''/>
                    </div>
                    <div className='swiper-slide'>
                        <Image src={bannerImg1} alt=''/>
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