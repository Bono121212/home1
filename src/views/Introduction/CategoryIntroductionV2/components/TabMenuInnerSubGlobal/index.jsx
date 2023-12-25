import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import './style.css';
import GlobalImg from "../../../../../images/all/global-con-v-2.png";
import GlobalEngImg from "../../../../../images/all/global-con-v-2-eng.png";
import GlobalChnImg from "../../../../../images/all/global-con-chn-v-2.png";

const TabMenuInnerSubGlobal = () => {
    return (
        <>
            <div className="college-cont-map global">
                <div class="belt">
                    <div className="guide-area">
                        <div className="guide-text">
                            <p class="p_link">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
                        </div>
                        <div class="guide-btn">
                            <Link to="https://mysuni.sk.com/suni-main/lecture/category/CLG00006/channels/pages/1" class="item-button">
                                <img src={CourseBook} alt="CourseBook" />
                                과정 바로가기
                            </Link>
                        </div>
                    </div>
                    <div className="map-area">
                        <img
                            src={GlobalImg}
                            alt="커리큘럼"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const TabMenuInnerSubGlobalEng = () => {
    return (
        <>
            <div className="college-cont-map global">
                <div class="belt">
                    <div className="guide-area" />
                    <div className="map-area">
                        <img 
                            src={GlobalEngImg} 
                            alt="커리큘럼" 
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

const TabMenuInnerSubGlobalChn = () => {
    return (
        <>
            <div className="college-cont-map global">
                <div class="belt">
                    <div className="guide-area" />
                    <div className="map-area">
                        <img 
                            src={GlobalChnImg} 
                            alt="커리큘럼" />
                    </div>
                </div>
            </div>

        </>
    )
}

export { TabMenuInnerSubGlobal, TabMenuInnerSubGlobalEng, TabMenuInnerSubGlobalChn }
