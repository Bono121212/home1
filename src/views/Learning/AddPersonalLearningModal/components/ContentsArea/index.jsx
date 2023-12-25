import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import CommentContents from '../CommentContents'
// import OverviewContents from '../OverviewContents'
// import CubeEnrollment from '../CubeEnrollment'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Overview'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='Overview'
                                active={activeItem === 'Overview'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Overview
                            </Menu.Item>
                            <Menu.Item
                                name='Comment'
                                active={activeItem === 'Comment'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                Comment <span className="count">+12</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
