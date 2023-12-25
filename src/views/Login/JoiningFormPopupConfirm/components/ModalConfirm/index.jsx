import React, {Component} from 'react';
import { Button, Modal } from 'semantic-ui-react';


class ModalConfirm extends Component {
    state = { open: true };
    show = (size) => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });

    render(){
        const {open, size} = this.state;
        return (
            <Modal
                size={size}
                open={open}
                onClose={this.close}
                className="base w380 join-pop"
            >
                <Modal.Header>
                    인증 완료
                </Modal.Header>
                <Modal.Content className="login-confirm">
                    <p>{`인증이 완료되었습니다.\n다음 화면으로 이동합니다.`}</p>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>취소</Button>
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }

}

export default ModalConfirm;