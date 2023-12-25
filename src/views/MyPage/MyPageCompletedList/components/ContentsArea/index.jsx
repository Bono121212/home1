import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu, Card,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import CardValue01 from "../CardValue01";
import CardValue02 from "../CardValue02";
import CardValue03 from "../CardValue03";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'CompletedList'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='CompletedList'
                                active={activeItem === 'CompletedList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/mypage-completed-list"
                            >
                                학습완료<span className="count">+5</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedStampList'
                                active={activeItem === 'EarnedStampList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/earned-stamp-list"
                            >
                                보유스템프<span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ApprovalList'
                                active={activeItem === 'ApprovalList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/approval-required-list"
                            >
                                승인관리
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="top-guide-title">
                        <div className="list-number">총 <strong>3개</strong>의 리스트가 있습니다.</div>
                        <Button icon className='left post'><Icon className='filter2'/>Filter</Button>
                        <div className="right">
                            <span className="excel-wrap-guide"> &#8251; my company 학습시간은 제외</span>
                            <span className="excel-wrap">
                                <Button className='left post excel-down'><Icon className='excel-down'/> 엑셀 다운로드</Button>
                            </span>
                        </div>
                    </div>

                    {/* card list */}
                    <Card.Group className='list-cards'>
                        <CardValue01/>
                        <CardValue02/>
                        <CardValue03/>
                        <CardValue03/>
                        <CardValue03/>
                    </Card.Group>

                    <div className="more-comments">
                        <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
