import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import GsearchField from '../GsearchField';

class TabSearchTitle extends Component {
    state = {activeItem: 'tabSearchCard'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    
    render() {
        const {activeItem} = this.state
        return (
            <>
                <div className="top_search_area">
                    <GsearchField />

                    <div className="relative_box">
                        <dl>
                            <dt><strong>연관 검색어</strong></dt>
                            <dd>
                                <ul>
                                    <li><Link to="/">데이터 길라잡이</Link></li>
                                    <li><Link to="/">데이터 분석</Link></li>
                                    <li><Link to="/">데이터 뽀개기</Link></li>
                                    <li><Link to="/">데이터 시각화 청각화그리고 다각화</Link></li>
                                    <li><Link to="/">데이터 통계와분석을 한꺼번에</Link></li>
                                    <li><Link to="/">데이터 마케팅</Link></li>
                                    <li><Link to="/">데이터 광고</Link></li>
                                    <li><Link to="/">Data 기반 Deep Change</Link></li>
                                    <li><Link to="/">데이터 통계 분석</Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="tab_search_inner">
                    <Menu className='tab_search_title'>
                        <Menu.Item
                            name='tabSearchAll'
                            active={activeItem === 'tabSearchAll'}
                            onClick={this.handleItemClick}
                            as={Link} to="/searchTotal/search-result-all"
                        >
                            전체
                        </Menu.Item>
                        <Menu.Item
                            name='tabSearchCard'
                            active={activeItem === 'tabSearchCard'}
                            onClick={this.handleItemClick}
                            as={Link} to="/searchTotal/search-result-learncard"
                        >
                            과정
                        </Menu.Item>
                        <Menu.Item
                            name='tabSearachBadge'
                            active={activeItem === 'tabSearachBadge'}
                            onClick={this.handleItemClick}
                            as={Link} to="/searchTotal/search-result-badge"
                        >
                            Badge
                        </Menu.Item>
                        <Menu.Item
                            name='tabSearchCommunity'
                            active={activeItem === 'tabSearchCommunity'}
                            onClick={this.handleItemClick}
                            as={Link} to="/searchTotal/search-result-community"
                        >
                            Community
                        </Menu.Item>
                        <Menu.Item
                            name='tabSearchTeacher'
                            active={activeItem === 'tabSearchTeacher'}
                            onClick={this.handleItemClick}
                            as={Link} to="/searchTotal/search-result-teacher"
                        >
                            강사
                        </Menu.Item>
                    </Menu>
                </div>
            </>
        )
    }
}


export default TabSearchTitle
