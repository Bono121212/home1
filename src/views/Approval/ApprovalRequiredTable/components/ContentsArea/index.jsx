import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu, Table, Checkbox, Select
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import RadioWrap from '../RadioWrap';
import ActionButtons from '../ActionButtons';
import ApprovalModal from '../ApproveModal';

const classOptions = [
    { key: 'val01', value: 'val01', text: '전체과정' },
    { key: 'val02', value: 'val02', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val03', value: 'val03', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val04', value: 'val04', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val05', value: 'val05', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val06', value: 'val06', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val07', value: 'val07', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val08', value: 'val08', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val09', value: 'val09', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' },
    { key: 'val10', value: 'val10', text: 'AI와 Block chain과의 상관관계는 어떻게 되는가?' }
]

const termOptions = [
    { key: 'val01', value: 'val01', text: '최근 1주일' },
    { key: 'val02', value: 'val02', text: '최근 2주일' },
    { key: 'val03', value: 'val03', text: '최근 한달' },
    { key: 'val04', value: 'val04', text: '사용자 지정' }
]


class ContentsArea extends Component {
    contextRef = createRef()
    state = {
        activeItem: 'ApprovalList'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='ApprovalList'
                                active={activeItem === 'ApprovalList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/approval/approval-required-list"
                            >
                                유료과정<span className="count">+120</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ApprovalList'
                                active={activeItem === 'ApprovalList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/approval/apl-approval-list"
                            >
                                개인학습<span className="count">+24</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className='confirm-list-wrap'>
                        <div className='list-top'>
                            <div className="top">
                                <RadioWrap/>
                            </div>

                            {/*0429 추가 */}
                            <div className="bottom">
                                <div className="left-area">
                                    <ActionButtons/>
                                </div>
                                <div className="right-area">

                                    {/*신청현황 모달팝업 - 0514 신청현황 목록으로 이동*/}
                                    {/*<ApplyStatusModal/>*/}

                                    <Select placeholder='전체과정' className='ui small-border dropdown selection list-title-sel'
                                        options={classOptions}
                                    />
                                    <Select placeholder='교육기간' className='ui small-border dropdown selection list-num-sel'
                                        options={termOptions}
                                    />
                                </div>
                            </div>
                        </div>

                        {/*목록*/}
                        <Table className='confirm-list typeA'>
                            {/*0514 조직, 신청현황, 금액 정보 추가 */}
                            <Table.Header>
                                <Table.Row className="row thead">
                                    <Table.HeaderCell className="cell ck">
                                        <Checkbox className='base'/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell className="cell num">No.</Table.HeaderCell>
                                    <Table.HeaderCell className="cell name">신청자</Table.HeaderCell>
                                    <Table.HeaderCell className="cell team">조직</Table.HeaderCell>
                                    <Table.HeaderCell className="cell title">과정명</Table.HeaderCell>
                                    <Table.HeaderCell className="cell class">차수</Table.HeaderCell>
                                    <Table.HeaderCell className="cell status">신청현황</Table.HeaderCell>
                                    <Table.HeaderCell className="cell term">(차수)교육기간<Icon className='list-down16'/></Table.HeaderCell>
                                    <Table.HeaderCell className="cell date">신청일자</Table.HeaderCell>
                                    <Table.HeaderCell className="cell pay">인당 교육금액<Icon className='list-down16'/></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {/*목록body*/}
                            <Table.Body>
                                <Table.Row className="row">
                                    <Table.Cell className="cell ck">
                                        <Checkbox className='base' />
                                    </Table.Cell>
                                    <Table.Cell className="cell num">20</Table.Cell>
                                    <Table.Cell className="cell name">
                                        <a href="/approval/approval-required-detail">
                                            <span className="ellipsis">일이삼사오육칠팔구십</span>
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell team"><span className="ellipsis">일이삼사오 육칠팔 일이삼사오육칠팔일이삼사오육칠팔</span></Table.Cell>
                                    <Table.Cell className="cell title">
                                        <a href="/approval/approval-required-detail" className="ellipsis">
                                            AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell class">1</Table.Cell>
                                    <Table.Cell className="cell status">21/40</Table.Cell>
                                    <Table.Cell className="cell term">2020.02.20<br/>~2020.03.20</Table.Cell>
                                    <Table.Cell className="cell date">2019.10.08</Table.Cell>
                                    <Table.Cell className="cell pay">20,000</Table.Cell>
                                </Table.Row>
                                <Table.Row className="row">
                                    <Table.Cell className="cell ck">
                                        <Checkbox className='base' />
                                    </Table.Cell>
                                    <Table.Cell className="cell num">19</Table.Cell>
                                    <Table.Cell className="cell name">
                                        <a href="/approval/approval-required-detail">
                                            <span className="ellipsis">일이삼사오육칠팔구십</span>
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell team"><span className="ellipsis">일이삼사오 육칠팔 일이삼사오육칠팔일이삼사오육칠팔</span></Table.Cell>
                                    <Table.Cell className="cell title">
                                        <a href="/approval/approval-required-detail" className="ellipsis">
                                            AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell class">1</Table.Cell>
                                    <Table.Cell className="cell status">21/40</Table.Cell>
                                    <Table.Cell className="cell term">2020.02.20<br/>~2020.03.20</Table.Cell>
                                    <Table.Cell className="cell date">2019.10.08</Table.Cell>
                                    <Table.Cell className="cell pay">20,000</Table.Cell>
                                </Table.Row>
                                <Table.Row className="row">
                                    <Table.Cell className="cell ck">
                                        <Checkbox className='base' />
                                    </Table.Cell>
                                    <Table.Cell className="cell num">18</Table.Cell>
                                    <Table.Cell className="cell name">
                                        <a href="/approval/approval-required-detail">
                                            <span className="ellipsis">일이삼사오육칠팔구십</span>
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell team"><span className="ellipsis">일이삼사오 육칠팔 일이삼사오육칠팔일이삼사오육칠팔</span></Table.Cell>
                                    <Table.Cell className="cell title">
                                        <a href="/approval/approval-required-detail" className="ellipsis">
                                            AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell class">1</Table.Cell>
                                    <Table.Cell className="cell status">21/40</Table.Cell>
                                    <Table.Cell className="cell term">2020.02.20<br/>~2020.03.20</Table.Cell>
                                    <Table.Cell className="cell date">2019.10.08</Table.Cell>
                                    <Table.Cell className="cell pay">20,000</Table.Cell>
                                </Table.Row>
                                <Table.Row className="row">
                                    <Table.Cell className="cell ck">
                                        <Checkbox className='base' />
                                    </Table.Cell>
                                    <Table.Cell className="cell num">17</Table.Cell>
                                    <Table.Cell className="cell name">
                                        <a href="/approval/approval-required-detail">
                                            <span className="ellipsis">일이삼사오육칠팔구십</span>
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell team"><span className="ellipsis">일이삼사오 육칠팔 일이삼사오육칠팔일이삼사오육칠팔</span></Table.Cell>
                                    <Table.Cell className="cell title">
                                        <a href="/approval/approval-required-detail" className="ellipsis">
                                            AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!AI와 Block chain과의 상관관계는 어떻게 되는가?!
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell className="cell class">1</Table.Cell>
                                    <Table.Cell className="cell status">21/40</Table.Cell>
                                    <Table.Cell className="cell term">2020.02.20<br/>~2020.03.20</Table.Cell>
                                    <Table.Cell className="cell date">2019.10.08</Table.Cell>
                                    <Table.Cell className="cell pay">20,000</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        <div className="more-comments">
                            <Button icon className='left moreview'><Icon className='moreview'/> <span>list more</span></Button>
                        </div>
                    </div>

                    {/*<ActionButtons className='bottom'/>*/}

                    {/*승인 팝업*/}
                    <ApprovalModal />

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
