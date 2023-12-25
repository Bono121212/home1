import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import CardValueLearningStart from "../CardValueLearningStart";
// import CardValuePlay from "../CardValuePlay";
// import CardValueStamp from "../CardValueStamp";
// import CardValueDefault from "../CardValueDefault";
// import CardValueDownload from "../CardValueDownload";
// import CardValueJoin from "../CardValueJoin";

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
                        <div className="list-number">총 <strong>0개</strong>의 리스트가 있습니다.</div>
                        <Button icon className='left post'><Icon className='filter2'/>Filter</Button>
                    </div>

                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/>
                        <span className='blind'>콘텐츠 없음</span>
                        <div className="text">
                            Completed List에 해당하는<br/>
                            학습 과정이 없습니다.
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
