import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Icon,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Lecture'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Introduce'
                                active={activeItem === 'Introduce'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Introduce
                            </Menu.Item>
                            <Menu.Item
                                name='Lecture'
                                active={activeItem === 'Lecture'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Lecture<span className="count">0</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="expert-cont">
                        <div className="no-cont-wrap">
                            <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                            <div className="text">등록된 강의가 없습니다.</div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
