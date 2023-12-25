import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Button, Image} from "semantic-ui-react";


import AiIcon from '../../../../resources/images/all/icon-ai.png';
import CommonIcon from '../../../../resources/images/all/icon-common.png';
import BizIcon from '../../../../resources/images/all/icon-biz.png';
import HappyIcon from '../../../../resources/images/all/icon-happy.png';
import BmIcon from '../../../../resources/images/all/icon-bmdesign.png';

const BoxLoopModeInfinityLoop = () => {

    const params = {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
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
                    <Image src={AiIcon} alt='AI/DT'/>
                </div>
                <div className='swiper-slide'>
                    <Image src={CommonIcon} alt=''/>
                </div>
                <div className='swiper-slide'>
                    <Image src={BizIcon} alt=''/>
                </div>
                <div className='swiper-slide'>
                    <Image src={HappyIcon} alt=''/>
                </div>
                <div className='swiper-slide'>
                    <Image src={BmIcon} alt=''/>
                </div>

                <div className='swiper-slide'>
                    <Image src={AiIcon} alt='AI/DT'/>
                </div>
                <div className='swiper-slide'>
                    <Image src={CommonIcon} alt=''/>
                </div>
                <div className='swiper-slide'>
                    <Image src={BizIcon} alt=''/>
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