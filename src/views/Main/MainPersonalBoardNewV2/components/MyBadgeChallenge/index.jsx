import React, {Component} from 'react';
import {
    Button, Icon, Segment,
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import BadgeContainer from '../BadgeContainer';

class MyBadgeChallenge extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area badge-scrolling">
                    <Segment className="full">
                        <div className="section-head">
                            <strong><span className="ellipsis">김유니김유니김유니김유니김유니김유니</span>님의 도전중인 Badge</strong>
                            <div className="right">
                                <Button icon className="right btn-blue" as={Link}>
                                    View all
                                    <Icon className="morelink"/>
                                </Button>
                            </div>
                        </div>
                        <div className="scrolling">
                            <ul className='belt'>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'intermediate'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        size={'s220'}
                                        learningLevel={'basic'}
                                        isCombine={false}
                                        linkable={true}
                                    />
                                </li>
                            </ul>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }

}

export default MyBadgeChallenge