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
                    <p>{`회원가입코드가 일치하지 않습니다.\n다시 한번 정확히 입력해 주세요`}</p>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }

}

export default ModalConfirm;