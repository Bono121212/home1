import React from 'react';
import { Link } from 'react-router-dom';
import SvImg01 from "../../../../../images/all/img-co-4-1.png";
import SvImg02 from "../../../../../images/all/img-co-4-2-v-2.png";
import SvImg03 from "../../../../../images/all/img-co-4-3-v-2.png";
import SvImgEng01 from "../../../../../images/all/sv-con-01-eng-v-2.png";
import SvImgEng02 from "../../../../../images/all/sv-con-02-eng-v-2.png";
import SvImgEng03 from "../../../../../images/all/sv-con-03-eng-v-2.png";
import SvImgChn01 from "../../../../../images/all/sv-con-01-chn-v-2.png";
import SvImgChn02 from "../../../../../images/all/sv-con-02-chn-v-2.png";
import SvImgChn03 from "../../../../../images/all/sv-con-03-chn-v-2.png";
import './style.css';

const TabMenuInnerSubSV = () => {
    return (
        <>
            <div className="college-cont-map sv">
                <div className="belt">
                    <div className="guide-area">
                        <div className="guide-text">
                            <p className="p_link">
                                각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
                            </p>
                        </div>
                        <div className="guide-btn">
                            <Link
                                to="https://mysuni.sk.com/suni-main/lecture/category/CLG00004/channels/pages/1"
                                className="item-button"
                            >
                                <img
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/icon-course-book.png"
                                    alt="CourseBook"
                                />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className="map-area">
                        <img src={SvImg01} alt="학습 Flow" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map sv">
                <div className="belt">
                    <div className="map-area">
                        <img src={SvImg02} alt="채널" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map sv">
                <div className="belt">
                    <div className="map-area">
                        <img src={SvImg03} alt="전체 커리큘럼 Flow" />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubSVEng = () => {
    return (
        <>
            <div className="college-cont-map sv">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map-area">
                        <img src={SvImgEng01} alt="학습 Flow" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map sv">
                <div className="belt">
                    <div className="map-area">
                        <img src={SvImgEng02} alt="채널" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img src={SvImgEng03} alt="전체 커리큘럼 Flow" />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubSVChn = () => {
    return (
        <>
            <div className="college-cont-map sv">
                <div className="belt">
                    <div className='guide-area' />
                    <div className="map">
                        <img src={SvImgChn01} alt="학습 Flow" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map sv">
                <div className="belt">
                    <div className="map">
                        <img src={SvImgChn02} alt="채널" />
                    </div>
                </div>
            </div>

            <div className="college-cont-map">
                <div className="belt">
                    <div className="map">
                        <img src={SvImgChn03} alt="전체 커리큘럼 Flow" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { TabMenuInnerSubSV, TabMenuInnerSubSVEng, TabMenuInnerSubSVChn }
