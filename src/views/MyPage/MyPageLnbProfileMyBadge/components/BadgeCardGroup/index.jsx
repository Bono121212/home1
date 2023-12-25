import React, {Component} from 'react';
import BadgeContainer from "../BadgeContainer";

class BadgeCardGroup extends Component {   

    render() {
        return (
            <div className='badge-list-type list-wrapper'>
                <ul>
                    <li>
                        <BadgeContainer
                            learningLevel={'basic'}
                            isCombine={false}
                            linkable={true}
                            badgeName={'AI/DT Literacy'}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            learningLevel={'intermediate'}
                            isCombine={false}
                            linkable={true}
                            badgeName={'Digital HR Transformation'}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            learningLevel={'advanced'}
                            isCombine={false}
                            linkable={true}
                            badgeName={'반도체 Biz. Essential'}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            learningLevel={'basic'}
                            isCombine={true}
                            linkable={true}
                            badgeName={'SV Fundamentals'}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeCardGroup