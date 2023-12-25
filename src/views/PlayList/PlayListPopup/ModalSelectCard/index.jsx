import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import CardSearch from './CardSearch';
import CardSearchResult from './CardSearchResult';

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
                <Modal.Header className="res xfl">
                    Card 선택
                    <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                </Modal.Header>
                <Modal.Content className="scrolling-80vh">   
                    {/* 카드 검색  */}
                    <CardSearch />

                    {/* 검색 결과 */}
                    <CardSearchResult />                    

                </Modal.Content>
                <Modal.Actions>                    
                    <Button className="w190 pop p">추가</Button>
                </Modal.Actions>

            </Modal>
        );
    }
}

export default ModalSelectCard;