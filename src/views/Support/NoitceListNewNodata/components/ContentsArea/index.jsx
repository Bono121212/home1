import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Table, TableHeader, TableBody, Icon, Button
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'notice'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='notice'
                                active={activeItem === 'notice'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Notice
                            </Menu.Item>
                            <Menu.Item
                                name='faq'
                                active={activeItem === 'faq'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                FAQ
                            </Menu.Item>
                            <Menu.Item
                                name='qa'
                                active={activeItem === 'qa'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                1:1 문의
                            </Menu.Item>
                            <Menu.Item
                                name='qaAdmin'
                                active={activeItem === 'qaAdmin'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                               문의 관리
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    {/* support-list-wrap 공통, notice class 추가 */}
                    <div className="support-list-wrap notice"> 
                        <div className="list-top">
                            <div className="list-top-left">
                                총 <strong>20개</strong>의 리스트가 있습니다.
                            </div>
                            <div className="list-top-right">
                                <div className="ui input s-search h38">
                                    <input type="text" placeholder="검색어를 입력하세요." value="ㄱㄴㄷ"/>
                                    <Icon className="search-32"/>
                                </div>
                            </div>
                        </div>

                        <div className="qna-admin-list-wrap">
                            <Table className="qna-admin-list">
                                <colgroup>
                                    <col width="80px"/>
                                    <col width="500px"/>
                                    <col width="100px"/>
                                    <col width="100px"/>
                                </colgroup>
                                <TableHeader>
                                    <Table.Row>
                                        <Table.HeaderCell>No.</Table.HeaderCell>
                                        <Table.HeaderCell>제목</Table.HeaderCell>
                                        <Table.HeaderCell>조회수</Table.HeaderCell>
                                        <Table.HeaderCell>등록일자</Table.HeaderCell>
                                    </Table.Row>
                                </TableHeader>
                                <TableBody>
                                </TableBody>                                
                            </Table>
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">검색 결과가 없습니다.</div>
                                <Button icon className='rigth btn-blue2'>
                                    <a href="#recommend">전체 목록으로 이동하기</a>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        
                    </div>
                </Segment>
            </div>
        )
    }
}

export default ContentsArea
