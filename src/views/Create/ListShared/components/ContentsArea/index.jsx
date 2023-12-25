import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Button, Icon
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ListMoreView from '../ListMoreView'
import CardListGroup from '../CardListGroup'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'shared'}

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
                                Create<span className='count'>+24</span>
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
                    <div className="top-guide-title size-type3">
                        <div className="list-number">총 <strong>20개</strong>의 리스트가 있습니다.</div>
                        <div className="right-wrap">
                            <Button icon className="left post">
                                <Icon className='filter2'/>Filter
                            </Button>
                        </div>
                    </div>

                    <CardListGroup/>

                    <ListMoreView/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
