import React, {Component} from 'react'
import { Segment, Button, Icon, Card } from 'semantic-ui-react'
import CardValueInprogress from "../CardValueInprogress";
import {Link} from "react-router-dom";
import CardValueInprogress01 from "../CardValueInprogress01";
import CardValueInprogress02 from "../CardValueInprogress02";


class MyLearningInProgress extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area1">
                    <Segment className="full">
                        <div className="section-head">
                            <strong><span className="ellipsis">김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니</span>님이 학습중인 과정</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className="scrolling">
                            <ul className="belt">
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueInprogress/>
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


export default MyLearningInProgress
