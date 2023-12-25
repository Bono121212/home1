
import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

import AiIcon from '../../../../../resources/images/all/icon-ai.png';
import CommonIcon from '../../../../../resources/images/all/icon-common.png';
import BizIcon from '../../../../../resources/images/all/icon-biz.png';
import HappyIcon from '../../../../../resources/images/all/icon-happy.png';
import { Link } from 'react-router-dom';
// import BmIcon from '../../../../../resources/images/all/icon-bmdesign.png';
// import BoxLoopModeInfinityLoop from '../../../../Main/MainIndex/components/BoxLoopModeInfinityLoop';

class BadgeCategory extends Component {


    //

    render () {
        const params = {
            loop: false,
            pagination: {
                el: '.navi .swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView:5,
            slidesPerGroup:5,
            speed:1800
        }
        //
        return (
            <div className="badge-category sty2">
                <div className="fn-parent-on stick">
                    <Link to="#" className="fn-click">
                        <span className="icon">
                            <span>
                                38
                            </span>
                        </span>
                        <span className="title">
                            <span className="ellipsis">전체 Badge</span>
                        </span>
                    </Link>
                </div>

                <Swiper {...params}>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={AiIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">AI/DT</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="siwper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={CommonIcon} alt="Badge Category Sample Image" />

                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">공통직무</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="siwper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={BizIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">미래 Biz</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={CommonIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="siwper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={BizIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">BM Design</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={HappyIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={HappyIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={HappyIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={HappyIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fn-parent-on">
                            <Link to="#" className="fn-click">
                                <span className="icon">
                                    <span>
                                        <Image src={HappyIcon} alt="Badge Category Sample Image" />
                                    </span>
                                </span>
                                <span className="title">
                                    <span className="ellipsis">행복경영</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </Swiper>
            </div>
        )
    }
}

export default BadgeCategory;