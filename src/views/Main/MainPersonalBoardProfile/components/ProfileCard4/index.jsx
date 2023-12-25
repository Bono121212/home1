import React, {Component} from 'react'
import { Button, Image } from 'semantic-ui-react'
import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg'
import ImageBackground from '../../../../../images/all/img-my-profile-card-bg.png'
import closeIcon from '../../../../../images/all/icon-profile-close.png'
import Tooltip from '../../../../../images/all/icon-tooltip-w-20-px.svg'
import { Link } from 'react-router-dom';

import '../../../../../layouts/UserLayoutOldV2/UserLayoutOldV2.css'

class ProfileCard extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render () {
        return (
            <>
                <div className="profile-contents-area">
                    <div className="profile-wrapper">
                        <div className="bg-wrapper">
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
                                        <div className="close-wrapper">
                                            <button>
                                                <Image src={closeIcon}/>
                                                <span className="blind">close</span>
                                            </button>
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
                                    {/* 강사서비스 버튼 추가될 경우, page-bttn-area에 type2 클래스가 필요합니다 */}
                                    <div className="page-bttn-area type2">
                                        <Button className="page-bttn">
                                            My Page
                                        </Button>
                                        <Link to="/" className="l_to">강사 서비스</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tag-info-area">
                        {/* 프로필설정이 없는 경우 */}
                        <Button className="btn-setting">
                            프로필 설정
                            <i><Image src={Tooltip}/></i>
                            <p className="tool-tip-box">프로필을 설정해서<br/>자유롭게 활동해 보세요!</p>
                        </Button>
                        {/* 프로필설정이 되어있는 경우 */}
                        {/* <div className="info-area">
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
                                <span># 하이킹</span>
                                <span># 드라이빙</span>
                            </div>
                        </div>  */}
                        <div className="logout-area">
                            <Button>Logout</Button>
                        </div> 
                    </div>
                </div>
            </>
        )
    }


}

export default ProfileCard;