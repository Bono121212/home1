import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
//import CardValueInprogress from "../CardValueInprogress";
//import CardValueInprogress01 from "../CardValueInprogress01";
//import profileImg from '../../../../../images/all/profile-110-px-sample-6.png';


class MyLearningInProgress extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area1">
                    <Segment className="full">
                    {/* 
                        <div className="profile-wrap">
                            <Popup
                                className='profile_btn'
                                on='click'
                                pinned
                                trigger={<Button content='Button' />}
                            >
                                <Popup.Content>
                                    <div className="profile-contents">
                                        <div className='profile-contents-box'>
                                            <Button className='profile-close'>
                                                <Icon>x</Icon>
                                            </Button>
                                            <div className="link-box">
                                                <Link to='/' className='active'>
                                                    설명
                                                </Link>
                                                <Link to='/'>
                                                    닉네임
                                                </Link>
                                            </div>
                                            <div className='profile-detail'>
                                                <Image src={profileImg}/>
                                                <strong>김써니</strong>
                                                <span>396<em>Follower</em></span>
                                                <span>208<em>Following</em></span>
                                            </div>
                                            <Link to='/' className='profile-my-link'>My Page</Link>
                                        </div>

                                        <div className="profile-contents-box type2">
                                            <div>
                                                <Link to='/'>프로필 설정</Link>
                                                <button className='profile-noti'>!</button>
                                                <p>프로필을 설정해서<br/>자유롭게 활동해 보세요!</p>
                                            </div>
                                            <button className='profile-logout'>Logout</button>
                                        </div>
                                    </div>
                                </Popup.Content>
                            </Popup>

                            <Popup
                                className='profile_btn2'
                                on='click'
                                pinned
                                trigger={<Button content='Button' />}
                            >
                                <Popup.Content>
                                    <div className="profile-contents">
                                        <div className='profile-contents-box'>
                                            <Button className='profile-close'>
                                                <Icon>x</Icon>
                                            </Button>
                                            <div className="link-box">
                                                <Link to='/' className='active'>
                                                    설명
                                                </Link>
                                                <Link to='/'>
                                                    닉네임
                                                </Link>
                                            </div>
                                            <div className='profile-detail'>
                                                <Image src={profileImg}/>
                                                <strong>김써니</strong>
                                                <span>396<em>Follower</em></span>
                                                <span>208<em>Following</em></span>
                                            </div>
                                            <Link to='/' className='profile-my-link'>My Page</Link>
                                        </div>

                                        <div className="profile-contents-box type2">
                                            <Link to='/'>프로필 설정</Link>
                                            <button>Logout</button>
                                        </div>
                                    </div>
                                </Popup.Content>
                            </Popup>
                        </div>
                     */}
                    </Segment>
                </div>
            </>
        )
    }
}

export default MyLearningInProgress
