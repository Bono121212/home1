import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import CardListGroup from "../CardListGroup";
import TopGuideTitle from "../TopGuideTitle";
import ContentsMoreView from "../ContentsMoreView";
import CardListBoard from "../CardListBoard";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'APLCompleted'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='InProgress'
                                active={activeItem === 'InProgress'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습중
                                <span className="count">+455</span>
                            </Menu.Item>
                            <Menu.Item
                                name='InMyList'
                                active={activeItem === 'InMyList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                찜한 과정
                                <span className="count">+4</span>
                            </Menu.Item>
                            <Menu.Item
                                className="division"
                                name='Required'
                                active={activeItem === 'Required'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                핵인싸 과정
                                <span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Enrolled'
                                active={activeItem === 'Enrolled'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습예정
                                <span className="count">+20</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Completed'
                                active={activeItem === 'Completed'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                mySUNI 학습완료
                                <span className="count">+205</span>
                            </Menu.Item>
                            <Menu.Item
                                name='APLCompleted'
                                active={activeItem === 'APLCompleted'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                개인학습 완료
                                <span className="count">+12</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Retry'
                                active={activeItem === 'Retry'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                취소/미이수
                                <span className="count">+4</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <TopGuideTitle/>

                    {/*<CardListGroup/>*/}

                    {/*0623 보드형태 리스트*/}
                    <CardListBoard/>

                    <ContentsMoreView/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
