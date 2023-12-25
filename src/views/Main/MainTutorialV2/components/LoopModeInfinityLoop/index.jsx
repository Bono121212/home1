import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image} from "semantic-ui-react";
import { Link } from 'react-router-dom';

const LoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
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
                        <div className="main-text">
                            구성원을 위한 자기주도학습 플랫폼<br/>
                            'mySUNI'에 오신 여러분 환영합니다.
                        </div>
                        <div className="sub-text">
                            안녕하세요! "mySUNI"입니다.<br/>
                            친근하게 애칭처럼 "써니"라고 불러주세요!<br/>
                            매 주 4시간만 저와 함께 하시면,여러분에게 놀라운 변화가 생길겁니다.
                        </div>
                    </div>
                    <div className="visual">
                        <Link to="">
                            <Image src='/images/all/main_banner_Rolling01.jpg' alt=''/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <div className="main-text">
                            'mySUNI' 여러분과 함께 성장하는<br/>
                            플랫폼입니다!
                        </div>
                        <div className="sub-text">
                            여러분께서 소중한 의견을 주시면, 더 큰 도움이 됩니다!<br/>
                            향후 컨텐츠는 순차적으로 업데이트 될 예정이며, <br/>
                            집합교육은 2월 중순부터 신청이 가능합니다.<br/>
                            또한, 모바일 학습은 2월 말 제공되니 기대하세요^^
                        </div>
                    </div>
                    <div className="visual">
                        <Link to="">
                            <Image src='/images/all/main_banner_Rolling02.jpg' alt=''/>
                        </Link>
                    </div>
                </div>
            </div>
        </Swiper>
    )
};
export default LoopModeInfinityLoop;