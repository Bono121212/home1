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
            <div className="community-item">
                <div className="title">
                    <div className="commu-list-item">
                        <div className="thumbnail">
                            <div>
                                <Icon className='thumb60-2'/>
                            </div>
                        </div>
                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header ellipsis">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향HR - Agile
                                HR Fundamentals 회사의 비전달성을 위한 HR전략 방향
                            </div>
                            <div className="deatil">
                                <span className="red">승인 됨</span>
                                <span>등록 신청 날짜 : 2020.01.19</span>
                                <span>커뮤니티 시작 날짜 : 2020.01.19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CommunityList01
