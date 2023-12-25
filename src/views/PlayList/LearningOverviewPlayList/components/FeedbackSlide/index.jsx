import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeedbackCard from "../FeedbackCard";
import FeedbackCard2 from "../FeedbackCard2";
import FeedbackCard3 from "../FeedbackCard3";

const FeedbackSlide = () => {
    
    const params = {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiperFeedback .swiper-button-prev',
            nextEl: '.swiperFeedback .swiper-button-next'
        }
    }
    return(
        <div className="cardSwiper feedback">
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <FeedbackCard3 />
                </div>
                <div className='swiper-slide'>
                    <FeedbackCard />
                </div>
                <div className='swiper-slide'>
                    <FeedbackCard2 />
                </div>
                <div className='swiper-slide'>
                    <FeedbackCard3 />
                </div>
                <div className='swiper-slide'>
                    <FeedbackCard2 />
                </div>
            </Swiper>
            <div className='swiperFeedback'>
                <div className="swiper-button-prev"></div>                
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
    
}
export default FeedbackSlide;