import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import ProfileSample1 from '../../../../../images/all/profile-01@2x.png';


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
                                        <Image src={ProfileSample1} alt="내프로필이미지"/>
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
                </div>
                
            </>
        )
    }


}

export default ProfileCard;