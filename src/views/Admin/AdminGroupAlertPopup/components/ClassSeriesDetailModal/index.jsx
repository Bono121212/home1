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
                    <h3>필수 정보 입력 안내</h3>
                    <p>‘그룹명’은 필수 항목입니다. <br />
                    해당 정보를 입력하신 후 저장해주세요.</p>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ClassSeriesDetailModal;
