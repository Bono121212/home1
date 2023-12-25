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
import {Link} from "react-router-dom";

class LearningContentsArea extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area2">
                    <Segment className='full'>

                        {/*권장학습*/}
                        <div className='section-head'>
                            <strong>SK 구성원이라면 꼭 들어야 하는 필수 권장 학습 과정!</strong>
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
                                        <CardValueCompleted/>
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
                            <strong>mySUNI 5월 4주 신규 학습 과정</strong>
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
                            <strong>김유니님을 위한 인기 과정입니다.</strong>
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
                    </Segment>
                </div>
            </>
        )
    }
}

export default LearningContentsArea