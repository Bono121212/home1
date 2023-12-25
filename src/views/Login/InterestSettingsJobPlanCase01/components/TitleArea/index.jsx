import React, {Component} from 'react'
import {
    Icon
} from 'semantic-ui-react'
// import {Link} from "react-router-dom";

class TitleArea extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <i className="sk-university-login icon"><span className="blind">my suni</span></i>
                    </div>
                    {/* <Step.Group className='number-step'>
                        <Step completed>
                            <Step.Content>
                                <span className="number"><span className="blind">1</span></span>
                                <Step.Title>관심분야</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step active>
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
                    <Icon className='login-sub4 woman'/>
                    <h2>앞으로 도전하고 싶은 직무는 무엇인가요?</h2>
                    <p>지금 당장은 아니더라도 앞으로 해보고 싶은 직무,</p>
                    <p>도전하고 싶은 업무를 선택해주세요.</p>
                    {/* <Link to={'/login/interest-settings-suni-intro'}>
                        <Button className='intro-sk'>mySUNI 소개</Button>
                    </Link> */}
                </div>
            </>
        )
    }
}

export default TitleArea
