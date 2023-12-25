import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {Image, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

const LoopModeInfinityLoop = () => {
    const params = {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }
    return (
        <Swiper {...params} className='swiper-container'>
            {/* 1번째 */}
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <a href="https://mysuni.sk.com/suni-main/introduction/MySuni">
                            <div className="main-text">
                                구성원을 위한 자기주도학습 플랫폼<br/>
                                'mySUNI'에 오신 여러분 환영합니다.
                            </div>
                            <div className="sub-text expansion">
                                안녕하세요! "mySUNI"입니다. <br/>
                                친근하게 애칭처럼 "써니"라고 불러주세요! <br/>
                                매 주 4시간만 저와 함께 하시면, 여러분에게 놀라운 일이 생길 것이에요~<br/>
                                <span className="link-tag"><Icon className="arrow right"/>mySUNI 소개보기</span>
                            </div>
                        </a>
                    </div>
                    <div className="visual">
                        <a href="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=61add621-ef7f-4348-82ff-ab43004266f6&offerviewer=false&showtitle=false&interactivity=none&showbrand=false"
                           target="_blank">
                            <Image src='/images/all/img_banner_01.jpg' alt=''/>
                        </a>
                        {/*<div className="panopto">*/}
                        {/*    <iframe*/}
                        {/*        title='video type'*/}
                        {/*        src='https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=61add621-ef7f-4348-82ff-ab43004266f6&offerviewer=false&showtitle=false&interactivity=none&showbrand=false'*/}
                        {/*        width="600"*/}
                        {/*        height="420"*/}
                        {/*        style={{padding: '0px', border: '0px'}}*/}
                        {/*        frameBorder="0"*/}
                        {/*        allowFullScreen*/}
                        {/*        offerviewer={false}*/}
                        {/*        // allow="autoplay"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            {/* 2번째 */}
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <a href="https://mysuni.sk.com/api/depot/depotFile/flow/download/dn-3">
                            <div className="main-text">
                                시스템 기획자가 알려주는<br/>
                                'mySUNI' 100% 활용하기!
                            </div>
                            <div className="sub-text expansion">
                                On-line Contents를 중심으로 Open하여 2월 중순 집합교육을 제공하고,<br/>
                                2월 말 모바일 학습 기능을 제공할 예정입니다.<br/>
                                써니는 여러분과 같이 계속 성장하는 플랫폼입니다. 기대해주세요^^<br/>
                                <span className="link-tag"><Icon className="arrow right"/>매뉴얼 다운로드</span>
                            </div>
                        </a>
                    </div>
                    <div className="visual">
                        <a href="https://mysuni.sk.com/api/depot/depotFile/flow/download/dn-3">
                            <Image src='/images/all/img_banner_02.png' alt=''/>
                        </a>
                    </div>
                </div>
            </div>

            {/* 3번째 */}
            <div className="swiper-slide">
                <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00001/cube/CUBE-35q/lecture-card/LECTURE-CARD-1v1">
                    <div className="info">
                        <div className="text">
                            <div className="main-text">
                                CES 2020의 핵심 트렌드를<br/>
                                "전지적 SK시점"으로 정리한<br/>
                                &lt; CES 2020 치트 키 &gt;

                            </div>
                            <div className="sub-text expansion">
                                <strong>#1. 찐 리뷰 – 10분 순삭!! ‘CES 2020 핵심’ 정리★</strong><br/>
                                #2. 구성원 ‘편애’리뷰 – SK 전시관 기획ᆞ운영자들의 ‘편애’ 가득한 리뷰 Show<br/>
                                #3. SK 반, CES 반 – ‘짬’에서 나오는 리더들의 리뷰!<br/>
                                #4. 성큼 다가온 AI everywhere 시대! SK의 AI는 어디쯤 와있을까?
                            </div>
                        </div>
                        <div className="visual">
                            <Image src='/images/all/img_banner_05.jpg' alt=''/>
                        </div>
                    </div>
                </a>
            </div>

            {/* 4번째 */}
            <div className="swiper-slide">
                <div className="info">
                    <div className="text">
                        <a href="https://mysuni.sk.com/suni-main/board/support/notice-detail/NTC-000033">
                            <div className="main-text">
                                'mySUNI'를 통한 AI/DT 역량 근육!<br/>
                                어떻게 기르나요?<br/>
                                최적의 학습 경로! 써니가 추천합니다!
                            </div>
                            <div className="sub-text expansion">
                                어떤 과정부터 학습해야 할지 막막하신가요?<br/>
                                Target 역량에 따른 학습추천~!<br/>
                                써니가 제안합니다!
                            </div>
                        </a>
                    </div>
                    <div className="visual">
                        <a href="http://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&returnurl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D917b4b5d-f487-4a84-ae05-ab4a0018d159%26offerviewer%3Dfalse%26showtitle%3Dfalse%26interactivity%3Dfalse%26showbrand%3Dfalse"
                           target="_blank">
                            <Image src='/images/all/img_banner_03.jpg' alt=''/>
                        </a>

                        {/*<div className="panopto">*/}
                        {/*    <iframe*/}
                        {/*        title='video type'*/}
                        {/*        src='http://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&returnurl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D917b4b5d-f487-4a84-ae05-ab4a0018d159%26offerviewer%3Dfalse%26showtitle%3Dfalse%26interactivity%3Dfalse%26showbrand%3Dfalse'*/}
                        {/*        width="600"*/}
                        {/*        height="420"*/}
                        {/*        style={{padding: '0px', border: '0px'}}*/}
                        {/*        frameBorder="0"*/}
                        {/*        allowFullScreen*/}
                        {/*        offerviewer={false}*/}
                        {/*        // allow="autoplay"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {/* 5번째 */}
            <div className="swiper-slide">
                <a href="https://mysuni.sk.com/suni-main/board/support/notice-detail/NTC-00002r">
                    <div className="info">
                        <div className="text">
                            <div className="main-text">
                                SK 구성원 이라면 반드시 들어야 할<br/> 핵•인•싸 (공통 권장)과정 60시간
                            </div>
                            <div className="sub-text expansion">
                                AI, DT 등 Future Tech 학습 과정 33시간,<br/>
                                SK행복경영을 더 깊이 이해 할 수 있는 학습 과정 12시간,<br/>
                                BM혁신을 도와주는 학습 과정 12시간, 약 60시간!<br/>
                                총 20개 Course 부터! SUNI Stamp에 도전해보세요~!!!
                            </div>
                        </div>
                        <div className="visual">
                            <Image src='/images/all/img_banner_03_a.png' alt=''/>
                        </div>
                    </div>
                </a>
            </div>


        </Swiper>
    )
};
export default LoopModeInfinityLoop;
