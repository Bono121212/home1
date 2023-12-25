import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Card,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import CommentsSort from "../CommentsSort";
import ExpertCard from "../ExpertCard";
import ContentsMoreView from "../ContentsMoreView";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Export'}

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
                                All <span className="count">+22</span>
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
                    <div className="sort-reult">
                    <CommentsSort/>
                        <div className="section">
                            <Card.Group className='expert-cards'>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                            </Card.Group>
                            <ContentsMoreView/>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
