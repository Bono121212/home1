import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import BadgeCard from '../BadgeCard';
import LogoImg from '../../../../../resources/images/all/logo-badge.svg';
import CollegeImg from '../../../../../resources/images/all/icon-chanel-64-px.png';

class BadgeContainer extends Component {
    //
    render() {
        //
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
                        <Image src={LogoImg} alt="발급기관:mySUNI"/>
                    </span>
                    <span className="college">
                        <Image src={CollegeImg} alt="Category" />
                    </span>
                    <span className="title">
                        <span className="cell">
                            <span>Agile Essentials_test</span>
                        </span>
                    </span>
                </BadgeCard>

                {/*뱃지 네임은 뱃지목록에서만 노출*/}
                <div className="badge-name">
                    <span>AI/DT Literacy Customer Empathy - { learningLevel }</span>
                </div>
            </>
        )
    }
}

export default BadgeContainer