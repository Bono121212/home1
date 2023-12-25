import React, {Component} from 'react';
import BadgeSection from '../BadgeSection';
import DeadlineSection from '../DeadlineSection';
import HotTopicSection from '../HotTopicSection';


class ProgressConArea extends Component {
    render() {
        return (
            <>
                <div className="learning-section-wrap">
                    <BadgeSection/>
                    <HotTopicSection/>
                    <DeadlineSection/>
                </div>
            </>
        )
    }

}

export default ProgressConArea