import React, { Component } from 'react'
import { Modal, Tab, Icon, Image } from 'semantic-ui-react'
import '../../style.css'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'
import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class InfoModal extends Component {
    state = { open: true };
    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='w1044 profile-modal-new'>
                    <Modal.Content>
                        <div className="contents-wrapper">
                            <div className="left-side side-wrapper">
                                <ProfileCard />
                            </div>
                            <div className="right-side side-wrapper">
                                <TabMenu />
                                <Tab.Pane>
                                    <div className="community_nodata feed-area">
                                        <Icon>
                                            <Image src={Nodata} />
                                        </Icon>
                                        <p>
                                            작성한 게시글이 없습니다.
                                        </p>
                                    </div>
                                </Tab.Pane>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default InfoModal;
