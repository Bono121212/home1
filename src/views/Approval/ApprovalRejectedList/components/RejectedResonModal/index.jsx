import React, {Component} from 'react';
import { Button, Modal } from 'semantic-ui-react';

class RejectedResonModal extends Component {

    state = { open : false };

    close = () => this.setState({ open : false });

    render(){

        const { open } = this.state;

        return(
            <Modal open={open} onClose={this.close} className='base w700'>
                <Modal.Header>반려사유</Modal.Header>
                <Modal.Content>
                    <div className='scrolling-80vh'>
                        <div className='content-wrap6'>
                            <div class='my-03-02-pop'>
                                <dl>
                                    <dt><span>신청자</span></dt>
                                    <dd>홍길동</dd>
                                </dl>
                                <dl>
                                    <dt><span>과정명</span></dt>
                                    <dd>AI와 Block chain과의 상관관계는 어떻게 되는가?</dd>
                                </dl>
                                <dl>
                                    <dt><span>반려일자</span></dt>
                                    <dd>2020.03.10</dd>
                                </dl>
                                <dl>
                                    <dt><span>승인자 의견</span></dt>
                                    <dd>출장 스케쥴이 잡혀있으니 확인 후 다른 차수로 재신청 해주세요.출장 스케쥴이 잡혀있으니 확인 후 다른 차수로 재신청 해주세요.출장 스케쥴이 잡혀있으니 확인 후 다른 차수로 재신청 해주세요.출장 스케쥴이 잡혀있으니 확인 후 다른 차수로 재신청 해주세요.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className='actions2'>
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
export default RejectedResonModal