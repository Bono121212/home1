import React, {Component} from 'react';
import {
    Sticky, Menu, Segment, Dropdown, Icon
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import BadgeCardGroup from '../BadgeCardGroup';
import BadgeCategory from '../BadgeCategory';

const levelOptions = [
    { key: 'val01', value: 'val01', text: 'Level All'}
]

class ContentsArea extends Component {

    state = {
        activeItem: 'AllBadgeList'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const { activeItem } = this.state;

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='AllBadgeList'
                                active={activeItem === 'AllBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/all-badge-list"
                            >
                                {/* Badge List<span className='count'>+24</span> */}
                            </Menu.Item>
                            <Menu.Item
                                name='ChallengingBadgeList'
                                active={activeItem === 'ChallengingBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/challenging-badge-list"
                            >
                                도전중 Badge
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedBadgeList'
                                active={activeItem === 'EarnedBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/earned-badge-list"
                            >
                                My Badge
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                {/*0707 추가 badge category*/}
                <BadgeCategory/>

                <Segment className='full'>
                    <div className='top-guide-title'>
                        <div className='list-number'>총 <strong>22개</strong>의 획득할 수 있는 Badge가 있습니다.</div>
                        <div className='right-wrap'>
                            <Dropdown
                                className='small-border s160'
                                placeholder='Level All'
                                selection
                                options={levelOptions}
                            />
                        </div>
                    </div>

                    {/*Badge list*/}
                    <BadgeCardGroup/>

                    {/*콘텐츠 없음*/}
                    <div className='no-cont-wrap'>
                        <Icon className='no-contents80'/>
                        <div className='text'>
                            등록된 Badge List가 없습니다.
                        </div>
                    </div>

                </Segment>
            </div>
        )
    }
}

export default ContentsArea