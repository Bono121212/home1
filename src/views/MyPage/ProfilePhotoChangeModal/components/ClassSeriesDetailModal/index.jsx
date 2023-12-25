import React, {Component} from 'react'
import {
    Button,
    Modal, Form, Radio
} from 'semantic-ui-react'

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w380'>
                <Modal.Header>
                    프로필 사진 변경
                </Modal.Header>
                <Modal.Content>
                    <div className="profile-change">
                        <div className="left">
                            <div className="ui profile">
                                <div className="pic s110">
                                    <img src="" alt="" id="blah"/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text01">김유니김유니김유니김유니김유니김유니김유니김유니김유니</div>
                            <div className="text02">SK C&amp;C</div>
                            <div className="text02">플랫폼 개발 1팀</div>
                            <div className="upload">
                                <Form.Field>
                                    {/*<label className="necessary">학습카드 공개여부</label>*/}
                                    <Radio
                                       className='base mr15px'
                                       label='IM'
                                       name='radioGroup'
                                       value='value01'
                                       onChange={this.handleChange}
                                       defaultChecked
                                    />
                                    <Radio
                                       className='base'
                                       label='mySUNI'
                                       name='radioGroup'
                                       value='value02'
                                       onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <input type="file" id="profileImage"/>
                                <label htmlFor="profileImage" className="ui orange-arrow3 button">Image upload</label>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>Cancel</Button>
                    <Button className='pop2 p' onClick={this.close}>Confirm</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ClassSeriesDetailModal;
