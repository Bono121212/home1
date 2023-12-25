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
    state = {activeItem: 'All'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='All'
                                active={activeItem === 'All'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                All
                            </Menu.Item>
                            <Menu.Item
                                name='LearningCard'
                                active={activeItem === 'LearningCard'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Learning Card <span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Export'
                                active={activeItem === 'Export'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Export <span className="count">+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="no-cont-wrap">
                        <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                        <div className="text">검색된 결과가 없습니다.</div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
