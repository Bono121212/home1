import React, {Component} from 'react'
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
            <Modal size={size} open={open} onClose={this.close} className='base w700'>
                <Modal.Header>
                    <span>반려 사유</span>
                </Modal.Header>
                <Modal.Content className="admin_popup_reject">
                    <h5>반려 사유를 입력해주세요.</h5>
                    <p>입력된 반려 사유는 E-mail을 통해 발송되며, 발송된 내용은 수정하실 수 없습니다.</p>
                    <Form>
                        <Form.Field>
                        <div className="ui right-top-count input admin-popup-textarea">

                            <textarea placeholder="내용을 입력해주세요" />
                        </div>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>취소</Button>
                    <Button className='pop2 p' onClick={this.close}>발송</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ClassSeriesDetailModal;
