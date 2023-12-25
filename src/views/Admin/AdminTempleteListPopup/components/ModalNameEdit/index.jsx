import React, { Component } from "react";
import { Button, Modal, Input } from "semantic-ui-react";

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
                className="base popup_editName"
            >
                <Modal.Header>
                    디자인명 수정
                </Modal.Header>
                <Modal.Content>
                    <strong className="tit">디자인명</strong>
                    <span className="txt_cnt">
                        <span className="txt_now">0</span>/30
                    </span>

                    <Input placeholder="템플릿의 디자인명을 입력해주세요."/>

                </Modal.Content>
                <Modal.Actions>
                    <Button className="cancel">취소</Button>
                    <Button className="create">완료</Button>
                </Modal.Actions>

            </Modal>
            );
    }
}

export default ModalNameEdit;