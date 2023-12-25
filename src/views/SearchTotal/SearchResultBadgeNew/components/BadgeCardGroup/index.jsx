import React, {Component} from 'react';
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';

class BadgeCardGroup extends Component {
    render() {
        return (
            <div className='badge-list-v2 has_lnb'>
                <ul>
                    <li>
                        <BadgeContainer
                            badgeName={'반도체 Data. Essential'}
                            level='Level1'
                            badgeStyle={true} //linkable
                            badgeColor={'skyblue'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span>반도체 <strong className="search_keyword">Data</strong>. Essential</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'Data HR Transformation'}
                            level='Level2'
                            badgeStyle={true} //linkable
                            badgeColor={'yellow'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span><strong className="search_keyword">Data</strong> HR Transformation</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'SV Data Transformation'}
                            level='Level3'
                            badgeStyle={true} //linkable
                            badgeColor={'red'}
                            cooperation={true} //협력사 유무
                            hasPlus={true} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span>SV <strong className="search_keyword">Data</strong> Transformation</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'Citizen Data Scientist (No Code)'}
                            level='Level3'
                            badgeStyle={true} //linkable
                            badgeColor={'purple'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={true} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span>Citizen <strong className='search_keyword'>Data</strong> Scientist (No Code)</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'Data HR Transformation'}
                            level='Level2'
                            badgeStyle={true} //linkable
                            badgeColor={'yellow'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span><strong className="search_keyword">Data</strong> HR Transformation</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'SV Data Transformation'}
                            level='Level3'
                            badgeStyle={true} //linkable
                            badgeColor={'red'}
                            cooperation={true} //협력사 유무
                            hasPlus={true} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span>SV <strong className="search_keyword">Data</strong> Transformation</span>
                        </div>
                    </li>
                    <li>
                        <BadgeContainer
                            badgeName={'Citizen Data Scientist (No Code)'}
                            level='Level3'
                            badgeStyle={true} //linkable
                            badgeColor={'orange'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={true} //퍼블용 멤버사 구분
                        />
                        <div className="badge-name">
                            <span>Citizen <strong className='search_keyword'>Data</strong> Scientist (No Code)</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeCardGroup