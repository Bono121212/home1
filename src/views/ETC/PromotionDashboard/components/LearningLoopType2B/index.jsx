import React from 'react'
import Swiper from 'react-id-swiper';
import { Card } from 'semantic-ui-react'
import { CardCommonType } from '../../../../../components/CardCube';
import 'swiper/css/swiper.css'

const LearningLoopType2 = ({ swipeName }) => {
    const CardSwiperType1 = {
        slidesPerView: 3,
        spaceBetween: 7,
        slidesPerGroup: 3,
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
            <div className="cardSwiper swiper-no-txticon">
                <Swiper {...CardSwiperType1}>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                popular={true}
                                state="learn"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                            />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                popular={false}
                                state="learning"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                            />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                            />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                            />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                popular={true}
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                            />
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <CardCommonType
                                popular={false}
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                            />
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

export default LearningLoopType2