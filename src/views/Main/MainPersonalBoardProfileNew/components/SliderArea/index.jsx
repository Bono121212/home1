import React from "react";
import { Image } from "semantic-ui-react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import slderImg1 from '../../../../../images/all/bg_img1.png';
import slderImg2 from '../../../../../images/all/bg_img2.png';
import slderImg3 from '../../../../../images/all/bg_img3.png';

const SliderArea = ({parentName}) => {    
        
    const paramstd = {
        loop: true,
        pagination: {
            el: '.std-navi .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.std-navi .swiper-button-prev',
            nextEl: '.std-navi .swiper-button-next'
        },
        containerClass : 'std-slider-container'
    }
    return(
        <div className="std-slider-wrap">
            <div className="std-slider-inner cardSwiper">
                <Swiper {...paramstd}>                    
                    <div className='swiper-slide'>
                        <a href={()=>false} className="inner">
                            <div className="over-img"><Image src={slderImg1} className="tmb"/></div>
                            <div className="sl-info">
                                <span className="sl-ct">혁신디자인</span>
                                <strong className="sl-tit">사무 공간 혁신과 그 변화에 대한 이야기</strong>
                            </div>
                        </a>
                    </div>        
                    <div className='swiper-slide'>
                        <a href={()=>false} className="inner">
                            <div className="over-img"><Image src={slderImg3} className="tmb"/></div>
                            <div className="sl-info">
                                <span className="sl-ct">SV</span>
                                <strong className="sl-tit">내일[Tomorrow+My Work]을 위한 SV</strong>
                            </div>
                        </a>
                    </div>        
                    <div className='swiper-slide'>
                        <a href={()=>false} className="inner">
                            <div className="over-img"><Image src={slderImg2} className="tmb"/></div>
                            <div className="sl-info">
                                <span className="sl-ct">Leadership</span>
                                <strong className="sl-tit">Deep Change Leader로 성장!</strong>
                            </div>
                        </a>
                    </div>
                </Swiper>
                <div className='std-navi'>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </div>
    )
}

export default SliderArea;