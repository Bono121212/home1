import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image} from "semantic-ui-react";

const LoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }
    return (
        <Swiper {...params} className='swiper-container'>
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <div className="main-text">What is SUNI ? SUNI Learning
                            Port
                        </div>
                        <div className="sub-text">SK University에서는 모든 사용자들이 특정 분야 최고의 전문가들을 육성해내기 위해
                            양질의 학습 콘텐츠는 물론 다양한 세미나를 개최하고 참가할 수 있도록 도와주는 차세대 Learning Portal Platform
                            입니다.
                        </div>
                    </div>
                    <div className="visual">
                        <a href={()=>false}>
                            <Image src='/images/all/img-main.png' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <div className="main-text">긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스
                            긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴
                            텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스
                        </div>
                        <div className="sub-text">긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스
                            긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴
                            텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴
                            텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴
                            텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스 긴
                            텍스트 케이스 긴 텍스트 케이스 긴 텍스트 케이스
                        </div>
                    </div>
                    <div className="visual">
                        <a href={()=>false}>
                            <Image src='/images/all/img-main.png' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <div className="main-text">짧은 텍스트 케이스</div>
                        <div className="sub-text">짧은 텍스트 케이스</div>
                    </div>
                    <div className="visual">
                        <a href={()=>false}>
                            <Image src='/images/all/img-main.png' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
        </Swiper>
    )
};
export default LoopModeInfinityLoop;