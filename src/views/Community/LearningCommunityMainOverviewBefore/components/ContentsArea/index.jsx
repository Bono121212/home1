import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Label, Icon, List
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import JoinedStateCard from "../JoinedStateCard";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Overview'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner summary">
                        <Label color='blue'>leadership</Label>
                        <span className="detail-tit">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향 Community</span>
                    </div>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Overview'
                                active={activeItem === 'Overview'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Overview
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    {/* 우측 sub info  */}
                    <JoinedStateCard/>
                    {/* //우측 sub info */}

                    {/* 좌측 contents */}
                    <div className="contents overview">
                        {/*교육내용 (필수) */}
                        <div className="class-guide-txt">
                            UI/UX의 세계로 들어가도 어디서부터 시작해야 할지 모르겠나요?<br/>
                            이 과정을 통해 당신은 당신의 CV에 UX 디자이너를 추가하고 당신의 새로운 기술에 대한 보수를 받기 시작할 수 있을 것입니다.<br/><br/>
                            안녕하세요. 내 이름은 홍길동이며, Adobe Certified 강사입니다. 어도비 XD를 효율적이고 포괄적으로 배울 수 있도록 도와주러 이 강좌를 개설하였습니다.
                            XD는 업계 전문가들이 고품질의 기능성 모형을 생산하기 위해 사용하는 환상적인 디자인 도구입니다. 본 코스를 통해 실용적이고 효과적인 UX(User
                            Experience) 및 UI(User Interface) 설계를 제작할 수 있습니다.
                        </div>
                        {/*//교육내용 */}

                        {/*Sub Category
                            .open추가 시 : hide 버튼 show / more 버튼 hide / list 높이 auto
                         */}
                        <div className="ov-paragraph sub-category fn-parents">
                            <h3 className="title-style">
                                <Label className='onlytext bold size24'>
                                    <Icon className='category'/><span>{/*Sub Category*/}서브채널</span>
                                </Label>
                            </h3>
                            <List bulleted>
                                <List.Item>
                                    <div className="title">AI</div>
                                    <div className="detail">
                                        AI Biz Essential / AI Tech Biginner / Language AI / AI Tech Advanced / Speech AI
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div className="title">Leadership</div>
                                    <div className="detail">
                                        Leadership / Leading Myself / Leading Business / Leadership Pipeline /
                                        Leadership Clinic Leadership / Leading Myself / Leading Business / Leadership
                                        Pipeline
                                    </div>
                                </List.Item>
                            </List>
                        </div>
                        {/*//Sub Category */}

                        {/*강좌소개영역1 */}
                        <div className="ov-paragraph">
                            <List>
                                <List.Item>
                                    <div className="title">
                                        <h3 className="title-style">
                                            <Label className='onlytext bold size24'>
                                                <Icon className='goal'/><span>{/*Goal*/}학습목표</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className="detail">UX 디자이너가 되기위한 발걸음</div>
                                </List.Item>
                                <List.Item>
                                    <div className="title">
                                        <h3 className="title-style">
                                            <Label className='onlytext bold size24'>
                                                <Icon className='target'/><span>{/*Target*/}대상</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className="detail">mySUNI 모든 회원</div>
                                </List.Item>
                                <List.Item>
                                    <div className="title">
                                        <h3 className="title-style">
                                            <Label className='onlytext bold size24'>
                                                <Icon className='host'/><span>{/*Host*/}교육기관 출처</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className="detail">SK커뮤니케이션즈</div>
                                </List.Item>
                            </List>
                        </div>
                        {/*//강좌소개영역1 */}

                        {/*강좌소개영역2 */}
                        <div className="ov-paragraph info-box2">
                            <List bulleted>
                                <List.Item>
                                    <div className="title">{/*Requirements*/}이수조건</div>
                                    <div className="detail">총 강의 3시간 중 전제적인 분위기가 다운되지 않으면 됨</div>
                                </List.Item>
                                <List.Item>
                                    <div className="title">{/*Other Guides*/}기타안내</div>
                                    <div className="detail">주말 학습장소는 주차공간이 협소하니 대중교통을 이용해 주시기 바랍니다. 주말 학습장소는 주차공간이 협소하니
                                        대중교통을 이용해 주시기 바랍니다. 주말 학습장소는 주차공간이 협소하니 대중교통을 이용해 주시기 바랍니다. 주말 학습장소는 주차공간이 협소하니
                                        대중교통을 이용해 주시기 바랍니다.
                                    </div>
                                </List.Item>
                            </List>
                        </div>
                        {/*//강좌소개영역2 */}
                        {/*태그 */}
                        <div className="ov-paragraph tag-wrap">
                            <List>
                                <List.Item>
                                    <div className="title">
                                        <h3 className="title-style">
                                            <Label className='onlytext bold size24'>
                                                <Icon className='tag2'/><span>{/*Tag*/}태그</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className="detail">
                                        <span className='ui label tag'>AI</span>
                                        <span className='ui label tag'>Database</span>
                                        <span className='ui label tag'>Design</span>
                                        <span className='ui label tag'>Project Managing</span>
                                        <span className='ui label tag'>Project Managing</span>
                                        <span className='ui label tag'>AI</span>
                                        <span className='ui label tag'>AI</span>
                                        <span className='ui label tag'>AI</span>
                                        <span className='ui label tag'>Database</span>
                                        <span className='ui label tag'>Design</span>
                                        <span className='ui label tag'>Project Managing</span>
                                        <span className='ui label tag'>Project Managing</span>
                                        <span className='ui label tag'>AI</span>
                                        <span className='ui label tag'>AI</span>
                                    </div>
                                </List.Item>
                            </List>
                        </div>
                        {/*//태그 */}
                    </div>
                    {/* 좌측 contents */}
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
