import React, {Component} from 'react'
import {
    Icon
} from 'semantic-ui-react'

class TitleArea extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <i className="sk-university-login icon"><span className="blind">my suni</span></i>
                    </div>
                    {/* <Step.Group className='number-step'>
                        <Step active>
                            <Step.Content>
                                <span className="number"><span className="blind">1</span></span>
                                <Step.Title>관심분야</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <span className="number"><span className="blind">2</span></span>
                                <Step.Title>직무계획</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <span className="number"><span className="blind">3</span></span>
                                <Step.Title>학습형태</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group> */}
                </div>
                <div className="title-box">
                    <Icon className='login-sub5 woman'/>
                    <h2>요즘 관심있는 분야는 무엇인가요?</h2>
                    <p>mySUNI에서 학습할 수 있는 콘텐츠 영역입니다.</p>
                    <p>관심 분야를 3개 이상 선택해 주시면, 취향에 맞는 콘텐츠를 추천해드릴게요.</p>
                    {/* <Link to={'/login/interest-settings-suni-intro'}>
                        <Button className='intro-sk'>mySUNI 소개</Button>
                    </Link> */}
                </div>
            </>
        )
    }
}

export default TitleArea
