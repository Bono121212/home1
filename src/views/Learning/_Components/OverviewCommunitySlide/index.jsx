import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import OverviewCommunityCard from "../OverviewCommunityCard";
import OverviewCommunityCard02 from "../OverviewCommunityCard02";
import OverviewCommunityCard03 from "../OverviewCommunityCard03";

const OverviewCommunitySlide = () => {
    const params = {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            prevEl: '.swiperCommunity .swiper-button-prev',
            nextEl: '.swiperCommunity .swiper-button-next'
        }
    }
    return(
        <div className="cardSwiper community">
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <OverviewCommunityCard03 />
                </div>
                <div className='swiper-slide'>
                    <OverviewCommunityCard />
                </div>
                <div className='swiper-slide'>
                    <OverviewCommunityCard02 />
                </div>
                <div className='swiper-slide'>
                    <OverviewCommunityCard03 />
                </div>
                <div className='swiper-slide'>
                    <OverviewCommunityCard02 />
                </div>
            </Swiper>
            <div className='swiperCommunity'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
}
export default OverviewCommunitySlide;