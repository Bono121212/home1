import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

class CourseTRS extends Component {
    render() {
        return (
            <>
                <div className="cube-box">
                    <div className="bar typeB">
                        <div className="category">
                            <Icon className="icon-test24"/>
                            <span>Test</span>
                        </div>
                        <div className="tit">
                            <a href={()=>false} className="ellipsis">2.1. Digital Platform 인류 삶의 근간이 되다.</a>
                        </div>
                        <div className="right">
                            <a href={()=>false} className="btn-play black">
                                <span className="text">Test</span>
                                <Icon className="play-black24"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cube-box">
                    <div className="bar typeB">
                        <div className="category">
                            <Icon className="icon-report24"/>
                            <span>Report</span>
                        </div>
                        <div className="tit">
                            <a href={()=>false} className="ellipsis">2.1. Digital Platform 인류 삶의 근간이 되다.</a>
                        </div>
                        <div className="right">
                            <a href={()=>false} className="btn-play black">
                                <span className="text">과제제출</span>
                                <Icon className="play-black24"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cube-box">
                    <div className="bar typeB">
                        <div className="category">
                            <Icon className="icon-survey24"/>
                            <span>Survey</span>
                        </div>
                        <div className="tit">
                            <a href={()=>false} className="ellipsis">2.1. Digital Platform 인류 삶의 근간이 되다.</a>
                        </div>
                        <div className="right">
                            <a href={()=>false} className="btn-play black">
                                <span className="text">설문하기</span>
                                <Icon className="play-black24"/>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CourseTRS;