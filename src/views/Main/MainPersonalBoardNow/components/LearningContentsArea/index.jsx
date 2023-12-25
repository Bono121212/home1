import React, {Component} from 'react';
import {
    Button, Icon, Segment, Card
} from "semantic-ui-react";
import CardValueCompleted from "../CardValueCompleted";
import CardValueRequired from "../CardValueRequired";
import CardValueEnrolled from "../CardValueEnrolled";
import CardValueInprogress from "../CardValueInprogress";
import CardValueRecommend from "../CardValueRecommend";
import CardValueRecommend01 from "../CardValueRecommend01";
import CardValueRecommend02 from "../CardValueRecommend02";
import CardValueDday01 from "../CardValueDday01";
import CardValueDday02 from "../CardValueDday02";
import CardValueDone from "../CardValueDone";
import {Link} from "react-router-dom";

class LearningContentsArea extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area">
                    <Segment className='full'>

                        {/*권장학습*/}
                        <div className='section-head'>
                            <strong>Deep Change를 위한 권장과정</strong>
                            <div className='right'>
                                <Button icon className='right btn-blue' as={Link}>
                                    View all
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className='scrolling'>
                            <ul className='belt'>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRequired/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueEnrolled/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueEnrolled/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueCompleted/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                        {/*신규학습*/}
                        <div className='section-head'>
                            <strong>따끈따끈한 신규 콘텐츠</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className='scrolling'>
                            <ul className='belt'>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                        {/*인기과정*/}
                        <div className='section-head'>
                            <strong>구성원이 선택한 인기과정</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className='scrolling'>
                            <ul className='belt'>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                        {/*추천과정*/}
                        <div className='section-head'>
                            <strong>김유니유니니유니니니 님의 학습 콘텐츠 기반 추천 과정</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className='scrolling'>
                            <ul className='belt'>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueRecommend/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                        {/*수강신청모아보기*/}
                        <div className='section-head'>
                            <strong>수강 신청 과정 모아보기</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className='scrolling'>
                            <ul className='belt'>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDday01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDday02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDone/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDday01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDday02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueDone/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }
}

export default LearningContentsArea