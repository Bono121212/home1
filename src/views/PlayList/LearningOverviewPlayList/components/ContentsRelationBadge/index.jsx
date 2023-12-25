import React, { Component } from "react";
import { Label, Icon } from "semantic-ui-react";
import BadgeContainer from "../../../../../components/Badges/BadgeContainer";


class ContentsRelationBadge extends Component {
    render(){
        return(
            <div className="badge-detail border-none" id="lms-related-process">
				<div className="ov-paragraph">
					<div className="section-head">
						<div className="title">
							<h3 className="title-style">
								<Label className="onlytext bold size24">
								<Icon className="lms-badge" />
								<span>관련 Badge</span>
								</Label>
							</h3>
						</div>
					</div>
					<div className="scrolling lms-badge-list">
						<div className="badge-list-v2 belt">
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
								</li>
								<li>
									<BadgeContainer
                                        badgeName={'로지컬씽킹 Essentials'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'skyblue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
									/>
								</li>
								<li>
									<BadgeContainer
                                        badgeName={'Global_중국_Advanced'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'lightgreen'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
									/>
								</li>
								<li>
									<BadgeContainer
										badgeName={'Coaching Leadership'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'red'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
									/>
								</li>
							</ul>
						</div>
					</div>
              	</div>
            </div>
        )
    }
}

export default ContentsRelationBadge;
