import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Image } from 'semantic-ui-react'

import playListPlusImg from '../../../../../images/all/btn-playlist-plus-v2.svg'
import playListPlusIco from '../../../../../images/all/icon-create-playlist-v2.svg'
import playListImg1 from '../../../../../images/all/img-pl-sample-01.png'
import playListImg2 from '../../../../../images/all/img-pl-sample-02.png'
import playListImg3 from '../../../../../images/all/img-pl-sample-03.png'
import playListImg4 from '../../../../../images/all/img-pl-sample-04.png'
import playListImg5 from '../../../../../images/all/img-pl-sample-05.png'
import profileImg from '../../../../../images/all/profile-110-px-sample-4.jpg'

const LearningPlaylistType1 = ({swipeName}) => {

    const PlaylistSwiperType1 = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        loop: true,
        initialSlide: 2,
        threshold: 10,
        speed:300,
        navigation: {
            nextEl: "." + swipeName + " .swiper-button-next",
            prevEl: "." + swipeName + " .swiper-button-prev",
        },
    }
    return (
        <>
            <div className="plylistSwiper">
                {/*
                <div className="swiper-slide">
                    Case 정리
                    className='item-plus' >> 아이템 추가
                    className='item case1' >> 내가 만든
                    className='item case2' >> 추천 받은
                    className='item case3' >> 내가 담은

                    <div className='item'>

                    </div>
                </div>
                */}
                <Swiper {...PlaylistSwiperType1}>
                    <div className="swiper-slide">
                        <div className='item plus'>
                            <div className='item-img'>
                                <Image src={playListPlusImg} alt="프로필 추가" />
                            </div>
                            <div className='item-cont'>
                                <div className='plus-wrap'>
                                    <Image src={playListPlusIco} alt="프로필 추가" />
                                    <p>나만의 Playlist를<br/>만들어 보세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item case3'>
                            <div className='item-img'>
                                <Image src={playListImg1} alt="" />
                            </div>
                            <div className='item-cont'>
                                <div className='tit-wrap'>
                                    <em>내가 담은</em>
                                    <strong>&#91;CEO특강_SK에너지&#93;<br/>행복에 이르는 다섯 계단</strong>
                                </div>
                                <div className='profile-wrap'>
                                    <div className='ui profile'>
                                        <div className='pic'>
                                            <Image src={profileImg} alt="프로필 사진" />
                                        </div>
                                        <strong className='name'>
                                            김써니
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item case1'>
                            <div className='item-img'>
                            <Image src={playListImg2} alt="" />
                            </div>
                            <div className='item-cont'>
                                <div className='tit-wrap'>
                                    <em>내가 만든</em>
                                    <strong>메타버스 완벽 정복하기</strong>
                                </div>
                                <div className='profile-wrap'>
                                    <div className='ui profile'>
                                        <div className='pic'>
                                            <Image src={profileImg} alt="프로필 사진" />
                                        </div>
                                        <strong className='name'>
                                            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item case2'>
                            <div className='item-img'>
                                <Image src={playListImg3} alt="" />
                            </div>
                            <div className='item-cont'>
                                <div className='tit-wrap'>
                                    <em>추천 받은</em>
                                    <strong>AI 아싸&#40;Outsider&#41;에서<br/>AI 핵인싸&#40;Insider&#41;로!</strong>
                                </div>
                                <div className='profile-wrap'>
                                    <div className='ui profile'>
                                        <div className='pic'>
                                            <Image src={profileImg} alt="프로필 사진" />
                                        </div>
                                        <strong className='name'>
                                            Benedict Cumberbatch
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item case3'>
                            <div className='item-img'>
                                <Image src={playListImg4} alt="" />
                            </div>
                            <div className='item-cont'>
                                <div className='tit-wrap'>
                                    <em>내가 담은</em>
                                    <strong>&#91;CEO특강_SK에너지&#93;<br/>행복에 이르는 다섯 계단</strong>
                                </div>
                                <div className='profile-wrap'>
                                    <div className='ui profile'>
                                        <div className='pic'>
                                            <Image src={profileImg} alt="프로필 사진" />
                                        </div>
                                        <strong className='name'>
                                            김써니
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item case2'>
                            <div className='item-img'>
                                <Image src={playListImg5} alt="" />
                            </div>
                            <div className='item-cont'>
                                <div className='tit-wrap'>
                                    <em>추천 받은</em>
                                    <strong>AI 아싸&#40;Outsider&#41;에서<br/>AI 핵인싸&#40;Insider&#41;로!</strong>
                                </div>
                                <div className='profile-wrap'>
                                    <div className='ui profile'>
                                        <div className='pic'>
                                            <Image src={profileImg} alt="프로필 사진" />
                                        </div>
                                        <strong className='name'>
                                            Benedict Cumberbatch
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='item plus'>
                            <div className='item-img'>
                                <Image src={playListPlusImg} alt="프로필 추가" />
                            </div>
                            <div className='item-cont'>
                                <div className='plus-wrap'>
                                    <Image src={playListPlusIco} alt="프로필 추가" />
                                    <p>나만의 Playlist를<br/>만들어 보세요.</p>
                                </div>
                            </div>
                        </div>
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

export default LearningPlaylistType1