import React, {Component} from 'react'
import { Modal, Icon, Tab } from 'semantic-ui-react'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'


class InfoModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    
    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}
                <Modal size={size} open={open} onClose={this.close} className='w1044 profile-modal-new'>
                    <Modal.Content>
                        <div className="contents-wrapper">
                            <div className="profile-contents-area left-side side-wrapper">
                                <ProfileCard />
                            </div>
                            <div className="right-side side-wrapper">
                                <TabMenu/>
                                <Tab.Pane>
                                    <div className='pl-pc-wrap'>
                                        <div className='inner'>
                                            {/* Nodata */}
                                            <div className="no-cont-wrap">
                                                <Icon className="no-contents80" />
                                                <span className="blind">콘텐츠 없음</span>
                                                <div className="text">생성된 Playlist가 없습니다.</div>
                                            </div>
                                        </div>
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
