import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import BadgeContainer from "../../../../components/Badges/BadgeContainer";

const OverviewBadgeSlide = () => {
    const params = {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: '.badgeSwiperNav .swiper-button-prev',
            nextEl: '.badgeSwiperNav .swiper-button-next'
        }
    }
    return (
        <div className="badgeSwiper">
            <Swiper {...params}>
                <div className='swiper-slide'>
                    <BadgeContainer
                        badgeName={'AI/DT Literacy'}
                        level='Level1'
                        badgeStyle={true} //linkable
                        badgeColor={'blue'}
                        cooperation={false} //협력사 유무
                        hasPlus={false} //퍼블용
                        membersCorp={false} //퍼블용 멤버사 구분
                    />
                </div>
                <div className='swiper-slide'>
                    <BadgeContainer
                        badgeName={'Digital HR Transformation'}
                        level='Level2'
                        badgeStyle={true} //linkable
                        badgeColor={'yellow'}
                        cooperation={true} //협력사 유무
                        hasPlus={true} //퍼블용
                        membersCorp={false} //퍼블용 멤버사 구분
                    />
                </div>
                <div className='swiper-slide'>
                    <BadgeContainer
                        badgeName={'Global_중국_Advanced'}
                        level='Level1'
                        badgeStyle={true} //linkable
                        badgeColor={'lightgreen'}
                        cooperation={false} //협력사 유무
                        hasPlus={false} //퍼블용
                        membersCorp={true} //퍼블용 멤버사 구분
                    />
                </div>
            </Swiper>
            <div className='badgeSwiperNav'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
}
export default OverviewBadgeSlide;