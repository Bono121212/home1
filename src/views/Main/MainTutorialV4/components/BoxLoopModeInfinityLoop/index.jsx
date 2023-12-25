import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image, Icon} from "semantic-ui-react";
import bnr from '../../../../../images/all/bnr-main-sample-1200.jpg'
import bnr1 from '../../../../../images/all/main_banner_test01.jpeg'
import bnr2 from '../../../../../images/all/main_banner_test02.png'
import bnr3 from '../../../../../images/all/main_banner_test03.png'
import bnr4 from '../../../../../images/all/main_banner_test04.png'
import bnr5 from '../../../../../images/all/main_banner_test05.jpeg'

const BoxLoopModeInfinityLoop = () => {

    const params = {
        loop: true,
        effect: 'slide',
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
                    <div className='swiper-slide banner01'>
                        <Image src={bnr} alt=''/>
                    </div>
                    <div className='swiper-slide banner02'>
                        <Image src={bnr1} alt=''/>
                    </div>
                    <div className='swiper-slide banner03'>
                        <Image src={bnr2} alt=''/>
                    </div>
                    <div className='swiper-slide banner04'>
                        <Image src={bnr3} alt=''/>
                    </div>
                    <div className='swiper-slide banner05'>
                        <Image src={bnr4} alt=''/>
                    </div>
                    <div className='swiper-slide banner06'>
                        <Image src={bnr5} alt=''/>
                    </div>
            </Swiper>
            <div className='navi'>
                {/* <Button className="swiper-button-prev"></Button>
                <Button className="swiper-button-next"></Button> */}
                <div className="swiper-navi-wrap">
                    <div className="swiper-pagination"></div>
                    <div className="btn-play"><Icon name="pause"/></div>
                </div>
            </div>
        </>
    )
};
export default BoxLoopModeInfinityLoop;