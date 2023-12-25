import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import CardSearch from '../CardSearch';
import CardSearchResult from '../CardSearchResult';



class ModalSelectCard extends Component {
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
                className="base popup_slt_card"
            >
                <Modal.Header>
                    Card 선택
                    <Button className="close" onClick={this.close}><span className="hidden">닫기</span></Button>
                </Modal.Header>
                <Modal.Content>   
                    {/* 카드 검색  */}
                    <CardSearch />

                    {/* 검색 결과 */}
                    <CardSearchResult />

                </Modal.Content>
                <Modal.Actions>
                    <Button className="btn_close" onClick={this.close}>닫기</Button>
                    <Button className="btn_save" onClick={this.close}>선택</Button>
                </Modal.Actions>

            </Modal>
        );
    }
}

export default ModalSelectCard;