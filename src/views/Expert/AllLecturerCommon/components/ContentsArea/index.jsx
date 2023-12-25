import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Introduce'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Introduce'
                                active={activeItem === 'Introduce'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Introduce
                            </Menu.Item>
                            <Menu.Item
                                name='Lecture'
                                active={activeItem === 'Lecture'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Lecture<span className="count">+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="expert-cont">
                        <div className="text-info">
                            <div className="text01">현재 수행 역할 및 업무</div>
                            <div className="text02">
                                - Aibril솔루션사업 (Aibril관련 프로젝트 기술지원)
                            </div>
                            <div className="text01">주요 프로젝트 수행 경험?</div>
                            <div className="text02">
                                - SKB통합데이터관리시스템구축?- Nexcore-ERC 개발?- 현재 SKBP(바이오팜) 프로젝트 수행중
                            </div>
                            <div className="text01">대내/외 전문가 활동 경험 (사내/외 강의 등)</div>
                            <div className="text02">
                                - 사내 C#강의, ICTSummit 발표,출품
                            </div>
                            <div className="dash"/>
                            <div className="text01">강사소개</div>
                            <div className="text02">
                                - 경력 대부분을 Data Architecture 로써 활동했으나 작년부터 인공지능 관련 개발을 했었고,<br/>
                                올해는 Aibril쪽으로 팀을 이동하여 본격적으로 인공지능 관련 사업 수행중입니다.<br/>
                                Data와 인공지능 사업 둘 다 관련된 분야에서 기여할 수 있으면 좋겠습니다.
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
