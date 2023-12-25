import React, { Component } from 'react'
import { Label , Icon } from 'semantic-ui-react'
import FeedbackSlide from '../FeedbackSlide'

class ContentsFeedback extends Component {
    render(){
        return(
            <div className="badge-detail">
                <div className="ov-paragraph">
                    <div className="section-head">
                        <div className="title">
                            <h3 className="title-style">
                                <Label className="onlytext bold size24">
                                    <Icon className="review" />
                                    <span>Review</span>
                                </Label>
                            </h3>
                        </div>
                    </div>
                    <div className="feedback-body">
                        <div className="inner">
                            <div className="body-left">
                                <div className="tit">“이 강의를 <strong>37명이 평가</strong>했어요!”</div>
                                <div className="fb-chart">
                                    <ul className="chart-list">
                                        <li className="chart-item">
                                            <div className="item-text">
                                                <Icon className="feedback-18px face5"/><strong>매우 만족</strong>
                                            </div>
                                            <div className="item">
                                                <div className="chart-bar">
                                                    <div className="percent top" style={{width : '74.28%'}}/>
                                                </div>
                                                <span>74.28%</span>
                                            </div>
                                        </li>
                                        <li className="chart-item">
                                            <div className="item-text">
                                                <Icon className="feedback-18px face4"/><strong>만족</strong>
                                            </div>
                                            <div className="item">
                                                <div className="chart-bar">
                                                    <div className="percent " style={{width : '16.32%'}}/>
                                                </div>
                                                <span>16.32%</span>
                                            </div>
                                        </li>
                                        <li className="chart-item">
                                            <div className="item-text">
                                                <Icon className="feedback-18px face3"/><strong>보통</strong>
                                            </div>
                                            <div className="item">
                                                <div className="chart-bar">
                                                    <div className="percent " style={{width : '8.38%'}}/>
                                                </div>
                                                <span>8.38%</span>
                                            </div>
                                        </li>
                                        <li className="chart-item">
                                            <div className="item-text">
                                                <Icon className="feedback-18px face2"/><strong>불만족</strong>
                                            </div>
                                            <div className="item">
                                                <div className="chart-bar">
                                                    <div className="percent " style={{width : '0.26%'}}/>
                                                </div>
                                                <span>0.26%</span>
                                            </div>
                                        </li>
                                        <li className="chart-item">
                                            <div className="item-text">
                                                <Icon className="feedback-18px face1"/><strong>매우 불만족</strong>
                                            </div>
                                            <div className="item">
                                                <div className="chart-bar">
                                                    <div className="percent " style={{width : '0.46%'}}/>
                                                </div>
                                                <span>0.46%</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="body-right">
                                <FeedbackSlide />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentsFeedback