import React, {Component} from 'react'
import {
    Modal,
} from 'semantic-ui-react'
import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg'
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
                        프로필 보기
                    </Modal.Header>
                    <Modal.Content>
                        <div class="profile_box profile_v">
                            <div class="profile_pic">
                                <div class="pic_area user">
                                    <p><img src={ProfileSample4} alt="프로필 사진" /></p>
                                </div>
                            </div>

                            <div class="profile_info">
                                <p class="name">nickname</p>
                                <p>만나서 반갑습니다. 구성원들의 자유로운 생각을 나누고싶습니다.</p>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions actions2">
                        <button className="ui button pop2 d">닫기</button>
                        <button className="ui button pop2 p">상세보기</button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default LinkedInModal;
