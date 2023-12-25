import React from "react";
import { Card } from "semantic-ui-react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import CardValueDefault from '../CardValueDefault';

const CardBelt = ({swipeName}) => {
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

    return(
        <div className="cardSwiper swiper-no-txticon">
            <Swiper {...CardSwiperType1}>
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
            <div className={'swiperWish ' + swipeName}>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>

    )
}

export default CardBelt;