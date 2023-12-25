import React, {Component} from 'react';
import { Button, Checkbox, Image, Modal, Tab, Table,} from 'semantic-ui-react';
import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg';
import ImageBackground from '../../../../../images/all/img-my-profile-card-bg.png';
import closeIcon from '../../../../../images/all/icon-profile-close.png';
import Tooltip from '../../../../../images/all/icon-tooltip-w-20-px.svg';


import '../../style.css';


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
                            <Image src={ImageBackground} alt="프로필배경기본이미지"/>
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
                                                <Image src={closeIcon} alt="닫기버튼"/>
                                                <span className="blind">close</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="image-area">
                                        <Image src={ProfileSample4} alt="내프로필이미지"/>
                                    </div>
                                    <div className="profile-info ">
                                        <span className="prof-tit">김써니</span>
                                        {/* 다국어 경우 삭제 */}
                                        {/* <div className="foll-info">
                                            <span>396</span>{' '}Follower<span>208</span>{' '}Following
                                        </div> */}
                                    </div>
                                    <div className="page-bttn-area">
                                        <Button className="page-bttn active">
                                            프로필 설정
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }


}

export default ProfileCard;