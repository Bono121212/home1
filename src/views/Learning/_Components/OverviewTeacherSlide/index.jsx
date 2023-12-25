import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import OverviewTeacherCard from "../OverviewTeacherCard";
import OverviewTeacherCard02 from "../OverviewTeacherCard02";
import OverviewTeacherCard03 from "../OverviewTeacherCard03";

const OverviewTeacherSlide = () => {
    const params = {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            prevEl: '.swiperTeacher .swiper-button-prev',
            nextEl: '.swiperTeacher .swiper-button-next'
        }
    }
    return(
        <div className="cardSwiper teacher">
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <OverviewTeacherCard />
                </div>
                <div className='swiper-slide'>
                    <OverviewTeacherCard02 />
                </div>
                <div className='swiper-slide'>
                    <OverviewTeacherCard03 />
                </div>
                <div className='swiper-slide'>
                    <OverviewTeacherCard />
                </div>
                <div className='swiper-slide'>
                    <OverviewTeacherCard03 />
                </div>
            </Swiper>
            <div className='swiperTeacher'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
}
export default OverviewTeacherSlide;