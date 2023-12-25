import React, {Component, createRef} from 'react'
import {
    Segment, Sticky, Icon, Button, Menu, Table
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import RadioWrap from '../RadioWrap';


class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'APLApprovalList'}

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
                                name='APLApprovalList'
                                active={activeItem === 'APLApprovalList'}
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
                            <div className="list-number">
                                <span>전체 <b>5,000개</b> 등록</span>
                                <span><b>2,000개</b> 승인</span>
                                <span><b>1,000개</b> 승인 대기 중</span>
                                <span><b>2,000개</b> 반려</span>
                            </div>
                            {/*검색조건*/}
                            <RadioWrap/>
                        </div>

                        {/*목록*/}
                        <div className='mylearning-list-wrap'>
                            <Table className="my-04-01">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>No.</Table.HeaderCell>
                                        <Table.HeaderCell className="title">교육명</Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Link>
                                                Channel
                                                <Icon className="list-down16"/>
                                            </Link>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>교육시간</Table.HeaderCell>
                                        <Table.HeaderCell>등록일자</Table.HeaderCell>
                                        <Table.HeaderCell>생성자</Table.HeaderCell>
                                        <Table.HeaderCell>생성자 E-mail</Table.HeaderCell>
                                        <Table.HeaderCell>상태</Table.HeaderCell>
                                        <Table.HeaderCell>승인일자</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>20</Table.Cell>
                                        <Table.Cell className="title">
                                            <Link href="/approval/apl-approval-detail" className="ellipsis">
                                                AI와 Block chain과의 상관관계는 어떻게 되는가?
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="ellipsis">TrendTrend</span>
                                        </Table.Cell>
                                        <Table.Cell>00시 00분</Table.Cell>
                                        <Table.Cell>2020.05.29</Table.Cell>
                                        <Table.Cell className="name">
                                            <span className="ellipsis">신현정신현정신현정</span>
                                        </Table.Cell>
                                        <Table.Cell className="mail">
                                            <span className="ellipsis">test@test.com</span>
                                        </Table.Cell>
                                        <Table.Cell>승인대기</Table.Cell>
                                        <Table.Cell>2020.02.02</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>19</Table.Cell>
                                        <Table.Cell className="title">
                                            <Link href="/approval/apl-approval-detail" className="ellipsis">
                                                AI와 Block chain과의 상관관계
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="ellipsis">Trend</span>
                                        </Table.Cell>
                                        <Table.Cell>00시 00분</Table.Cell>
                                        <Table.Cell>2020.05.29</Table.Cell>
                                        <Table.Cell className="name">
                                            <span className="ellipsis">신현정</span>
                                        </Table.Cell>
                                        <Table.Cell className="mail">
                                            <span className="ellipsis">test@test.com</span>
                                        </Table.Cell>
                                        <Table.Cell>승인</Table.Cell>
                                        <Table.Cell>2020.02.02</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>18</Table.Cell>
                                        <Table.Cell className="title">
                                            <Link to="/approval/apl-approval-detail" className="ellipsis">
                                                AI와 Block chain과의 상관관계
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="ellipsis">Trend</span>
                                        </Table.Cell>
                                        <Table.Cell>00시 00분</Table.Cell>
                                        <Table.Cell>2020.05.29</Table.Cell>
                                        <Table.Cell className="name">
                                            <span className="ellipsis">신현정</span>
                                        </Table.Cell>
                                        <Table.Cell className="mail">
                                            <span className="ellipsis">test@test.com</span>
                                        </Table.Cell>
                                        <Table.Cell>승인</Table.Cell>
                                        <Table.Cell>2020.02.02</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>17</Table.Cell>
                                        <Table.Cell className="title">
                                            <Link to="/approval/apl-approval-detail" className="ellipsis">
                                                AI와 Block chain과의 상관관계
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="ellipsis">Trend</span>
                                        </Table.Cell>
                                        <Table.Cell>00시 00분</Table.Cell>
                                        <Table.Cell>2020.05.29</Table.Cell>
                                        <Table.Cell className="name">
                                            <span className="ellipsis">신현정</span>
                                        </Table.Cell>
                                        <Table.Cell className="mail">
                                            <span className="ellipsis">test@test.com</span>
                                        </Table.Cell>
                                        <Table.Cell>반려</Table.Cell>
                                        <Table.Cell>2020.02.02</Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>

                        </div>
                        {/*confirm-list*/}

                        <div className="more-comments">
                            <Button icon className='left moreview'><Icon className='moreview'/> list more</Button>
                        </div>

                    </div>
                    {/*confirm-list-wrap*/}

                    {/*no-data*/}
                    <div className="no-cont-wrap">
                        <Icon className="no-contents80"/>
                        <div className="text">승인 요청한 정보가 없습니다.</div>
                    </div>

                </Segment>
            </div>
        )
    }
}


export default ContentsArea
