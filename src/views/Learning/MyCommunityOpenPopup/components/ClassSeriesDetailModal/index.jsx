import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react'
// import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w380'>
                <Modal.Header>
                    <span>비밀번호</span>
                </Modal.Header>
                <Modal.Content className="admin_popup_reject">
                    <h4>
                    해당 커뮤니티에 입장하기 위해서는 <br />
                    비밀번호가 필요합니다.
                    </h4>
                    <Form>
                        <Form.Field>
                        <input type="password" className="commu_pw_form"/>
                        </Form.Field>
                    </Form>
                    <Link to="">
                        관리자에게 문의하기
                    </Link>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>취소</Button>
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ClassSeriesDetailModal;
