import React, {Component} from 'react';
import classNames from 'classnames';

class BadgeCard extends Component {
    render() {

        const { size, learningLevel, linkable, isCombine, children } = this.props;

        return (
            <>
                { linkable ?
                    <a href='/certification/all-badge-list-detail'
                       className={classNames( 'badge', size, learningLevel, { 'combine' : isCombine })}
                    >
                        {children}
                    </a>
                    :
                    <div className={classNames( 'badge', size, learningLevel, { 'combine' : isCombine })}>
                        {children}
                    </div>
                }
            </>
        )
    }
}

export default BadgeCard