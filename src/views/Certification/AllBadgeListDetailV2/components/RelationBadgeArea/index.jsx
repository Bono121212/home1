import React, {Component} from 'react';
import {Segment, Label, Icon} from 'semantic-ui-react';
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';

class RelationBadgeArea extends Component {
    render() {
        return (
            <div className="relation-badge-area">
                <Segment className="full">
                    <h3 className="title-style">
                        <Label className="onlytext bold size24">
                            <Icon className="series"/>
                            <span>연관 Badge</span>
                        </Label>
                    </h3>

                    {/*Badge List*/}
                    <div className="badge-list-v2">
                        <ul>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'purple'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={true} //퍼블용 멤버사 구분
                                />
                                <div className="badge-name">
                                    <span>{`AI/DT Literacy`}</span>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'Digital HR Transformation Digital HR Transformation'}
                                    level='Level2'
                                    badgeStyle={true} //linkable
                                    badgeColor={'yellow'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분

                                />
                                <div className="badge-name">
                                    <span>{`Digital HR Transformation Digital HR Transformation`}</span>
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
                                <div className="badge-name">
                                    <span>{`반도체 Biz. Essential`}</span>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'SV Fundamentals'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'red'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="badge-name">
                                    <span>{`SV Fundamentals`}</span>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'lightgreen'}
                                    cooperation={false} //협력사 유무
                                    hasPlus={false} //퍼블용
                                    membersCorp={true} //퍼블용 멤버사 구분
                                />
                                <div className="badge-name">
                                    <span>{`AI/DT Literacy`}</span>
                                </div>
                            </li>
                            <li>
                                <BadgeContainer
                                    badgeName={'AI/DT Literacy'}
                                    level='Level1'
                                    badgeStyle={true} //linkable
                                    badgeColor={'blue'}
                                    cooperation={true} //협력사 유무
                                    hasPlus={true} //퍼블용
                                    membersCorp={false} //퍼블용 멤버사 구분
                                />
                                <div className="badge-name">
                                    <span>{`AI/DT Literacy`}</span>
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
                                <div className="badge-name">
                                    <span>{`Digital HR Transformation`}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </Segment>
            </div>
        )
    }
}

export default RelationBadgeArea;