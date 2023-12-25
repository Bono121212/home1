import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import ProfileSample4 from '../../../../../images/all/profile-06@2x.png';
//import ImageBackground from '../../../../../images/all/img-my-profile-card-bg.png';
//import closeIcon from '../../../../../images/all/icon-profile-close.png';
//import Tooltip from '../../../../../images/all/icon-tooltip-w-20-px.svg';


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
                            <div className="profile-info-wrapper">
                                <div className="profile-info-area">
                                    
                                    <div className="image-area">
                                        <Image src={ProfileSample4} alt="내프로필이미지"/>
                                    </div>
                                    <div className="profile-info ">
                                        <span className="prof-tit">마스터 오브 캡핑</span>
                                        <div className="foll-info">
                                            <span>396</span>{' '}Follower<span>208</span>{' '}Following
                                        </div>
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