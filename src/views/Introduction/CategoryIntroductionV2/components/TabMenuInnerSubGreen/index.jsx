import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import GreenImg01 from "../../../../../images/all/green-c-01-v-2.png";
import GreenImg02 from "../../../../../images/all/green-c-02-v-2.png";
import GreenImg01Eng from "../../../../../images/all/green-c-01-eng-v-2.png";
import GreenImg02Eng from "../../../../../images/all/green-c-02-eng-v-2.png";
import GreenImg01Chn from "../../../../../images/all/green-con-01-chn-v-2.png";
import GreenImg02Chn from "../../../../../images/all/green-con-02-chn-v-2.png";

const TabMenuInnerSubGreen = () => {
    return (
        <>
            <div className="college-cont-map green">
                <div className="belt">
                    <div className="guide-area">
                        <div className="guide-text">
                            <p className="p_link">
                                각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
                            </p>
                        </div>
                        <div className="guide-btn">
                            <Link
                                to="https://mysuni.sk.com/suni-main/lecture/category/CLG0001c/channels/pages/1"
                                className="item-button"
                            >
                                <img
                                    src={CourseBook}
                                    alt="CourseBook"
                                />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className="map-area">
                        <img
                            src={GreenImg01}
                            alt="course"
                        />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img
                            src={GreenImg02}
                            alt="curriculum"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubGreenEng = () => {
    return (
        <>
            <div className="college-cont-map green">
                <div className="belt">
                    <div className="guide-area" />
                    <div className="map-area">
                        <img
                            src={GreenImg01Eng}
                            alt="course"
                        />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img
                            src={GreenImg02Eng}
                            alt="curriculum"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
const TabMenuInnerSubGreenChn = () => {
    return (
        <>
            <div className="college-cont-map green">
                <div className="belt">
                    <div className="guide-area" />
                    <div className="map-area">
                        <img
                            src={GreenImg01Chn}
                            alt="course"
                        />
                    </div>
                </div>
            </div>
            <div className="college-cont-map">
                <div className="belt">
                    <div className="map-area">
                        <img
                            src={GreenImg02Chn}
                            alt="curriculum"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export { TabMenuInnerSubGreen, TabMenuInnerSubGreenEng, TabMenuInnerSubGreenChn }
