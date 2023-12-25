import React, {Component} from 'react'
import { Image, Modal, Tab, Icon } from 'semantic-ui-react'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'
import Nodata from "../../../../../images/all/no-contents-80-px.svg";


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
                                    <div className="list-wrapper">
                                        <div className="top-line front-dot community-line">
                                            <span>가입한 커뮤니티 : <strong>0</strong>개</span>
                                        </div>
                                    </div>                                        
                                    <div className="community_nodata">
                                        <Icon>
                                            <Image src={Nodata}/>
                                        </Icon>
                                        <p>
                                            가입한 커뮤니티가 없습니다.
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
