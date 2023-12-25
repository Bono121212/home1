import React, {Component} from 'react';
import { Button, Modal, Checkbox } from 'semantic-ui-react';

class SettingModal extends Component {
    state = { open: true };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});


    render() {
        const {open, size} = this.state;
        return (
            <>
                <Modal size={size} open={open} className='base modal-setting front scrolling ko'>
                    <Modal.Header>
                        <div className="right-btn">
                            <Checkbox label='더 이상 보지 않기' className='base'/>
                            <Button className="close" onClick={this.close}>닫기</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <img src='https://image.mysuni.sk.com/suni-asset/public/images/all/img-change-setting-ko.png' alt='mySUNI 사용을 위해 아래의 설정을 변경해 주시기 바랍니다.' className='image' />
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default SettingModal;
