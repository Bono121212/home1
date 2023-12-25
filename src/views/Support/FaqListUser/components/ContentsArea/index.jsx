import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ListMoreView from '../ListMoreView'
import RadioWrap from "../RadioWrap";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'faq'}

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
                        <div className="list-top">
                            <RadioWrap/>
                        </div>
                        <div className="su-list faq">
                            {/* 중요:.important */}
                            <a href="#none" target="_blank" className="row important">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">출근하자마자 퇴근하고 싶을 때는 어떻게 해야하나요?</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row important">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">점심시간이 아닌데 배가 고프면 어떻게 해야하나요?</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">커뮤니티를 개설하려면 어떡해야 하나요?</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">파일 다운로드가 되지 않습니다.</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">파일 다운로드가 되지 않습니다.</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?</span>
                                </span>
                            </span>
                            </a>
                            <a href="#none" target="_blank" className="row">
                            <span className="cell title">
                                <span className="inner">
                                    <span className="ellipsis">텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?텍스트가 길면 말줄임이 되나요?</span>
                                </span>
                            </span>
                            </a>
                        </div>
                        <ListMoreView/>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
