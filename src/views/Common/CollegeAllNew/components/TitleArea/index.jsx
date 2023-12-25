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
                        <h2 className="college-name">Management</h2>
                        <p>
                            <strong>신입사원부터 임원까지 SK인이 꼭 알아야 할 경영지식!</strong>
                        </p>
                        <p>Management Category는 경영 직무 Domain 別 역량과 Deep Change의 필수 역량(AI, DT, SV 등) 향상을 통해 Digital Management. Talent”로 성장을 지향합니다.</p>
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
