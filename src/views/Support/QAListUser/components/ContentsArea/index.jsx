import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Button,
    Icon
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ListMoreView from '../ListMoreView'
import RadioWrap from '../RadioWrap'

// const selectOptions01 = [
//     {key: 'val01', value: 'val01', text: '모두보기'},
//     {key: 'val01', value: 'val01', text: '답변 완료'},
//     {key: 'val01', value: 'val01', text: '답변 대기'},
// ];

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'qa'}

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
                                Q&amp;A<span className='new'>+N</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="support-list-wrap">
                        <div className="list-top">
                                <Button icon className='left post ask'>
                                    <Icon className='ask24'/>&nbsp;&nbsp;Ask a Question
                                </Button>
                            <RadioWrap/>
                        </div>

                        <div className="su-list qna">
                            <Link to="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요?</span>
                                    </span>
                                </span>
                                <span className="cell category">학습문의</span>
                                <span className="cell status waiting">답변대기</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">테스트를 다시 하고 싶습니다. 방법이 있을까요?</span>
                                    </span>
                                </span>
                                <span className="cell category">학습문의</span>
                                <span className="cell status">답변완료</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row reply">
                                <span className="cell title">
                                    <Icon className='reply16-b'/><span className="blind">reply</span>
                                    <span className="ellipsis">테스트는 총 3번까지 가능합니다.</span>
                                </span>
                                <span className="cell category"/>
                                <span className="cell status"/>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">테스트를 다시 하고 싶습니다. 방법이 있을까요?</span>
                                    </span>
                                </span>
                                <span className="cell category">학습문의</span>
                                <span className="cell status">답변완료</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row reply">
                                <span className="cell title">
                                    <Icon className='reply16-b'/><span className="blind">reply</span>
                                    <span className="ellipsis">테스트는 총 3번까지 가능합니다.</span>
                                </span>
                                <span className="cell category"/>
                                <span className="cell status"/>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요?</span>
                                    </span>
                                </span>
                                <span className="cell category">학습문의</span>
                                <span className="cell status waiting">답변대기</span>
                                <span className="cell date">2020.01.05</span>
                            </Link>
                            <Link to="#none" target="_blank" className="row">
                                <span className="cell title">
                                    <span className="inner">
                                        <span className="ellipsis">테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요테스트를 다시 하고 싶습니다. 방법이 있을까요?</span>
                                    </span>
                                </span>
                                <span className="cell category">학습문의</span>
                                <span className="cell status waiting">답변대기</span>
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
