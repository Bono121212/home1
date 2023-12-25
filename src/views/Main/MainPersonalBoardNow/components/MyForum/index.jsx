import React, {Component} from 'react'
import {
    Segment, Button, Icon, Card,
} from 'semantic-ui-react'
//import CardValueInprogress from "../CardValueInprogress";
import {Link} from "react-router-dom";
import CardValueForum from "../CardValueForum";
import CardValueForum02 from "../CardValueForum02";


class MyForum extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area1">
                    <Segment className="full">
                        <div className="section-head">
                            <strong>이천포럼 과정</strong>
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
                                        <CardValueForum/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueForum02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueForum/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueForum02/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        <CardValueForum/>
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


export default MyForum
