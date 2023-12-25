import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Table, TableHeader, TableBody, TableCell, Icon, Button
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Paging from '../Paging'
import RadioWrap from "../RadioWrap";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'qa'}

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
                    {/* support-list-wrap 공통, user-qa class 추가 */}
                    <div className="support-list-wrap user-qa">
                        <div className="list-top">

                        {/* 1:1 문의에 없음
                            <div className="list-top-left">
                                총 <strong>20개</strong>의 리스트가 있습니다.
                            </div> */}


                            <Button icon className='left post ask'>
                                <Icon className='ask24'/>&nbsp;&nbsp;문의하기
                            </Button>
                            <RadioWrap />
                        </div>

                        <div className="qna-admin-list-wrap">
                            <Table className="qna-admin-list">
                                <colgroup>
                                    <col width="80px"/>
                                    <col width="220px"/>
                                    <col width="auto"/>
                                    <col width="100px"/>
                                    <col width="130px"/>
                                    <col width="150px"/>
                                </colgroup>
                                <TableHeader>
                                    <Table.Row>
                                        <Table.HeaderCell>No.</Table.HeaderCell>
                                        <Table.HeaderCell>카테고리</Table.HeaderCell>
                                        <Table.HeaderCell>제목</Table.HeaderCell>
                                        <Table.HeaderCell>구분</Table.HeaderCell>
                                        <Table.HeaderCell>상태</Table.HeaderCell>
                                        <Table.HeaderCell>등록일자</Table.HeaderCell>
                                    </Table.Row>
                                </TableHeader>
                                <TableBody>
                                    <Table.Row>
                                        <TableCell>20</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 사이트 이용 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI가 오픈했습니다!</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>답변완료</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>19</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 콘텐츠 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">SUNI가 오픈</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>비회원</TableCell>
                                        <TableCell>답변완료</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>18</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 콘텐츠 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">콘텐츠 관련하여 문의드립니다. 궁금한게 아주 많습니다. 하나하나 세세하게 답변부탁드립니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>비회원</TableCell>
                                        <TableCell>답변대기</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>17</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 콘텐츠 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">콘텐츠 관련하여 문의드립니다. 궁금한게 아주 많습니다. 하나하나 세세하게 답변부탁드립니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>답변완료</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>16</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 콘텐츠 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">콘텐츠 관련하여 문의드립니다. 궁금한게 아주 많습니다. 하나하나 세세하게 답변부탁드립니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>답변완료</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>15</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 학습완료 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">학습을 완료하였으나 학습완료라고 뜨지 않는 것에 대하여 답변을 3월 9일에 작성한바 있으나 아직도 답변대기 상태라서 다시 한번 더 문의드립니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>비회원</TableCell>
                                        <TableCell>답변완료</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>14</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 사이트 이용 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">mySUNI에 건의 사항</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>문의접수</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>13</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 사이트 이용 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">title아래 ellipsis의 width는 각 게시물에 따라 다릅니다. 이건 450px입니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>문의접수</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>12</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 사이트 이용 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">title아래 ellipsis의 width는 각 게시물에 따라 다릅니다. 이건 450px입니다.</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>비회원</TableCell>
                                        <TableCell>문의접수</TableCell>
                                        <TableCell>2021.09.17</TableCell>
                                    </Table.Row>
                                    <Table.Row>
                                        <TableCell>11</TableCell>
                                        <TableCell className="ctg">이용문의 &gt; 사이트 이용 문의</TableCell>
                                        <TableCell className="title">
                                            <div className="tit_inner">
                                                <Link to='#'>
                                                    <span className="ellipsis">문의</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>회원</TableCell>
                                        <TableCell>답변완료</TableCell>
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
