import React from 'react';
import { Table, TableBody, TableCell,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import thumb1 from '../../../../images/all/bg_img1.png';
import thumb2 from '../../../../images/all/bg_img2.png';
import thumb3 from '../../../../images/all/bg_img3.png';

function PlayListDetailTable (){
    return(
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
    )
}

export default PlayListDetailTable;