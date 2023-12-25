import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ListMoreView from '../ListMoreView'

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
                    <div className="support-list-wrap">
                        <div className="su-list notice">
                            {/* 중요:.important / 새 개시글: .new 추가*/}
                            <Link href="#none" target="_blank" className="row important new">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!</span>
                                        <span className="rep-num">[<strong>3</strong>]</span>
                                    </span>
                                </span>
                                <span className="cell view">333 읽음</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link href="#none" target="_blank" className="row important">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">mySUNI가 오픈했습니다! mySUNI가 오픈했습니다!</span>
                                        <span className="rep-num">[<strong>3</strong>]</span>
                                    </span>
                                </span>
                                <span className="cell view">333 읽음</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link href="#none" target="_blank" className="row new">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">SK University</span>
                                        <span className="rep-num">[<strong>3</strong>]</span>
                                    </span>
                                </span>
                                <span className="cell view">621,333 읽음</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link href="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!</span>
                                    </span>
                                </span>
                                <span className="cell view">1,333 읽음</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link href="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!mySUNI가 오픈했습니다!</span>
                                        <span className="rep-num">[<strong>3</strong>]</span>
                                    </span>
                                </span>
                                <span className="cell view">333 읽음</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                        </div>
                        <ListMoreView/>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
