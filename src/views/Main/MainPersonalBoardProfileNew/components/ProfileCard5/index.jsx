import React, {Component} from 'react'
import { Button, Image, } from 'semantic-ui-react'
import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg'
import ImageBackground from '../../../../../images/all/default-bg-profile.png' 



class ProfileCard extends Component {

    render () {
        return (
            <> {/* 강사서비스용 */}
                <div className="profile-contents-area">
                    <div className="profile-wrapper">
                        <div className="bg-wrapper">
                            {/* ************* 2021-10 : 이미지 미설정시 나오는 기본이미지교체'default-bg-profile.png'************* */}
                            <Image src={ImageBackground}/> 
                            <div className="profile-info-wrapper">
                                <div className="profile-info-area">
                                    <div className="header-bttn-area">
                                        <div className="name-chng-area">
                                        {/* 실명/닉네임 class 이름 chng-active*/}
                                            <Button className="name-chng-bttn chng-active">
                                                실명
                                            </Button>
                                            <Button className="name-chng-bttn">
                                                닉네임
                                            </Button>
                                        </div>
                                        {/* ************* 2021-10 : close > top-right-area 변경 ************* */}
                                        <div className="top-right-area">
                                            <Button className="lg-out">Logout</Button>
                                        </div>

                                    </div>
                                    
                                    <div className="image-area">
                                        <Image src={ProfileSample4}/>
                                    </div>
                                    <div className="profile-info ">
                                        <span className="prof-tit">김써니</span>                                        
                                        <div className="foll-info">
                                            <span>396</span>{' '}Follower<span>208</span>{' '}Following
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ************* 2021-10 : class sty2 추가 ************* */}
                    <div className="tag-info-area sty2">
                        {/* 프로필설정이 없는 경우 */}
                        {/*<div className="prf-setting-area">
                            <p>프로필 설정으로<br/><strong className="name">김써니</strong> 님을 표현해 보세요!</p>
                            <Button className="setting-bttn">프로필 설정하기</Button>
                        </div> */}
                        {/* 프로필설정이 되어있는 경우 */}
                        <div className="info-area">
                            <span className="prof-name">외부강사</span>
                            <span className="comp-name">서울대학교 정치외교학과</span>
                        </div>
                        <div className="tag-area">
                            <div className="belt">
                                <span># 캠핑</span>
                                <span># 솔캠</span>
                                <span># 열정캠퍼</span>
                                <span># 캠핑마스터</span>
                                <span># ENFP</span>
                                <span># 개발자</span>
                                <span># 개발자</span>
                                <span># 개발자</span>
                                <span># 개발자</span>
                                <span># 하이킹</span>
                                <span># 드라이빙</span>
                            </div>
                        </div> 
                    </div>
                    {/* ************* 2021-10 : logout-area > bottom-btn-area ************* */}
                    <div className="bottom-bttn-area">
                        <ul>
                            <li><Button className="b-menu"><span>강사서비스</span></Button></li> 
                        </ul>
                    </div> 
                </div>
            </>
        )
    }


}

export default ProfileCard;