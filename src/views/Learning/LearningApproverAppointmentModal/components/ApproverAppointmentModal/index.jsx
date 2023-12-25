import React, {Component} from 'react';
import {
    Button,
    Modal
} from "semantic-ui-react";
import ApproverList from "../ApproverList";

class ApproverAppointmentModal extends Component {

    state = { open : true };

    close = () => this.setState( { open : false });

    render(){

        const { open } = this.state;

        return(
            <Modal open={open} onClose={this.close} className='base w700'>
                <Modal.Header className='res'>
                    승인자 설정
                    <span className="sub f12">본 과정의 신청 정보를 함께 안내 받을 리더 정보를 설정하여 주시기 바랍니다.</span>
                </Modal.Header>
                <Modal.Content>
                    <div className="scrolling-60vh">
                        <div className="ml-05-p08-wrap">
                            {/*승인자 목록*/}
                            <ApproverList/>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className='actions'>
                    <Button className='pop line w190'>승인자 변경하기</Button>
                    <Button className='pop d w190' onClick={this.close}>Cancel</Button>
                    <Button className='pop p w190'>OK</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ApproverAppointmentModal;