import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment, Select, Button, Image, Card, CardGroup} from 'semantic-ui-react';
// import BadgeCardGroup from '../BadgeCardGroup';
import ProfileSample1 from '../../../../../images/all/profile-01@2x.png';
import ProfileSample3 from '../../../../../images/all/profile-03@2x.png';
import ProfileSample5 from '../../../../../images/all/profile-05@2x.png';
import ProfileSample6 from '../../../../../images/all/profile-06@2x.png';
import ProfileSample10 from '../../../../../images/all/profile-10@2x.png';

const selectOptions = [    
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "list1", text: "내가 만든 플레이리스트" },
    { key: "2", value: "list2", text: "추천받은 플레이리스트" },
]
  

class ContentsArea extends Component {

    render() {
        
        return (
            <div className="mypage_contents profile-playlist-contents">
                <div className='mypage_title_wrap'>
                    <strong className="mypage_title">Playlist</strong>
                    <Link to='/playlist/playlist-list-all' className='mypage_btn'>전체 둘러보기</Link>
                </div>
                <div className="top-line">
                    <span>총 <strong>32 개</strong>의 Playlist가 있습니다.</span>
                    <div className='select-wrap'>
                        <Select
                            placeholder="선택"
                            className="ui small-border dropdown m0"
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                        <Button className="btn-playlist">+ Playlist 만들기</Button>
                    </div>
                </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className='playlist-list list-wrapper'>
                            <CardGroup className='palylist-container'>
                                <Card className='playlist-box card-item recommended'>
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
                                </Card>
                                <Card className='playlist-box card-item my'>
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
                                </Card>
                                <Card className='playlist-box card-item like'>
                                    <div className='playlist-info-box'>
                                        <div className='list-type'>내가 담은</div>
                                        <div className='list-title'>우리팀 마음근력 키우기</div>
                                        <div className='list-course'>총 8개 학습카드</div>
                                    </div>
                                    <div className='maker-info-box'>
                                        <div className='maker-thumb'>
                                            <Image src={ProfileSample10} alt="만든사람 프로필이미지"/>
                                        </div>
                                        <div className='maker-user'>마스터 오브 캠핑</div>
                                    </div>
                                </Card>
                                <Card className='playlist-box card-item my'>
                                    <div className='playlist-info-box'>
                                        <div className='list-type'>내가 만든</div>
                                        <div className='list-title'>행복에 이르는 다섯 계단</div>
                                        <div className='list-course'>총 8개 학습카드</div>
                                    </div>
                                    <div className='maker-info-box'>
                                        <div className='maker-thumb'>
                                            <Image src={ProfileSample1} alt="만든사람 프로필이미지"/>
                                        </div>
                                        <div className='maker-user'>김써니</div>
                                    </div>
                                </Card>
                                <Card className='playlist-box card-item like'>
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
                                </Card>
                                <Card className='playlist-box card-item recommended'>
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
                                </Card>
                            </CardGroup>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default ContentsArea;