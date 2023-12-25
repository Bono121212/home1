import React, {Component} from 'react'
import { Modal, Rating, Select, Tab, Table } from 'semantic-ui-react'
import '../../style.css'
import TabMenu from '../TabMenu'
import ProfileCard from '../ProfileCard'

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
                                            <span>획득한 Badge : <strong>12</strong>개</span>
                                        </div>
                                    </div>                                        
                                    <div className="table-wrapper">
                                        <Table>
                                            <colgroup>
                                                <col width='506px'/>
                                                <col width='84px'/>
                                                <col />
                                            </colgroup>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell textAlign='center'>Badge명</Table.HeaderCell>
                                                    <Table.HeaderCell textAlign='center'>Level</Table.HeaderCell>
                                                    <Table.HeaderCell textAlign='center'>획득일</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-navy">AI/DT</span><a href={()=>false} title="AWS Developer Asso.">AWS Developer Asso.</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={1}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.30</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-red">행복경영</span><a href={()=>false} title="Leadership Essentials">Leadership Essentials</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={2}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.28</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-ligthGreen">BM Design</span><a href={()=>false} title="AWS SysOps Administrator Asso.">AWS SysOps Administrator Asso.</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={2}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.04.20</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-yellow">공통직무</span><a href={()=>false} title="브랜드 Essentials">브랜드 Essentials</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={1}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.03.08</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-green">미래Biz</span><a href={()=>false} title="반도체 Tech Essentials">반도체 Tech Essentials</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={2}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.03.01</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-ligthGreen">BM Design</span><a href={()=>false} title="AWS SysOps Administrator Asso.">AWS SysOps Administrator Asso.</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={2}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                            
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.20</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-green">미래Biz</span><a href={()=>false} title="브랜드 Essentials">브랜드 Essentials</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={2}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.08</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-green">미래Biz</span><a href={()=>false} title="브랜드 222222">브랜드 222222</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={1}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.08</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><span className="t-green">미래Biz</span><a href={()=>false} title="브랜드 333333333333333333333333333333333333333333333333333333333333333333333333333333333">브랜드 333333333333333333333333333333333333333333333333333333333333333333333333333333333</a></Table.Cell>
                                                    <Table.Cell textAlign='center'>
                                                        <Rating
                                                            defaultRating={1}
                                                            maxRating={3}
                                                            disabled
                                                            className="fixed-rating"
                                                        />
                                                    </Table.Cell>
                                                    <Table.Cell textAlign='center'>2021.02.08</Table.Cell>
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
