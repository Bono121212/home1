import React, {Component} from 'react';
import { Segment, Icon, Menu, Image, Table, TableBody, TableCell, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import ProfileSample3 from '../../../../../images/all/profile-03@2x.png';
import thumb1 from '../../../../../images/all/bg_img1.png';
import thumb2 from '../../../../../images/all/bg_img2.png';
import thumb3 from '../../../../../images/all/bg_img3.png';

class ContentsArea extends Component {
    state = { on : false,  }
    
    render() {
        const { on } = this.state;

        return (
            <div className="mypage_contents profile-playlist-contents">
                <div className='mypage-title-wrap'>
                    <strong className="mypage_title">Playlist</strong>
                    <a href={()=>false} className='btn-txt btn-tolist'>목록으로</a>
                </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className='playlist-list detail-list-wrapper'>
                            <div className='playlist-detail-infobox'>
                                <div className='playlist-detail-info-inner'>
                                    <div className='playlist-tit'>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</div>
                                    <div className='playlist-subtxt'>AI 기본 정보와 현재 직무에서 활용 가능한 참고 학습카드 공유합니다.</div>
                                    <div className='playlist-sub-infobox'>
                                        <div className='f-left'>
                                            <div className='maker-thumb'>
                                                <Image src={ProfileSample3} alt="만든사람 프로필이미지"/>
                                            </div>
                                            <div className='maker-user'>이태양</div>
                                            <div className='maker-date'>2021.12.22 Playlist 담음</div>
                                        </div>
                                        <div className='f-right'>
                                            <Button icon className='bigRight like' onClick={()=> this.setState({on : !on})}>
                                                <Icon className={classNames(on ? 'likeOnBig' : 'likeOffBig')}/>
                                                <span>4,288</span>
                                            </Button>
                                            <Button icon className='bigRight delete'>
                                                <Icon className='deleteBig'/>
                                                <span>삭제하기</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='playlist-detail-content'>
                                <Menu className='playlist-view-tab'>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="" className='active'>
                                        View All
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        Comments
                                    </Menu.Item>
                                    {/* 내가담은 리스트는 담은 인원, 추천받은 인원 수 없음(코멘트도 동일) */}
                                </Menu>
                                <div className='playlist-view-content'>
                                    <div className="list-top">
                                        <div className="list-top-left f-left">
                                            <div>총 <strong>11개</strong> 학습카드</div>
                                            <div>84h 30m</div>
                                        </div>
                                        <div className="list-top-right f-right">
                                            {/* 편집하기는 내가만든리스트에만 있음 */}
                                        </div>
                                    </div>

                                    <div className="playlist-detail-wrap">
                                        <Table className="playlist-mylist-list">
                                            <colgroup>
                                                <col width="100px"/>
                                                <col width="*"/>
                                                <col width="100px"/>
                                                <col width="120px"/>
                                                <col width="70px"/>
                                            </colgroup>
                                            <TableBody>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb1} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title">
                                                        <Link to='#'>
                                                            <span className="ellipsis">AI/DT 시대의 고객 경험 디자인</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>12개</TableCell>
                                                    <TableCell>1h 30m</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step8"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb2} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title new">
                                                        <Link to='#'>
                                                            <span className="ellipsis">디지털로 구현하는 고객공감 전략</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>5개</TableCell>
                                                    <TableCell>8h</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step1"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb3} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title new">
                                                        <Link to='#'>
                                                            <span className="ellipsis">AI UX 기초 Essentials</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>9개</TableCell>
                                                    <TableCell>7h 10m</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step10"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb1} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title">
                                                        <Link to='#'>
                                                            <span className="ellipsis">AI/DT 시대의 고객 경험 디자인</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>12개</TableCell>
                                                    <TableCell>1h 30m</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step8"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb2} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title new">
                                                        <Link to='#'>
                                                            <span className="ellipsis">디지털로 구현하는 고객공감 전략</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>5개</TableCell>
                                                    <TableCell>8h</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step1"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <TableCell>
                                                        <Link to='#' className='list-thumb-wrap'>
                                                            <Image src={thumb3} alt='학습카드썸네일'/>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell className="title new">
                                                        <Link to='#'>
                                                            <span className="ellipsis">AI UX 기초 Essentials</span>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>9개</TableCell>
                                                    <TableCell>7h 10m</TableCell>
                                                    <TableCell className='state-course-holder'>
                                                        <div className="label-state-cube l-step10"><span>cube 완료상태</span></div>
                                                    </TableCell>
                                                </Table.Row>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default ContentsArea;