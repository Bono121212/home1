import React, {Component} from 'react'
import { Button,  Image} from 'semantic-ui-react'
import ProfileSample4 from '../../../images/all/profile-110-px-sample-4.jpg'
import ImageBackground from '../../../images/all/default-bg-profile.png' 




class ProfileCard extends Component {

    render () {
        return (
            <>
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
                                    {/* ************* 2021-10 : class sty2 추가 ************* */}
                                    <div className="page-bttn-area sty2">
                                        <Button className="page-bttn">
                                            My Page
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ************* 2021-10 : class sty2 추가 ************* */}
                    <div className="tag-info-area sty2">
                        {/* 프로필설정이 없는 경우 */}
                        {/* <Button className="btn-setting">
                            프로필 설정
                            <i><Image src={Tooltip}/></i>
                            <p className="tool-tip-box">프로필을 설정해서<br/>자유롭게 활동해 보세요!</p>
                        </Button> */}
                        {/* 프로필설정이 되어있는 경우 */}
                        <div className="info-area">
                            <span className="prof-name">캠핑마스터</span>
                            <span className="comp-name">CV Digital 그룹</span>
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
                            <li><Button className="b-menu">강사서비스</Button></li> 
                            <li><Button className="b-menu on">승인관리</Button></li>{/* 새로운 게시글 on */}
                            <li><Button className="b-menu">Admin</Button></li>
                        </ul>
                    </div> 
                </div>
            </>
        )
    }


}

export default ProfileCard;