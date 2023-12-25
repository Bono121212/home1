import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";

class MyLearningAdditional extends Component {
    render() {
        return (
            <div className="main-learning-link sty2">
                <div className="inner">
                    <div className="left">
                        <div>
                            <a href={()=>false}>
                                <Icon className="channel25" />
                                <span>관심 채널 설정</span>
                            </a>
                        </div>
                        <div className="color-line09">
                            <a href={()=>false}>
                                <Icon className="card-main24"/>
                                <span>개인학습</span>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <a href="/support/qa-list-user" className="contact-us wh">
                            <span>1:1 문의하기</span>
                            <Icon className="arrow-w-16"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyLearningAdditional;