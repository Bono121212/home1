import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Table, TableHeader, TableBody, TableCell
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import RadioWrap from '../RadioWrap'
import Paging from '../Paging'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'qaAdmin'}

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
                    <div className="support-list-wrap">
                        <div className="list-top">
                            <div className="list-top-left">
                                총 <strong>20개</strong>의 리스트가 있습니다.
                            </div>
                            <RadioWrap/>
                        </div>

                        <div className="qna-admin-list-wrap">
                            <Table className="qna-admin-list">
                                <colgroup>
                                    <col width="80px"/>
                                    <col width="100px"/>
                                    <col width="100px"/>
                                    <col width="500px"/>
                                    <col width="140px"/>
                                    <col width="100px"/>
                                    <col width="100px"/>
                                    <col width="100px"/>
                                </colgroup>
                                <TableHeader>
                                    <Table.Row>
                                        <Table.HeaderCell>No.</Table.HeaderCell>
                                        <Table.HeaderCell>접수 채널</Table.HeaderCell>
                                        <Table.HeaderCell>카테고리</Table.HeaderCell>
                                        <Table.HeaderCell>문의 제목</Table.HeaderCell>
                                        <Table.HeaderCell>문의일자</Table.HeaderCell>
                                        <Table.HeaderCell>문의자</Table.HeaderCell>
                                        <Table.HeaderCell>담당자</Table.HeaderCell>
                                        <Table.HeaderCell>처리상태</Table.HeaderCell>
                                    </Table.Row>
                                </TableHeader>
                                <TableBody>
                                    <Table.Row>
                                        <TableCell>20</TableCell>
                                        <TableCell>사이트</TableCell>
                                        <TableCell className="ctg">카테고리가 혹시 2줄대비</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                        <TableCell><span className="ellipsis">김써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>19</TableCell>
                                        <TableCell>사이트</TableCell>
                                        <TableCell className="ctg">이용오류</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">에러 관련 문의</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.15</TableCell>
                                        <TableCell><span className="ellipsis">김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니</span></TableCell>
                                        <TableCell><span className="ellipsis">프레디머큐리</span></TableCell>
                                        <TableCell>답변대기</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>18</TableCell>
                                        <TableCell>메신저</TableCell>
                                        <TableCell className="ctg">이용오류</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">메신저</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.15</TableCell>
                                        <TableCell><span className="ellipsis">김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니김써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>17</TableCell>
                                        <TableCell>전화</TableCell>
                                        <TableCell className="ctg">이용문의</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.14</TableCell>
                                        <TableCell><span className="ellipsis">앤써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>문의접수</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>16</TableCell>
                                        <TableCell>이메일</TableCell>
                                        <TableCell className="ctg">개선</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드파일 다운로드</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.13</TableCell>
                                        <TableCell><span className="ellipsis">앤써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>15</TableCell>
                                        <TableCell>사이트</TableCell>
                                        <TableCell className="ctg">이용문의</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">파일 다운로드</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.13</TableCell>
                                        <TableCell><span className="ellipsis">abcdkejalifjlaskedjfialekjsfielfkjsiel</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>14</TableCell>
                                        <TableCell>이메일</TableCell>
                                        <TableCell className="ctg">이용오류</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">파일 다운로드</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.13</TableCell>
                                        <TableCell><span className="ellipsis">abcdkejalifjlaskedjfialekjsfielfkjsiel</span></TableCell>
                                        <TableCell><span className="ellipsis">미정</span></TableCell>
                                        <TableCell>답변대기</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>13</TableCell>
                                        <TableCell>전화</TableCell>
                                        <TableCell className="ctg">이용문의</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">에러 관련 문의</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.10</TableCell>
                                        <TableCell><span className="ellipsis">김써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>12</TableCell>
                                        <TableCell>사이트</TableCell>
                                        <TableCell className="ctg">이용오류</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">다운로드파일 문의 확인부탁드리겠습니다.</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.09</TableCell>
                                        <TableCell><span className="ellipsis">김써니</span></TableCell>
                                        <TableCell><span className="ellipsis">홍길동</span></TableCell>
                                        <TableCell>답변완료</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>11</TableCell>
                                        <TableCell>사이트</TableCell>
                                        <TableCell className="ctg">이용문의</TableCell>
                                        <TableCell className="title">
                                            <Link to='#'>
                                                <span className="ellipsis">이전에 드렸던문의사항에대해다시한번 의문이 생겨서 문의를 다시 드립니다. 이전의 문제의 답이 이러하다면 다음의 건에대해서는 어떻게 해결하실 계획인지 궁금합니다.</span>
                                            </Link>
                                        </TableCell>
                                        <TableCell>2021.09.08</TableCell>
                                        <TableCell><span className="ellipsis">오써니</span></TableCell>
                                        <TableCell><span className="ellipsis">미정</span></TableCell>
                                        <TableCell>문의접수</TableCell>
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
