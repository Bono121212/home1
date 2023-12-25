import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'CompletedList'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='CompletedList'
                                active={activeItem === 'CompletedList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습완료
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedStampList'
                                active={activeItem === 'EarnedStampList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                보유스템프
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/>
                        <span className='blind'>콘텐츠 없음</span>
                        <div className="text">
                            Completed List에 해당하는<br/>
                            학습 과정이 없습니다.
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
