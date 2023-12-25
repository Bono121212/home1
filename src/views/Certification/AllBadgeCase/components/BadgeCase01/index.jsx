import React, {Component} from 'react';
import BadgeContainer from '../BadgeContainer';

class BadgeCase01 extends Component {
    render() {
        return (
            <>
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'basic'}
                    isCombine={false}
                    linkable={true}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'intermediate'}
                    isCombine={false}
                    linkable={true}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'advanced'}
                    isCombine={false}
                    linkable={true}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'basic'}
                    isCombine={true}
                    linkable={true}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'intermediate'}
                    isCombine={true}
                    linkable={true}
                />
                <BadgeContainer
                    size={'s220'}
                    learningLevel={'advanced'}
                    isCombine={true}
                    linkable={true}
                />
            </>
        )
    }
}

export default BadgeCase01
