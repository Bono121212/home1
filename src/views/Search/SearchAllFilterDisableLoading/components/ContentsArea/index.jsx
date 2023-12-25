import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Card,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import CommentsSort from "../CommentsSort";
import LabelRequiredState from "../LabelRequiredState";
import LabelRequiredStateValue from "../LabelRequiredStateValue";
import LabelStampState from "../LabelStampState";
import LabelStampStateMulti from "../LabelStampStateMulti";
import ExpertCard from "../ExpertCard";

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
                                전체보기
                            </Menu.Item>
                            <Menu.Item
                                name='LearningCard'
                                active={activeItem === 'LearningCard'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습카드
                            </Menu.Item>
                            <Menu.Item
                                name='Export'
                                active={activeItem === 'Export'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                강사
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="sort-reult">
                        {/* <CommentsSort/> */}
                        <div className="section">
                            <div className="text01">학습카드 (10)</div>

                            <Card.Group className='box-cards'>
                                <LabelRequiredState/>
                                <LabelStampState/>
                                <LabelStampStateMulti/>
                                <LabelStampStateMulti/>
                                <LabelRequiredStateValue/>
                                <LabelRequiredState/>
                                <LabelStampState/>
                                <LabelStampStateMulti/>
                                <LabelRequiredState/>
                                <LabelRequiredStateValue/>

                            </Card.Group>
                        </div>
                        <div className="section">
                            <div className="text01">강사 (28)</div>

                            <Card.Group className='expert-cards'>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                                <ExpertCard/>
                            </Card.Group>
                        </div>
                    </div>


                    {/* <div className="loading">에  hide 클래스 추가 되면 로딩영역 사라집니다. */}
                    <div className="loading">
                        <div className="spin">
                            <div className="path"></div>
                        </div>
                        <p>mySUNI가 열심히 검색중입니다. 잠시만 기다려주세요.</p>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default ContentsArea
