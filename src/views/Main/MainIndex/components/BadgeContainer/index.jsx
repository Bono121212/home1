import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import BadgeCard from '../BadgeCard';


class BadgeContainer extends Component {
    render() {
        const { size, learningLevel, isCombine, linkable } = this.props;
        return (
            <>
                <BadgeCard
                    size={size}
                    learningLevel={learningLevel}
                    isCombine={isCombine}
                    linkable={linkable}
                >
                    <span className="issuing">
                        <Image src="/images/all/logo-badge.svg" alt="" />
                    </span>
                    {/*<span className="college">*/}
                        {/*<Image src="/images/all/icon-chanel-64-px.svg" alt="" />*/}
                    {/*</span>*/}
                    <span className="title">
                        <span className="cell">Customer Empathy</span>
                    </span>
                </BadgeCard>
            </>
        )
    }
}

export default BadgeContainer