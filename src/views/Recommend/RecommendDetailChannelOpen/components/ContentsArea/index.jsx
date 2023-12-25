import React, {Component} from 'react'
import { Segment, Icon, Button,} from 'semantic-ui-react'
import ContentsMoreView from "../ContentsMoreView";
import classNames from "classnames";
import LearningLoopType1 from '../../../../Main/MainIndexNew/components/LearningLoopType1A';
import {Link} from 'react-router-dom';

class ContentsArea extends Component {
    state = {
        active: false
    };

    render() {
        const {active} = this.state;
        return (

            <Segment className='full'>
                <div className="recommend-detail">
                    {/* .channel-of-interest */}
                    <div className="channel-of-interest">
                        <div className="table-css type2 type3">
                            <div className="row">
                                <div className="cell vtop">
                                    <div className="tit-set">관심 Channel 보기
                                        <Button icon className="img-icon">
                                            <Icon className='setting17'/><span className="blind">setting</span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className={active ? "item-wrap active" : "item-wrap"} onClick={this.handleChange}>
                                        <div className="belt">
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Design
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="false">Database
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Project Managing
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">디자인 방법론
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Engineering
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Production Data Analysis
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">DT Basics
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Value
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Mindfulness
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">AI
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="false">Design
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Design
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Database
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">Project Managing
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="true">디자인 방법론
                                            </Button>
                                            <Button className="toggle toggle4"
                                                    aria-pressed="false">Engineering
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Production Data Analysis
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">DT Basics
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Value
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Mindfulness
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">AI
                                            </Button>
                                            <Button className="active toggle toggle4"
                                                    aria-pressed="true">Design
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className={classNames({
                                             'toggle-btn': true,
                                             active: active,
                                         })}
                                         onClick={() => this.setState({active: !this.state.active})}
                                    >
                                        <Button icon className="img-icon">
                                            <Icon className='arrow-down s26'/>
                                            <span className="blind">open</span>
                                        </Button>
                                        <Button className="ui icon button img-icon">
                                            <Icon className='arrow-up s26'/>
                                            <span className="blind">close</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // .channel-of-interest */}
                    {/* .recommend-area */}
                    <div className="recommend-area">
                        { this.props.nodata &&
                            <Segment className="full learning-section type1">
                                <div className="section-head">
                                    <span><strong>Trend View(공통)</strong>채널에서 추천하는 과정입니다.</span> <span className="channel">(0)</span>
                                    {/* <div className="right">
                                        <Link to="#none">
                                            <Button icon className='right btn-more'>
                                                전체보기<Icon className='morelink'/>
                                            </Button>
                                        </Link>
                                    </div> */}
                                </div>
                                <div className="section-body">
                                    <div className="cardSwiper">
                                        <div className="no-cont-wrap">
                                            <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                            <div className="text">Trend View(공통) 채널에 해당하는 추천 학습과정이 없습니다.</div>
                                        </div>
                                    </div>
                                </div>
                            </Segment>
                        }
                        <Segment className="full learning-section type1">
                            <div className="section-head">
                                <span><strong>Executive AI/DT</strong>채널에서 추천하는 과정입니다.</span> <span className="channel">(53)</span>
                                <div className="right">
                                    <Link to="#none">
                                        <Button icon className='right btn-more'>
                                            전체보기<Icon className='morelink'/>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="section-body">
                                <LearningLoopType1 swipeName="swiperRecommend1"/>
                            </div>
                        </Segment>
                        <ContentsMoreView/>
                    </div>
                    {/* // .recommend-area */}
                </div>

            </Segment>
        )
    }
}


export default ContentsArea
