import React, {Component, createRef} from 'react'
import {
    Segment,
    Button,
    Icon,
    Menu,
    Label, Rating,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import CardListGroup from '../CardListGroup'
import CommentsSort from '../CommentsSort'

class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>
                <div className="college-detail">
                    <div className="channel-of-interest">
                        <div className="table-css type2 type3">
                            <div className="row">
                                <div className="cell vtop">
                                    <div className="tit-set">Channel (7)</div>
                                </div>
                                <div className="cell vtop">
                                    <div className="item-wrap">
                                        {/*  .active //  */}
                                        <div className="belt">
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                Speech AI
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                Speech AI
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                Speech AI
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                Speech AI
                                            </Button>
                                            <Button className="active toggle toggle4">
                                                AI Fundamental
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className="toggle-btn">
                                        {/*  .active //  */}
                                        <Button icon className="img-icon">
                                            <Icon className="arrow-down s26"/>
                                            <span className="blind">open</span>
                                        </Button>
                                        <Button icon className="img-icon">
                                            <Icon className="arrow-up s26"/>
                                            <span className="blind">close</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cont-wrap">
                        <div className="section-top">
                            <div className="section-count-big">
                                <strong>AI Category</strong> 의 학습 과정 입니다. <strong>(230)</strong>
                            </div>
                            <CommentsSort/>
                        </div>
                        <div className="section">

                            <CardListGroup/>

                            <div className="more-comments">
                                <Button icon className="left moreview">
                                    <Icon className="moreview"/>list more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
