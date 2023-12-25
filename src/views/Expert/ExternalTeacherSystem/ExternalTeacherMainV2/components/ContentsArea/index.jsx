import React, {Component, createRef} from 'react';
import { Segment, Menu, Sticky } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import Paging from "../Paging";
import AllStatus from "../AllStatus";
import CardTableTitle from '../CardTableTitle';
import CardTableBody from '../CardTableBody';
import CubeTableBody from '../CubeTableBody';
import CubeTableTitle from '../CubeTableTitle';
import CommunityTableTitle from '../CommunityTableTitle';
import CommunityTableBody from '../CommunityTableBody';

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: this.props.activeItem}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (

            <div className="main-info-contents" ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Card'
                                active={activeItem === 'Card'}
                                onClick={this.handleItemClick}
                                as={Link} to="/expert/external-teacher-main-card-v2"
                                >
                                카드<span className='count'>+5</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Cube'
                                active={activeItem === 'Cube'}
                                onClick={this.handleItemClick}
                                as={Link} to="/expert/external-teacher-main-cube-v2"
                                >
                                큐브<span className='count'>+13</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Community'
                                active={activeItem === 'Community'}
                                onClick={this.handleItemClick}
                                as={Link} to="/expert/external-teacher-main-community-v2"
                                >
                                커뮤니티<span className='count'>+13</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                {(this.props.activeItem !== "Community") &&
                    <AllStatus/>
                }
                <div className='learning-section'>
                    {(activeItem === 'Card') &&
                        <Segment className='full'>
                            <div className="cont-inner">
                                {/* 테이블 제목 */}
                                <CardTableTitle />

                                {/* 테이블 리스트 */}
                                <CardTableBody />

                                <div className="paging margin-none">
                                    <Paging />
                                </div>
                            </div>
                        </Segment>
                    }
                    {(activeItem === 'Cube') &&
                        <Segment className='full'>
                            <div className="cont-inner">
                                {/* 테이블 제목 */}
                                <CubeTableTitle />

                                {/* 테이블 리스트 */}
                                <CubeTableBody />

                                <div className="paging margin-none">
                                    <Paging />
                                </div>
                            </div>
                        </Segment>
                    }
                    {(activeItem === 'Community') &&
                        <Segment className='full'>
                            <div className="cont-inner">
                                {/* 테이블 제목 */}
                                <CommunityTableTitle />

                                {/* 테이블 리스트 */}
                                <CommunityTableBody />

                                <div className="paging margin-none">
                                    <Paging />
                                </div>
                            </div>
                        </Segment>
                    }
                </div>
            </div>
        )
    }
}

export default ContentsArea