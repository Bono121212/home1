import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Card } from 'semantic-ui-react'
import { CardLiveType } from '../../../../../components/CardCube';

const LearningLoopType1D = ({ swipeName }) => {

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
        <div className="cardSwiper">
            <Swiper {...CardSwiperType1}>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="ing" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="yet" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="yet5" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="done" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="ing" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="yet" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="yet5" />
                    </Card.Group>
                </div>
                <div className="swiper-slide">
                    <Card.Group className='card-warp'>
                        <CardLiveType cardStatus="done" />
                    </Card.Group>
                </div>
            </Swiper>
            <div className={swipeName}>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
}

export default LearningLoopType1D