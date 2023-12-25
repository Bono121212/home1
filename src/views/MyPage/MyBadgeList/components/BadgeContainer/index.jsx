import React, {Component} from 'react';
// import {Image} from 'semantic-ui-react';
import BadgeCard from '../BadgeCard';


class BadgeContainer extends Component {
    //
    render() {
        //
        const { size, learningLevel, isCombine, linkable } = this.props;

        return (
            <BadgeCard
                size={size}
                learningLevel={learningLevel}
                isCombine={isCombine}
                linkable={linkable}
            >
                <span className="issuing">
                    <img src="/images/all/logo-badge.svg" alt="" />
                </span>
                {/*<span className="college">*/}
                    {/*<img src="/images/all/icon-chanel-54-px.png" alt="" />*/}
                    {/*<span>AI/DT</span>*/}
                {/*</span>*/}
                <span className="title">
                    <span className="cell">
                        <span>Agile Essentials_test</span>
                    </span>
                </span>
            </BadgeCard>
        )
    }
}

export default BadgeContainer