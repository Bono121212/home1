import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'
class CubeLivePopup02 extends Component {
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
                            <p className='title'>Live 알림을 취소하시겠어요?</p>
                            <p className="desc">알림받기 취소 시 Live 관련 일정과 정보를 더 이상 받아볼 수 없습니다.</p>
                        </div>
                    </Modal.Content>
                </div>
                <Modal.Actions className="normal twin">
                    <Button secondary onClick={this.handleClose}>아니요</Button>
                    <Button primary onClick={this.handleClose}>네, 취소할게요!</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
export default CubeLivePopup02;