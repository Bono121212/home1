import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import OverviewReviewCard from "../OverviewReviewCard";
import OverviewReviewCard02 from "../OverviewReviewCard02";
import OverviewReviewCard03 from "../OverviewReviewCard03";

const OverviewReviewSlide = () => {

    const params = {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            prevEl: '.swiperFeedback .swiper-button-prev',
            nextEl: '.swiperFeedback .swiper-button-next'
        }
    }
    return(
        <div className="cardSwiper feedback">
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <OverviewReviewCard />
                </div>
                <div className='swiper-slide'>
                    <OverviewReviewCard02 />
                </div>
                <div className='swiper-slide'>
                    <OverviewReviewCard03 />
                </div>
                <div className='swiper-slide'>
                    <OverviewReviewCard />
                </div>
            </Swiper>
            <div className='swiperFeedback'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )

}
export default OverviewReviewSlide;