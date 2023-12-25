import React, {Component} from 'react';
import {Icon, Image, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import learningBefore from '../../../../../images/all/badge-learning-before.png';
import learning from '../../../../../images/all/badge-learning.png';
import learningCompleted from '../../../../../images/all/badge-learning-completed.png';

import BadgeContainer from '../../../../../components/Badges/BadgeContainer';

class ChallengeBadge01 extends Component {
    render() {
        return (
            <div className='challenge-badge'>
                <div className='left-area'>

                    {/*뱃지*/}
                    <div className='badge-list-v2'>
                        <BadgeContainer
                            badgeName={'AI/DT Literacy'}
                            level='Level2'
                            badgeStyle={true} //linkable
                            badgeColor={'blue'}
                            cooperation={false} //협력사 유무
                            hasPlus={false} //퍼블용
                            membersCorp={false} //퍼블용 멤버사 구분
                        />
                    </div>
                    <div className='status'>
                        <Button className="fix line">발급요청</Button>
                        <span className='number'>
                            <span className="ing-txt">도전중</span>
                            <span><b>3</b>/9</span>
                        </span>
                        <span className='txt'>Learning path로 제안된 모든 학습 완료 시<br />발급요청을 할 수 있습니다.</span>
                    </div>
                </div>
                <div className='right-area'>
                    <div className='badge-title'>
                        <div className='t1'>AI/DT</div>
                        <div className='t2'>AI/DT Literacty</div>
                        <div className="path">Learning Path</div>
                    </div>
                    <div className='challenge-list'>
                        {/*
                            학습전: badge-learning-before.svg
                            학습중: badge-learning.svg
                            학습완료: badge-learning-completed.svg
                        */}
                        <ul>
                            <li className='class-card befored'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningCompleted} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learning} alt='학습중' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습완료' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                            <li className='class-card'>
                                <Link to='#'>
                                    <span className='class-icon'>
                                        <Image src={learningBefore} alt='학습전' />
                                    </span>
                                    <span className='title'>
                                        Machine learning Complete for Calculus – Deep Learning Machine learning Complete for Calculus – Deep Learning
                                    </span>
                                    <span className='time'>
                                        <Icon className='card-time16'/>1h 30m
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengeBadge01