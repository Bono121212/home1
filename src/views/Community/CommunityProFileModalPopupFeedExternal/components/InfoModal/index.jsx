import React, {Component} from 'react'
import { Modal,Tab } from 'semantic-ui-react'
import '../../style.css'
import TabMenu from '../TabMenu'
import FeedCard from '../FeedCard'
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
                            <div className="left-side side-wrapper">
                                <ProfileCard />
                            </div>
                            <div className="right-side side-wrapper">
                                <TabMenu/>
                                <Tab.Pane>
                                    <div className="list-wrapper community-main-contants">
                                        <div className="sub-info-box">
                                            <FeedCard />
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
