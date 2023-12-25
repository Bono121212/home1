import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu, Checkbox, Select
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import RadioWrap from '../RadioWrap';
import ActionButtons from "../ActionButtons";
// import ApplyStatusModal from "../../../ApprovalRequiredList/components/ApplyStatusModal";

const classOptions = [
    { key: 'val01', value: 'val01', text: '전체과정' },
    { key: 'val02', value: 'val02', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val03', value: 'val03', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val04', value: 'val04', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val05', value: 'val05', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val06', value: 'val06', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val07', value: 'val07', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val08', value: 'val08', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val09', value: 'val09', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val10', value: 'val10', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' }
]

const numOptions = [
    { key: 'val01', value: 'val01', text: '전체차수' },
    { key: 'val02', value: 'val02', text: '1차' },
    { key: 'val03', value: 'val03', text: '2차' }
]

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'ApprovalList'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='ApprovalList'
                                active={activeItem === 'ApprovalList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/approval/approval-required-list"
                            >
                                유료과정<span className="count">+120</span>
                            </Menu.Item>
                            <Menu.Item
                                name='APLApprovalList'
                                active={activeItem === 'APLApprovalList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/approval/apl-approval-list"
                            >
                                개인학습<span className="count">+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className='confirm-list-wrap'>
                        <div className='list-top'>
                            <div className="top">
                                <RadioWrap/>
                            </div>

                            <div className="bottom">
                                <div className="left-area">
                                    <ActionButtons/>
                                </div>
                                <div className="right-area">

                                    {/*신청현황 모달팝업*/}
                                    {/*<ApplyStatusModal/>*/}

                                    <Select placeholder='전체과정' className='ui small-border dropdown selection list-title-sel'
                                            options={classOptions}
                                    />
                                    <Select placeholder='전체차수' className='ui small-border dropdown selection list-num-sel'
                                            options={numOptions}
                                    />
                                </div>
                            </div>
                        </div>

                        {/*목록*/}
                        <div className='confirm-list'>
                            <div className="row thead">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">No.</span>
                                <span className="cell name">신청자</span>
                                <span className="cell title">과정명</span>
                                <span className="cell">(차수)교육기간</span>
                                <span className="cell">신청일자</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base' />
                                </span>
                                <span className="cell num">20</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">일이삼사오육칠팔구십</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">19</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">일이삼사오육</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">18</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">일이삼사오</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">17</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">일이삼사</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">16</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">15</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">14</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">13</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">12</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">11</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">10</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">9</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">8</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">7</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">6</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">5</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">4</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">3</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">2</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                            <div className="row">
                                <span className="cell ck">
                                    <Checkbox className='base'/>
                                </span>
                                <span className="cell num">1</span>
                                <span className="cell name">
                                    <a href="#none" target="_blanl">
                                        <span className="ellipsis">홍길동</span>
                                    </a>
                                </span>
                                <span className="cell title">
                                    <a href="#none" target="_blank" className="ellipsis">
                                        AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                    </a>
                                </span>
                                <span className="cell">2020.02.20~2020.03.20</span>
                                <span className="cell">2019.10.08</span>
                            </div>
                        </div>

                        <div className="more-comments">
                            <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                        </div>
                    </div>

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
