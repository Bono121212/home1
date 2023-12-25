
import React, {Component} from 'react';

import BadgeContainer from '../BadgeContainer';

class BadgeList extends Component {
    //
    render() {
        return(
            <div className="badge-list pb0">
                <ul>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={false}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'basic'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'intermediate'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            size={'s220'}
                            learningLevel={'advanced'}
                            isCombine={true}
                            linkable={true}
                        />
                        <div className="badge-name">
                            <span>AI/DT Literacy Customer Empathy</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeList;