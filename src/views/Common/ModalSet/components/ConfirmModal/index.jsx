import React, {Component} from 'react'
import {
    Button,
    Modal,
    Image
} from 'semantic-ui-react'

class ConfirmModal extends Component {
    state = {modalOpen: false}

    handleOpen = () => this.setState({modalOpen: true})

    handleClose = () => this.setState({modalOpen: false})

    render() {

        return (
            <Modal trigger={<Button icon secondary onClick={this.handleOpen}>Confirm</Button>}
                   className='size-mini'
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <div className="main">
                    <Modal.Header>
                        Confirm
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Image wrapped className='modal-img' size='medium' src='/images/modal/confirm.png'/>
                            <div className='title'>차수 삭제</div>
                            <p>차수 정보를 삭제하시겠습니까?</p>
                        </Modal.Description>
                    </Modal.Content>
                </div>
                <Modal.Actions className="normal twin">
                    <Button secondary onClick={this.handleClose}>Cancel</Button>
                    <Button primary onClick={this.handleClose}>OK</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ConfirmModal;
