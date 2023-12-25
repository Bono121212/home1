import React, {Component, createRef} from 'react'
import {
    Image, Icon, Button,
} from 'semantic-ui-react'
// import ActionButtons from "../ActionButtons";

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
            <div className="post-view">
                <div className="title-area">
                    <div className="title-inner">
                        <div className="community-name">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향 Community</div>
                        <div className="title">사회적 기업의 생태계 조성 SPC</div>
                        <div className="user-info">
                            <div className="ui profile">
                                <div className="pic">
                                    {/* 프로필 사진 자리
                                    <Image src='/images/all/profile-56-px.png' alt='프로필사진 임시이미지'/>
                                     */}
                                </div>
                            </div>
                            <span className="name">홍길동</span>
                            <span className="date">20.01.06 14:33</span>
                        </div>
                        <div className="actions">
                            <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                            <Button icon className='left postset delete'><Icon className='delete'/>Delete</Button>
                            <Button icon className='left postset reply2'><Icon className='edit2'/>Reply</Button>
                            <Button icon className='left postset commu-list16'><Icon className='commu-list16'/>List</Button>
                        </div>
                    </div>
                </div>
                <div className="content-area">
                    <div className="content-inner">
                        <p>과거에는 경제적 가치 창출만으로도 고객의 지지를 받고 사회로부터 존재 가치를 인정받을 수 있었습니다. 그러나 이제는 경제적 가치뿐 아니라 고객과 사회가 요구하는 여러
                            가치를 충족시 켜야만 기업의 지속 성장과 생존이 가능합니다.이에 SK는 사회적 가치 창출을 새로운 경영전략으로 추진함으로써 사회 구성원들로부터 견고한 지지를 받고,
                            이를 통해 이해관계자들의 행복을 극대화하고자 합니다.</p>
                        <Image src='/images/all/img-800-x-450.jpg' alt='본문 임시이미지'/>
                        <p>
                            ‘DBL(Double Bottom Line) 추구’란 경영 활동 전반에서 경제적 가치와 사회적 가치 창출을 동시에 추구하는 것을 의미합니다. SK는 DBL 추구를
                            통해 사회적 가치를 담아낼 수 있는 형태로 비즈니스 모델(Business Model, BM)의 혁신을 진행하고 있습니다. ‘DBL(Double Bottom Line)
                            추구’란 경영 활동 전반에서 경제적 가치와 사회적 가치 창출을 동시에 추구하는 것을 의미합니다. SK는 DBL 추구를 통해 사회적 가치를 담아낼 수 있는 형태로
                            비즈니스 모델(Business Model, BM)의 혁신을 진행하고 있습니다.<br/><br/>
                            'DBL(Double Bottom Line) 추구’란 경영 활동 전반에서 경제적 가치와 사회적 가치 창출을 동시에 추구하는 것을 의미합니다. SK는 DBL 추구를
                            통해 사회적 가치를 담아낼 수 있는 형태로 비즈니스 모델(Business Model, BM)의 혁신을 진행하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
