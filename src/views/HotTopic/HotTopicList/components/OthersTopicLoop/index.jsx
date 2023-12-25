import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Icon } from 'semantic-ui-react'
import HopTopicCardDefault from '../HotTopicCardDefault';
import HotTopicCard02 from '../ForPreview/HotTopicCard02'
import HotTopicCard03 from '../ForPreview/HotTopicCard03'

const OthersTopicLoop = ({swipeName}) => {

    const topicGridSwiper = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: "." + swipeName + " .swiper-pagination",
            clickable: true,
        },
        autoplay : {
            delay : 5000,
          },
        speed:500,
    }
    
    return (
        <>
            <div className="cardSwiper othertopicSwiper common-swiper1">
                <Swiper {...topicGridSwiper} >
                    <div className="swiper-slide">
                        <HopTopicCardDefault/>
                        <HotTopicCard02/>
                    </div>
                    <div className="swiper-slide">
                        <HotTopicCard03/>
                        <HopTopicCardDefault/>
                    </div>
                    <div className="swiper-slide">
                        <HotTopicCard02/>
                        <HotTopicCard03/>
                    </div>
                </Swiper>
                <div className={swipeName}>
                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}
                    <div className="swiper-navi-wrap">
                        <div className="swiper-pagination"></div>
                        <div className="btn-play"><Icon name="pause"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OthersTopicLoop