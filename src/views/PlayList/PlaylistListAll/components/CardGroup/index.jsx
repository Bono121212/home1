import React, {Component} from 'react';
import {Button, Image, Card, CardGroup} from 'semantic-ui-react';
import ProfileSample1 from '../../../../../images/all/profile-01@2x.png';
import ProfileSample3 from '../../../../../images/all/profile-03@2x.png';
import ProfileSample5 from '../../../../../images/all/profile-05@2x.png';
import ProfileSample6 from '../../../../../images/all/profile-06@2x.png';
import ProfileSample10 from '../../../../../images/all/profile-10@2x.png';

class CardContentArea extends Component {
    render() {
        return (
            <CardGroup className='palylist-container has-share'>
                <Card className='playlist-box card-item recommended'>
                    <div className='card-item-inner' onClick={()=> {console.log('클릭영역테스트:전체')}}>
                        <div className='playlist-info-box'>
                            <div className='list-type'>추천 받은</div>
                            <div className='list-title'>이천포럼 다시보기</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample6} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>마스터 오브 캠핑</div>
                        </div>
                    </div>
                    <div className='badge-info-box' onClick={()=> {console.log('클릭영역테스트:공유')}}>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
                <Card className='playlist-box card-item my'>
                    <div className='card-item-inner'>
                        <div className='playlist-info-box'>
                            <div className='list-type'>내가 만든</div>
                            <div className='list-title'>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample1} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>김써니</div>
                        </div>
                    </div>
                    <div className='badge-info-box'>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
                <Card className='playlist-box card-item other'>
                    <div className='card-item-inner'>
                        <div className='playlist-info-box'>
                            <div className='list-type'><span className='blind'>타인이 만든</span></div>
                            <div className='list-title'>우리팀 마음근력 키우기</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample10} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>마스터 오브 캠핑</div>
                        </div>
                    </div>
                    <div className='badge-info-box'>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
                <Card className='playlist-box card-item other'>
                    <div className='card-item-inner'>
                        <div className='playlist-info-box'>
                            <div className='list-type'><span className='blind'>타인이 만든</span></div>
                            <div className='list-title'>행복에 이르는 다섯 계단</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample1} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>김써니</div>
                        </div>
                    </div>
                    <div className='badge-info-box'>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
                <Card className='playlist-box card-item like'>
                    <div className='card-item-inner'>
                        <div className='playlist-info-box'>
                            <div className='list-type'>내가 담은</div>
                            <div className='list-title'>[TM Speech] P4G 서울 정상회의 기조강연 "Grand Open"</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample3} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>Benedict Cumberbatch</div>
                        </div>
                    </div>
                    <div className='badge-info-box'>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
                <Card className='playlist-box card-item recommended'>
                    <div className='card-item-inner'>
                        <div className='playlist-info-box'>
                            <div className='list-type'>추천 받은</div>
                            <div className='list-title'>이천 포럼 다시보기</div>
                            <div className='list-course'>총 8개 학습카드</div>
                        </div>
                        <div className='maker-info-box'>
                            <div className='maker-thumb'>
                                <Image src={ProfileSample5} alt="만든사람 프로필이미지"/>
                            </div>
                            <div className='maker-user'>정과장</div>
                        </div>
                    </div>
                    <div className='badge-info-box'>
                        <Button icon className='share'><span className='blind'>공유하기</span></Button>
                    </div>
                </Card>
            </CardGroup>
        )
    }
}
export default CardContentArea;