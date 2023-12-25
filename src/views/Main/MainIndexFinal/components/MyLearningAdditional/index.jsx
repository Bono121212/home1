import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";

class MyLearningAdditional extends Component {
    render() {
        return (
            <div className="main-learning-link">
                <div className="inner">
                    <div className="left">
                        <div>
                            <a href={()=>false}>
                                <Icon className="channel24" />
                                <span>관심 채널 설정</span>
                            </a>
                        </div>
                        <div>
                            <a href={()=>false}>
                                <Icon className="main24"/>
                                <span>개인학습</span>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <a href="/support/qa-list-user" className="contact-us">
                            <span>1:1 문의하기</span>
                            <Icon className="arrow-g-16"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyLearningAdditional;