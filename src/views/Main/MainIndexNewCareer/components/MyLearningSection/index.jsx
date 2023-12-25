import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";

class MyLearningSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>학습중인 과정</strong></div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <div className='my-card-list'>
                            <div className="my-card" role='link'>
                                <div className="my-card-thumb">
                                    <span className="thumb-live"><span className="blind">LIVE</span></span>
                                    <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/thumb_mylearning_01.png" alt="" />
                                </div>
                                <div className="my-card-body">
                                    <div className="my-card-title">
                                        <p className="title">
                                            <strong>[궁금한 BM이야기 Y] 여행&항공 플랫폼의 남다른 비즈니스, 경험 설계 ('23년 07월)</strong>
                                        </p>
                                        <p className="date">
                                            <em>학습기간&nbsp;:&nbsp;</em>
                                            <span>23.08.01 15:30</span>
                                        </p>
                                    </div>
                                    <div className="my-card-progress">
                                        <div className="progress">
                                            <div className="progress-info">
                                                <div className="progress-title">
                                                    <span className="progress-txt">학습 진도율</span>
                                                    <span className="progress-val">50%</span>
                                                </div>
                                                <div className="progress-count">
                                                    <span className="progress-txt">5/10</span>
                                                </div>
                                            </div>
                                            <div className="progress-bar" aria-hidden="true">
                                                <span className="progress-active" style={{width:"50%"}}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-card" role='link'>
                                <div className="my-card-thumb">
                                    <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/thumb_mylearning_02.png" alt="" />
                                </div>
                                <div className="my-card-body">
                                    <div className="my-card-title">
                                        <p className="title">
                                            <strong>&lt;SK, DT를 만나다&gt; - SK(주) C&amp;C 편</strong>
                                        </p>
                                        <p className="date">
                                            <em>학습기간&nbsp;:&nbsp;</em>
                                            <span>23.08.02 10:30</span>
                                        </p>
                                    </div>
                                    <div className="my-card-progress">
                                        <div className="progress">
                                            <div className="progress-info">
                                                <div className="progress-title">
                                                    <span className="progress-txt">학습 진도율</span>
                                                    <span className="progress-val">10%</span>
                                                </div>
                                                <div className="progress-count">
                                                    <span className="progress-txt">1/10</span>
                                                </div>
                                            </div>
                                            <div className="progress-bar" aria-hidden="true">
                                                <span className="progress-active" style={{width:"10%"}}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </>
        )
    }

}

export default MyLearningSection