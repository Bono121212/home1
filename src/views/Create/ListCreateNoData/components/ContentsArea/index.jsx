import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Button,
    Icon,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'create'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='create'
                                active={activeItem === 'create'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Create
                            </Menu.Item>
                            <Menu.Item
                                name='shared'
                                active={activeItem === 'shared'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Shared<span className='count'>+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="ui full segment">
                        <div className="no-cont-wrap">
                            <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                            <div className="text">아직 생성한 학습이 없습니다.</div>
                            <Button icon className="right btn-blue2">
                                Create 바로가기 <Icon className='morelink'/>
                            </Button>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
