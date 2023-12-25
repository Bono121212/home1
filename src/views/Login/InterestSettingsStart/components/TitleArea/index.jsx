import React, {Component} from 'react'
import {
    Icon, Step, Button
} from 'semantic-ui-react'

class TitleArea extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <Icon className='sk-university-login'/>
                        <span className="blind">SK university</span>
                    </div>

                    <Step.Group>
                        <Step completed>
                            <Step.Content>
                                <span className="number"><span className="blind">1</span></span>
                                <Step.Title>관심분야</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step completed>
                            <Step.Content>
                                <span className="number"><span className="blind">2</span></span>
                                <Step.Title>직무계획</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step active>
                            <Step.Content>
                                <span className="number"><span className="blind">3</span></span>
                                <Step.Title>학습형태</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </div>
                <div className="title-box">
                    <Icon className='woman'/>
                    <h2>학습형태</h2>
                    <p>여러분의 학습 목표와 선호하는 학습 방식과 오프라인 강의 장소, 시간을 선택해주세요.</p>
                    <p>여러분이 선택한 관심사는 추후 설정에서 변경도 가능합니다.</p>
                    <p>관심사가 바뀌게 되면 꼭 변경 내용을 재선택해주세요.</p>
                    <Button className='intro-sk'>SK university 소개</Button>
                </div>
            </>
        )
    }
}

export default TitleArea
