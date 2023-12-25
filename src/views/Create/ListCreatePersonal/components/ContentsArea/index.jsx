import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu,
    Table, Select
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ListMoreView from '../ListMoreView'

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '전체'},
    {key: 'val02', value: 'val02', text: '저장'},
    {key: 'val03', value: 'val03', text: '승인'},
    {key: 'val04', value: 'val04', text: '승인대기'},
    {key: 'val05', value: 'val05', text: '반려'},
];

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'create'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='create'
                                active={activeItem === 'create'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Create<span className='count'>+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='shared'
                                active={activeItem === 'shared'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Shared<span className='count'>+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="top-guide-title size-type3">
                        <div className="list-number">총 <strong>24개</strong>의 리스트가 있습니다.</div>
                        <div className="right-wrap">
                                <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown m0' defaultValue={selectOptions01[0].value}
                            options={selectOptions01}/>
                        </div>
                    </div>

                    <div className="create-list-wrap">
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell className='no'>No</Table.HeaderCell>
                                    <Table.HeaderCell className='title'>강좌명</Table.HeaderCell>
                                    <Table.HeaderCell className='type'>교육형태</Table.HeaderCell>
                                    <Table.HeaderCell className='status'>상태</Table.HeaderCell>
                                    <Table.HeaderCell className='open'>공개여부</Table.HeaderCell>
                                    <Table.HeaderCell className='people'>이수자</Table.HeaderCell>
                                    <Table.HeaderCell className='date'>일자</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className='no'>12</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>11</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Audio</Table.Cell>
                                    <Table.Cell className='status'>승인완료</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>99+명</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>10</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
어떻게 되는가
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Webpage</Table.Cell>
                                    <Table.Cell className='status'>승인완료</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>20명</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>9</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Document</Table.Cell>
                                    <Table.Cell className='status'>반려</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>8</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Community</Table.Cell>
                                    <Table.Cell className='status'>승인대기</Table.Cell>
                                    <Table.Cell className='open'>공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>7</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>6</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>5</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>4</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>3</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>2</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='no'>1</Table.Cell>
                                    <Table.Cell className='title'>
                                        <Link to="#">
                                            <span className="ellipsis">
AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell className='type'>Video</Table.Cell>
                                    <Table.Cell className='status'>임시저장</Table.Cell>
                                    <Table.Cell className='open'>비공개</Table.Cell>
                                    <Table.Cell className='people'>-</Table.Cell>
                                    <Table.Cell className='date'>2019.10.08</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <ListMoreView/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
