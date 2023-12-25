import React, {Component, createRef} from 'react';
import { Segment, Sticky, Menu, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import NoteFolderShow from '../NoteFolderShow';

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'MyNoteList'}

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
                                as={Link} to=""
                            >
                                My Badge<span className="count">+120</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedStampList'
                                active={activeItem === 'EarnedStampList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Stamp<span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='MyNoteList'
                                active={activeItem === 'MyNoteList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Note<span className="count">+13</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full note-tab-area'>
                    {/* 폴더 보기 */}
                    <NoteFolderShow/>

                    {/* 더보기 버튼 */}
                    <div className="more-comments">
                        <Button className="icon left moreview">
                            <Icon aria-hidden="true" className="moreview"></Icon>
                            list more
                        </Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
