import React from 'react';
import { Icon } from 'semantic-ui-react';
import CubeDetailSec from '../CubeDetailSec';
import OverviewReviewNodata from '../OverviewReviewNodata';
import OverviewReviewSlide from '../OverviewReviewSlide';

const OverviewReview = (props) => {
    return (
        <CubeDetailSec className="ov-review-sec" id="lms-review">
            <div className="detail-sec-head">
                <h2 className="detail-sec-title">학습자들의 생생한 후기</h2>
                <button className='btn-review'>과정 평가하기</button>
            </div>
            <div className="detail-sec-body">
                <div className="feedback-body">
                    <div className="inner">
                        <div className="body-left">
                            <div className="tit">“이 과정을 <strong>37명이 평가</strong>했어요!”</div>
                            <div className="fb-chart">
                                <ul className="chart-list">
                                    <li className="chart-item">
                                        <div className="item-text">
                                            <Icon className="feedback-18px face5" /><strong>매우 만족</strong>
                                        </div>
                                        <div className="item">
                                            <div className="chart-bar">
                                                <div className="percent top" style={{ width: '74.28%' }} />
                                            </div>
                                            <span>74.28%</span>
                                        </div>
                                    </li>
                                    <li className="chart-item">
                                        <div className="item-text">
                                            <Icon className="feedback-18px face4" /><strong>만족</strong>
                                        </div>
                                        <div className="item">
                                            <div className="chart-bar">
                                                <div className="percent " style={{ width: '16.32%' }} />
                                            </div>
                                            <span>16.32%</span>
                                        </div>
                                    </li>
                                    <li className="chart-item">
                                        <div className="item-text">
                                            <Icon className="feedback-18px face3" /><strong>보통</strong>
                                        </div>
                                        <div className="item">
                                            <div className="chart-bar">
                                                <div className="percent " style={{ width: '8.38%' }} />
                                            </div>
                                            <span>8.38%</span>
                                        </div>
                                    </li>
                                    <li className="chart-item">
                                        <div className="item-text">
                                            <Icon className="feedback-18px face2" /><strong>불만족</strong>
                                        </div>
                                        <div className="item">
                                            <div className="chart-bar">
                                                <div className="percent " style={{ width: '0.26%' }} />
                                            </div>
                                            <span>0.26%</span>
                                        </div>
                                    </li>
                                    <li className="chart-item">
                                        <div className="item-text">
                                            <Icon className="feedback-18px face1" /><strong>매우 불만족</strong>
                                        </div>
                                        <div className="item">
                                            <div className="chart-bar">
                                                <div className="percent " style={{ width: '0.46%' }} />
                                            </div>
                                            <span>0.46%</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="body-right">
                            {props.nodata ? <OverviewReviewNodata /> : <OverviewReviewSlide /> }
                        </div>
                    </div>
                </div>
            </div>
        </CubeDetailSec>
    )
}
export default OverviewReview;