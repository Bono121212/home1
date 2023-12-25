import React, { Component } from "react";
import { Button, Modal, Input } from "semantic-ui-react";

class ModalNewFolderCreate extends Component {
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
                className="base popup_fcreate"
            >
                <Modal.Header>
                    새폴더
                </Modal.Header>
                <Modal.Content>
                    <strong className="tit">새 폴더를 생성하시겠습니까?</strong>
                    <span className="txt_cnt">
                        <span className="txt_now">0</span>/20
                    </span>

                    <Input placeholder="사용하실 폴더명을 입력해주세요."/>

                    {/* txt_noti 에  on 클래스 붙을 경우 아래 경고메세지 뜹니다 */}
                    <span className="txt_noti on">폴더명을 한 글자 이상 입력해주세요</span>

                </Modal.Content>
                <Modal.Actions>
                    <Button className="cancel">취소</Button>
                    <Button className="create">생성</Button>
                </Modal.Actions>

            </Modal>
            );
    }
}

export default ModalNewFolderCreate;