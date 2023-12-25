import React, {Component} from 'react'
import { Modal, Tab, Table } from 'semantic-ui-react'
//import ProfileSample4 from '../../../../../images/all/profile-110-px-sample-4.jpg'
//import ImageBackground from '../../../../../images/all/image-background.png'
//import closeIcon from '../../../../../images/all/icon-profile-close.png'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'


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
                                        <div className="top-line front-dot community-line">
                                            <span>가입한 커뮤니티 : <strong>26</strong>개</span>
                                        </div>
                                    </div>                                        
                                    <div className="table-wrapper">
                                        <Table>
                                            <colgroup>
                                                <col width='390px'/>
                                                <col width='100px'/>
                                                <col />
                                                <col width='100px'/>
                                            </colgroup>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell textAlign='center'>커뮤니티명</Table.HeaderCell>
                                                    <Table.HeaderCell textAlign='center'>관리자</Table.HeaderCell>
                                                    <Table.HeaderCell textAlign='center'>가입인원</Table.HeaderCell>
                                                    <Table.HeaderCell textAlign='center'>가입일</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">취미생활</span><a href={()=>false} title="딥 러닝과 머신 러닝의 차이">딥 러닝과 머신 러닝의 차이</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>RyanK</Table.Cell>
                                                    <Table.Cell textAlign='center'>509</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.30</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">리더십</span><a href={()=>false} title="에너지 솔루션에 대한 모든 것">에너지 솔루션에 대한 모든 것</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>김써니</Table.Cell>
                                                    <Table.Cell textAlign='center'>3</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.28</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">행복</span><a href={()=>false} title="마음근력 키우기">마음근력 키우기</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>mySUNI2021</Table.Cell>
                                                    <Table.Cell textAlign='center'>3,098</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.20</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">커뮤니티주제</span><a href={()=>false} title="커뮤니티명이 들어갑니다. 길어지면 말줄임이 들어가는지 확인한번 해보셈"> 커뮤니티명이 들어갑니다. 길어지면 말줄임이 들어가는지 확인한번 해보셈</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>캠핑마스터</Table.Cell>
                                                    <Table.Cell textAlign='center'>296</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.03.08</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">리더십</span><a href={()=>false} title="자동차의 핵심은 인공지능">자동차의 핵심은 인공지능</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>카주인</Table.Cell>
                                                    <Table.Cell textAlign='center'>28</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.03.01</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">취미생활</span><a href={()=>false} title="딥 러닝과 머신 러닝의 차이">딥 러닝과 머신 러닝의 차이</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>RyanK</Table.Cell>
                                                    <Table.Cell textAlign='center'>509</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.30</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">리더십</span><a href={()=>false} title="에너지 솔루션에 대한 모든 것">에너지 솔루션에 대한 모든 것</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>김써니</Table.Cell>
                                                    <Table.Cell textAlign='center'>3</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.28</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">리더십</span><a href={()=>false} title="자동차의 핵심은 인공지능">자동차의 핵심은 인공지능</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>카주인</Table.Cell>
                                                    <Table.Cell textAlign='center'>28</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.03.01</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">취미생활</span><a href={()=>false} title="딥 러닝과 머신 러닝의 차이">딥 러닝과 머신 러닝의 차이</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>RyanK</Table.Cell>
                                                    <Table.Cell textAlign='center'>509</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.30</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="l-green">리더십</span><a href={()=>false} title="에너지 솔루션에 대한 모든 것">에너지 솔루션에 대한 모든 것</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>김써니</Table.Cell>
                                                    <Table.Cell textAlign='center'>3</Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.28</Table.Cell>
                                                </Table.Row>
                                            
                                            </Table.Body>
                                        </Table>
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
