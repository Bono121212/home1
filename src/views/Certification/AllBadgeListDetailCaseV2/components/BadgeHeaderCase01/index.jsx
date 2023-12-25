import React, {Component} from 'react'
import {Button} from 'semantic-ui-react';
import BadgeContainer from '../../../../../components/Badges/BadgeContainer';

class BadgeHeaderCase01 extends Component {
    render() {
        return (
            <div className="badge-header">
                <div className="inner">

                    {/*뱃지*/}
                    <div className="badge-list-v2">
                        <BadgeContainer
                            badgeName={'Customer Empathy - Advanced'}
                            level='Level2'
                            badgeStyle={false} //linkable
                            badgeColor={'blue'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                    </div>

                    <div className="title-area">
                        <div className="college">AI / DT</div>
                        <div className="title">Customer Empathy - Advanced 타이틀 2줄일 때 타이틀 2줄일때</div>
                    </div>
                    <div className='info'>
                        <div>
                            <span className='detail admin'>
                                <span>인증/관리 주체</span>
                                <span>mySUNI, 관계사, Google</span>
                            </span>
                        </div>
                        <div>
                            <span className='detail design'>
                                <span>설계 주체</span>
                                <span>SK Innovation</span>
                            </span>
                        </div>
                        <div>
                            <span className='detail level'>
                                <span>Level</span>
                                <span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </span>
                            </span>
                            <span className='detail period'>
                                <span>총 학습시간</span>
                                <span>142h 30m</span>
                            </span>
                        </div>
                    </div>
                    <div className="status">
                        <Button className="fix bg">도전하기</Button>
                        <div className="txt">Badge획득에 도전 해보세요</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BadgeHeaderCase01
