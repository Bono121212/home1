import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Table, TableHeader, TableBody, TableCell, Icon
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Paging from '../Paging'

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
                                    <input type="text" placeholder="검색어를 입력하세요."/>
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
                                    <Table.Row>
                                        <TableCell>20</TableCell>
                                        <TableCell className="title new">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI가 오픈했습니다!</span>
                                                </Link>
                                                <span className="reply">[<strong>1,230</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>309</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>19</TableCell>
                                        <TableCell className="title new">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI 오픈</span>
                                                </Link>
                                                {/* <span className="reply">[<strong>1</strong>]</span> */}
                                            </div>
                                        </TableCell>
                                        <TableCell>1,234</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>18</TableCell>
                                        <TableCell className="title new">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI가 오픈하였습니다.  공지사항을 참고 해 주세요. SUNI 회원님을 위한 정보가 있습니다 자세한 사항은 홈페이지를 확인하여 주시기 바랍니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>11,230</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>613</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>17</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI에 처음 방문하신건가요? SUNI에 대해 자세히 안내해드리겠습니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>3</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>309</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>16</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">다양한 College가 오픈하였습니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>3</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>1,230</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>15</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">게시글 타이틀 텍스트 게시글 타이틀 텍스트</span>
                                            </Link>
                                            <span className="reply">[<strong>1</strong>]</span>
                                        </TableCell>
                                        <TableCell>218</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>14</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">텍스트 최대 Width값은 760px입니다. 텍스트 최대 Width값은 760px입니다. 그 이후로는 말줌임 표시 부탁드립니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>4</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>1,204</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>13</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">텍스트 최대 Width값은 760px입니다. 텍스트 최대 Width값은 760px입니다. 그 이후로는 말줌임 표시 부탁드립니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>1</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>613</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>12</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">게시글 타이틀 텍스트 게시글 타이틀 텍스트</span>
                                                </Link>
                                                <span className="reply">[<strong>5</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>309</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>11</TableCell>
                                        <TableCell className="title">
                                            <div className="">
                                                <Link to='#'>
                                                    <span className="ellipsis">텍스트 최대 Width값은 760px입니다. 텍스트 최대 Width값은 760px입니다. 그 이후로는 말줌임 표시 부탁드립니다.</span>
                                                </Link>
                                                <span className="reply">[<strong>5</strong>]</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>1,234</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                </TableBody>
                            </Table>
                        </div>

                        <Paging/>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default ContentsArea
