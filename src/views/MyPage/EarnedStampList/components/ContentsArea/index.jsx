import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import StampList from '../StampList';
import {Filter} from '../../../../../components';


class ContentsArea extends Component {
    contextRef = createRef()
    state = {
        activeItem: 'EarnedStampList',
        isOnFilter: false,
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    onClickFilter = () => this.setState((prevState) => ({isOnFilter: !prevState.isOnFilter}));

    render() {
        const {activeItem, isOnFilter} = this.state

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            {/*0512 학습완료탭 삭제*/}
                            {/*<Menu.Item*/}
                                {/*name='CompletedList'*/}
                                {/*active={activeItem === 'CompletedList'}*/}
                                {/*onClick={this.handleItemClick}*/}
                                {/*as={Link} to="/mypage/mypage-completed-list"*/}
                            {/*>*/}
                                {/*학습완료<span className="count">+5</span>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item
                                name='MyBadgeList'
                                active={activeItem === 'MyBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/my-badge-list"
                            >
                                My Badge<span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedStampList'
                                active={activeItem === 'EarnedStampList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/mypage/earned-stamp-list"
                            >
                                My Stamp<span className="count">+24</span>
                            </Menu.Item>
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
                    <div className="top-guide-title">
                        <div className="left-wrap">
                            <Button icon className="post excel-down">
                                <Icon className="excel-down"/>
                                엑셀 다운로드
                            </Button>
                            <div className="list-number">총 <strong>24개</strong>의 리스트가 있습니다.</div>
                        </div>
                        <div className="right-wrap">
                            <Button icon className={classNames('btn-filter-blue', isOnFilter ? 'on' : '')} onClick={this.onClickFilter}>
                                <span>Filter(05)</span>
                            </Button>
                        </div>
                    </div>

                    <Filter isOnFilter={isOnFilter}/>

                    {/* card list: card -> board*/}
                    <StampList/>


                    <div className="more-comments">
                        <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
