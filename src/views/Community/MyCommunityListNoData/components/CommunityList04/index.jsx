import React, {Component, createRef} from 'react'
import {
    Segment, Accordion,
    Sticky, Icon, Button, Menu, Label, Card,
} from 'semantic-ui-react'

class CommunityList01 extends Component {
    state = {}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state
        return (
            <Accordion className='community-item'>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <div className="commu-list-item">
                        {/* 썸네일 */}
                        <div className="thumbnail">
                            <div>
                                <Icon className='thumb60-4'/>
                            </div>
                        </div>
                        {/* //썸네일 */}
                        <div className="title-area">
                            <Label color='orange'>SV</Label>
                            <div className="header ellipsis">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략
                                방향HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향
                            </div>
                            <div className="deatil">
                                <span>새로운 글: 5</span>
                                <span>멤버 : 1,427</span>
                            </div>
                        </div>
                        <div className="btn-area">
                            <Button className='fix line'>{/* View Details */} 상세보기</Button>
                        </div>
                        <div className="icon-area">
                            <Icon className='dropdown'/>
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                            <span className="rep-num">[<strong>3</strong>]</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                </Accordion.Content>
            </Accordion>

        )
    }
}


export default CommunityList01
