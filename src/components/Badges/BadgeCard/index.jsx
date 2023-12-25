import React, {Component} from 'react';
import classNames from 'classnames';

class BadgeCard extends Component {
    render() {
        const { badgeStyle, children } = this.props;
        return (
            <>
                { badgeStyle ?
                    <a href='/certification/all-badge-list-detail'
                       className={classNames( 'badge-box-v2')}
                    >
                        {children}
                    </a>
                    :
                    <div
                        className={classNames( 'badge-box-v2')}
                    >
                        {children}
                    </div>
                }
            </>
        )
    }
}

export default BadgeCard