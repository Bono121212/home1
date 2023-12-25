import React, {Component, createRef} from 'react'
import {
    Icon, Button
} from 'semantic-ui-react'
// import CollegeAllManagement from "../../index";

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap">
                    <div className="cell title">
                        <h2 className="college-name small">
                            <strong>마케팅/브랜딩</strong> 의 학습 과정입니다.
                        </h2>
                        <p>
                            AI Biz. Implementation Channel은 SK 구성원 누구나 알아야 할 기본 지식을 바탕으로, 각 산업과 직무에서 AI를 활용하는 실무 역량을 배양하고
                            AI기술 전문가로 성장할 수 있는 기회를 제공 합니다.
                        </p>
                    </div>
                    <div className="cell btn-wrap">
                        <Button className='orange-arrow'>
                            <Icon className='post'/>커리큘럼 보기
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
