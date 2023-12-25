import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Card } from 'semantic-ui-react'
import CardValueDefault from '../CardValueDefault';
import CardValueDefault01 from '../CardValueDefault01';
import CardValueDefault02 from '../CardValueDefault02';
import CardValueDefault03 from '../CardValueDefault03';
import CardValueDefault04 from '../CardValueDefault04';

const LearningLoopType1 = ({swipeName}) => {

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
        speed:500,
    }
    return (
        <>
            <div className="cardSwiper">
                <Swiper {...CardSwiperType1}>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault01/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault02/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault03/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault04/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault/>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardValueDefault/>
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