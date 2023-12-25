import React, {Component} from 'react'
import {
    Icon
} from 'semantic-ui-react';

class TitleArea extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <i className="sk-university-login icon"><span className="blind">my suni</span></i>
                    </div>
                </div>
                <div className="title-box">
                    <Icon className='login-sub6 woman'/>
                    <h2>학습 목표 설정</h2>
                    <p>여러분의 취향에 맞추어 학습방식을 제안해 드릴게요.</p>
                    <p>학습목표 달성과 커리어 개발을 위해 mySUNI와 함께 성장해 보아요.</p>
                </div>
            </>
        )
    }
}

export default TitleArea
