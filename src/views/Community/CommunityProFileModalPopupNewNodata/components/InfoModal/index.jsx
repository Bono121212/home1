import React, {Component} from 'react'
import { Modal, Select, Tab, Icon, Image } from 'semantic-ui-react'
import '../../style.css'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'
import Nodata from "../../../../../images/all/no-contents-80-px.svg";

const selectOptions = [    
  { key: "2021", value: "2021", text: "2021년" },
  { key: "2020", value: "2020", text: "2020년" },
  { key: "2019", value: "2019", text: "2019년" },
]

class InfoModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    
    render() {
        const {open, size } = this.state;

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
                                        <div className="top-line">
                                            <div className="select-area">
                                                <Select
                                                    placeholder="선택"
                                                    className="ui small-border dropdown m0"
                                                    defaultValue={selectOptions[0].value}
                                                    options={selectOptions}
                                                />
                                            </div>
                                            <span>획득한 Badge : <strong>0</strong>개</span>
                                        </div>
                                    </div>                        
                                    <div className="community_nodata">
                                        <Icon>
                                            <Image src={Nodata}/>
                                        </Icon>
                                        <p>
                                            선택한 연도에 <br />획득한 Badge가 없습니다.
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
