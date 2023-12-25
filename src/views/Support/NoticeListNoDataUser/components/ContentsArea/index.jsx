import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Icon
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import ListMoreView from '../ListMoreView'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'notice'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='notice'
                                active={activeItem === 'notice'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Notice
                            </Menu.Item>
                            <Menu.Item
                                name='faq'
                                active={activeItem === 'faq'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                FAQ
                            </Menu.Item>
                            <Menu.Item
                                name='qa'
                                active={activeItem === 'qa'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Q&A<span className='new'>+N</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                        <div className="text">등록된 Notice가 없습니다.</div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
