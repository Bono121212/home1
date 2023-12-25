import React, {Component} from 'react';
import BadgeContainer from "../BadgeContainer";
import './style.css';

class BadgeCardGroup extends Component {
    render() {
        return (
            <div className='badge-list-type'>
                <ul>
                    <li>
                        <BadgeContainer
                            learningLevel={'basic'}
                            badgeTitle={'반도체 Data. Essential'}
                            isCombine={false}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            learningLevel={'intermediate'}
                            badgeTitle={'Data HR Transformation'}
                            isCombine={false}
                            linkable={true}
                            />
                    </li>
                    <li>
                        <BadgeContainer
                            learningLevel={'advanced'}
                            badgeTitle={'SV Data Transformation'}
                            isCombine={false}
                            linkable={true}
                            />
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeCardGroup