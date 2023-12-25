import React, {Component} from 'react';
import BadgeSection2 from '../BadgeSection2';
import HotTopicSection from '../HotTopicSection';
import DeadlineSection from '../DeadlineSection';


class ProgressConArea2 extends Component {
    render() {
        return (
            <>
                <div className="learning-section-wrap">
                    <BadgeSection2/>
                    <HotTopicSection/>
                    <DeadlineSection/>
                </div>
            </>
        )
    }

}

export default ProgressConArea2