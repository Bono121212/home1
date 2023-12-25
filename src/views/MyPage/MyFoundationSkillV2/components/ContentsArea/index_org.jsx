import React, { useEffect, useRef } from 'react';
import CubeDetailSec from '../../../../Learning/_Components/CubeDetailSec/index';
const ContentsArea = (props) => {
    return (
        <CubeDetailSec className="my_fs_sec">
            <div className="my_fs_list">
                <div className="my_fs_item my_fs_yellow">
                    <div className="my_fs_box">
                        <div className="my_fs_head">
                            <div className="title_area">
                                <p className='title'><strong>Business Capability</strong></p>
                                <p className='explain'>미래 변화를 읽고 새로운 <br />Biz.Model을 구체화하는 능력</p>
                            </div>
                            <div className="prgrs_area">
                                <div className='prgrs_circle is_completed' data-percent="25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" className='circle_bar'>
                                        <circle cx="63" cy="63" r="63" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" className='circle_act'>
                                        <circle cx="63" cy="63" r="63" />
                                    </svg>
                                    <span className="icon complete" aria-hidden="true"></span>
                                    <span className="icon pic" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                        <div className="my_fs_body">
                            <div className="my_fs_card_list">
                                <div className='my_fs_card type_1'>
                                    <div className='my_fs_card_thumb'>
                                        <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample01.png" alt="" />
                                        <span className="time">2h 30m</span>
                                    </div>
                                    <div className="my_fs_card_body">
                                        <div className="title_area">
                                            <p className="title">Business Capability</p>
                                            <p className="subject"><strong>미래 경영환경을 ‘나의 업무'에 반영하기</strong></p>
                                            <p className="info">
                                                <span className="badge green"></span>
                                                Future Biz. Perspective 외 <span className='count'>1</span>개
                                            </p>
                                        </div>
                                        <div className="prgrs_area">
                                            <div className="prgrs_line">
                                                <div className="prgrs_bar">
                                                    <div className="prgrs_act" style={{width:'25%'}}></div>
                                                </div>
                                                <div className="prgrs_state">
                                                    <span className="count">25</span>%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CubeDetailSec>
    )
}
export default ContentsArea