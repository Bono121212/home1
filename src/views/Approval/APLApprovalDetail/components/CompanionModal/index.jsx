
import React, {Component} from 'react';
import {Modal, Form, TextArea, Button} from 'semantic-ui-react';

class CompanionModal extends Component {
    //
    state = {
        modalOpen: false
    }

    open = () => this.setState({modalOpen: true});

    close = () => this.setState({modalOpen: false});

    render() {
        //
        const { modalOpen } = this.state;

        return (
            <Modal
                open={modalOpen}
                className="base w700"
                trigger={<Button className="fix line" onClick={this.open}>반려</Button>}
            >
                <Modal.Header>반려 사유 등록</Modal.Header>
                <Modal.Content>
                    <Form className="base">
                        <div className="scrolling-80vh">
                            <div className="content-wrap6">
                                <TextArea
                                    placeholder="반려 사유를 입력해주세요. &#13;&#10;(입력된 반려 사유는 E-mail을 통해 전달되며, 등록된 내용은 수정하실 수 없습니다.)"
                                    rows={8}
                                />
                            </div>
                        </div>
                    </Form>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className="pop2 d" onClick={this.close}>Cancel</Button>
                    <Button className="pop2 p">OK</Button>

                </Modal.Actions>
            </Modal>
        );
    }
}

export default CompanionModal;