import React, {Component} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w450'>
                <Modal.Header>
                    <span>알림</span>
                    <button className="admin_popup_close" onClick={this.close}>
                        <img src={ClosePopup} alt="" />
                    </button>
                </Modal.Header>
                <Modal.Content className="admin_popup_content">
                    <h3>알림</h3>
                    <p>선택한 멤버를 삭제하시겠습니까?</p>
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
