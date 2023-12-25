import React, {Component} from 'react';
import {
    Button,
    Modal
} from "semantic-ui-react";

class BadgeAcquisitionAlert extends Component {

    state = {
        modalOpen: false
    }

    handleClose = () => this.setState({modalOpen: false})

    render() {

        const { modalOpen } = this.state;

        return (
            <Modal
                className='base w380'
                open={modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>뱃지 획득 알림</Modal.Header>
                <Modal.Content>
                    <div className='content-wrap6'>
                        <div className='test-report-cont'>
                            <b>도전에 성공하여 Badge가 발급 되었습니다.</b><br/>
                            이전에 완료한 학습들로 Badge 도전 학습이 구성되어 있습니다.
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className='actions2'>
                    <Button className='pop2 p' onClick={this.handleClose}>Confirm</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default BadgeAcquisitionAlert