import React, {Component} from 'react'
import { Button, Image } from 'semantic-ui-react'
import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg'
import ImageBackground from '../../../../../images/all/image-background.png'
import closeIcon from '../../../../../images/all/icon-profile-close.png'
import '../../style.css'


class ProfileCard extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render () {
        return (
            <>
                <div className="profile-wrapper">
                    <div className="bg-wrapper">
                        <Image src={ImageBackground}/>
                        <div className="profile-info-wrapper">
                            <div className="profile-info-area">
                                <div className="close-wrapper">
                                    <button>
                                        <Image src={closeIcon}/>
                                        <span className="blind">close</span>
                                    </button>
                                </div>
                                
                                <div className="image-area">
                                    <Image src={ProfileSample4}/>
                                </div>
                                <div className="profile-info ">
                                    <span className="prof-tit">조세호님</span>
                                    <div className="foll-info">
                                        <span>396</span>{' '}Follower<span>208</span>{' '}Following
                                    </div>
                                </div>
                                <div className="count-area">
                                    <div className="cnt-box bad-cnt">
                                        <span>Badge</span>
                                        <strong>12</strong>
                                    </div>
                                    <div className="cnt-box com-cnt">
                                        <span>커뮤니티</span>
                                        <strong>26</strong>
                                    </div>
                                    <div className="cnt-box feed-cnt">
                                        <span>Feed</span>
                                        <strong>5,555</strong>
                                    </div>
                                </div>
                                <div className="follow-bttn-area">
                                    {/* following/unfollowing class이름에 따라 css 바뀜*/}
                                    <Button className="unfollowing">
                                        Unfollow
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag-info-area">
                    <div className="info-area">
                        <span className="prof-name">조세호</span>
                        <span className="comp-name">SK주식회사 C&C</span>
                    </div>
                    <div className="tag-area">
                        <div className="belt">
                            <span># 일요일은요리사</span>
                            <span># 다이어트</span>
                            <span># 돈까스</span>
                            <span># 밀가루귀신</span>
                            <span># 개발자</span>
                            <span># 맛있는녀석들</span>
                            <span># 심야식당</span>
                            <span># 건강한돼지</span>
                            <span># 아기자기</span>
                        </div>
                    </div>
                    <div className="close-area">
                        <Button>Close</Button>
                    </div>
                </div>
            </>
        )
    }


}

export default ProfileCard;