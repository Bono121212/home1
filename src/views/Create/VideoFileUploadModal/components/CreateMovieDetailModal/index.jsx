import React, {Component} from 'react'
import {
    Button,
    Modal, Radio, Table,
} from 'semantic-ui-react'

class CompletedAddPersonalLearningModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w700'>
                    <Modal.Header className='res'>
                        File Upload
                        <span className="sub f12">업로드 하실 항목을 선택해 주세요.</span>
                        {/*일반 사용자 : 내 폴더*/}
                        {/*College 관리자 : 내 폴더 / 내 컬리지 폴더*/}
                        {/*회사 College 관리자 : 내 폴더 / 내 회사 컬리지 폴더*/}
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-60vh">

                            <Table className='head-fix cr-03-p01'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell scope="col"/>
                                        <Table.HeaderCell scope="col">File Name</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                className='base'
                                                name='radioGroup'
                                                value='Newest'
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span>
                                            Learning materials_UX _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip Learning materials_UX
                                            _GUI_community_community.zip
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        {/*위치가 header쪽이면 focus를 받아서 안됨*/}
                        <div className="right-filter">
                            <select className="ui small-border dropdown">
                                <option value="All">내 폴더</option>
                                <option value="a">내 컬리지 폴더</option>
                                <option value="b">내 회사 컬리지 폴더</option>
                            </select>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 d' onClick={this.close}>Cancel</Button>
                        <Button className='pop2 p' onClick={this.close}>Confirm</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default CompletedAddPersonalLearningModal;
