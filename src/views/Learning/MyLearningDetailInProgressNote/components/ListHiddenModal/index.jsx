import React, {Component} from 'react';
import {Modal, Button, Icon} from 'semantic-ui-react';

class ListHiddenModal extends Component {
    //
    state = {
        modalOpen: false
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, modalOpen: true })
    }

    close = () => this.setState({modalOpen: false})

    open = () => this.setState({modalOpen: true})

    render() {
        //
        const { modalOpen, closeOnEscape, closeOnDimmerClick } = this.state;

        return (
            <Modal
                trigger={(
                    <Button icon className="left post hidden btn-left" onClick={this.closeConfigShow(true, false)}>
                        <Icon className="hidden"/> 리스트 숨김
                    </Button>
                )}
                open={modalOpen}
                closeOnEscape={closeOnEscape}
                closeOnDimmerClick={closeOnDimmerClick}
                onClose={this.close}
                className="base w380"
            >
                <Modal.Header>리스트 숨김 안내</Modal.Header>
                <Modal.Content>
                    <div className="list-hide-guide">
                        <p>
                            선택하신 항목들은 학습 중 리스트에서 삭제되지만 삭제된 학습을 다시 진행하게 되면 리스트에 다시 노출 됩니다.<br/><br/>
                            <strong>리스트를 숨김 처리 하시겠습니까?</strong>
                        </p>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className="pop2 d" onClick={this.close}>아니오</Button>
                    <Button className="pop2 p" onClick={this.close}>예</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ListHiddenModal