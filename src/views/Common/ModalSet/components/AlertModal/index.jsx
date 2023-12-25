import React, {Component} from 'react'
import {
    Button,
    Modal,
    Image
} from 'semantic-ui-react'

class AlertModal extends Component {
    state = {modalOpen: false}

    handleOpen = () => this.setState({modalOpen: true})

    handleClose = () => this.setState({modalOpen: false})

    render() {

        return (
            <Modal trigger={<Button icon secondary onClick={this.handleOpen}>Alert</Button>}
                   className='size-mini'
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <div className="main">
                    <Modal.Header>
                        Confirm
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Image wrapped className='modal-img' size='medium' src='/images/modal/alert.png'/>
                            <div className='title'>필수 정보 입력 안내</div>
                            <p>“메타명”은 필수 입력 항목입니다. </p>
                            <p>해당 정보를 입력하신 후 저장해주세요.</p>
                        </Modal.Description>
                    </Modal.Content>
                </div>
                <Modal.Actions className="normal">
                    <Button primary onClick={this.handleClose}>OK</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default AlertModal;
