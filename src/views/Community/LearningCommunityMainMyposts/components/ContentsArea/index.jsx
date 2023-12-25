import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Label, Button, Icon,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import JoinedStateCard from "../JoinedStateCard";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Myposts'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner summary">
                        <Label color='blue'>leadership</Label>
                        <span className="detail-tit">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향 Community</span>
                    </div>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Community'
                                active={activeItem === 'Community'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Community<span className="count">+5</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Myposts'
                                active={activeItem === 'Myposts'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My posts<span className="count">+3</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Overview'
                                active={activeItem === 'Overview'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Overview
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    {/* 우측 sub info  */}
                    <JoinedStateCard/>
                    {/* //우측 sub info */}

                    {/* 좌측 contents */}
                    <div className="contents">
                        <div className="top-guide-title">
                            <div className="list-number">총 <strong>3개</strong>의 게시글이 있습니다.</div>
                            <Button icon className='left post'><Icon className='post'/>Post</Button>
                        </div>
                        <div className="community-cont">

                            <div className="community-list">
                                <div className="depth1">
                                    <Link to="#">
                                        <span className="title">
                                            <span className="ellipsis">사회적 가치 실현을 위한 DBL Doble Bottom Lin사회적 가치 실현을 위한 DBL Doble Bottom Lin사회적 가치 실현을 위한 DBL Doble Bottom Lin사회적 가치 실현을 위한 DBL Doble Bottom Line</span>
                                        </span>
                                        <span className="writer">홍길동</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                </div>
                                <div className="depth1">
                                    <Link to="#">
                                        <span className="title">
                                            <span className="ellipsis">사회적 가치 실현을 위한 DBL Doble Bottom Line</span>
                                        </span>
                                        <span className="writer">홍길동</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                </div>
                                <div className="depth1">
                                    <Link to="#">
                                        <span className="title">
                                            <span className="ellipsis">사회적 가치 실현을 위한 DBL Doble Bottom Line</span>
                                            <span className="rep-num">[<strong>3</strong>]</span>
                                        </span>
                                        <span className="writer">홍길동동</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                </div>
                                <div className="depth2">
                                    <Link to="#">
                                        <span className="title">
                                            <Icon className='reply16-b'/><span className="blind">reply</span>
                                            <span className="ellipsis">사회적 가치 실현을 위한 DBL Doble Bottom Line</span>
                                        </span>
                                        <span className="writer">홍길동전</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                    <Link to="#">
                                        <span className="title">
                                             <Icon className='reply16-b'/><span className="blind">reply</span>
                                            <span className="ellipsis">사회적 가치 실현을 위한 DBL Doble Bottom Lin사회적 가치 실현을 위한 DBL Doble Bottom Line</span>
                                            <span className="rep-num">[<strong>3</strong>]</span>
                                        </span>
                                        <span className="writer">홍길동</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                    <Link to="#">
                                        <span className="title">
                                            <Icon className='reply16-b'/><span className="blind">reply</span>
                                            <span className="ellipsis">질문있습니다.</span>
                                        </span>
                                        <span className="writer">홍길동전</span>
                                        <span className="view">333 읽음</span>
                                        <span className="date">2020.01.15</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 좌측 contents */}

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
