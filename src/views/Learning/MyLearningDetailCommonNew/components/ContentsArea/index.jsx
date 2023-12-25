import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon,
    Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Enrolled'}

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
                                <span className="count">+45</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Enrolled'
                                active={activeItem === 'Enrolled'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습예정
                                <span className="count">+0</span>
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
                                <span className="count">+2</span>
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
                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                        <div className="text">
                            학습예정중인 과정이 없습니다
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
