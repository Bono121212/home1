import React, {Component} from 'react';
import { Segment, Select , Image} from 'semantic-ui-react';
import BadgeCardGroup from '../BadgeCardGroup';
import LogoImg from '../../../../../images/all/logo-gnb.svg';
import CollegeImg from '../../../../../resources/images/all/icon-chanel-64-px.png';
import badgeStyle from '../../../../../images/all/bg-badge-red.png';
import BdMybadge from '../../../../../images/all/bg_mybadge.png';
import BadgeCard from '../BadgeCard';

const selectOptions = [    
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "level1", text: "Level1" },
    { key: "2", value: "level2", text: "Level2" },
    { key: "3", value: "level3", text: "Level3" },
  ]
  

class ContentsArea extends Component {
    state = {
        open: true,
        typeChecked: 'mySUNI'
    };
    close = () => this.setState({open: false});

    render() {
        const { size, learningLevel, isCombine, linkable } = this.props;
        
        return (
            <div className="mypage_contents profile-badge-contents">
                <strong className="mypage_title">My Badge</strong>
                    <div className="top-line">
                        <span>총 <strong>4 개</strong>의 Badge를 획득하였습니다.</span>
                        <Select
                            placeholder="선택"
                            className="ui small-border dropdown m0"
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                    </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <BadgeCardGroup />
                    </div>


                    {/* 프린트 인증서 영역 */}
                    <div className="print_certi">
                        <div className="certi_box">
                            <div className="my_certificate mybadge">
                                <Image src={BdMybadge} alt="인증서배경"/>
                                <div className="txt_box">
                                    <strong className="name">김써*</strong>
                                    <p>
                                        귀하는 아래 프로그램의 전 과정을
                                        <br/>성공적으로 이수하였으며, Badge 획득 요건을
                                        <br/>충족하였기에 이 증서를 드립니다.
                                    </p>
                                    <span className="category">SV Fundamentals</span>
                                    <span className="date">2021.04.27</span>   
                                </div>
                                <div className="badge badge-list-type">
                                    <BadgeCard
                                        size={size}
                                        learningLevel={learningLevel}
                                        isCombine={isCombine}
                                        linkable={linkable}
                                    >
                                        <span className="badge_thumb">
                                            <img src={badgeStyle} alt="뱃지이미지"/>
                                        </span>
                                        <span className="issuing">
                                            <Image src={LogoImg} alt="발급기관:mySUNI"/>
                                        </span>
                                        <span className="college">
                                            <Image src={CollegeImg} alt="Category" />
                                        </span>
                                        <span className="title">
                                            <span className="cell">
                                                <span>AWS Certified Cloud Practitioner</span>
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
                            </div>
                            </div>
                        </div>
                    </div>

                    
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
