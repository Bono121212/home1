import React, {Component, createRef} from 'react'
import {
    Icon, Button
} from 'semantic-ui-react'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap">
                    <div className="cell thumb">
                        <div>
                            <Image src='/images/all/thumb-college-86-px.jpg' alt="All college thumbnail" />
                        </div>
                    </div>
                    <div className="cell title">
                        <h2 className="college-name">AI</h2>
                        <p><em>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</em>AI Category는 SK 구성원 누구나 알아야 할 기본 지식을 바탕으로, 각 산업과
                            직무에서 AI를 활용하는 실무 역량을<br/> 배양하고 AI기술 전문가로 성장할 수 있는 기회를 제공 합니다.</p>
                    </div>
                    <div className="cell btn-wrap">
                        <Button className="personal line">
                            <span>커리큘럼 보기</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
