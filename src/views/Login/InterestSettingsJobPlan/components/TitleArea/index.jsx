import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

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
                    <Icon className='login-sub3 woman'/>
                    <h2>Ucomp님의 현재 직무를 선택해 주세요.</h2>
                    <p>현재 수행하고 있는 업무는 어떤 분야에 해당하시나요?</p>
                    <p>해당 분야가 없으실 경우, 기타를 선택하시고 직접 입력해 주세요.</p>
                </div>
            </>
        )
    }
}

export default TitleArea
