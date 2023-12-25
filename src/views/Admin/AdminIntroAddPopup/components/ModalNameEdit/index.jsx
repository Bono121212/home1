import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class ModalNameEdit extends Component {
    state = { open: true };
    show = (size) => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { open, size } = this.state;

        return (
            <Modal
                size={size}
                open={open}
                onClose={this.close}
                className="base popup_add_intro"
            >
                <Modal.Header>
                    <strong>인트로 추가</strong>
                    <Button className="close"><Icon/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className="popup_body">
                        <div className="add_box">
                            <strong className="add_title">인트로 생성 방식을 선택해 주세요.</strong>
                            <ul className="compo_step">
                                <li className="active">
                                    <Button>
                                        <Icon className="i_component"/>
                                        <span>컴포넌트</span>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Icon className="i_html"/>
                                        <span>HTML</span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="b_cancel">취소</Button>
                            <Button className="b_chk">다음</Button>
                        </div>
                    </div>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default ModalNameEdit;