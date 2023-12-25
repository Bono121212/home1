import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import BadgeCard from '../BadgeCard';

import LogoImg from '../../../../../images/all/logo-gnb.svg';
import CollegeImg from '../../../../../resources/images/all/icon-chanel-64-px.png';



class BadgeContainer extends Component {
    render() {
        const { size, learningLevel, isCombine, linkable, badgeTitle, badgeColor } = this.props;

        return (
            <>
                <BadgeCard
                    size={size}
                    learningLevel={learningLevel}
                    badgeTitle={badgeTitle}
                    isCombine={isCombine}
                    linkable={linkable}
                >
                    <span className="badge_thumb">
                        <Image src={badgeColor} alt="뱃지이미지"/>
                    </span>
                    <span className="issuing">
                        <Image src={LogoImg} alt="발급기관:mySUNI"/>
                    </span>
                    <span className="college">
                        <Image src={CollegeImg} alt="Category" />
                    </span>
                    <span className="title">
                        <span className="cell">
                            <span>{badgeTitle}</span>
                        </span>
                    </span>
                    <p className="star-score">
                        <em>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#EA012C" fill-rule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M7 10.5L2.886 12.663 3.671 8.082 0.343 4.837 4.943 4.168 7 0 9.057 4.168 13.657 4.837 10.329 8.082 11.114 12.663z" transform="translate(-226 -979) translate(100 421) translate(0 58) translate(0 326) translate(92 174) translate(34 .714)"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </em>
                        <em>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#EA012C" fill-rule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M7 10.5L2.886 12.663 3.671 8.082 0.343 4.837 4.943 4.168 7 0 9.057 4.168 13.657 4.837 10.329 8.082 11.114 12.663z" transform="translate(-226 -979) translate(100 421) translate(0 58) translate(0 326) translate(92 174) translate(34 .714)"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </em>
                        <em>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#EA012C" fill-rule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M7 10.5L2.886 12.663 3.671 8.082 0.343 4.837 4.943 4.168 7 0 9.057 4.168 13.657 4.837 10.329 8.082 11.114 12.663z" transform="translate(-226 -979) translate(100 421) translate(0 58) translate(0 326) translate(92 174) translate(34 .714)"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </em>
                    </p>
                </BadgeCard>
            </>
        )
    }
}

export default BadgeContainer