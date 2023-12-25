import React from 'react'
import Swiper from 'react-id-swiper';
import { Card } from 'semantic-ui-react';
import 'swiper/css/swiper.css'
import { CardPeriodType } from '../../../../../components/CardCube';

const LearningLoopType1 = ({ swipeName }) => {

    const CardSwiperType1 = {
        slidesPerView: 4,
        spaceBetween: 7,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "." + swipeName + " .swiper-button-next",
            prevEl: "." + swipeName + " .swiper-button-prev",
        },
        speed: 500,
    }
    return (
        <>
            <div className="cardSwiper">
                <Swiper {...CardSwiperType1}>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="today" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="remain" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="full" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="pending" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="upcoming" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="learning" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="completed" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="applyEnd" />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardPeriodType cardStatus="studyEnd" />
                        </Card.Group>
                    </div>
                </Swiper>
                <div className={swipeName}>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </>
    )
}

export default LearningLoopType1