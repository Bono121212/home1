import React, {Component} from 'react'
import { Segment, Button, Icon, Card } from 'semantic-ui-react'
//import CardValueInprogress from "../CardValueInprogress";
import {Link} from "react-router-dom";
//import CardValueInprogress01 from "../CardValueInprogress01";
//import CardValueInprogress02 from "../CardValueInprogress02";
import CardValueDefault from '../CardValueDefault';
import CardValueDefault01 from '../CardValueDefault01';
import CardValueDefault02 from '../CardValueDefault02';
import CardValueDefault03 from '../CardValueDefault03';
//import { withTheme } from 'styled-components';
//import { CalendarContainer } from 'react-datepicker';
import CardValueDefault04 from '../CardValueDefault04';


class MyLearningInProgress extends Component {

    render() {
        return (
            <>
                <div className="scrolling-area area1">
                    <Segment className="full">
                        <div className="section-head">
                            <strong><span className="ellipsis">김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니김유니</span>님이 학습중인 과정입니다</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className="scrolling card-scrolling">
                            <ul className="belt">
                                <li>
                                    <Card.Group className='card-warp'>
                                        <CardValueDefault/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='card-warp'>
                                        <CardValueDefault01/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='card-warp'>
                                        <CardValueDefault02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='card-warp'>
                                        <CardValueDefault03/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='card-warp'>
                                        <CardValueDefault04/>
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
