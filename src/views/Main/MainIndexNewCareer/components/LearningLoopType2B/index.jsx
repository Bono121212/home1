import React from 'react'
import Swiper from 'react-id-swiper';
import { Card } from 'semantic-ui-react'
import { CardCommonCareerType } from '../../../../../components/CardCube';
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
                            <div> {/* 2023-10 data 값이 저장되는 div를 개발 구조와 동일하게 추가 */}
                            <CardCommonCareerType
                                popular={true}
                                state="learn"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src=""
                            />
                            </div>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <div>
                            <CardCommonType
                                popular={false}
                                state="learning"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/public/images/all/banner-280-career.png"
                            />
                            </div>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <div>
                            <CardCommonCareerType
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                            />
                            </div>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <div>
                            <CardCommonType
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                            />
                            </div>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <div>
                            <CardCommonCareerType
                                popular={true}
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                            />
                            </div>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='card-warp'>
                            <div>
                            <CardCommonCareerType
                                popular={false}
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                            />
                            </div>
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
