import React, {Component} from 'react';
import classNames from 'classnames';

class BadgeCard extends Component {
    render() {

        const { size, learningLevel, isCombine, linkable, children } = this.props;

        console.log( linkable );

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