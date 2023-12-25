import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu, Select
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import BadgeList from '../BadgeList';

const BadgeLevelOptions = [
    {key: '1', value: 'val01', text: 'Basic'},
    {key: '2', value: 'val02', text: 'Intermediate'},
    {key: '3', value: 'val03', text: 'Advanced'},
]

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'MyBadgeList'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>

                            <Menu.Item
                                name='MyBadgeList'
                                active={activeItem === 'MyBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/my-badge-list"
                                >
                                My Badge<span className="count">+120</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedStampList'
                                active={activeItem === 'EarnedStampList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/earned-stamp-list"
                            >
                                My Stamp<span className="count">+24</span>
                            </Menu.Item>
                            {/*0707 승인관리 -> 별도 메뉴로 분리*/}
                            {/*<Menu.Item*/}
                                {/*name='ApprovalList'*/}
                                {/*active={activeItem === 'ApprovalList'}*/}
                                {/*onClick={this.handleItemClick}*/}
                                {/*as={Link} to="/mypage/approval-required-list"*/}
                            {/*>*/}
                                {/*승인관리*/}
                            {/*</Menu.Item>*/}
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="top-guide-title no-height">
                        <div className="list-number">총 <strong>22개</strong>의 Badge를 획득하였습니다.</div>
                        {/*<Button icon className='left post'><Icon className='filter2'/>Filter</Button>*/}
                        <div className="right-wrap">
                            <Select
                                className="small-border s160 m0"
                                placeholder="Level All"
                                options={BadgeLevelOptions}
                            />
                        </div>
                    </div>

                    {/* Badge list */}
                    <BadgeList/>


                    <div className="more-comments">
                        <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                    </div>

                    {/*획득한 Badge가 없는 경우*/}
                    <div className="no-cont-wrap">
                        <Icon className="no-contents80">
                            <span className="blind">콘텐츠 없음</span>
                        </Icon>
                        <div className="text">
                            획득한 Badge가 없습니다.<br/>등록된 Badge 리스트에서 원하는 Badge에 도전해보세요.
                        </div>
                        <Button icon className="right btn-blue2" as={Link} to="/certification/all-badge-list">
                            Badge List 바로가기
                            <Icon className="morelink"/>
                        </Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
