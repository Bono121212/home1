import React, {Component} from 'react';
import {
    Button, Icon, Segment,
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import BadgeContainer from '../BadgeContainer';
import badgeRed from '../../../../../images/all/bg-badge-red.png';
import badgePurple from '../../../../../images/all/bg-badge-purple.png';
import badgeGreen from '../../../../../images/all/bg-badge-green.png';
import badgeLightGreen from '../../../../../images/all/bg-badge-lightgreen.png';

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
                            <div className='badge-list-type'>
                                <ul className='belt'>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`수소에너지`}
                                            badgeColor={badgePurple}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`이천포럼 Essentials`}
                                            badgeColor={badgeGreen}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`AI/DT Leadership`}
                                            badgeColor={badgeRed}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`IP Mind-Set Essential`}
                                            badgeColor={badgeLightGreen}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`AI/DT Literacy`}
                                            badgeColor={badgeGreen}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`IP Mind-Set Essential`}
                                            badgeColor={badgeRed}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'intermediate'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`AI/DT Leadership`}
                                            badgeColor={badgeLightGreen}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`이천포럼 Essentials`}
                                            badgeColor={badgePurple}
                                        />
                                    </li>
                                    <li>
                                        <BadgeContainer
                                            size={'s220'}
                                            learningLevel={'basic'}
                                            isCombine={false}
                                            linkable={false}
                                            badgeTitle={`수소에너지`}
                                            badgeColor={badgeGreen}
                                        />
                                    </li>
                                </ul>                                
                            </div>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }

}

export default MyBadgeChallenge