import React, {Component} from 'react'
import { Button, Modal, Form, Select } from 'semantic-ui-react'
const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '7'},
    {key: 'val02', value: 'val02', text: '6'},
    {key: 'val03', value: 'val03', text: '5'},
    {key: 'val04', value: 'val04', text: '4'},
    {key: 'val05', value: 'val05', text: '3'},
    {key: 'val05', value: 'val06', text: '2'},
    {key: 'val05', value: 'val07', text: '1'},
];

const selectOptions02 = [
    {key: 'val02', value: 'val02', text: '3'},
    {key: 'val02', value: 'val02', text: '2'},
    {key: 'val02', value: 'val02', text: '1'},
];

const selectOptions03 = [
    {key: 'val03', value: 'val03', text: '20'},
    {key: 'val03', value: 'val03', text: '19'},
    {key: 'val03', value: 'val03', text: '18'},
    {key: 'val03', value: 'val03', text: '17'},
    {key: 'val03', value: 'val03', text: '16'},
    {key: 'val03', value: 'val03', text: '15'},
];

class MainPersonalBoardSetting extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false, isOpen : false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w600'>
                <Modal.Header className="personal-popup-head">
                    성장을 위한 준비!
                    {/* <span className="sub f12">학습 목표를 설정해보세요.</span> */}
                </Modal.Header>
                <Modal.Content className="admin_popup_reject">

                    <div className="personal-main-box">
                        <span className="personal-des">올해 학습 목표를 세워볼까요?</span>
                        <Form>
                            <Form.Field className="form-field1">
                                <input type="text" className="chal-inp" />
                                <span>h</span>
                            </Form.Field>
                        </Form>
                    </div>

                    <div className="personal-main-box">
                        <span className="personal-des">일주일에 며칠 학습하실 건가요?</span>
                        <Form>
                            <Form.Field className="form-field2">
                                <div className="preview" style={{overflow: 'visible'}}>
                                    <Select className='dropdown selection personal-popup-select'
                                            options={selectOptions01}/>
                                    <span>일</span>
                                </div>
                            </Form.Field>
                        </Form>
                    </div>

                    <div className="personal-main-box">
                        <span className="personal-des">하루 몇 시간 학습하실 건가요?</span>
                        <Form>
                            <Form.Field className="form-field3">
                                <div className="preview" style={{overflow: 'visible'}}>
                                    <Select className='dropdown selection personal-popup-select'
                                            options={selectOptions02}/>
                                    <span>h</span>
                                    <Select className='dropdown selection personal-popup-select'
                                            options={selectOptions03}/>
                                    <span>m</span>
                                </div>
                            </Form.Field>
                        </Form>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>취소</Button>
                    <Button className='pop2 p' onClick={this.close}>확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default MainPersonalBoardSetting;
