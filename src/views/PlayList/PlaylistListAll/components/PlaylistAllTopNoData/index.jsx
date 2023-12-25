import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import '../PlaylistAllTop/style.css';

const PlaylistAllTop = () => {
    const [mySwiper, setMySwiper] = useState(null);
    const [play, setPlay] = useState(true);

    useEffect(() => {
        const swiperInstance = document.querySelector('.swiper-container').swiper;
        setMySwiper(swiperInstance);
    }, []);

    const handlerAutoplay = () => {            
        if (typeof mySwiper === 'object') {
            if (!play) {
                mySwiper.autoplay.start();
                setPlay(!play);
            } else {
                mySwiper.autoplay.stop();
                setPlay(!play);
            }
        }
    }

    const PlaylistTopListParams = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        loop: true,
        initialSlide: 2,
        threshold: 10,
        speed:300,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.playlist-top-controller .swiper-pagination',
            type: 'bullets',
            // clickable: true
        },
    }
    return (
        <div className='playlist-all-top'>
            <Swiper {...PlaylistTopListParams}>
                <div className="swiper-slide">
                    <div className='playlist-top-head'>
                        <strong>전체</strong> Playlist
                    </div>
                    <div className='playlist-top-body'>
                        <div className='playlist-top-title'>
                            <strong>좋아요 Top 3</strong>
                        </div>
                        <ul className='playlist-top-list'>
                            <li><Link to='/playlist/playlist-detail-otherlist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                        </ul>
                        <div className='playlist-top-title'>
                            <strong>담아간 수 Top 3</strong>
                        </div>
                        <ul className='playlist-top-list'>
                            <li><Link to='/playlist/playlist-detail-otherlist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='playlist-top-head'>
                        <strong>우리 회사</strong> Playlist
                    </div>
                    <div className='playlist-top-body'>
                        <div className='playlist-top-title'>
                            <strong>좋아요 Top 3</strong>
                        </div>
                        <ul className='playlist-top-list'>
                            <li><Link to='/playlist/playlist-detail-otherlist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                        </ul>
                        <div className='playlist-top-title'>
                            <strong>담아간 수 Top 3</strong>
                        </div>
                        <ul className='playlist-top-list'>
                            <li><Link to='/playlist/playlist-detail-otherlist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                            <li><Link to='/playlist/playlist-detail-mylist' className='no-link'>-</Link></li>
                        </ul>
                    </div>
                </div>
            </Swiper>
            <div className='playlist-top-controller'>
                <div className='swiper-pagination' />
                <div className='swiper-autoplay'>
                    <button className={'swiper-autoplay-button'+ (play?' is-pause':' is-play')} onClick={handlerAutoplay}><span className='blind'>{play?'정지':'재생'}</span></button>
                </div>
            </div>
        </div>
    )
}
export default PlaylistAllTop;