import React, {Component} from 'react'
import {
    Button,
    Checkbox,
    Modal,
} from 'semantic-ui-react'
class CubeLivePopup extends Component {
    state = {modalOpen: true}
    handleOpen = () => this.setState({modalOpen: true})
    handleClose = () => this.setState({modalOpen: false})
    render() {
        return (
            <Modal trigger={<Button icon secondary onClick={this.handleOpen}>Confirm</Button>}
                   className='size-mini size-thin'
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <div className="main">
                    <Modal.Header>
                        알림
                    </Modal.Header>
                    <Modal.Content>
                        <div className='live-alim-pop'>
                            <p className='title'>안녕하세요, 김써니님. <br />Live 시작 전, 알림을 받으시겠어요?</p>
                            <div className='items'>
                                <Checkbox className="base" label="SMS" />
                                <Checkbox className="base" label="Push"/>
                                <Checkbox className="base" label="모두 알림 받을래요."/>
                            </div>
                        </div>
                    </Modal.Content>
                </div>
                <Modal.Actions className="normal twin">
                    <Button secondary onClick={this.handleClose}>아니요</Button>
                    <Button primary onClick={this.handleClose}>네, 알림 받을게요!</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
export default CubeLivePopup;