import React, {Component} from 'react';
import BadgeContainer from '../BadgeContainer';

class BadgeCase03 extends Component {
    render() {
        return (
            <>
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'basic'}
                    isCombine={false}
                    linkable={false}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'intermediate'}
                    isCombine={false}
                    linkable={false}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'advanced'}
                    isCombine={false}
                    linkable={false}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'basic'}
                    isCombine={true}
                    linkable={false}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'intermediate'}
                    isCombine={true}
                    linkable={false}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'advanced'}
                    isCombine={true}
                    linkable={false}
                />
            </>
        )
    }
}

export default BadgeCase03
