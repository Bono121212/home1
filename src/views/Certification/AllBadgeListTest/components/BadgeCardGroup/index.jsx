import React, {Component} from 'react';
import BadgeContainer from "../BadgeContainer";
import './style.css';

class BadgeCardGroup extends Component {
    render() {
        return (
            <div className='badge-list'>
                <ul>
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
                            learningLevel={'advanced'}
                            isCombine={false}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={true}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={true}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={true}
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
                            learningLevel={'advanced'}
                            isCombine={false}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={true}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={true}
                            linkable={true}
                        />
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={true}
                            linkable={true}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeCardGroup