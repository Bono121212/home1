import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Icon, Card, Image, Label } from 'semantic-ui-react'
import CardThumbImg2 from '../../../../../images/all/bg-topiccard2.png';
import CardThumbImg3 from '../../../../../images/all/bg-topiccard3.png';
import HopTopicCardDefault from '../HotTopicCardDefault';

const HotTopicLoop = ({swipeName}) => {

    const CardSwiperType1 = {
        slidesPerView: 3,
        spaceBetween: 18,
        slidesPerGroup: 3,
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
                    {/* 아래는 이미지 미리보기를 위해 위 컴포넌트 'HotTopicCardDefault'를 풀어씀 */}
                    <div className="swiper-slide">
                        <Card.Group className='topic-card-warp'>
                            <Card className="topic-item" href="#none">
                                <div className="thumb-img-area">
                                    <Image src={CardThumbImg2} className="thumb-img" alt="프로필 이미지" />
                                </div>
                                <div className="card-inner">                                    
                                    {/* new label 추가 */}
                                    <div className="topic-label"><strong className='new-topic-label'>NEW</strong></div>

                                    <div className="topic-tit"><span>신규사업 준비에 도움 될 만한 과정모음</span></div>
                                    <div className="topic-info-wrap">
                                        <Label className="topic-info course">
                                            <Icon className="coreses-wht"/><span>총 <strong>16개</strong> 학습카드</span>
                                        </Label>
                                        <Label className="topic-info time">
                                            <Icon className="card-time-wht"/><span>4h 30m</span>
                                        </Label>
                                    </div>
                                </div>
                            </Card>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <HopTopicCardDefault/>
                    </div>
                    <div className="swiper-slide">
                        <Card.Group className='topic-card-warp'>
                            <Card className="topic-item" href="#none">
                                <div className="thumb-img-area">
                                    <Image src={CardThumbImg3} className="thumb-img" alt="프로필 이미지" />
                                </div>
                                <div className="card-inner">
                                    <div className="topic-tit"><span>최신 Trend와 AI 기초 파악하기</span></div>
                                    <div className="topic-info-wrap">
                                        <Label className="topic-info course">
                                            <Icon className="coreses-wht"/><span>총 <strong>16개</strong> 학습카드</span>
                                        </Label>
                                        <Label className="topic-info time">
                                            <Icon className="card-time-wht"/><span>4h 30m</span>
                                        </Label>
                                    </div>
                                </div>
                            </Card>
                        </Card.Group>
                    </div>
                    <div className="swiper-slide">
                        <HopTopicCardDefault/>
                    </div>
                    <div className="swiper-slide">
                        <HopTopicCardDefault/>
                    </div>
                    <div className="swiper-slide">
                        <HopTopicCardDefault/>
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

export default HotTopicLoop