import React, { Component } from 'react';
import {
    Modal,
    TextArea,
    Button,
    Form
} from 'semantic-ui-react';

class ApproveModal extends Component {

    state = { open : true };

    close = () => this.setState({ open : false });

    render(){
        const { open } = this.state;

        return(
            <>
                <Modal open={open} onClose={this.close} className='base w700'>
                    <Modal.Header>선택된 결제 승인</Modal.Header>
                    <Form className='base'>
                        <Modal.Content>
                            <div className="scrolling-80vh">
                                <div className="content-wrap6">
                                    <div className="my-03-01-pop">
                                        <div className="text1">선택된 항목 (<span>5</span>개)에 대한 결제를 승인하시겠습니까?</div>
                                        <div className="text2">작성하신 의견은 결제가 승인되는 신청자에게 동일하게 전송됩니다.</div>
                                        <TextArea placeholder="의견을 기재해주세요."/>
                                    </div>
                                </div>
                            </div>
                        </Modal.Content>
                        <Modal.Actions className="actions2">
                            <Button className='pop2 d' onClick={this.close}>취소</Button>
                            <Button className='pop2 p' onClick={this.close}>승인</Button>
                        </Modal.Actions>
                    </Form>
                </Modal>
            </>
        )
    }
}
export default ApproveModal