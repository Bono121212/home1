import React, {Component} from 'react'
import { Modal } from 'semantic-ui-react'
import '../../style.css'
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
                {/*글로벌타입은 class g-type추가*/}
                <Modal size={size} open={open} onClose={this.close} className='w1044 profile-modal-new g-type'>
                    <Modal.Content>
                        <div className="contents-wrapper">
                            <div className="left-side side-wrapper">
                                <ProfileCard />
                            </div>
                        </div>                        
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default InfoModal;
