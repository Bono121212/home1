import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'
import ProfileSample1 from '../../../../../images/all/profile-110-px-sample-1.jpg'
import ProfileSample2 from '../../../../../images/all/profile-110-px-sample-2.jpg'
import '../../style.css'


class LinkedInModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}


                <Modal size={size} open={open} onClose={this.close} className='w500 base'>
                    <Modal.Header>
                        Followers
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-60vh">
                            <div className="content-wrap-follow">
                                <ul className="follow_list">

                                    <li>
                                        <p className="pic"><img src={ProfileSample1} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">seungki86</p>
                                         {/*Follow checkbox : default*/}
                                        <label className="chk_follow">
                                            <input type="checkbox" name=""/>
                                                <span>Follow</span>
                                        </label>
                                    </li>

                                    <li>
                                        <p className="pic"><img src={ProfileSample2} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">nickname</p>
                                        {/* unfollow 상태 : checked 클래스 추가*/}
                                        <label className="chk_follow checked">
                                            <input type="checkbox" name="" checked="checked"/>
                                                <span>Unfollow</span>
                                        </label>
                                    </li>

                                    <li>
                                        <p className="pic"><img src={ProfileSample1} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">kikiki8812</p>
                                        <label className="chk_follow">
                                            <input type="checkbox" name=""/>
                                                <span>Follow</span>
                                        </label>
                                    </li>
                                    <li>
                                        <p className="pic"><img src={ProfileSample2} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">tmddnjs80</p>
                                        {/* unfollow 상태 : checked 클래스 추가*/}
                                        <label className="chk_follow checked">
                                            <input type="checkbox" name="" checked="checked"/>
                                                <span>Unfollow</span>
                                        </label>
                                    </li>
                                    <li>
                                        <p className="pic"><img src={ProfileSample1} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">seungki86</p>
                                        <label className="chk_follow">
                                            <input type="checkbox" name=""/>
                                                <span>Follow</span>
                                        </label>
                                    </li>
                                    <li>
                                        <p className="pic"><img src={ProfileSample2} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">nickname</p>
                                        {/* unfollow 상태 : checked 클래스 추가*/}
                                        <label className="chk_follow checked">
                                            <input type="checkbox" name="" checked="checked"/>
                                                <span>Unfollow</span>
                                        </label>
                                    </li>
                                    <li>
                                        <p className="pic"><img src={ProfileSample1} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">kikiki8812</p>
                                        <label className="chk_follow">
                                            <input type="checkbox" name=""/>
                                                <span>Follow</span>
                                        </label>
                                    </li>
                                    <li>
                                        <p className="pic"><img src={ProfileSample2} alt="프로필 사진"/>
                                        </p>
                                        <p className="nickname">tmddnjs80</p>
                                        {/* unfollow 상태 : checked 클래스 추가*/}
                                        <label className="chk_follow checked">
                                            <input type="checkbox" name="" checked="checked"/>
                                                <span>Unfollow</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 d'>닫기</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default LinkedInModal;
