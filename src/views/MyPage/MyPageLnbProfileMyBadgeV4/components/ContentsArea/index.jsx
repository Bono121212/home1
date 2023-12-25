import React, {Component} from 'react';
import { Segment, Select, Button } from 'semantic-ui-react';
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';
import MyBadgeModal from '../../../../../components/Badges/MyBadgeModal';
import SNSListPopup from '../../../../../components/Badges/SNSListPopup';

const selectOptions = [
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "level1", text: "Level1" },
    { key: "2", value: "level2", text: "Level2" },
    { key: "3", value: "level3", text: "Level3" },
  ]


class ContentsArea extends Component {
    render() {
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
                        <div className="badge-list-v2 has_lnb has_btn">
                            <ul>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Literacy'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    
                                    {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal />
                                        <div className='list-sns completed'>
                                            <Button className="link"><span>공유하기</span></Button>
                                            <div className="ui popup li-sns visible">
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'Digital HR Transformation Digital HR Transformation'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'orange'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'반도체 Biz. Essential'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'green'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'SV Fundamentals'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'red'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Literacy'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'skyblue'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Literacy Compilation'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'Digital HR Transformation'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'yellow'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'반도체 Biz. Essential'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'green'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'SV Fundamentals'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'red'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Literacy'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
